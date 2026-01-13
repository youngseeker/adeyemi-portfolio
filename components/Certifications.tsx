'use client'

import { motion } from 'framer-motion'
import { certifications } from '@/data/content'

// SVG Icons for Certifications
const CertificationIcons: Record<
  string,
  React.FC<{ className?: string }>
> = {
  mckinsey: ({ className = '' }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Trophy/Achievement icon for McKinsey */}
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5" />
      {/* Trophy cup */}
      <path d="M35 40H65M38 40V55C38 60 42 63 50 63C58 63 62 60 62 55V40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Trophy base */}
      <rect x="45" y="63" width="10" height="8" fill="currentColor" opacity="0.6" />
      <rect x="40" y="71" width="20" height="3" fill="currentColor" />
      {/* Star on top */}
      <path d="M50 30L52 36L58 36L53 40L55 46L50 42L45 46L47 40L42 36L48 36Z" fill="currentColor" opacity="0.8" />
    </svg>
  ),
  ibm: ({ className = '' }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Brain/AI icon for IBM Ethics */}
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5" />
      {/* Brain outline */}
      <path d="M35 45C35 38 40 32 50 32C60 32 65 38 65 45C65 48 64 51 62 54C64 56 65 59 65 62C65 68 60 72 50 72C40 72 35 68 35 62C35 59 36 56 38 54C36 51 35 48 35 45Z" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Neural nodes */}
      <circle cx="42" cy="42" r="2" fill="currentColor" />
      <circle cx="50" cy="38" r="2" fill="currentColor" />
      <circle cx="58" cy="42" r="2" fill="currentColor" />
      <circle cx="45" cy="52" r="2" fill="currentColor" />
      <circle cx="55" cy="52" r="2" fill="currentColor" />
      <circle cx="50" cy="62" r="2" fill="currentColor" />
      {/* Neural connections */}
      <path d="M42 42L50 38M50 38L58 42M42 42L45 52M58 42L55 52M45 52L50 62M55 52L50 62" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  ),
  python: ({ className = '' }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Python snake/code icon */}
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5" />
      {/* Python logo inspired - intertwined snakes */}
      <path d="M40 28H48C52 28 54 30 54 34V44H46V46H56C58 46 60 48 60 52V60C60 64 58 66 54 66H46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M60 72H52C48 72 46 70 46 66V56H54V54H44C42 54 40 52 40 48V40C40 36 42 34 46 34H54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Python dots */}
      <circle cx="48" cy="36" r="2" fill="currentColor" />
      <circle cx="52" cy="64" r="2" fill="currentColor" />
    </svg>
  ),
  jobberman: ({ className = '' }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* People/Leadership/Soft Skills icon */}
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5" />
      {/* Three people figures */}
      {/* Left person */}
      <circle cx="35" cy="38" r="6" fill="currentColor" opacity="0.7" />
      <path d="M27 48C27 45 30 43 35 43C40 43 43 45 43 48V58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Center person (leader - larger) */}
      <circle cx="50" cy="35" r="7" fill="currentColor" opacity="0.9" />
      <path d="M41 46C41 42 44 40 50 40C56 40 59 42 59 46V60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right person */}
      <circle cx="65" cy="38" r="6" fill="currentColor" opacity="0.7" />
      <path d="M57 48C57 45 60 43 65 43C70 43 73 45 73 48V58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Connection lines showing teamwork */}
      <path d="M43 55H57M35 65H65" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    </svg>
  ),
}


export default function Certifications() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  }

  const getIcon = (cert: { title: string; issuer: string }) => {
    if (cert.title.includes('McKinsey') || cert.issuer.includes('McKinsey')) return CertificationIcons.mckinsey
    if (cert.title.includes('IBM') || cert.issuer.includes('IBM') || cert.issuer.includes('NOUN')) return CertificationIcons.ibm
    if (cert.title.includes('Python') || cert.issuer.includes('Tech4Dev') || cert.issuer.includes('Dataquest')) return CertificationIcons.python
    if (cert.title.includes('Soft Skills') || cert.issuer.includes('Jobberman')) return CertificationIcons.jobberman
    return null
  }

  return (
    <section id="certs" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-navy-light to-navy">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 flex items-center gap-3 md:gap-4"
        >
          <span className="text-cyan font-mono text-2xl md:text-3xl">03.</span>
          <span className="text-white">Credentials & Badges</span>
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {certifications.map((cert) => {
            const IconComponent = getIcon(cert)
            return (
              <motion.div
                key={cert.id}
                variants={item}
                whileHover={{ y: -8, scale: 1.05, boxShadow: '0 20px 40px rgba(100, 255, 218, 0.15)' }}
                className="bg-gradient-to-br from-navy-light to-navy-lighter border border-cyan/30 rounded-xl p-5 md:p-6 space-y-4 hover:border-cyan transition-all duration-300 group overflow-hidden relative"
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Icon Container */}
                <motion.div
                  className="relative z-10 w-12 h-12 flex items-center justify-center text-cyan"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -8, 8, 0],
                    filter: 'drop-shadow(0 0 12px rgba(100, 255, 218, 0.6))'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {IconComponent ? (
                    <IconComponent className="w-full h-full" />
                  ) : (
                    <i className={`${cert.icon} text-2xl`}></i>
                  )}
                </motion.div>

                {/* Certificate Name */}
                <div className="relative z-10">
                  <h4 className="text-white font-bold text-sm md:text-base group-hover:text-cyan transition-colors leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-slate text-xs md:text-sm mt-2">{cert.issuer}</p>
                </div>

                {/* Year */}
                <motion.p
                  className="text-cyan/70 font-mono text-xs opacity-70 group-hover:opacity-100 transition-opacity relative z-10 border-t border-cyan/20 pt-2"
                  whileHover={{ color: 'rgba(100, 255, 218, 1)' }}
                >
                  {cert.year}
                </motion.p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
