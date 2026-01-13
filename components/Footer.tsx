'use client'

import { motion } from 'framer-motion'
import { socials } from '@/data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <footer className="relative bg-navy-light border-t border-cyan/10 py-16 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-4"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-white font-mono text-sm md:text-base">
              Designed & Built by <span className="text-cyan font-bold">Adeyemi Adeniji</span>.
            </p>
            <p className="text-slate font-mono text-xs md:text-sm opacity-70">
              Powered by Next.js, Tailwind CSS & Framer Motion
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 py-4"
          >
            {socials.map((social, idx) => (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-slate hover:text-cyan transition-all relative group"
                title={social.name}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="absolute -inset-2 bg-cyan/0 group-hover:bg-cyan/10 rounded-full transition-all duration-300" />
                <i className={`${social.icon} text-lg relative z-10`}></i>
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-slate/50 font-mono text-xs pt-4"
          >
            © {currentYear} Adeyemi Adeniji. All rights reserved.
          </motion.p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          variants={itemVariants}
          className="pt-4 border-t border-cyan/10"
        >
          <p className="text-slate text-xs md:text-sm mb-3">Have a project in mind?</p>
          <motion.a
            href="mailto:danieladeniji001@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-2 border border-cyan text-cyan rounded-lg hover:bg-cyan/10 transition-all font-mono text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch <i className="fas fa-paper-plane"></i>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}
