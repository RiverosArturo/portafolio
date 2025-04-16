'use client';
import { Contacto, Habilidades, Hero, Proyectos, SobreMi } from '@/components';



export default function HomePage() {

  return (
    <div>
      <Hero /> 
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </div>
  );
}
