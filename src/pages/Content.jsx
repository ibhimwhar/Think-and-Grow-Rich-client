// pages/Content.jsx
import {
  ArrowRight,
  BookOpenCheck,
  Bookmark,
  BookmarkPlus,
  CodeXml,
  FileText,
  NotebookPen,
  Quote,
  Share2,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Content = () => {
  const [message, setMessage] = useState(false);

  // =========================================================
  // Dashboard cards
  // =========================================================

  const cards = [
    {
      title: "Read the Book",
      description:
        "Explore every chapter and move through the book at your own pace.",
      icon: <BookOpenCheck size={23} />,
      href: "/content/read",
      color: "blue",
      featured: true,
    },
    {
      title: "Bookmarks",
      description:
        "Keep track of chapters and ideas you want to revisit later.",
      icon: <BookmarkPlus size={23} />,
      href: "/content/book-mark",
      color: "amber",
    },
    {
      title: "My Notes",
      description: "Write down thoughts, lessons, and ideas while you read.",
      icon: <NotebookPen size={23} />,
      href: "/content/notes",
      color: "purple",
    },
    {
      title: "Quotes",
      description: "Explore memorable ideas and quotes from the book.",
      icon: <Quote size={23} />,
      href: "/quotations",
      color: "rose",
    },
    {
      title: "Book Summary",
      description: "Get a quick overview of the major ideas and principles.",
      icon: <FileText size={23} />,
      href: "/summary",
      color: "green",
    },
    {
      title: "Watch",
      description: "Learn through a visual breakdown of Think & Grow Rich.",
      icon: <Sparkles size={23} />,
      href: "/video",
      color: "orange",
    },
    {
      title: "Developer",
      description: "See who built this reading experience and how it works.",
      icon: <CodeXml size={23} />,
      href: "/developer",
      color: "indigo",
    },
    {
      title: "Share",
      description: "Share this reading experience with someone else.",
      icon: <Share2 size={23} />,
      color: "teal",

      onClick: async () => {
        try {
          if (navigator.share) {
            await navigator.share({
              title: "Think & Grow Rich",
              text: "Check out this Think & Grow Rich reading experience.",
              url: window.location.origin,
            });
          } else {
            await navigator.clipboard.writeText(window.location.origin);

            setMessage(true);

            setTimeout(() => {
              setMessage(false);
            }, 3000);
          }
        } catch (error) {
          console.log("Share cancelled.");
        }
      },
    },
  ];

  // =========================================================
  // Icon color helpers
  // =========================================================

  const iconColors = {
    blue: "bg-blue-50 text-blue-500",
    amber: "bg-amber-50 text-amber-500",
    purple: "bg-purple-50 text-purple-500",
    rose: "bg-rose-50 text-rose-500",
    green: "bg-green-50 text-green-500",
    orange: "bg-orange-50 text-orange-500",
    indigo: "bg-indigo-50 text-indigo-500",
    teal: "bg-teal-50 text-teal-500",
  };

  return (
    <div className="space-y-8">
      {/* =================================================
          Toast
      ================================================= */}

      <AnimatePresence>
        {message && (
          <motion.div
            role="alert"
            initial={{ y: -80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -80, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-white text-[var(--TextColor)] border border-neutral-200 shadow-[8px_8px_20px_rgba(180,190,205,0.3),-6px_-6px_15px_white] text-sm font-semibold"
          >
            Link copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          Header
      ================================================= */}

      <section>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-[var(--TextColor)] flex items-center justify-center">
            <BookOpenCheck size={19} />
          </div>

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--TextColor)]">
            Reading Hub
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Your journey starts here.
        </h1>

        <p className="mt-2 text-neutral-500 max-w-2xl leading-relaxed">
          Read, save, reflect, and explore the ideas inside
          <span className="font-semibold text-neutral-700">
            {" "}
            Think & Grow Rich.
          </span>
        </p>
      </section>

      {/* =================================================
          Featured Reading Card
      ================================================= */}

      <Link to="/content/read" className="block group my-16">
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="relative overflow-hidden rounded-[28px] bg-[var(--TextColor)] text-white p-6 md:p-8 shadow-[8px_8px_25px_rgba(0,143,226,0.22)]"
        >
          {/* Decorative circles */}

          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white opacity-[0.08]" />

          <div className="absolute right-20 -bottom-28 w-48 h-48 rounded-full bg-white opacity-[0.05]" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest">
                <BookOpenCheck size={15} />
                Start here
              </div>

              <h2 className="text-2xl md:text-3xl font-bold">
                Continue your reading journey.
              </h2>

              <p className="text-white/70 max-w-xl text-sm md:text-base">
                Dive into the chapters and discover the principles behind one of
                the most influential personal-development books.
              </p>
            </div>

            <div className="shrink-0 w-12 h-12 rounded-2xl bg-white text-[var(--TextColor)] flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight size={21} />
            </div>
          </div>
        </motion.div>
      </Link>

      {/* =================================================
          Section Label
      ================================================= */}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Explore</h2>

          <p className="text-sm text-neutral-400 mt-1">
            Everything you need to get more from the book.
          </p>
        </div>
      </div>

      {/* =================================================
          Dashboard Grid
      ================================================= */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((item, index) => {
          const CardContent = (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative h-full border rounded-4xl border-neutral-200 p-5 overflow-hidden"
            >
              {/* Number */}

              <span className="absolute top-4 right-5 text-xs font-semibold text-neutral-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}

              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${iconColors[item.color]}`}
              >
                {item.icon}
              </div>

              {/* Content */}

              <div className="space-y-2">
                <h3 className="font-bold text-lg text-neutral-800">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}

              <div className="flex justify-end mt-5">
                <div className="w-9 h-9 rounded-xl bg-neutral-50 text-neutral-400 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-50 group-hover:text-[var(--TextColor)]">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          );

          if (item.href) {
            return (
              <Link key={item.title} to={item.href} className="h-full">
                {CardContent}
              </Link>
            );
          }

          return (
            <button
              key={item.title}
              onClick={item.onClick}
              className="text-left w-full h-full cursor-pointer"
            >
              {CardContent}
            </button>
          );
        })}
      </div>

      {/* =================================================
          Quick Tip
      ================================================= */}

      <section className="clay-soft p-5 md:p-6 flex gap-4 items-start">
        <div className="shrink-0 w-11 h-11 rounded-2xl bg-white text-[var(--TextColor)] flex items-center justify-center">
          <Sparkles size={19} />
        </div>

        <div>
          <p className="font-semibold text-neutral-800">Reading tip</p>

          <p className="text-sm text-neutral-500 leading-relaxed mt-1">
            Don't just read the principles. Write down the ideas that stand out
            to you and think about how you could apply them.
          </p>
        </div>
      </section>

      {/* =================================================
          Footer CTA
      ================================================= */}

      <div className="text-center pt-2 pb-3">
        <p className="text-xs text-neutral-400">
          Take your time. Learn something. Apply it.
        </p>
      </div>
    </div>
  );
};

export default Content;
