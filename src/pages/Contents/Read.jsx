// pages/Contents/Read.jsx

import { Link } from "react-router";
import Image from "../../assets/Think and Grow Rich by Napoleon Hill examines the….jpg";

import {
  Search,
  SearchX,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  ArrowRight,
  Sparkles,
  Library,
  X,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Read = () => {
  const [chapters, setChapters] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(true);

  const OutSearchRef = useRef(null);

  // =========================================================
  // FETCH DATA
  // =========================================================

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [chaptersResponse, bookmarksResponse] = await Promise.all([
          axios.get(`${import.meta.env.DATA_API_URL}/chapters`),
          axios.get(`${import.meta.env.DATA_API_URL}/bookmarks`),
        ]);

        setChapters(chaptersResponse.data);
        setBookmarks(bookmarksResponse.data);
      } catch (error) {
        console.error("Failed to load reading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // =========================================================
  // CLOSE SEARCH WHEN CLICKING OUTSIDE
  // =========================================================

  useEffect(() => {
    const handleOutside = (event) => {
      if (
        OutSearchRef.current &&
        !OutSearchRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, []);

  // =========================================================
  // SEARCH
  // =========================================================

  const filteredChapters = chapters.filter((chapter) =>
    chapter.title.toLowerCase().includes(search.toLowerCase()),
  );

  // =========================================================
  // BOOKMARK CHECK
  // =========================================================

  const isBookmarked = (chapterId) =>
    bookmarks.some((bookmark) => bookmark.id === chapterId);

  // =========================================================
  // ADD BOOKMARK
  // =========================================================

  const addBookmark = async (chapterId) => {
    if (isBookmarked(chapterId)) return;

    try {
      const response = await axios.post(
        `${import.meta.env.DATA_API_URL}/bookmarks/${chapterId}`,
      );

      setBookmarks((previous) => [...previous, response.data]);

      setMessage("Chapter bookmarked");

      setTimeout(() => {
        setMessage(false);
      }, 2500);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.error);
      } else {
        console.log("Error adding bookmark.");
      }
    }
  };

  // =========================================================
  // REMOVE SEARCH
  // =========================================================

  const clearSearch = () => {
    setSearch("");

    if (searchOpen) {
      setSearchOpen(false);
    }
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <div className="space-y-5 py-6">
        <div className="h-44 rounded-[30px] bg-neutral-100 animate-pulse" />

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-28 rounded-[24px] bg-neutral-100 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-7 pb-8">
      {/* =================================================
          TOAST
      ================================================= */}

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.95 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-neutral-200 text-sm font-medium text-neutral-700"
          >
            <BookmarkCheck size={17} className="text-[var(--TextColor)]" />

            {message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="relative overflow-hidden rounded-[30px] bg-[var(--TextColor)] text-white p-6 md:p-8 shadow-[8px_8px_25px_rgba(0,143,226,0.2)]">
        <div className="absolute -right-20 -top-24 w-72 h-72 rounded-full bg-white opacity-[0.07]" />

        <div className="absolute -left-20 -bottom-32 w-64 h-64 rounded-full bg-white opacity-[0.05]" />

        <div className="relative">
          <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-[0.18em] font-semibold">
            <Library size={15} />
            Reading Library
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-3">
            Think & Grow Rich
          </h1>

          <p className="text-white/70 text-sm mt-2">
            Explore the book chapter by chapter.
          </p>

          {/* Stats */}

          <div className="flex flex-wrap gap-3 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 text-xs text-white/80">
              <BookOpen size={14} />

              <span>{chapters.length} Chapters</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 text-xs text-white/80">
              <Bookmark size={14} />

              <span>{bookmarks.length} Saved</span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          SEARCH BAR
      ================================================= */}

      <section ref={OutSearchRef} className="flex items-center gap-3 my-16">
        <AnimatePresence mode="wait">
          {searchOpen ? (
            <motion.div
              key="search"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              exit={{ opacity: 0, width: 0 }}
              className="clay-soft border border-neutral-200 flex items-center gap-3 px-4 py-3 overflow-hidden"
            >
              <Search size={18} className="text-neutral-400 shrink-0" />

              <input
                autoFocus
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search chapters..."
                className="outline-none bg-transparent w-full text-sm text-neutral-700 placeholder:text-neutral-400"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-[var(--TextColor)]" />

                <p className="text-sm font-semibold">Choose a chapter</p>
              </div>

              <p className="text-xs text-neutral-400 mt-1">
                Start where you left off or explore something new.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setSearchOpen((previous) => !previous);

            if (searchOpen) {
              setSearch("");
            }
          }}
          title={searchOpen ? "Close search" : "Search chapters"}
          className="shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[var(--TextColor)] border border-neutral-200 hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer"
        >
          {searchOpen ? <SearchX size={19} /> : <Search size={19} />}
        </button>
      </section>

      {/* =================================================
          SEARCH RESULT INFO
      ================================================= */}

      {search && (
        <div className="flex items-center justify-between px-1">
          <p className="text-xs text-neutral-400">
            {filteredChapters.length}{" "}
            {filteredChapters.length === 1 ? "chapter" : "chapters"} found
          </p>

          <button
            onClick={clearSearch}
            className="text-xs text-[var(--TextColor)] hover:underline cursor-pointer"
          >
            Clear
          </button>
        </div>
      )}

      {/* =================================================
          CHAPTER LIST
      ================================================= */}

      <section className="grid gap-4">
        {filteredChapters.length > 0 ? (
          filteredChapters.map((item, index) => {
            const bookmarked = isBookmarked(item.id);

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.04,
                }}
                className="clay-soft border border-neutral-200 p-3 md:p-4 group"
              >
                <div className="flex gap-4 items-center md:items-start">
                  {/* =================================
                      CHAPTER THUMBNAIL
                  ================================= */}

                  <Link
                    to={`/content/read/${item.id}`}
                    className="relative md:sticky md:top-40 shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-[20px] overflow-hidden group/image"
                  >
                    <img
                      src={Image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/65 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </Link>

                  {/* =================================
                      CONTENT
                  ================================= */}

                  <div className="flex-1 min-w-0">
                    <Link to={`/content/read/${item.id}`} className="block">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[9px] uppercase tracking-widest font-bold text-[var(--TextColor)]">
                          Chapter {index + 1}
                        </span>
                      </div>

                      <h2 className="text-base md:text-lg font-bold text-neutral-800 leading-snug group-hover:text-[var(--TextColor)] transition-colors">
                        {item.title}
                      </h2>

                      {item.description && (
                        <p className="hidden md:block text-xs text-neutral-400 mt-2 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </Link>

                    {/* Bottom row */}

                    <div className="flex items-center justify-between gap-3 mt-3">
                      <Link
                        to={`/content/read/${item.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--TextColor)] hover:gap-2 transition-all"
                      >
                        Read chapter
                        <ArrowRight size={13} />
                      </Link>

                      {/* Bookmark */}

                      <button
                        onClick={() => addBookmark(item.id)}
                        disabled={bookmarked}
                        title={bookmarked ? "Bookmarked" : "Add bookmark"}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          bookmarked
                            ? "bg-[var(--TextColor)]/10 text-[var(--TextColor)] cursor-default"
                            : "bg-white text-neutral-400 hover:text-[var(--TextColor)] hover:-translate-y-0.5 cursor-pointer"
                        }`}
                      >
                        {bookmarked ? (
                          <BookmarkCheck size={17} />
                        ) : (
                          <Bookmark size={17} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          /* =============================================
              EMPTY SEARCH
          ============================================= */

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="clay-soft text-center py-14 px-6"
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-neutral-400 shadow-[4px_4px_12px_rgba(180,190,205,0.2)]">
              <SearchX size={22} />
            </div>

            <h3 className="font-bold text-lg mt-4">No chapters found</h3>

            <p className="text-sm text-neutral-400 mt-2 max-w-xs mx-auto">
              We couldn't find a chapter matching "{search}".
            </p>

            <button
              onClick={clearSearch}
              className="mt-5 px-5 py-2.5 rounded-xl bg-[var(--TextColor)] text-white text-sm font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Show all chapters
            </button>
          </motion.div>
        )}
      </section>

      {/* =================================================
          BOTTOM TIP
      ================================================= */}

      {filteredChapters.length > 0 && (
        <div className="flex justify-center pt-2">
          <div className="inline-flex items-center gap-2 text-xs text-neutral-400">
            <Bookmark size={13} className="text-[var(--TextColor)]" />
            Save chapters you want to revisit.
          </div>
        </div>
      )}
    </div>
  );
};

export default Read;
