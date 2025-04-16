'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import { useUiNavbar, useLanguageStore } from '@/store';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const translations = {
  es: {
    heading: '🚀 Proyectos Destacados',
    view: 'Ver web',
    code: 'Ver código',
  },
  en: {
    heading: '🚀 Featured Projects',
    view: 'View web',
    code: 'View code',
  },
};

const projects = [
  {
    title: {
      es: "Hotel Danini",
      en: "Hotel Danini",
    },
    description: {
      es: "Impacto Web para Hotel: Desarrollé sitio web centrado en la experiencia del usuario (UX) e integrando funcionalidades clave (ubicación, galería visual y widget de reservas externo). Optimización de rendimiento para una carga rápida. Mantenimiento y actualizaciones continuas para asegurar la relevancia y efectividad del sitio.",
      en: "Hotel Web Impact: Developed a website focused on user experience (UX) and integrated key features (location, visual gallery, and external booking widget). Performance optimization for fast loading. Continuous maintenance and updates to ensure the site's relevance and effectiveness.",
    },
    tech: 'React · TypeScript · Bootstrap',
    img: 'https://res.cloudinary.com/da9ybpsoe/image/upload/v1744792239/portafolio/hotelDanini_cbrvvo.png',
    demo: 'https://hoteldanini.com',
    code: '',
  },
  {
    title: {
      es: "Santa Fé Casa Club",
      en: "Santa Fé Casa Club",
    },
    description: {
      es: "Lanzamiento Web para Nuevo Club: Desarrollé sitio web dinámico y responsivo, centrándome en una experiencia de usuario intuitiva con formularios interactivos y navegación fluida. Implementé optimización SEO y de rendimiento para asegurar visibilidad y velocidad. Colaboración continua para la mejora y actualización del sitio tras su lanzamiento.",
      en: "Website Launch for New Club: I developed a dynamic and responsive website, focusing on an intuitive user experience with interactive forms and fluid navigation. I implemented SEO and performance optimization to ensure visibility and speed. I collaborated continuously to improve and update the site after its launch.",
    },
    tech: 'Next.js · Tailwind Css · ReactHookForm · Zustand · Nodemailer · TypeScript',
    img: 'https://res.cloudinary.com/da9ybpsoe/image/upload/v1744792239/portafolio/santaFe_y4c3mh.png',
    demo: 'https://santafecasaclub.com/',
    code: '',
  },
  {
    title: {
      es: "Calculadora para hoja de eficiencia",
      en: "Efficiency Sheet Calculator",
    },
    description: {
      es: "Desarrollé una calculadora básica de eficiencia productiva para una maquiladora, optimizando significativamente el tiempo de cálculo y facilitando la obtención de datos como el total y porcentaje obtenidos de cada empleado.",
      en: "I developed a basic productive efficiency calculator for a maquiladora, significantly optimizing calculation time and facilitating the obtaining of data such as the total and percentage obtained from each employee.",
    },
    tech: 'Next.js · TailwindCss ',
    img: 'https://res.cloudinary.com/da9ybpsoe/image/upload/v1744792238/portafolio/hojaEficiencia_evodky.png',
    demo: '',
    code: '',
  },
  {
    title: {
      es: "Proyecto Personal - Inspiración Tesla Shop",
      en: "Personal Project - Tesla Shop Inspiration",
    },
    description: {
      es: "Desarrollé una aplicación web completa inspirada en la Tesla Shop para fortalecer habilidades en un proyecto complejo. Implementé un sistema de autenticación seguro, gestión de datos robusta y simulación de pagos, con foco en una arquitectura escalable y buenas prácticas de desarrollo. Despliegue exitoso en Vercel.",
      en: "I developed a comprehensive web application inspired by the Tesla Shop to strengthen skills for a complex project. I implemented a secure authentication system, robust data management, and payment simulation, focusing on scalable architecture and best development practices. Successful deployment in Vercel.",
    },
    tech: 'Next.js · Material UI · MongoDb · React Redux · NextAuth · paypal-js · axios · Cloudinary · js-cookie · JWT · bcryptjs · Node.js · TypeScript',
    img: 'https://res.cloudinary.com/da9ybpsoe/image/upload/v1744792239/portafolio/teslo_htqmid.png',
    demo: 'https://teslo-shop-five-bice.vercel.app/',
    code: 'https://github.com/RiverosArturo/teslo-shop',
  },
  {
    title: {
      es: "Proyecto Personal - Calendario de eventos",
      en: "Personal Project - Calendar of Events",
    },
    description: {
      es: "Desarrollé una aplicación web de calendario de eventos con registro de usuarios y creación de eventos visibles para la comunidad. Implementación fullstack con el stack MERN.",
      en: "I developed an event calendar web application with user registration and community-visible event creation. Implemented using the full-stack MERN stack.",
    },
    tech: 'MongoDb · Express.js · React · Node.js · JavaScript',
    img: 'https://res.cloudinary.com/da9ybpsoe/image/upload/v1744792239/portafolio/calendarioEventos_bpy2vh.png',
    demo: 'https://mern-calendar-wbpb.onrender.com/',
    code: 'https://github.com/RiverosArturo/calendarMERN',
  },
];

export const Proyectos = () => {
  const darkMode = useUiNavbar((state) => state.darkMode);
  const language = useLanguageStore((state) => state.language);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [, setSelectedIndex] = useState(0);

  const bgColor = darkMode ? 'bg-[#0e0e12]' : 'bg-[#f4f4f7]';
  const textColor = darkMode ? 'text-white' : 'text-black';
  const cardColor = darkMode ? 'bg-[#1c1c24]' : 'bg-white';

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="projects"
      className={`py-24 px-6 ${bgColor} ${textColor} transition-colors duration-300`}
    >
      <h3 className="text-4xl font-bold text-center mb-12">
        {translations[language].heading}
      </h3>

      <div className="max-w-6xl mx-auto relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((proj, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`${cardColor} rounded-2xl shadow-lg overflow-hidden min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33%] transition`}
              >
                <h4 className="text-xl font-semibold mb-2 p-5">{proj.title[language]}</h4>
                <Image
                  src={proj.img}
                  alt={proj.title[language]}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  {expandedIndex === index ? (
                    <>
                      <div className="space-y-3">
                        <p className="text-sm leading-relaxed ">{proj.description[language]}</p>

                        <div className="flex flex-wrap gap-2">
                          {proj.tech.split('·').map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground dark:bg-gray-800 dark:text-gray-300"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>

                        <div className="mt-3 flex gap-3 flex-wrap">
                          {proj.demo && (
                            <Link
                              href={proj.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
                            >
                              🌐 {translations[language].view}
                            </Link>
                          )}
                          {proj.code && (
                            <Link
                              href={proj.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                            >
                              💻 {translations[language].code}
                            </Link>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-red-600 dark:text-red-400 
                                    hover:underline hover:text-red-800 dark:hover:text-red-300 transition-all duration-200"
                      >
                        {language === 'es' ? 'Ocultar detalles' : 'Hide details'}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 
                                  hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-200"
                    >
                      {language === 'es' ? 'Descubre más' : 'Discover more'}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={scrollPrev}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full 
               bg-blue-600 text-white hover:bg-blue-700 shadow-md 
               dark:bg-blue-500 dark:hover:bg-blue-600 
               transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <HiOutlineChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full 
               bg-blue-600 text-white hover:bg-blue-700 shadow-md 
               dark:bg-blue-500 dark:hover:bg-blue-600 
               transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <HiOutlineChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};
