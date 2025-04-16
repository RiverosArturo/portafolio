'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { useUiNavbar, useLanguageStore } from '@/store'

const translations = {
  es: {
    title: 'Desarrollador Web Fullstack Jr',
    subtitle: 'Entusiasta del desarrollo web, con enfoque en crear experiencias digitales intuitivas y funcionales, utilizando tecnologías modernas y aprendiendo continuamente.',
    button: 'Ver proyectos',
  },
  en: {
    title: 'Fullstack Web Developer Jr',
    subtitle: 'Web development enthusiast, focused on creating intuitive and functional digital experiences using modern technologies and continuous learning.',
    button: 'View projects',
  },
}

export const Hero = () => {
  const darkMode = useUiNavbar((state) => state.darkMode)
  const language = useLanguageStore((state) => state.language)

  const bgGradient = darkMode
    ? 'bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]'
    : 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600'

  const textColor = 'text-white'
  const buttonBg = 'bg-white text-indigo-700'
  const buttonHover = darkMode ? 'hover:bg-gray-100' : 'hover:bg-indigo-100'

  return (
    <section className={`relative py-24 px-6 overflow-hidden text-center ${bgGradient} ${textColor}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          {translations[language].title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 font-medium">
          {translations[language].subtitle}
        </p>
        <Link
          href="#projects"
          className={`inline-flex items-center gap-2 ${buttonBg} ${buttonHover} font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300`}
        >
          {translations[language].button} <FaArrowRight className="text-sm" />
        </Link>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 blur-3xl opacity-40 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />
    </section>
  )
}
