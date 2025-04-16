'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useUiNavbar, useLanguageStore } from '@/store';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const translations = {
    es: {
        heading: 'Contáctame',
        email: 'riveros45arturo@gmail.com',
        button: 'Ver CV',
        cvLink: 'https://drive.google.com/file/d/19Hd1NXUDoniCsgweo1qKHz77Xrf6RVdF/view?usp=sharing',
    },
    en: {
        heading: 'Contact Me',
        email: 'riveros45arturo@gmail.com',
        button: 'See resume',
        cvLink: 'https://drive.google.com/file/d/10saFlDqDUibPxS-7UoXKa0-e1CztJ9UI/view?usp=sharing',
    },
};

export const Contacto = () => {
    const darkMode = useUiNavbar((state) => state.darkMode);
    const language = useLanguageStore((state) => state.language);

    const bgColor = darkMode ? 'bg-[#0e0e12]' : 'bg-[#f8f9fa]';
    const textColor = darkMode ? 'text-white' : 'text-black';
    const cardColor = darkMode ? 'bg-[#1c1c24]' : 'bg-white';
    const accentColor = darkMode ? 'text-cyan-400' : 'text-indigo-600';
    const buttonColor = darkMode ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-emerald-600 hover:bg-emerald-700';

    return (
        <section
            id="contact"
            className={`py-20 px-6 transition-colors duration-500 ${bgColor} ${textColor}`}
        >
            <div className={`max-w-xl mx-auto p-8 rounded-2xl shadow-xl ${cardColor}`}>
                <div className="text-center mb-6">
                    <h3 className="text-4xl font-bold text-center mb-10">
                        {translations[language].heading}
                    </h3>
                    <a
                        href={`mailto:${translations[language].email}`}
                        className={`inline-flex items-center gap-2 text-lg font-medium ${accentColor} hover:underline transition`}
                    >
                        <FaEnvelope /> {translations[language].email}
                    </a>
                </div>

                <div className="flex justify-center gap-6 text-2xl mt-4">
                    <Link href="https://www.linkedin.com/in/riverosarturo" target="_blank" className={`${accentColor} hover:scale-110 transition`} aria-label="LinkedIn">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://github.com/riverosarturo" target="_blank" className={`${accentColor} hover:scale-110 transition`} aria-label="GitHub">
                        <FaGithub />
                    </Link>
                    <Link href="https://wa.me/5212311392413" target="_blank" className={`${accentColor} hover:scale-110 transition`} aria-label="WhatsApp">
                        <FaWhatsapp />
                    </Link>
                </div>

                <div className="text-center">
                    <motion.a
                        href={translations[language].cvLink}
                        download
                        target="_blank"
                        className={`inline-block mt-10 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${buttonColor}`}
                        whileHover={{ scale: 1.05 }}
                    >
                        {translations[language].button}
                    </motion.a>
                </div>
            </div>
        </section>
    );
};
