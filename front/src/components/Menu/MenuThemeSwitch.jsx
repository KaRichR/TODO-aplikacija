import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function MenuThemeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        setIsDarkMode(storedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(prevMode => !prevMode);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="w-15 h-8 rounded-full bg-slate-200 dark:bg-neutral-900 justify-between flex items-center px-1 cursor-pointer relative select-none transition-colors" onClick={toggleTheme}>
            <div className="w-6 h-6 rounded-full grid place-items-center z-10">
                <Icon icon="tabler:sun" className="w-4 h-4" />
            </div>

            <div className="w-6 h-6 rounded-full grid place-items-center z-10">
                <Icon icon="tabler:moon" className="w-4 h-4" />
            </div>

            <div className={`w-6 h-6 rounded-full bg-slate-100 dark:bg-neutral-700 absolute top-1/2 -translate-y-1/2 transition-[left,background] ${isDarkMode ? 'left-7' : 'left-1'}`}></div>
        </div>
    )
}