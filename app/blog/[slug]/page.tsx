'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { blogArticles } from '@/data/content'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Author SVG Avatar
const AuthorAvatar = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="35" r="15" fill="currentColor" opacity="0.8" />
    <path d="M35 52C35 45 42 42 50 42C58 42 65 45 65 52V70C65 75 62 78 50 78C38 78 35 75 35 70Z" fill="currentColor" opacity="0.6" />
    <circle cx="38" cy="52" r="4" fill="currentColor" opacity="0.4" />
    <circle cx="62" cy="52" r="4" fill="currentColor" opacity="0.4" />
  </svg>
)

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogDetailPage({ params }: PageProps) {
  const [article, setArticle] = useState<any>(null)

  // Unwrap params promise
  React.useEffect(() => {
    params.then((resolvedParams) => {
      const foundArticle = blogArticles.find((a) => a.slug === resolvedParams.slug)
      setArticle(foundArticle || null)
    })
  }, [params])
  const [articleLikes, setArticleLikes] = useState<Record<number, number>>(
    article ? { [article.id]: article.likes || 0 } : {}
  )
  const [userLiked, setUserLiked] = useState<Set<number>>(new Set())
  const [comments, setComments] = useState(article?.comments || [])
  const [commentText, setCommentText] = useState('')
  const [commentName, setCommentName] = useState('')

  if (!article) {
    return (
      <div className="min-h-screen bg-navy text-white">
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 text-cyan">Article Not Found</h1>
            <p className="text-slate mb-8">Sorry, we could not find the article you&apos;re looking for.</p>
            <Link
              href="/#blog"
              className="inline-block px-6 py-3 border border-cyan text-cyan rounded hover:bg-cyan/10 transition-all"
            >
              Back to Articles
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    )
  }

  const handleLike = () => {
    if (userLiked.has(article.id)) {
      setArticleLikes((prev) => ({
        ...prev,
        [article.id]: prev[article.id] - 1,
      }))
      setUserLiked((prev) => {
        const newSet = new Set(prev)
        newSet.delete(article.id)
        return newSet
      })
    } else {
      setArticleLikes((prev) => ({
        ...prev,
        [article.id]: prev[article.id] + 1,
      }))
      setUserLiked((prev) => new Set([...prev, article.id]))
    }
  }

  const handleComment = () => {
    if (!commentText.trim() || !commentName.trim()) return
    setComments([...comments, { author: commentName, text: commentText }])
    setCommentText('')
    setCommentName('')
  }

  // Get related articles (same category)
  const relatedArticles = blogArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-b from-navy-light to-navy py-12 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light border border-cyan/30 text-cyan rounded-lg hover:bg-cyan/10 hover:border-cyan transition-all text-sm font-mono w-fit"
            >
              <span>←</span>
              <span>Back to Articles</span>
            </Link>

            <span className="inline-block px-4 py-2 bg-cyan/10 border border-cyan/30 text-cyan rounded-lg text-xs font-mono w-fit">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">{article.title}</h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate/70 font-mono">
            <div className="flex items-center gap-2">
              <AuthorAvatar className="w-8 h-8 text-cyan" />
              <span>Adeyemi Adeniji</span>
            </div>
            <span className="hidden sm:block">•</span>
            <span>{article.date}</span>
            <span className="hidden sm:block">•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="py-12 sm:py-16 px-4 sm:px-6"
      >
        <div className="max-w-3xl mx-auto">
          {/* Main Content */}
          <div className="prose prose-invert max-w-none mb-12">
            {article.content.split('\n\n').map((paragraph: string, idx: number) => (
              <p key={idx} className="text-slate leading-relaxed mb-6 whitespace-pre-wrap text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="border-t border-cyan/10 pt-8 mb-8">
            <p className="text-xs text-slate/70 mb-4 font-mono">TAGS</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <motion.span
                  key={tag}
                  className="text-xs font-mono text-cyan bg-cyan/10 px-3 py-2 rounded-full border border-cyan/30"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.15)' }}
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Engagement Section */}
          <div className="border-t border-cyan/10 py-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <motion.button
                onClick={handleLike}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  userLiked.has(article.id)
                    ? 'bg-cyan/20 border border-cyan text-cyan'
                    : 'bg-navy-light border border-cyan/30 text-cyan hover:border-cyan'
                }`}
              >
                <span className="text-lg">{userLiked.has(article.id) ? '❤️' : '🤍'}</span>
                <span className="text-sm">{articleLikes[article.id] || 0} {articleLikes[article.id] === 1 ? 'like' : 'likes'}</span>
              </motion.button>
              <span className="text-sm text-slate/70">💬 {comments.length} comments</span>
            </div>
          </div>

          {/* Comments Section */}
          <div className="border-t border-cyan/10 pt-8">
            <h3 className="text-xl font-bold mb-6 text-white">Comments ({comments.length})</h3>

            {/* Comment Form */}
            <div className="bg-navy-light border border-cyan/20 rounded-lg p-6 mb-8">
              <input
                type="text"
                placeholder="Your name"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className="w-full bg-navy border border-cyan/30 rounded px-4 py-2 text-white text-sm mb-3 placeholder:text-slate/50 focus:outline-none focus:border-cyan"
              />
              <textarea
                placeholder="Share your thoughts..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={4}
                className="w-full bg-navy border border-cyan/30 rounded px-4 py-2 text-white text-sm mb-4 placeholder:text-slate/50 focus:outline-none focus:border-cyan resize-none"
              />
              <motion.button
                onClick={handleComment}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-2 bg-cyan text-navy font-bold rounded hover:bg-cyan/90 transition-colors"
              >
                Post Comment
              </motion.button>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-navy-light border border-cyan/10 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <AuthorAvatar className="w-6 h-6 text-cyan" />
                    <span className="font-mono text-sm font-bold text-cyan">{comment.author}</span>
                  </div>
                  <p className="text-slate text-sm">{comment.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="py-12 sm:py-16 px-4 sm:px-6 bg-navy-light"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Related Articles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((related: any) => (
                <motion.article
                  key={related.id}
                  whileHover={{ y: -8 }}
                  className="bg-navy border border-cyan/20 rounded-xl p-6 hover:border-cyan/50 transition-all duration-300 group flex flex-col h-full"
                >
                  <span className="inline-flex w-fit px-3 py-1 bg-cyan/10 border border-cyan/30 text-cyan rounded-full text-xs font-mono mb-4 group-hover:bg-cyan/20 transition-colors">
                    {related.category}
                  </span>
                  <h4 className="text-white font-bold text-lg mb-3 group-hover:text-cyan transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                  <p className="text-slate text-sm leading-relaxed mb-4 flex-1">{related.excerpt}</p>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="text-cyan hover:text-white transition-colors text-sm font-mono mt-auto"
                  >
                    Read More →
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  )
}
