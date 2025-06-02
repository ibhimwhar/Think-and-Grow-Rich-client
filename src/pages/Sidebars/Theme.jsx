import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from 'lucide-react';

const Theme = () => {
    const [selectedTheme, setSelectedTheme] = useState('original');
    const [message, setMessage] = useState(null)
    const [text, setText] = useState("Enter something")

    const themeColors = {
        original: '#008fe2',
        red: 'red',
        yellow: '#facc15',
        green: 'green',
        purple: 'purple',
        pink: '#ec4899',
        orange: '#f97316',
        teal: '#14b8a6',
        indigo: '#6366f1',
        lime: '#84cc16',
        amber: '#f59e0b',
        rose: '#f43f5e',
        violet: '#8b5cf6',
        gray: '#6b7280',
        brown: '#92400e',
    };


    // Fetch theme from server on load
    useEffect(() => {
        axios.get('https://think-and-grow-rich-server.onrender.com/theme')
            .then((res) => {
                const savedTheme = res.data.theme || 'original';
                setSelectedTheme(savedTheme);
                document.documentElement.style.setProperty('--TextColor', themeColors[savedTheme]);
            })
            .catch((err) => {
                console.error("Failed to fetch theme", err);
            });
    }, []);

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
        document.documentElement.style.setProperty('--TextColor', themeColors[theme]);
        setMessage(theme)
        setTimeout(() => setMessage(false), 3000)

        axios.post('https://think-and-grow-rich-server.onrender.com/theme', { theme })
            .catch((err) => console.error("Failed to save theme", err));
    };

    return (
        <div>

            {message && (
                <AnimatePresence>
                    <motion.div
                        role="alert"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs md:max-w-sm lg:max-w-md text-sm p-3 rounded-md bg-sky-100 text-sky-700 border border-sky-200 text-center"
                    >
                        Changed theme to {message}
                    </motion.div>
                </AnimatePresence>
            )}

            <h1 className="text-center p-5 font-semibold md:text-3xl">
                SELECT YOUR FAVOURITE THEME
            </h1>

            <div className="grid gap-5 p-5">
                {Object.keys(themeColors).map((theme) => {
                    const isOriginal = theme === 'original';
                    const baseStyle = {
                        border: `2px solid oklch(99% 0 0)`,
                        color: isOriginal ? themeColors[theme] : 'white',
                        backgroundColor: isOriginal ? 'transparent' : themeColors[theme],
                    };

                    return (
                        <button
                            key={theme}
                            onClick={() => handleThemeChange(theme)}
                            className="cursor-pointer p-4 rounded-md font-medium transition duration-200 hover:scale-105"
                            style={baseStyle}
                        >
                            {theme}
                        </button>
                    );
                })}
            </div>

            <h2 className='mt-5 py-5 text-2xl font-semibold border-t border-neutral-100 text-[var(--TextColor)]'>Components</h2>
         
            <div className=' grid md:flex gap-5 items-center'>

                <p className='text-[var(--TextColor)] truncate max-w-md'>Text: {text}</p>

                <div className='flex gap-5'>
                    <button
                        className="cursor-pointer transition-all border border-neutral-100 hover:ring-2 active:ring-2 ring-[var(--TextColor)] p-1.5 rounded-md"
                    >
                        <span className={`block transition-transform duration-300`}>
                            <Palette />
                        </span>
                    </button>

                    <button className="text-white w-full px-10 py-2 rounded-lg bg-[var(--TextColor)] cursor-pointer transition-all duration-300 hover:opacity-80">
                        Button
                    </button>
                </div>

                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Input"
                    className="flex-1 border border-neutral-200 focus:ring-2 ring-[var(--TextColor)] outline-none p-2 rounded-md"
                />
            </div>
        </div>
    );
};

export default Theme;