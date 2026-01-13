'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Hero() {
  return (
    <header className="min-h-[100vh] md:min-h-[90vh] flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-cyan/5 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-cyan/3 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          <motion.p variants={itemVariants} className="text-cyan font-mono text-base sm:text-lg">
            Hi, I am
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Structuring Wisdom.<br />
            <motion.span
              className="bg-gradient-to-r from-cyan via-cyan to-slate bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Engineering Systems.
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate max-w-md leading-relaxed">
            I am a <span className="text-cyan font-semibold">Computer Science Undergraduate (NOUN)</span> and{' '}
            <span className="text-cyan font-semibold">Reflective Model Translation Partner</span>. I combine algorithmic
            thinking with human leadership to build ethical, scalable digital systems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 pt-4 flex-wrap">
            <motion.a
              href="#projects"
              className="px-6 sm:px-8 py-3 border border-cyan text-cyan font-mono rounded hover:bg-cyan/10 transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/adeyemi-adeniji-828204253"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 text-cyan font-mono hover:text-white transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-8 hidden md:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-slate text-sm font-mono flex items-center gap-2">
              Scroll to explore <i className="fas fa-arrow-down text-cyan"></i>
            </p>
          </motion.div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:block space-y-8 relative"
        >
          {/* Glow Circle with floating elements */}
          <div className="relative h-80 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'loop' }}
              className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-slate/5 rounded-full blur-3xl"
            />
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan/60 rounded-full"
                animate={{
                  x: Math.cos((i / 6) * Math.PI * 2) * 100,
                  y: Math.sin((i / 6) * Math.PI * 2) * 100,
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
            ))}
          </div>

          {/* Code Block */}
          <motion.div
            className="bg-navy-light/40 backdrop-blur-sm border border-cyan/30 rounded-xl p-6 sm:p-8 font-mono text-sm space-y-3"
            whileHover={{ borderColor: '#64ffda', backgroundColor: 'rgba(17, 34, 64, 0.8)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white">
              <span className="text-cyan">const</span> <span className="text-slate">bridge</span> = (humanity, tech) =&gt; {'{'}
            </div>
            <div className="text-slate ml-4">
              <span className="text-cyan">return</span>{' '}
              <span className="text-cyan">&quot;Ethical Scale&quot;</span>;
            </div>
            <div className="text-white">{'}'}</div>
            
            {/* Cursor blink */}
            <motion.div
              className="inline-block w-2 h-4 bg-cyan"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}
