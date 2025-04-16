'use client';
import { useLanguageStore, useUiNavbar } from "@/store";

export const Footer = () => {
    const translations = {
        es: { footer: "Desarrollador Fullstack Jr" },
        en: { footer: "Fullstack Jr Developer" }
    }
    const darkMode = useUiNavbar((state) => state.darkMode);
    const language = useLanguageStore((state) => state.language);
    const bgColor = darkMode ? 'bg-[#0f172a]' : 'bg-[#f9fafb]'; // Tu color de fondo principal
    const textColor = darkMode ? 'text-gray-500' : 'text-gray-700'; // Ligeramente más oscuro/claro que el fondo
    const borderColor = darkMode ? 'border-gray-600' : 'border-gray-400'; // Contraste sutil con el borde

    return (
        <footer className={`text-center py-6 text-sm border-t ${borderColor} ${textColor} ${bgColor}`}>
            © {new Date().getFullYear()} Arturo Riveros Hernández – { translations[language].footer }
        </footer>
    );
};