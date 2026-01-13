'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { terminalCommands } from '@/data/content'

export default function TerminalWindow() {
  const [lines, setLines] = useState<Array<{ type: 'cmd' | 'out'; text: string }>>([])

  useEffect(() => {
    let currentIndex = 0
    let isMounted = true

    const typeNextLine = () => {
      if (currentIndex < terminalCommands.length && isMounted) {
        const cmd = terminalCommands[currentIndex]
        setLines((prev) => [
          ...prev,
          { type: 'cmd', text: cmd.cmd },
          { type: 'out', text: cmd.out },
        ])
        currentIndex++
        setTimeout(typeNextLine, 1200)
      } else if (isMounted) {
        setLines((prev) => [...prev, { type: 'cmd', text: '' }])
      }
    }

    typeNextLine()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-navy-light border border-navy-lighter rounded-lg overflow-hidden shadow-2xl"
    >
      {/* Header */}
      <div className="bg-navy-lighter px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-auto text-xs font-mono text-slate">adeyemi@system:~</span>
      </div>

      {/* Body */}
      <div className="p-4 font-mono text-sm space-y-2 min-h-32">
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {line.type === 'cmd' ? (
              <div className="text-white">
                <span className="text-cyan">$</span> {line.text}
                {idx === lines.length - 1 && <span className="cursor ml-1">_</span>}
              </div>
            ) : (
              <div className="text-cyan/80">{line.text}</div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
