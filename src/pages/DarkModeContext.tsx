// DarkModeContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext<{
    darkMode: boolean;
    toggleDarkMode: () => void;
}>({
    darkMode: false,
    toggleDarkMode: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider: React.FC = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        localStorage.setItem('darkMode', darkMode ? 'false' : 'true');
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
