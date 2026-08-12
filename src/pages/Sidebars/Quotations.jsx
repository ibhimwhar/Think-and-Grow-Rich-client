// pages/Sidebars/Quotations.jsx

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Clipboard,
  Check,
  Sparkles,
  Quote,
  Shuffle,
  Share2,
  X,
} from "lucide-react";

import Image from "../../assets/41c1be30-bb0a-40a2-8ba2-306cbac25746.jpg";

// =========================================================
// QUOTES
// =========================================================

import { quotes } from "../Sidebars/quotes";

const Quotations = () => {
  const [message, setMessage] = useState(false);
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  // =========================================================
  // SEARCH
  // =========================================================

  const filteredQuotes = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return quotes;

    return quotes.filter(
      (quote) =>
        quote.description.toLowerCase().includes(query) ||
        quote.category.toLowerCase().includes(query),
    );
  }, [search]);

  // =========================================================
  // COPY QUOTE
  // =========================================================

  const handleCopy = async (quote) => {
    try {
      await navigator.clipboard.writeText(
        `"${quote.description}" — Napoleon Hill`,
      );

      setCopiedId(quote.id);

      setMessage("Quote copied to clipboard");

      setTimeout(() => {
        setCopiedId(null);
        setMessage(false);
      }, 2500);
    } catch (error) {
      setMessage("Failed to copy quote");

      setTimeout(() => {
        setMessage(false);
      }, 2500);
    }
  };

  // =========================================================
  // SHARE QUOTE
  // =========================================================

  const handleShare = async (quote) => {
    const shareData = {
      title: "Think & Grow Rich",
      text: `"${quote.description}" — Napoleon Hill`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          `"${quote.description}" — Napoleon Hill`,
        );

        setMessage("Quote copied for sharing");

        setTimeout(() => {
          setMessage(false);
        }, 2500);
      }
    } catch (error) {
      // User cancelled share dialog.
      console.log("Share cancelled.");
    }
  };

  // =========================================================
  // RANDOM QUOTE
  // =========================================================

  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    const quote = quotes[randomIndex];

    document.getElementById(`quote-${quote.id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="space-y-8 pb-8">
      {/* =================================================
          TOAST
      ================================================= */}

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.95 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-neutral-700 shadow-[8px_8px_25px_rgba(180,190,205,0.35)] border border-neutral-200 text-sm font-medium"
          >
            <Check size={17} className="text-green-500" />

            {message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="relative overflow-hidden rounded-[30px] bg-[var(--TextColor)] text-white p-6 md:p-8">
        {/* Decorative circle */}

        <div className="absolute -right-20 -top-24 w-64 h-64 rounded-full bg-white opacity-[0.07]" />

        <div className="absolute -left-20 -bottom-32 w-56 h-56 rounded-full bg-white opacity-[0.05]" />

        <div className="relative">
          <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-[0.18em] font-semibold">
            <Quote size={15} />
            Wisdom Library
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Quotes worth remembering.
          </h1>

          <p className="text-sm md:text-base text-white/70 mt-3 max-w-xl leading-relaxed">
            A small collection of ideas from
            <span className="font-semibold text-white">
              {" "}
              Think & Grow Rich
            </span>{" "}
            designed to give you something meaningful to come back to.
          </p>

          {/* Stats */}

          <div className="flex flex-wrap gap-3 mt-6">
            <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm text-xs text-white/80">
              <span className="font-bold text-white">{quotes.length}</span>{" "}
              Quotes
            </div>

            <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm text-xs text-white/80">
              3 Ideas
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          BOOK IMAGE
      ================================================= */}

      <div className="flex justify-center">
        <div className="p-2 max-w-[210px] w-full">
          <img
            src={Image}
            alt="Think and Grow Rich book"
            className="w-full rounded-[22px] object-cover"
          />
        </div>
      </div>

      {/* =================================================
          SEARCH + RANDOM
      ================================================= */}

      <section className="space-y-3">
        <div className="flex gap-3 items-center">
          {/* Search */}
          <div className="flex-1 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-neutral-200 focus-within:ring-2 focus-within:ring-[var(--TextColor)] transition-all">
            <Search size={18} className="text-neutral-400 shrink-0" />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search quotes..."
              className="outline-none bg-transparent w-full text-sm text-neutral-700 placeholder:text-neutral-400"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-neutral-400 hover:text-neutral-700 transition cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Random */}

          <button
            onClick={handleRandomQuote}
            title="Random quote"
            className="shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[var(--TextColor)] border border-neutral-200 hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer"
          >
            <Shuffle size={19} />
          </button>
        </div>

        <div className="flex justify-between items-center px-1">
          <p className="text-xs text-neutral-400">
            {filteredQuotes.length}{" "}
            {filteredQuotes.length === 1 ? "quote" : "quotes"} found
          </p>

          {search && (
            <p className="text-xs text-[var(--TextColor)]">
              Searching for "{search}"
            </p>
          )}
        </div>
      </section>

      {/* =================================================
          FEATURED QUOTE
      ================================================= */}

      {!search && (
        <section className="border border-neutral-200 rounded-3xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-[var(--TextColor)]/5" />

          <div className="relative flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-2xl bg-[var(--TextColor)]/10 text-[var(--TextColor)] flex items-center justify-center">
              <Sparkles size={20} />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--TextColor)] font-bold">
                Featured thought
              </p>

              <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed text-neutral-800 mt-3">
                "{quotes[0].description}"
              </blockquote>

              <p className="text-xs text-neutral-400 mt-4">— Napoleon Hill</p>
            </div>
          </div>
        </section>
      )}

      {/* =================================================
          QUOTES
      ================================================= */}

      <section className="space-y-4">
        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((quote, index) => (
            <motion.article
              key={quote.id}
              id={`quote-${quote.id}`}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: index * 0.05,
              }}
              className="clay-soft p-5 md:p-6 group"
            >
              {/* Top row */}

              <div className="flex justify-between items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--TextColor)]/8 text-[var(--TextColor)] text-[10px] uppercase tracking-wider font-bold">
                  <Sparkles size={12} />

                  {quote.category}
                </div>

                <span className="text-xs text-neutral-300 font-semibold">
                  #{String(quote.id).padStart(2, "0")}
                </span>
              </div>

              {/* Quote */}

              <div className="relative">
                <Quote
                  size={30}
                  className="absolute -top-1 -left-1 text-[var(--TextColor)]/10"
                />

                <p className="relative pl-7 text-base md:text-lg leading-relaxed text-neutral-700 font-medium">
                  {quote.description}
                </p>
              </div>

              {/* Bottom */}

              <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-neutral-200/60">
                <p className="text-xs text-neutral-400">Napoleon Hill</p>

                <div className="flex gap-2">
                  {/* Copy */}

                  <button
                    onClick={() => handleCopy(quote)}
                    title="Copy quote"
                    className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-neutral-500 hover:text-[var(--TextColor)] hover:-translate-y-0.5 border border-neutral-200 transition-all cursor-pointer"
                  >
                    {copiedId === quote.id ? (
                      <Check size={16} className="text-green-500" />
                    ) : (
                      <Clipboard size={16} />
                    )}
                  </button>

                  {/* Share */}

                  <button
                    onClick={() => handleShare(quote)}
                    title="Share quote"
                    className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-neutral-500 hover:text-[var(--TextColor)] hover:-translate-y-0.5 border border-neutral-200 transition-all cursor-pointer"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="clay-soft text-center py-12 px-6"
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-neutral-400 shadow-[4px_4px_12px_rgba(180,190,205,0.2)]">
              <Search size={22} />
            </div>

            <h3 className="font-bold text-lg mt-4">No quotes found</h3>

            <p className="text-sm text-neutral-400 mt-2">
              Try searching for another word or idea.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-5 px-5 py-2.5 rounded-xl bg-[var(--TextColor)] text-white text-sm font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </section>

      {/* =================================================
          FOOTER TIP
      ================================================= */}

      <section className="text-center py-4">
        <div className="inline-flex items-center gap-2 text-xs text-neutral-400">
          <Sparkles size={13} className="text-[var(--TextColor)]" />
          Save the ideas that speak to you.
        </div>
      </section>
    </div>
  );
};

export default Quotations;
