import { create } from 'zustand';

interface State {
    darkMode: boolean;
    isDrawerOpen: boolean;
    toggleDarkMode: () => void;
    toggleDrawer: () => void;
    closeDrawer: () => void;
}

export const useUiNavbar = create<State>()((set) => ({
    darkMode: false,
    isDrawerOpen: false,
    
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
    closeDrawer: () => set({ isDrawerOpen: false }),
}))
