'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { blogArticles } from '@/data/content'

interface BlogArticle {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  tags: string[]
  likes: number
  comments: Array<{ author: string; text: string }>
}

// Author SVG Avatar
const AuthorAvatar = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <circle cx="50" cy="35" r="15" fill="currentColor" opacity="0.8" />
    {/* Body */}
    <path d="M35 52C35 45 42 42 50 42C58 42 65 45 65 52V70C65 75 62 78 50 78C38 78 35 75 35 70Z" fill="currentColor" opacity="0.6" />
    {/* Shoulders detail */}
    <circle cx="38" cy="52" r="4" fill="currentColor" opacity="0.4" />
    <circle cx="62" cy="52" r="4" fill="currentColor" opacity="0.4" />
  </svg>
)

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null)
  const [showAuthorModal, setShowAuthorModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [articleLikes, setArticleLikes] = useState<Record<number, number>>(
    blogArticles.reduce((acc, a) => ({ ...acc, [a.id]: a.likes || 0 }), {})
  )
  const [commentText, setCommentText] = useState('')
  const [commentName, setCommentName] = useState('')
  const [userLiked, setUserLiked] = useState<Set<number>>(new Set())

  const categories = ['All', ...new Set(blogArticles.map((a) => a.category))]

  const filteredArticles =
    selectedCategory === 'All' ? blogArticles : blogArticles.filter((a) => a.category === selectedCategory)

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

  const handleLike = () => {
    if (!selectedArticle) return
    if (userLiked.has(selectedArticle.id)) {
      setArticleLikes((prev) => ({
        ...prev,
        [selectedArticle.id]: prev[selectedArticle.id] - 1,
      }))
      setUserLiked((prev) => {
        const newSet = new Set(prev)
        newSet.delete(selectedArticle.id)
        return newSet
      })
    } else {
      setArticleLikes((prev) => ({
        ...prev,
        [selectedArticle.id]: prev[selectedArticle.id] + 1,
      }))
      setUserLiked((prev) => new Set([...prev, selectedArticle.id]))
    }
  }

  const handleComment = () => {
    if (!selectedArticle || !commentText.trim() || !commentName.trim()) return
    setSelectedArticle((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        comments: [...prev.comments, { author: commentName, text: commentText }],
      }
    })
    setCommentText('')
    setCommentName('')
  }

  return (
    <section id="blog" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-navy to-navy-light">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 flex items-center gap-3 md:gap-4"
        >
          <span className="text-cyan font-mono text-2xl md:text-3xl">05.</span>
          <span className="text-white">Thoughts & Insights</span>
          <motion.div
            className="hidden md:block h-0.5 flex-1 bg-gradient-to-r from-cyan/50 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>

        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div className="flex-1">
            <p className="text-slate text-sm md:text-base max-w-2xl">
              Authentic essays on AI, education, systems thinking, and personal philosophy.
            </p>
          </div>

          {/* Author Badge with Avatar */}
          <motion.button
            onClick={() => setShowAuthorModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-cyan/10 to-cyan/5 border border-cyan/30 hover:border-cyan transition-all group ml-4 flex-shrink-0"
          >
            <AuthorAvatar className="w-8 h-8 text-cyan" />
            <span className="text-xs md:text-sm font-mono text-cyan group-hover:text-white transition-colors">Author</span>
          </motion.button>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 md:gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-cyan text-navy font-bold'
                  : 'bg-navy-light border border-cyan/30 text-cyan hover:border-cyan'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence mode="wait">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                variants={item}
                exit={{ opacity: 0, y: -20 }}
                layoutId={`article-${article.id}`}
                onClick={() => setSelectedArticle(article)}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-navy-light to-navy-lighter border border-cyan/20 rounded-xl p-6 cursor-pointer hover:border-cyan/50 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Category Badge */}
                <motion.span
                  className="inline-flex w-fit px-3 py-1 bg-cyan/10 border border-cyan/30 text-cyan rounded-full text-xs font-mono mb-4 group-hover:bg-cyan/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {article.category}
                </motion.span>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate text-sm leading-relaxed mb-4 flex-1">{article.excerpt}</p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-slate/70 border-t border-cyan/10 pt-4 mt-auto mb-4">
                  <span className="font-mono">{article.date}</span>
                  <span className="text-cyan/70">{article.readTime}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-cyan/60 bg-cyan/5 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Engagement Preview */}
                <div className="flex items-center gap-4 text-xs text-slate/70 border-t border-cyan/10 pt-3">
                  <span>👍 {articleLikes[article.id] || 0}</span>
                  <span>💬 {article.comments.length}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"
          >
            <motion.article
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy-light border border-cyan/30 rounded-xl p-6 md:p-10 max-w-2xl w-full my-auto"
            >
              {/* Header */}
              <div className="mb-6 border-b border-cyan/10 pb-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-cyan/10 border border-cyan/30 text-cyan rounded-full text-xs font-mono mb-3">
                      {selectedArticle.category}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{selectedArticle.title}</h1>
                  </div>
                  <motion.button
                    onClick={() => setSelectedArticle(null)}
                    className="text-slate hover:text-cyan transition-colors text-2xl flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ✕
                  </motion.button>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-slate/70 font-mono mb-4">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-8 max-h-96 overflow-y-auto pr-4">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-slate leading-relaxed mb-4 whitespace-pre-wrap text-sm md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="border-t border-cyan/10 pt-6 mb-6">
                <p className="text-xs text-slate/70 mb-3 font-mono">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="text-xs font-mono text-cyan bg-cyan/10 px-3 py-1.5 rounded-full border border-cyan/30"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.15)' }}
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Engagement Section */}
              <div className="border-t border-cyan/10 pt-6 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <motion.button
                    onClick={handleLike}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      userLiked.has(selectedArticle.id)
                        ? 'bg-cyan/20 border border-cyan text-cyan'
                        : 'bg-navy border border-cyan/30 text-cyan hover:border-cyan'
                    }`}
                  >
                    <span className="text-lg">{userLiked.has(selectedArticle.id) ? '❤️' : '🤍'}</span>
                    <span className="text-sm font-mono">{articleLikes[selectedArticle.id] || 0}</span>
                  </motion.button>

                  <motion.a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedArticle.title)}&url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy border border-cyan/30 text-cyan hover:border-cyan transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="fab fa-twitter"></i>
                    <span className="text-sm">Share</span>
                  </motion.a>

                  <motion.a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy border border-cyan/30 text-cyan hover:border-cyan transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="fab fa-linkedin"></i>
                    <span className="text-sm">LinkedIn</span>
                  </motion.a>

                  <motion.button
                    onClick={() => {
                      navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '')
                      alert('Link copied!')
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy border border-cyan/30 text-cyan hover:border-cyan transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="fas fa-link"></i>
                    <span className="text-sm">Copy</span>
                  </motion.button>
                </div>
              </div>

              {/* Comments Section */}
              <div className="border-t border-cyan/10 pt-6">
                <h3 className="text-white font-bold mb-4">Comments ({selectedArticle.comments.length})</h3>

                {/* Comment Form */}
                <div className="bg-navy/50 p-4 rounded-lg mb-6 border border-cyan/10">
                  <input
                    type="text"
                    placeholder="Your name..."
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="w-full bg-navy border border-cyan/20 rounded px-3 py-2 text-white placeholder-slate/50 mb-3 focus:border-cyan outline-none transition-colors text-sm"
                  />
                  <textarea
                    placeholder="Share your thoughts..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full bg-navy border border-cyan/20 rounded px-3 py-2 text-white placeholder-slate/50 mb-3 focus:border-cyan outline-none transition-colors text-sm resize-none h-20"
                  />
                  <motion.button
                    onClick={handleComment}
                    disabled={!commentText.trim() || !commentName.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-cyan text-navy font-mono py-2 rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Post Comment
                  </motion.button>
                </div>

                {/* Comments List */}
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {selectedArticle.comments.length === 0 ? (
                    <p className="text-slate/50 text-sm italic">No comments yet. Be the first!</p>
                  ) : (
                    selectedArticle.comments.map((comment, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-navy/50 p-4 rounded-lg border border-cyan/10"
                      >
                        <p className="text-cyan font-mono text-sm mb-2">{comment.author}</p>
                        <p className="text-slate text-sm">{comment.text}</p>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Author Modal */}
      <AnimatePresence>
        {showAuthorModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAuthorModal(false)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy-light border border-cyan/30 rounded-xl p-8 md:p-12 max-w-sm w-full"
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setShowAuthorModal(false)}
                className="absolute top-4 right-4 text-slate hover:text-cyan transition-colors text-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              {/* Avatar */}
              <motion.div
                className="w-24 h-24 mx-auto mb-6 text-cyan"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <AuthorAvatar className="w-full h-full" />
              </motion.div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-white text-center mb-2">Adeyemi Adeniji</h3>

              {/* Title */}
              <p className="text-cyan text-center font-mono text-sm mb-6">Reflective Model Translation Partner</p>

              {/* Bio */}
              <div className="border-t border-b border-cyan/20 py-6 mb-6">
                <p className="text-slate text-sm leading-relaxed text-center">
                  CS Undergrad. I write about the intersection of Artificial Intelligence, Human Leadership, and System Design.
                </p>
              </div>

              {/* Socials */}
              <div className="space-y-3">
                <p className="text-xs text-slate/70 font-mono text-center mb-4">Connect with me:</p>
                <div className="grid grid-cols-2 gap-3">
                  <motion.a
                    href="https://instagram.com/_adeyemiadeniji"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.15)' }}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan/5 border border-cyan/30 text-cyan hover:border-cyan transition-all text-xs font-mono"
                  >
                    <i className="fab fa-instagram"></i>
                    <span>Instagram</span>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/adeyemi-adeniji-828204253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.15)' }}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan/5 border border-cyan/30 text-cyan hover:border-cyan transition-all text-xs font-mono"
                  >
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="https://x.com/_adeyemiadeniji"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.15)' }}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan/5 border border-cyan/30 text-cyan hover:border-cyan transition-all text-xs font-mono"
                  >
                    <i className="fab fa-x-twitter"></i>
                    <span>Twitter</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/youngseeker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.15)' }}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan/5 border border-cyan/30 text-cyan hover:border-cyan transition-all text-xs font-mono"
                  >
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>

              {/* Email CTA */}
              <motion.a
                href="mailto:danieladeniji001@gmail.com"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(100, 255, 218, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="block w-full mt-6 px-4 py-2 rounded-lg bg-cyan/10 border border-cyan text-cyan font-mono text-sm text-center hover:bg-cyan/20 transition-all"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
