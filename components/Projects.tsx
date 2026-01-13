'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/data/content'

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 flex items-center gap-3 md:gap-4"
        >
          <span className="text-cyan font-mono text-2xl md:text-3xl">02.</span>
          <span className="text-white">Selected Projects</span>
          <motion.div
            className="hidden md:block h-0.5 flex-1 bg-gradient-to-r from-cyan/50 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={item}
              whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(100, 255, 218, 0.1)' }}
              className="bg-navy-light rounded-xl overflow-hidden border border-navy-lighter hover:border-cyan/50 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 bg-navy-lighter overflow-hidden">
                <Image
                  src={`/images/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-light/95 via-navy-light/40 to-transparent flex items-end p-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan font-mono text-sm hover:text-white transition-colors flex items-center gap-2"
                    whileHover={{ x: 4 }}
                  >
                    View Live <i className="fas fa-arrow-right text-xs"></i>
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                {/* Folder + Links */}
                <div className="flex justify-between items-start">
                  <motion.i
                    className="far fa-folder text-cyan text-4xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  ></motion.i>
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate hover:text-cyan transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-github text-xl"></i>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-cyan transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fas fa-external-link-alt text-xl"></i>
                    </motion.a>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-navy-lighter">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="text-xs font-mono text-cyan/70 bg-cyan/5 px-3 py-1.5 rounded-full hover:bg-cyan/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
