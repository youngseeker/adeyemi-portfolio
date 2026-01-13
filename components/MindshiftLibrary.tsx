'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Article {
  title: string
  link: string
  pubDate: string
  author: string
}

export default function MindshiftLibrary() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles')
        const data = await response.json()
        if (data.success) {
          setArticles(data.articles)
        } else {
          setError(data.message)
        }
      } catch (err) {
        setError('Failed to fetch articles')
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="library" className="py-20 sm:py-28 px-4 sm:px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
            <span className="text-cyan font-mono text-2xl md:text-3xl">04.</span>
            <span className="text-white">The MindShift Library</span>
            <motion.div
              className="hidden md:block h-0.5 flex-1 bg-gradient-to-r from-cyan/50 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-slate text-sm md:text-base">
            Writing on Leadership, Faith, and Tech.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {loading ? (
            <div className="col-span-full text-center py-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <i className="fas fa-spinner text-cyan text-3xl"></i>
              </motion.div>
              <p className="text-slate font-mono text-sm mt-4">Loading articles...</p>
            </div>
          ) : error ? (
            <motion.div
              variants={item}
              className="col-span-full bg-navy-light border border-cyan/30 rounded-xl p-8 text-center"
            >
              <i className="fas fa-exclamation-circle text-cyan text-4xl mb-4 block"></i>
              <p className="text-slate mb-2">{error}</p>
              <p className="text-slate text-sm opacity-70">Start writing on Medium to see your articles here.</p>
            </motion.div>
          ) : articles.length === 0 ? (
            <motion.div
              variants={item}
              className="col-span-full bg-navy-light/50 border-2 border-dashed border-slate/30 rounded-xl p-8 text-center"
            >
              <i className="fas fa-feather text-cyan text-4xl mb-4 block opacity-50"></i>
              <p className="text-slate">No articles yet. Check back soon!</p>
            </motion.div>
          ) : (
            articles.map((article, idx) => (
              <motion.a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(100, 255, 218, 0.15)' }}
                className="bg-gradient-to-br from-navy-light to-navy-lighter border border-cyan/20 rounded-xl p-6 space-y-4 hover:border-cyan/50 transition-all duration-300 group flex flex-col h-full cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <p className="text-cyan/70 font-mono text-xs">
                    {new Date(article.pubDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                  <i className="fas fa-external-link-alt text-cyan/0 group-hover:text-cyan/70 transition-colors text-sm"></i>
                </div>
                <h4 className="text-white font-bold text-base sm:text-lg group-hover:text-cyan transition-colors line-clamp-3">
                  {article.title}
                </h4>
                <p className="text-slate text-sm flex-1">{article.author}</p>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-cyan/50 to-transparent"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))
          )}
        </motion.div>

        {/* CTA for local blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate mb-4">Want to read more? </p>
          <motion.a
            href="#blog"
            className="inline-flex items-center gap-2 text-cyan font-mono hover:text-white transition-colors"
            whileHover={{ x: 4 }}
          >
            Explore local articles <i className="fas fa-arrow-right"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
