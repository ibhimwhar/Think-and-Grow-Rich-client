import { BookmarkPlus, BookOpenCheck, CodeXml, NotebookPen, Share2 } from 'lucide-react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

const Content = () => {
    const [message, setMessage] = useState(false)

    const cards = [
        { title: "Read", icon: <BookOpenCheck size={24} />, href: "/content/read" },
        { title: "Book Mark", icon: <BookmarkPlus size={24} />, href: "/content/book-mark" },
        { title: "Notes", icon: <NotebookPen size={24} />, href: "/content/notes" },
        { title: "Developer", icon: <CodeXml size={24} />, href: "/developer" },
        { title: "Share App", icon: <Share2 size={24} />, onClick: () => navigator.share ? navigator.share({ title: "My App", url: "/" }) : console.log("Sharing not supported.") }
    ]

    return (
        <section className='grid gap-5 w-full p-5'>
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
                        Feature coming soon!
                    </motion.div>
                </AnimatePresence>
            )}
            {cards.map((item, i) => {
                const CardContent = (
                    <div className='cursor-pointer space-y-2 transition-all shadow-sm hover:shadow-md border border-neutral-200 rounded-xl p-5 text-center'>
                        <div className="flex justify-center">{item.icon}</div>
                        <h1 className="text-sm font-medium">{item.title}</h1>
                    </div>
                )

                // If it's a navigation item
                if (item.href) {
                    return (
                        <Link to={item.href} key={i}>
                            {CardContent}
                        </Link>
                    )
                }

                // If it's an action button
                return (
                    <button onClick={item.onClick} key={i} className="text-left w-full">
                        {CardContent}
                    </button>
                )
            })}
        </section>
    )
}

export default Content
