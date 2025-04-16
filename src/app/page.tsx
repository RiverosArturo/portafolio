'use client';
import { Contacto, Cursos, Habilidades, Hero, Proyectos, SobreMi } from '@/components';



export default function HomePage() {

  return (
    <div>
      <Hero /> 
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Cursos />
      <Contacto />
    </div>
  );
}
