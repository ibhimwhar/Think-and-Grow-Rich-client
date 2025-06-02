import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router";
import Loading from "../../components/Loading.jsx";
import {
    Bookmark,
    BookmarkCheck,
    Instagram,
    MapPinHouse,
    NotebookPen,
    Paintbrush,
    Palette,
    PenTool,
    X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ReadDetails = () => {
    const { id } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [bookmarks, setBookmarks] = useState([]);
    const [message, setMessage] = useState(false);
    const [notification, setNotification] = useState(false);
    const closingRef = useRef(null);
    const intervalRef = useRef(null);

    const [paint, setPaint] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);


    useEffect(() => {
        axios
            .get("https://think-and-grow-rich-server.onrender.com/chapters")
            .then((response) => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios
            .get("https://think-and-grow-rich-server.onrender.com/bookmarks")
            .then((res) => setBookmarks(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (closingRef.current && !closingRef.current.contains(event.target)) {
                setOpen(false);
                setPaint(false);
                setSelectedColor(false)
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setNotification(true);
        }, 3000);

        // Clean up on unmount
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleClose = () => {
        setOpen((prev) => !prev)
        setNotification(false);
        clearInterval(intervalRef.current);
    };

    const chapter = books.find((item) => item.id === id);

    const isBookmarked = (chapterId) => bookmarks.some((bm) => bm.id === chapterId);

    const addBookmark = async (chapterId) => {
        try {
            const res = await axios.post(`https://think-and-grow-rich-server.onrender.com/bookmarks/${chapterId}`);
            setBookmarks((prev) => [...prev, res.data]);
            setMessage(true);
            setTimeout(() => setMessage(false), 3000);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.error);
            } else {
                console.log("Error adding bookmark.");
            }
        }
    };

    const navigators = [
        { id: 1, title: "Home", icon: <MapPinHouse size={17} />, link: "/" },
        { id: 2, title: "Notes", icon: <NotebookPen size={17} />, link: "/content/notes" },
        { id: 3, title: "Custom Theme", icon: <Palette size={17} />, link: "/theme" },
        {
            id: 4,
            title: "Follow Us",
            icon: <Instagram size={17} />,
            onClick: () => window.open("https://instagram.com/viralface_1", "_blank"),
        },
        chapter && {
            id: 5,
            title: isBookmarked(chapter.id) ? "Bookmarked" : "Add to Bookmark",
            icon: isBookmarked(chapter.id) ? <BookmarkCheck size={17} /> : <Bookmark size={17} />,
            onClick: () => {
                if (!isBookmarked(chapter.id)) addBookmark(chapter.id);
            },
        },
    ].filter(Boolean); // removes `false` if chapter is null early


    if (loading) return <Loading />;

    if (!chapter) {
        return (
            <div className="p-4 text-2xl flex items-start justify-center text-[var(--TextColor)] h-screen">
                Chapter not found
            </div>
        );
    }

    const themeColors = [
        { name: "Cyan", from: "#164e63", to: "#0e7490" },       // Deep Cyan
        { name: "Violet", from: "#5b21b6", to: "#7c3aed" },     // Strong Violet
        { name: "Lime", from: "#365314", to: "#65a30d" },       // Earthy Lime
        { name: "Pink", from: "#831843", to: "#be185d" },       // Bold Pink
        { name: "Gray", from: "#1f2937", to: "#4b5563" },       // Dark Gray
        { name: "Indigo", from: "#312e81", to: "#4338ca" },     // Deep Indigo
        { name: "Emerald", from: "#064e3b", to: "#10b981" },    // Forest Green
        { name: "Red", from: "#7f1d1d", to: "#dc2626" },         // Blood Red
        { name: "Blue", from: "#1e3a8a", to: "#2563eb" },       // Solid Blue
        { name: "Orange", from: "#7c2d12", to: "#ea580c" },     // Burnt Orange
    ];

    const HandlePaint = () => {
        setOpen(false)
        setPaint(!paint)
    };

    const handleSelectColor = (color) => {
        setSelectedColor(color);
        setPaint(false);
    };

    return (
        <div
            className="p-4 space-y-5 rounded-md "
            style={{
                backgroundImage: selectedColor ? `linear-gradient(to top left, ${selectedColor.from}, ${selectedColor.to})` : "",
            }}
        >
            <AnimatePresence>
                {message && (
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
                )}
            </AnimatePresence>

            <h1
                style={{ color: selectedColor ? "#ffffff" : "", }}
                className="text-center text-2xl font-bold">{chapter.title}</h1>

            <p
                style={{ color: selectedColor ? "#eeeeee" : "", }}
                className="text-justify text-balance text-neutral-700">{chapter.description}</p>

            {/* Floating Menu */}
            <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

                {paint && (
                    <div className="grid gap-3 border border-neutral-200 bg-white p-3 rounded-xl shadow-lg transition-all overflow-y-scroll w-[25vh] h-[50vh]">
                        {themeColors.map((color) => (
                            <button
                                key={color.name}
                                onClick={() => handleSelectColor(color)}
                                className="flex cursor-pointer items-center gap-3 w-full text-sm hover:bg-neutral-100 transition rounded-md p-2"
                            >
                                <span
                                    className="p-3 rounded-full"
                                    style={{
                                        backgroundImage: `linear-gradient(to top left, ${color.from}, ${color.to})`,
                                    }}
                                />
                                {color.name}
                            </button>
                        ))}
                    </div>
                )}

                {selectedColor && (
                    <div className="flex items-center gap-3 border border-neutral-200 bg-white p-3 rounded-xl shadow-lg transition-all">
                        <span
                            className="p-2 rounded-full"
                            style={{
                                backgroundImage: `linear-gradient(to top left, ${selectedColor.from}, ${selectedColor.to})`,
                            }}
                        />
                        <span className="text-sm font-medium">{selectedColor.name}</span>
                    </div>
                )}



                {open && (
                    <div
                        ref={closingRef}
                        className="grid gap-3 border border-neutral-200 bg-white p-3 rounded-xl shadow-lg transition-all"
                    >
                        {navigators.map((items) =>
                            items.link ? (
                                <Link to={items.link} key={items.id}>
                                    <button className="flex items-center cursor-pointer gap-3 w-full text-sm px-4 py-2 hover:bg-neutral-100 transition rounded-md">
                                        {items.icon} {items.title}
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    key={items.id}
                                    onClick={items.onClick}
                                    className="flex items-center cursor-pointer gap-3 w-full text-sm px-4 py-2 hover:bg-neutral-100 transition rounded-md"
                                    disabled={items.disabled}
                                >
                                    {items.icon} {items.title}
                                </button>
                            )
                        )}

                        <button
                            onClick={HandlePaint}
                            className="flex items-center cursor-pointer gap-3 w-full text-sm px-4 py-2 hover:bg-neutral-100 transition rounded-md">
                            <Paintbrush size={17} /> Paint
                        </button>

                    </div>
                )}

                <>
                    {notification ? <span className="z-50 animate-bounce absolute top-0 right-0 p-1.5 rounded-full bg-green-500" /> : ""}
                    <button
                        onClick={handleClose}
                        className={`${open ? "rotate-180" : ""
                            } transition-transform bg-white border cursor-pointer border-neutral-200 hover:ring-2 ring-[var(--TextColor)] p-3 rounded-full shadow-md`}
                    >
                        {open ? <X size={20} /> : <PenTool size={20} />}
                    </button>
                </>

            </div>

        </div>
    );
};

export default ReadDetails;