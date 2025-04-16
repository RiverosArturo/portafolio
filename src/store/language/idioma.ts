import { create } from 'zustand';

type Language = 'es' | 'en';

interface LanguageStore {
  language: Language;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'es',
  toggleLanguage: () =>
    set((state) => ({ language: state.language === 'es' ? 'en' : 'es' })),
}));