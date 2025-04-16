'use client'

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { useLanguageStore, useUiNavbar } from '@/store';
import { BiWifi } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { GiBearFace } from 'react-icons/gi';
import {
  SiNextdotjs, SiReact, SiJavascript, SiTypescript, SiRedux,
  SiTailwindcss, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiNestjs,
  SiPostgresql, SiMongodb, SiDocker, SiGit, SiJsonwebtokens, SiPrisma,
  SiPostman, SiMongoose, SiTypeorm
} from 'react-icons/si';

const habilidades = [
  { nombre: { es: "Next.js", en: "Next.js" }, icon: SiNextdotjs, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "React", en: "React" }, icon: SiReact, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "JavaScript", en: "JavaScript" }, icon: SiJavascript, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "TypeScript", en: "TypeScript" }, icon: SiTypescript, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "Redux", en: "Redux" }, icon: SiRedux, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "Zustand", en: "Zustand" }, icon: GiBearFace, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "Tailwind CSS", en: "Tailwind CSS" }, icon: SiTailwindcss, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "HTML5", en: "HTML5" }, icon: SiHtml5, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "CSS3", en: "CSS3" }, icon: SiCss3, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "Node.js", en: "Node.js" }, icon: SiNodedotjs, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "Express", en: "Express" }, icon: SiExpress, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "Nest.js", en: "Nest.js" }, icon: SiNestjs, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "MongoDB", en: "MongoDB" }, icon: SiMongodb, nivel: { es: "Básico", en: "Basic" } },
  { nombre: { es: "Mongoose", en: "Mongoose" }, icon: SiMongoose, nivel: { es: "Básico", en: "Basic" } },
  { nombre: { es: "PostgreSQL", en: "PostgreSQL" }, icon: SiPostgresql, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "TypeORM", en: "TypeORM" }, icon: SiTypeorm, nivel: { es: "Básico", en: "Basic" } },
  { nombre: { es: "Prisma", en: "Prisma" }, icon: SiPrisma, nivel: { es: "Básico", en: "Basic" } },
  { nombre: { es: "JWT", en: "JWT" }, icon: SiJsonwebtokens, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "Docker", en: "Docker" }, icon: SiDocker, nivel: { es: "Básico", en: "Basic" } },
  { nombre: { es: "Git", en: "Git" }, icon: SiGit, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "Postman", en: "Postman" }, icon: SiPostman, nivel: { es: "Intermedio", en: "Intermediate" } },
  { nombre: { es: "WebSockets", en: "WebSockets" }, icon: BiWifi, nivel: { es: "Básico", en: "Basic" } },
  { nombre: { es: "Nodemailer", en: "Nodemailer" }, icon: MdEmail, nivel: { es: "Básico", en: "Basic" } },
];

export const Habilidades = () => {
  const darkMode = useUiNavbar(state => state.darkMode);
  const language = useLanguageStore(state => state.language);
  const bgColor = darkMode ? 'bg-[#0f172a]' : 'bg-[#f9fafb]';
  const cardColor = darkMode ? 'bg-[#1e293b]' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    emblaApi?.on('select', () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const chunkSize = 6;
  const slides = Array.from({ length: Math.ceil(habilidades.length / chunkSize) }, (_, i) =>
    habilidades.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  return (
    <section
      id="skills"
      className={`py-20 px-6 transition-colors duration-500 ${bgColor} ${textColor}`}
    >
      <div className="flex justify-between items-center mb-12 max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold text-center flex-1">
          {language === 'es' ? 'Herramientas y Tecnologías' : 'Tools and Technologies'}
        </h3>
      </div>

      <div className="overflow-hidden max-w-5xl mx-auto" ref={emblaRef}>
        <div className="flex">
          {slides.map((group, index) => (
            <div key={index} className="flex-shrink-0 w-full grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
              {group.map(({ nombre, icon: Icon, nivel }) => (
                <div
                  key={nombre.es}
                  className={`w-full ${cardColor} ${textColor} rounded-xl shadow-md py-6 px-4 flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 hover:scale-105`}
                >
                  <Icon className="text-4xl" />
                  <span className="font-semibold text-base">{nombre[language]}</span>
                  <span className="text-sm opacity-70">
                    {language === 'es' ? `Nivel: ${nivel.es}` : `Level: ${nivel.en}`}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-4 h-4 rounded-full ${currentSlide === i ? 'bg-blue-500' : 'bg-gray-400'} transition-colors`}
          />
        ))}
      </div>
    </section>
  );
};
