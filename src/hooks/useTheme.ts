import { useState, useEffect } from 'react';

export enum themeMode {
    DARK = 'dark',
    LIGHT = 'light'
}

export const useTheme = () => {
    const [theme, setTheme] = useState(() => localStorage['theme'] as string || themeMode.DARK);

    useEffect(() => {
        if (theme === themeMode.DARK) document.body.classList.toggle(themeMode.DARK);
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        document.body.classList.toggle(themeMode.DARK);
        setTheme(prevTheme => prevTheme === themeMode.DARK ? themeMode.LIGHT : themeMode.DARK);
    };

    return { theme, toggleTheme };
};