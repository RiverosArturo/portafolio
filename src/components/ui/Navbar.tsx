'use client';

import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore, useUiNavbar } from '@/store';

export const Navbar = () => {
  const darkMode = useUiNavbar((state) => state.darkMode);
  const toggleDarkMode = useUiNavbar((state) => state.toggleDarkMode);
  const isDrawerOpen = useUiNavbar((state) => state.isDrawerOpen);
  const toggleDrawer = useUiNavbar((state) => state.toggleDrawer);
  const closeDrawer = useUiNavbar((state) => state.closeDrawer);
  const { language, toggleLanguage } = useLanguageStore();

  const bgColor = darkMode ? 'bg-black' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-black';

  const navItems = [
    
    { id: 'projects', label: language === 'es' ? 'Proyectos' : 'Projects' },
    { id: 'skills', label: language === 'es' ? 'Skills' : 'Skills' },
    { id: 'about', label: language === 'es' ? 'Sobre mí' : 'About me' },
    { id: 'contact', label: language === 'es' ? 'Contacto' : 'Contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 px-6 py-4 ${bgColor} ${textColor} backdrop-blur-md shadow-md transition-all duration-500 ease-in-out`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Portafolio</h1>

          <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-muted-foreground">
            {navItems.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="hover:text-primary">
                {label}
              </a>
            ))}

            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full hover:bg-muted transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode
                ? <Sun className="w-5 h-5 text-amber-400" />
                : <Moon className="w-5 h-5 text-amber-400" />
              }
            </button>

            <button
              onClick={toggleLanguage}
              className="ml-2 px-3 py-1 text-xs border rounded-full hover:bg-muted transition"
              aria-label="Cambiar idioma"
            >
              {language.toUpperCase()}
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleDrawer} className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isDrawerOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed inset-y-0 right-0 w-64 z-50 p-6 ${bgColor} ${textColor} shadow-lg transition-all duration-500 ease-in-out`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">{language === 'es' ? 'Menú' : 'Menu'}</h2>
              <button onClick={closeDrawer}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-muted-foreground">
              {navItems.map(({ id, label }) => (
                <a key={id} href={`#${id}`} onClick={closeDrawer}>
                  {label}
                </a>
              ))}

              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 mt-4 p-2 bg-muted rounded hover:bg-muted/70 transition-colors duration-300"
              >
                {darkMode
                  ? <Sun className="w-5 h-5 text-amber-400" />
                  : <Moon className="w-5 h-5 text-amber-400" />
                }
                {darkMode ? 'Modo claro' : 'Modo oscuro'}
              </button>

              <button
                onClick={toggleLanguage}
                className="mt-2 px-3 py-1 text-sm border rounded-full hover:bg-muted transition"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};
