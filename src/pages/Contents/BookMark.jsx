import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Loading from "../../components/Loading";
import { Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const BookMarkContainer = () => {
    const [chapters, setChapters] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false)



    useEffect(() => {
        // Fetch chapters and bookmarks concurrently using axios.all
        setLoading(true);
        axios
            .all([axios.get("https://think-and-grow-rich-server.onrender.com/chapters"), axios.get("https://think-and-grow-rich-server.onrender.com/bookmarks")])
            .then(
                axios.spread((chaptersRes, bookmarksRes) => {
                    setChapters(chaptersRes.data);
                    setBookmarks(bookmarksRes.data);
                    setLoading(false);
                })
            )
            .catch(() => setLoading(false));
    }, []);

    const deleteBookmark = async (chapterId) => {

        try {
            await axios.delete(`https://think-and-grow-rich-server.onrender.com/bookmarks/${chapterId}`);
            setBookmarks((prev) => prev.filter((bm) => bm.id !== chapterId));
            setMessage(true)
            setTimeout(() => setMessage(false), 3000)
        } catch (error) {
            console.log("Failed to delete bookmark");
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <>

            {message && (
                <AnimatePresence>
                    <motion.div
                        role="alert"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs md:max-w-sm lg:max-w-md text-sm p-3 rounded-md bg-red-100 text-red-700 border border-red-200 text-center"
                    >
                        Removed from bookmark
                    </motion.div>
                </AnimatePresence>
            )}

            <h2 className="text-3xl font-semibold my-6 text-center text-[var(--TextColor)]">Bookmarked Chapters</h2>

            {bookmarks.length === 0 ? (
                <p className="text-neutral-500">No bookmarks yet.</p>
            ) : (
                <div>
                    {bookmarks.map((bm) => (
                        <React.Fragment key={bm.id}>
                            <div
                                className="grid gap-5 md:flex justify-between items-center p-4 rounded-lg outline outline-neutral-100"
                            >
                                <div className="space-y-5 grid">
                                    <Link
                                        to={`/content/read/${bm.id}`}>
                                        <strong className="text-lg text-[var(--TextColor)] hover:opacity-80 transition-colors flex items-center gap-2"><Bookmark size={20} />{bm.title}</strong>
                                    </Link>

                                    <p className="text-neutral-700">{bm.description.slice(0, 100)}. . .</p>
                                </div>
                                <button
                                    onClick={() => deleteBookmark(bm.id)}
                                    className="cursor-pointer px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
                                >
                                    Remove
                                </button>
                            </div>
                            <hr className="border-[var(--TextColor)] opacity-10 max-w-xs m-auto my-6" />
                        </React.Fragment>
                    ))}
                </div>
            )}
        </>
    );
};

export default BookMarkContainer;
