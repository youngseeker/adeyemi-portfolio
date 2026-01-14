'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import TerminalWindow from './TerminalWindow'
import { skills } from '@/data/content'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-navy via-navy-light to-navy">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 flex items-center gap-3 md:gap-4"
        >
          <span className="text-cyan font-mono text-2xl md:text-3xl">01.</span>
          <span className="text-white">The Convergence</span>
          <motion.div
            className="hidden md:block h-0.5 flex-1 bg-gradient-to-r from-cyan/50 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-slate leading-relaxed"
            >
              My journey is unique. It didn&apos;t start with code; it started with people. From
              serving as <span className="text-cyan font-semibold">JIF President of the Royal Ambassadors</span> to leading operations,
              I learned that systems fail without human empathy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-slate leading-relaxed"
            >
              Currently, I am fusing this leadership experience with technical rigor at{' '}
              <span className="text-cyan font-semibold">NOUN</span> and <span className="text-cyan font-semibold">MaxME Solutions</span>.
              I believe in building technology that serves humanity.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
            >
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 8, backgroundColor: 'rgba(100, 255, 218, 0.05)' }}
                  className="flex items-center gap-3 text-slate hover:text-cyan transition-colors px-3 py-2 rounded-lg"
                >
                  <i className={`${skill.icon} text-cyan text-lg flex-shrink-0`}></i>
                  <span className="text-sm md:text-base">{skill.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Stack */}
          <div className="space-y-6 w-full">
            {/* Profile Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full aspect-square max-w-xs mx-auto md:mx-0 rounded-xl overflow-hidden border-2 border-cyan/50 hover:border-cyan transition-colors duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src="/images/me.jpg"
                alt="Adeyemi Adeniji"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                priority
              />
            </motion.div>

            {/* Terminal */}
            <TerminalWindow />
          </div>
        </div>
      </div>
    </section>
  )
}
