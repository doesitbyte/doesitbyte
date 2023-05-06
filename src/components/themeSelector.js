import React from 'react'
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

const ThemeSelector = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => { setMounted(true) }, [])
    if (!mounted) { return null }

    const toggleTheme = () => {
        currentTheme == "dark" ? setTheme('light') : setTheme("dark");
    }

    const setSystemTheme = () => {
        setTheme("system");
    }

    return (
        <div className='flex flex-row items-center justify-center'>
            <ComputerDesktopIcon role='img' title='Use system theme' className='h-8 w-8 p-1 dark:stroke-gray-400 dark:hover:stroke-gray-50 stroke-gray-600 hover:stroke-gray-950 cursor-pointer' onClick={() => setSystemTheme()} />
            {
                currentTheme == "dark"
                    ? <SunIcon role='img' title='Use light theme' className='h-8 w-8 p-1 dark:stroke-gray-400 dark:hover:stroke-gray-50 stroke-gray-600 hover:stroke-gray-950 cursor-pointer' onClick={() => toggleTheme()} />
                    : <MoonIcon role='img' title='Use dark theme' className='h-8 w-8 p-1 dark:stroke-gray-400 dark:hover:stroke-gray-50 stroke-gray-600 hover:stroke-gray-950 cursor-pointer' onClick={() => toggleTheme()} />
            }
        </div>
    )
}

export default ThemeSelector