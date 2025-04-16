'use client';

import { useUiNavbar, useLanguageStore } from '@/store';
import { motion } from 'framer-motion';

const translations = {
    es: {
        heading: 'Sobre mí',
        paragraph1:
            'Soy Arturo Riveros Hernández, desarrollador web Fullstack Jr con experiencia en frontend y backend. Me apasiona crear interfaces intuitivas y funcionales, siempre con enfoque en el usuario. A lo largo de mi camino he trabajado en proyectos que me han retado y ayudado a crecer tanto técnica como personalmente. Me gusta aprender, colaborar y encontrar soluciones que realmente aporten valor.',
        paragraph2:
            'Además, cuento con una certificación en E-commerce y Marketing Digital por Google, lo que complementa mi perfil con una visión más estratégica del desarrollo web.',
        button: 'Ver CV',
        cvLink: 'https://drive.google.com/file/d/19Hd1NXUDoniCsgweo1qKHz77Xrf6RVdF/view?usp=sharing',
    },
    en: {
        heading: 'About Me',
        paragraph1:
            'I’m Arturo Riveros Hernández, a Jr. Fullstack Web Developer with experience in both frontend and backend. I’m passionate about creating intuitive and functional interfaces, always with a user-centered focus. Over time, I’ve worked on projects that challenged and helped me grow both technically and personally. I love learning, collaborating, and finding solutions that bring real value.',
        paragraph2:
            'I also hold a certification in E-commerce and Digital Marketing from Google, which enhances my profile with a more strategic view of web development.',
        button: 'See resume',
        cvLink: 'https://drive.google.com/file/d/10saFlDqDUibPxS-7UoXKa0-e1CztJ9UI/view?usp=sharing',
    },
};

export const SobreMi = () => {
    const darkMode = useUiNavbar((state) => state.darkMode);
    const language = useLanguageStore((state) => state.language);

    const bgColor = darkMode ? 'bg-[#0e0e12]' : 'bg-[#f4f4f7]';
    const textColor = darkMode ? 'text-slate-100' : 'text-slate-800';
    const buttonColor = darkMode ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-emerald-600 hover:bg-emerald-700';

    return (
        <section
            id="about"
            className={`py-20 px-6 transition-colors duration-500 ${bgColor} ${textColor}`}
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.h3
                    className="text-4xl font-extrabold mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {translations[language].heading}
                </motion.h3>

                <motion.p
                    className="mb-6 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {translations[language].paragraph1}
                </motion.p>

                <motion.p
                    className="text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {translations[language].paragraph2}
                </motion.p>

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
        </section>
    );
};
