import { createContext, useEffect, useState} from "react";

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

   return 'light' // light theme as the default;
};

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ initalTheme, children } ) => 
{
    const [darkMode, setDarkMode] = useState(getInitialTheme);

    function websiteTheme(theme)
    {
        const root = window.document.documentElement;
        const isDark = theme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);

        localStorage.setItem('color-theme', theme);
    }

    if(initalTheme)
    {
        websiteTheme(initalTheme);
    }

    useEffect(() => {
        websiteTheme(darkMode);
    }, [darkMode])


    return(
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )

}