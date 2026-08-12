// pages/Contents/BookMark.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Loading from "../../components/Loading";
import {
  Bookmark,
  BookmarkX,
  ArrowRight,
  Sparkles,
  BookOpen,
  Trash2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BookMarkContainer = () => {
  const [chapters, setChapters] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(false);

  // =========================================================
  // FETCH CHAPTERS + BOOKMARKS
  // =========================================================

  useEffect(() => {
    setLoading(true);

    axios
      .all([
        axios.get(`${import.meta.env.VITE_API_URL}/chapters`),
        axios.get(`${import.meta.env.VITE_API_URL}/bookmarks`),
      ])
      .then(
        axios.spread((chaptersRes, bookmarksRes) => {
          setChapters(chaptersRes.data);
          setBookmarks(bookmarksRes.data);
          setLoading(false);
        }),
      )
      .catch(() => {
        setLoading(false);
      });
  }, []);

  // =========================================================
  // DELETE BOOKMARK
  // =========================================================

  const deleteBookmark = async (chapterId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/bookmarks/${chapterId}`);

      setBookmarks((previous) =>
        previous.filter((bookmark) => bookmark.id !== chapterId),
      );

      setMessage(true);

      setTimeout(() => {
        setMessage(false);
      }, 2500);
    } catch (error) {
      console.log("Failed to delete bookmark");
    }
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="space-y-7 pb-10">
      {/* =================================================
          TOAST
      ================================================= */}

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.95 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white shadow-[8px_8px_25px_rgba(180,190,205,0.35)] text-sm font-medium text-neutral-700"
          >
            <BookmarkX size={16} className="text-red-500" />
            Removed from bookmarks
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="relative overflow-hidden rounded-[30px] bg-[var(--TextColor)] text-white p-6 md:p-8 shadow-[8px_8px_25px_rgba(0,143,226,0.2)]">
        {/* Decorative shapes */}

        <div className="absolute -right-20 -top-24 w-64 h-64 rounded-full bg-white opacity-[0.07]" />

        <div className="absolute -left-20 -bottom-28 w-60 h-60 rounded-full bg-white opacity-[0.05]" />

        <div className="relative">
          <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-[0.18em] font-semibold">
            <Bookmark size={15} />
            Your Library
          </div>

          <div className="flex items-end justify-between gap-5 mt-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Bookmarks
              </h1>

              <p className="text-white/70 text-sm mt-2 max-w-md">
                Keep the chapters that matter most close at hand.
              </p>
            </div>

            <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center">
              <Bookmark size={25} />
            </div>
          </div>

          {/* Counter */}

          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-2xl bg-white/10 text-xs text-white/80">
            <BookOpen size={14} />
            {bookmarks.length}{" "}
            {bookmarks.length === 1 ? "chapter saved" : "chapters saved"}
          </div>
        </div>
      </section>

      {/* =================================================
          EMPTY STATE
      ================================================= */}

      {bookmarks.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="clay-soft py-16 px-6 text-center"
        >
          <div className="mx-auto w-16 h-16 rounded-[22px] bg-white flex items-center justify-center text-[var(--TextColor)] shadow-[5px_5px_15px_rgba(180,190,205,0.2)]">
            <Bookmark size={26} />
          </div>

          <h2 className="text-xl font-bold mt-5">No bookmarks yet</h2>

          <p className="text-sm text-neutral-400 max-w-sm mx-auto mt-2 leading-relaxed">
            When you find a chapter you want to revisit, bookmark it and it'll
            appear here.
          </p>

          <Link
            to="/content/read"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-2xl bg-[var(--TextColor)] text-white text-sm font-semibold shadow-[5px_5px_12px_rgba(0,143,226,0.18)] hover:-translate-y-0.5 transition-all"
          >
            <BookOpen size={16} />
            Explore Chapters
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      ) : (
        /* =================================================
            BOOKMARK LIST
        ================================================= */

        <section>
          <div className="flex items-center justify-between mb-4 mt-16">
            <div>
              <h2 className="text-lg font-bold">Saved chapters</h2>

              <p className="text-xs text-neutral-400 mt-1">
                Your personal reading queue.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-neutral-200 bg-white text-xs font-semibold text-neutral-500">
              <Bookmark size={13} className="text-[var(--TextColor)]" />

              {bookmarks.length}
            </div>
          </div>

          <div className="grid gap-4">
            <AnimatePresence>
              {bookmarks.map((bookmark, index) => (
                <motion.article
                  key={bookmark.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="clay-soft p-5 group"
                >
                  {/* Top progress accent */}

                  <div className="h-1 w-20 ml-auto rounded-full bg-[var(--TextColor)]/20 mb-5 group-hover:w-40 transition-all" />

                  <div className="flex items-start gap-4">
                    {/* Number */}

                    <div className="shrink-0 w-11 h-11 rounded-2xl bg-[var(--TextColor)]/10 text-[var(--TextColor)] flex items-center justify-center font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}

                    <div className="min-w-0 flex-1">
                      <Link
                        to={`/content/read/${bookmark.id}`}
                        className="block group/title"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Bookmark
                            size={13}
                            className="text-[var(--TextColor)]"
                          />

                          <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                            Saved chapter
                          </span>
                        </div>

                        <h3 className="text-base md:text-lg font-bold text-neutral-800 group-hover/title:text-[var(--TextColor)] transition-colors">
                          {bookmark.title}
                        </h3>

                        {bookmark.description && (
                          <p className="mt-2 text-sm leading-relaxed text-neutral-400 max-w-2xl">
                            {bookmark.description.slice(0, 150)}

                            {bookmark.description.length > 150 ? "..." : ""}
                          </p>
                        )}
                      </Link>

                      {/* Actions */}

                      <div className="flex items-center gap-3 mt-4">
                        <Link
                          to={`/content/read/${bookmark.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--TextColor)] hover:gap-2.5 transition-all"
                        >
                          Continue reading
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>

                    {/* Delete */}

                    <button
                      onClick={() => deleteBookmark(bookmark.id)}
                      title="Remove bookmark"
                      className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-neutral-300 hover:text-red-500 hover:bg-red-50 transition-all cursor-pointer"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>

                  {/* Bottom progress accent */}

                  <div className="h-1 w-10 rounded-full bg-[var(--TextColor)]/20 mt-5 group-hover:w-20 transition-all" />
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* =================================================
          BOTTOM TIP
      ================================================= */}

      {bookmarks.length > 0 && (
        <div className="flex justify-center pt-2">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Sparkles size={13} className="text-[var(--TextColor)]" />
            Keep the ideas that inspire you.
          </div>
        </div>
      )}
    </div>
  );
};

export default BookMarkContainer;
