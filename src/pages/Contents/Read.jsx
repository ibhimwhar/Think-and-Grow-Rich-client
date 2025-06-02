import { Link } from "react-router";
import Image from "../../assets/Think and Grow Rich by Napoleon Hill examines the….jpg";
import { Search, SearchX, Bookmark, BookmarkCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";


const Read = () => {
    const [chapters, setChapters] = useState([]);
    const [bookmarks, setBookmarks] = useState([]); // Store bookmarked chapters
    const [searchOpen, setSearchOpen] = useState(false);
    const [search, setSearch] = useState("");
    const OutSearchRef = useRef(null);
    const [message, setMessage] = useState(false)

    useEffect(() => {
        // Fetch chapters
        axios
            .get("https://think-and-grow-rich-server.onrender.com/chapters")
            .then((response) => setChapters(response.data))
            .catch((err) => console.log(err));

        // Fetch bookmarks
        axios
            .get("https://think-and-grow-rich-server.onrender.com/bookmarks")
            .then((res) => setBookmarks(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const HandleOutSide = (event) => {
            if (OutSearchRef.current && !OutSearchRef.current.contains(event.target)) {
                setSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", HandleOutSide);
        return () => document.removeEventListener("mousedown", HandleOutSide);
    }, []);

    const filteredChapters = chapters.filter((chapter) =>
        chapter.title.toLowerCase().includes(search.toLowerCase())
    );

    // Check if a chapter is bookmarked
    const isBookmarked = (chapterId) => bookmarks.some((bm) => bm.id === chapterId);

    // Add bookmark function
    const addBookmark = async (chapterId) => {
        try {
            const res = await axios.post(`https://think-and-grow-rich-server.onrender.com/bookmarks/${chapterId}`);
            setBookmarks((prev) => [...prev, res.data]);
            setMessage(true)
            setTimeout(() => setMessage(false), 3000)
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.error);
            } else {
                console.log("Error adding bookmark.");
            }
        }
    };


    return (
        <div className="mt-6">
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
                        Added to bookmark
                    </motion.div>
                </AnimatePresence>
            )}
            {searchOpen && (
                <div
                    ref={OutSearchRef}
                    className="flex gap-2 items-center border border-neutral-200 p-2 rounded-md bg-white transition-all duration-300 ease-in-out focus-within:ring-2 focus-within:ring-[var(--TextColor)] mb-4"
                >
                    <Search size={18} className="text-neutral-600" />
                    <input
                        type="text"
                        className="outline-none w-full"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            )}

            <div className="flex gap-2 md:gap-4 items-start">
                <div className="grid gap-5 w-full">
                    {filteredChapters.length > 0 ? (
                        filteredChapters.map((item, index) => (
                            <div
                                key={item.id}
                                className="relative cursor-pointer bg-white border border-neutral-200 rounded-md overflow-hidden flex items-center"
                            >
                                <Link
                                    to={`/content/read/${item.id}`}
                                    className="w-full md:w-auto grid md:flex items-center gap-4"
                                >
                                    <div
                                        className="md:w-24 h-24 bg-cover bg-center flex items-center justify-center text-white text-xl font-bold"
                                        style={{ backgroundImage: `url(${Image})` }}
                                    >
                                        <span className="bg-black/85 flex items-center justify-center w-full h-full">{index + 1}</span>
                                    </div>
                                    <h2 className="text-lg p-3 font-semibold uppercase max-w-[420px]">
                                        {item.title}
                                    </h2>
                                </Link>

                                {/* Bookmark button */}
                                <button
                                    onClick={() => addBookmark(item.id)}
                                    className="absolute bottom-4 bg-white right-0 ml-auto mr-4 cursor-pointer text-[var(--TextColor)] hover:opacity-80"
                                    disabled={isBookmarked(item.id)}
                                    title={isBookmarked(item.id) ? "Bookmarked" : "Add to bookmark"}
                                >
                                    {isBookmarked(item.id) ? <BookmarkCheck size={24} /> : <Bookmark size={24} />}
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-neutral-500">No chapters found.</p>
                    )}
                </div>

                <button
                    onClick={() => {
                        setSearchOpen((prev) => !prev);
                        setSearch("")
                    }}
                    className="border border-neutral-100 hover:ring-2 active:ring-2 ring-[var(--TextColor)] p-1.5 rounded-md cursor-pointer transition-all"
                >
                    {searchOpen ? <SearchX /> : <Search />}
                </button>
            </div>
        </div>
    );
};

export default Read;
