'use client';

import { motion } from 'framer-motion';
import { useUiNavbar, useLanguageStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';

const translations = {
  es: {
    heading: '📜 Cursos & Certificaciones',
    issued: 'Emitido por',
    view: 'Ver certificado',
  },
  en: {
    heading: '📜 Courses & Certifications',
    issued: 'Issued by',
    view: 'View Certificate',
  },
};

const certs = [
  {
    title: {
      es: 'Programa especializado: Google Digital Marketing & E-commerce',
      en: 'Specialization: Google Digital Marketing & E-commerce',
    },
    issuer: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    link: 'https://www.coursera.org/account/accomplishments/specialization/29GBIECSJABB',
    date: '2025',
  },
  {
    title: {
      es: 'React: De cero a experto (Hooks y MERN)',
      en: 'React: From Zero to Expert (Hooks and MERN)',
    },
    issuer: 'Udemy',
    logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    link: 'https://www.udemy.com/certificate/UC-1f96b379-12da-42b3-8b00-6777de9122a0/',
    date: '2024',
  },
  {
    title: {
      es: 'NodeJS: De cero a experto',
      en: 'NodeJS: From Zero to Expert',
    },
    issuer: 'Udemy',
    logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    link: 'https://www.udemy.com/certificate/UC-2ab8d868-8ce6-4345-9846-7dc1393f3126/',
    date: '2024',
  },
  {
    title: {
      es: 'Nest: Desarrollo backend escalable con Node',
      en: 'Nest: Scalable Backend Development with Node',
    },
    issuer: 'Udemy',
    logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    link: 'https://www.udemy.com/certificate/UC-5a570308-32c4-414a-912a-2f840449c8bb/',
    date: '2024',
  },
  {
    title: {
      es: 'SQL de cero: Tu guía con PostgreSQL',
      en: 'SQL from Scratch: Your Guide with PostgreSQL',
    },
    issuer: 'Udemy',
    logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    link: 'https://www.udemy.com/certificate/UC-d774e4a7-a572-492e-8011-13a68443294b/',
    date: '2024',
  },
];

export const Cursos = () => {
  const { darkMode } = useUiNavbar();
  const { language } = useLanguageStore();

  const bgColor = darkMode ? 'bg-[#0f172a]' : 'bg-[#f9fafb]';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const cardColor = darkMode ? 'bg-[#1e293b]' : 'bg-white';
  
  return (
    <section className={`py-24 px-6 ${bgColor} ${textColor} transition-colors duration-300`}>
      <h3 className="text-4xl font-bold text-center mb-12">{translations[language].heading}</h3>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`${cardColor} rounded-xl p-6 shadow-lg flex flex-col items-start transition`}
          >
            <div className="flex items-center gap-4 mb-4">
              <Image src={cert.logo} alt={cert.issuer} width={40} height={40} className="object-contain rounded-md" />
              <div>
                <h4 className="font-semibold text-lg">{cert.title[language]}</h4>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  {translations[language].issued} {cert.issuer} · {cert.date}
                </p>
              </div>
            </div>

            {cert.link && (
              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
              >
                {translations[language].view}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
