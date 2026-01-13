'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#certs', label: 'Certs' },
    { href: '#library', label: 'MindShift' },
    { href: '#blog', label: 'Blog' },
  ]

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <nav className="sticky top-0 z-50 bg-navy/95 backdrop-blur-md border-b border-cyan/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
        {/* Logo with Motion */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <motion.div
            className="flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-cyan font-mono font-bold text-xl sm:text-2xl"
              animate={{ rotateZ: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
            >
              {'{'}
            </motion.span>
            <div className="flex flex-col gap-0.5">
              <motion.span
                className="block h-0.5 bg-cyan"
                style={{ width: '12px' }}
                animate={{ width: ['12px', '16px', '12px'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                className="block h-0.5 bg-cyan"
                style={{ width: '8px' }}
                animate={{ width: ['8px', '12px', '8px'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
              />
              <motion.span
                className="block h-0.5 bg-cyan"
                style={{ width: '12px' }}
                animate={{ width: ['12px', '16px', '12px'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              />
            </div>
          </motion.div>
          <div className="font-bold text-white text-sm sm:text-lg group-hover:text-cyan transition-colors duration-300">
            Adeyemi<span className="text-cyan">Adeniji</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm font-mono text-slate hover:text-cyan transition-colors relative"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.label}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-cyan"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <motion.a
            href="mailto:danieladeniji001@gmail.com"
            className="text-sm font-mono px-4 py-2 border border-cyan text-cyan rounded hover:bg-cyan/10 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Menu Button with Animation */}
        <motion.button
          className="md:hidden text-cyan flex flex-col gap-1.5 w-8 h-8 justify-center relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <motion.span
            className="h-0.5 w-full bg-cyan rounded"
            animate={mobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="h-0.5 w-full bg-cyan rounded"
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="h-0.5 w-full bg-cyan rounded"
            animate={mobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-light border-t border-cyan/10 overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: idx * 0.1 }}
                  className="block text-sm font-mono text-slate hover:text-cyan transition-colors py-2 px-3 rounded hover:bg-navy/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:danieladeniji001@gmail.com"
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: navLinks.length * 0.1 }}
                className="block text-sm font-mono px-4 py-2 border border-cyan text-cyan rounded hover:bg-cyan/10 transition-colors mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
