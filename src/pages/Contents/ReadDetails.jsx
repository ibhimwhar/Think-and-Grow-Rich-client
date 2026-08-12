// pages/Contents/ReadDetails.jsx

import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Copy,
  List,
  Maximize2,
  Share2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../../components/Loading";

const ReadDetails = () => {
  const { id } = useParams();

  const [chapter, setChapter] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [showContents, setShowContents] = useState(false);

  // =========================================================
  // FETCH CHAPTER
  // =========================================================

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [chapterResponse, chaptersResponse, bookmarksResponse] =
          await Promise.all([
            axios.get(`${import.meta.env.VITE_API_URL}/chapters/${id}`),
            axios.get(`${import.meta.env.VITE_API_URL}/chapters`),
            axios.get(`${import.meta.env.VITE_API_URL}/bookmarks`),
          ]);

        setChapter(chapterResponse.data);
        setChapters(chaptersResponse.data);
        setBookmarks(bookmarksResponse.data);
      } catch (error) {
        console.error("Failed to load chapter:", error);

        setChapter(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // =========================================================
  // FIND CHAPTER POSITION
  // =========================================================

  const currentIndex = chapters.findIndex(
    (item) => String(item.id) === String(id),
  );

  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;

  const nextChapter =
    currentIndex >= 0 && currentIndex < chapters.length - 1
      ? chapters[currentIndex + 1]
      : null;

  // =========================================================
  // BOOKMARK STATUS
  // =========================================================

  const isBookmarked = chapter
    ? bookmarks.some((bookmark) => String(bookmark.id) === String(chapter.id))
    : false;

  // =========================================================
  // BOOKMARK
  // =========================================================

  const handleBookmark = async () => {
    if (!chapter || isBookmarked) return;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/bookmarks/${chapter.id}`,
      );

      setBookmarks((previous) => [...previous, response.data]);

      showMessage("Chapter saved to bookmarks");
    } catch (error) {
      console.error("Failed to bookmark chapter:", error);
    }
  };

  // =========================================================
  // COPY
  // =========================================================

  const handleCopy = async () => {
    if (!chapter) return;

    const text = `${chapter.title}\n\n${chapter.description || ""}`;

    try {
      await navigator.clipboard.writeText(text);

      showMessage("Chapter copied to clipboard");
    } catch (error) {
      console.error("Failed to copy chapter:", error);
    }
  };

  // =========================================================
  // SHARE
  // =========================================================

  const handleShare = async () => {
    if (!chapter) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: chapter.title,
          text: "Read this chapter from Think & Grow Rich.",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);

        showMessage("Link copied to clipboard");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Sharing failed:", error);
      }
    }
  };

  // =========================================================
  // MESSAGE
  // =========================================================

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage(null);
    }, 2500);
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return <Loading />;
  }

  // =========================================================
  // NOT FOUND
  // =========================================================

  if (!chapter) {
    return (
      <div className="clay-soft p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-[22px] bg-white flex items-center justify-center text-neutral-300">
          <BookOpen size={26} />
        </div>

        <h1 className="mt-5 text-2xl font-bold">Chapter not found</h1>

        <p className="text-sm text-neutral-400 mt-2">
          This chapter may have been removed or does not exist.
        </p>

        <Link
          to="/content/read"
          className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-2xl bg-[var(--TextColor)] text-white text-sm font-semibold hover:-translate-y-0.5 transition-all"
        >
          <ArrowLeft size={16} />
          Back to chapters
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-12">
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
            <Check size={17} className="text-[var(--TextColor)]" />

            {message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          TOP NAV
      ================================================= */}

      <div className="flex items-center justify-between gap-3 mb-6">
        <Link
          to="/content/read"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[var(--TextColor)] transition-colors"
        >
          <ArrowLeft size={17} />
          All chapters
        </Link>

        <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
          <BookOpen size={14} />
          Chapter {currentIndex + 1} of {chapters.length}
        </div>
      </div>

      {/* =================================================
          CHAPTER HEADER
      ================================================= */}

      <header className="relative overflow-hidden rounded-[32px] bg-[var(--TextColor)] text-white p-6 md:p-10 shadow-[8px_8px_25px_rgba(0,143,226,0.18)]">
        {/* Decorative circles */}

        <div className="absolute -right-20 -top-24 w-72 h-72 rounded-full bg-white opacity-[0.06]" />

        <div className="absolute -left-20 -bottom-32 w-72 h-72 rounded-full bg-white opacity-[0.05]" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-[10px] uppercase tracking-[0.16em] font-bold">
              Chapter {currentIndex + 1}
            </span>

            <span className="px-3 py-1.5 rounded-full bg-white/10 text-[10px] flex items-center gap-1.5">
              <Clock3 size={12} />
              Reading
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight max-w-3xl">
            {chapter.title}
          </h1>

          {chapter.description && (
            <p className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-white/70">
              {chapter.description}
            </p>
          )}

          {/* Action buttons */}

          <div className="flex flex-wrap gap-2 mt-7">
            <button
              onClick={handleBookmark}
              disabled={isBookmarked}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white text-[var(--TextColor)] text-sm font-semibold hover:-translate-y-0.5 transition-all cursor-pointer disabled:cursor-default"
            >
              {isBookmarked ? (
                <BookmarkCheck size={16} />
              ) : (
                <Bookmark size={16} />
              )}

              {isBookmarked ? "Saved" : "Save chapter"}
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all cursor-pointer"
            >
              <Copy size={16} />
              Copy
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all cursor-pointer"
            >
              <Share2 size={16} />
              Share
            </button>
          </div>
        </div>
      </header>

      {/* =================================================
          READING TOOLBAR
      ================================================= */}

      <div className="flex items-center justify-between gap-3 my-6">
        <button
          onClick={() => setShowContents((previous) => !previous)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white text-neutral-600 text-xs font-semibold shadow-[5px_5px_15px_rgba(180,190,205,0.18)] hover:text-[var(--TextColor)] transition-colors cursor-pointer"
        >
          <List size={16} />
          Contents
        </button>

        <div className="hidden md:flex items-center gap-2 text-xs text-neutral-400">
          <Sparkles size={14} className="text-[var(--TextColor)]" />
          Take your time. Read deeply.
        </div>
      </div>

      {/* =================================================
          CONTENTS DROPDOWN
      ================================================= */}

      <AnimatePresence>
        {showContents && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -5 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -5 }}
            className="overflow-hidden mb-6"
          >
            <div className="clay-soft p-4 max-h-72 overflow-y-auto">
              <div className="grid gap-1">
                {chapters.map((item, index) => (
                  <Link
                    key={item.id}
                    to={`/content/read/${item.id}`}
                    onClick={() => setShowContents(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-sm transition-all ${
                      String(item.id) === String(id)
                        ? "bg-[var(--TextColor)]/10 text-[var(--TextColor)] font-semibold"
                        : "text-neutral-500 hover:bg-white hover:text-neutral-800"
                    }`}
                  >
                    <span className="text-[10px] font-bold text-neutral-400 w-5">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="truncate">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          MAIN READING AREA
      ================================================= */}

      <article className="clay-soft p-6 md:p-10 lg:p-12">
        <div className="max-w-2xl mx-auto">
          {/* Reading label */}

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--TextColor)] mb-8">
            <span className="w-7 h-px bg-[var(--TextColor)]" />
            Begin reading
          </div>

          {/* Main text */}

          <div className="text-neutral-700 leading-[1.9] text-[15px] md:text-[17px] space-y-6">
            {chapter.content ? (
              chapter.content
                .split("\n")
                .filter((paragraph) => paragraph.trim())
                .map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4 }}
                    className="first-letter:text-4xl first-letter:font-bold first-letter:text-[var(--TextColor)] first-letter:mr-1"
                  >
                    {paragraph}
                  </motion.p>
                ))
            ) : (
              <p className="text-neutral-500">
                No chapter content is available yet.
              </p>
            )}
          </div>

          {/* Reading end */}

          <div className="flex items-center gap-3 mt-12 text-neutral-300">
            <span className="h-px bg-neutral-200 flex-1" />

            <Sparkles size={16} />

            <span className="h-px bg-neutral-200 flex-1" />
          </div>
        </div>
      </article>

      {/* =================================================
          CHAPTER NAVIGATION
      ================================================= */}

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {/* Previous */}

        {previousChapter ? (
          <Link
            to={`/content/read/${previousChapter.id}`}
            className="clay-soft p-5 group hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
              <ChevronLeft size={15} />
              Previous chapter
            </div>

            <h3 className="font-bold text-sm text-neutral-700 line-clamp-2 group-hover:text-[var(--TextColor)] transition-colors">
              {previousChapter.title}
            </h3>
          </Link>
        ) : (
          <div className="hidden md:block clay-soft opacity-40" />
        )}

        {/* Next */}

        {nextChapter ? (
          <Link
            to={`/content/read/${nextChapter.id}`}
            className="clay-soft p-5 group text-right hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center justify-end gap-2 text-xs text-neutral-400 mb-3">
              Next chapter
              <ChevronRight size={15} />
            </div>

            <h3 className="font-bold text-sm text-neutral-700 line-clamp-2 group-hover:text-[var(--TextColor)] transition-colors">
              {nextChapter.title}
            </h3>
          </Link>
        ) : (
          <div className="clay-soft p-5 text-center">
            <Sparkles size={18} className="mx-auto text-[var(--TextColor)]" />

            <p className="text-sm font-semibold mt-2">
              You've reached the end.
            </p>

            <Link
              to="/content/read"
              className="inline-flex items-center gap-1.5 mt-2 text-xs text-[var(--TextColor)] font-semibold"
            >
              Back to chapters
              <ArrowRight size={13} />
            </Link>
          </div>
        )}
      </div>

      {/* =================================================
          FOOTER TIP
      ================================================= */}

      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <BookOpen size={13} />
          Chapter {currentIndex + 1}
          <span>•</span>
          Think deeply about what you read.
        </div>
      </div>
    </div>
  );
};

export default ReadDetails;
