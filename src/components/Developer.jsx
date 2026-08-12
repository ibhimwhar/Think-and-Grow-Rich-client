// components/Developer.jsx

import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Github,
  Heart,
  Instagram,
  Layers3,
  Sparkles,
  Twitter,
  UserRound,
} from "lucide-react";

import { motion } from "framer-motion";

const Developer = () => {
  return (
    <div className="space-y-8 pb-10">
      {/* =================================================
          HERO
      ================================================= */}

      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[32px] bg-[var(--TextColor)] text-white p-7 md:p-10"
      >
        {/* Decorative shapes */}

        <div className="absolute -right-20 -top-24 w-72 h-72 rounded-full bg-white opacity-[0.06]" />

        <div className="absolute -left-20 -bottom-32 w-80 h-80 rounded-full bg-white opacity-[0.05]" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest">
            <Sparkles size={13} />
            Built with curiosity
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-5">
            Behind the App
          </h1>

          <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
            A small reading experience built to make exploring ideas, taking
            notes, and saving meaningful chapters feel simple and enjoyable.
          </p>
        </div>
      </motion.section>

      {/* =================================================
          DEVELOPER CARD
      ================================================= */}

      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="clay-soft p-6 md:p-8"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          {/* Avatar */}

          <div className="shrink-0 w-20 h-20 rounded-[26px] bg-[var(--TextColor)]/10 text-[var(--TextColor)] flex items-center justify-center shadow-[5px_5px_15px_rgba(180,190,205,0.18)]">
            <UserRound size={34} />
          </div>

          <div className="text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-semibold text-[var(--TextColor)]">
              Developer
            </p>

            <h2 className="text-2xl font-bold mt-1 text-neutral-800">
              Ibhimwhar
            </h2>

            <p className="text-sm text-neutral-500 mt-2 leading-relaxed max-w-lg">
              A developer interested in building modern web experiences,
              experimenting with technology, and turning ideas into real
              projects.
            </p>
          </div>
        </div>
      </motion.section>

      {/* =================================================
          ABOUT THE PROJECT
      ================================================= */}

      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid md:grid-cols-2 gap-4"
      >
        <div className="clay-soft p-6">
          <div className="w-11 h-11 rounded-2xl bg-[var(--TextColor)]/10 text-[var(--TextColor)] flex items-center justify-center">
            <Code2 size={21} />
          </div>

          <h3 className="text-lg font-bold mt-5">Why I built this</h3>

          <p className="text-sm text-neutral-500 leading-relaxed mt-2">
            This project started as a way to turn a classic book into a more
            interactive reading experience while practicing modern frontend
            development.
          </p>
        </div>

        <div className="clay-soft p-6">
          <div className="w-11 h-11 rounded-2xl bg-[var(--TextColor)]/10 text-[var(--TextColor)] flex items-center justify-center">
            <Layers3 size={21} />
          </div>

          <h3 className="text-lg font-bold mt-5">What it includes</h3>

          <p className="text-sm text-neutral-500 leading-relaxed mt-2">
            Reading chapters, bookmarks, notes, quotations, themes, summaries,
            and additional resources are all brought together in one place.
          </p>
        </div>
      </motion.section>

      {/* =================================================
          TECH STACK
      ================================================= */}

      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="clay-soft p-6 md:p-8"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-[var(--TextColor)]">
              Under the hood
            </p>

            <h2 className="text-2xl font-bold mt-1">Built with modern tools</h2>
          </div>

          <Code2 size={22} className="text-[var(--TextColor)]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {["React", "Tailwind CSS", "Framer Motion", "Axios"].map(
            (technology) => (
              <div
                key={technology}
                className="px-4 py-4 rounded-2xl bg-white text-center text-sm font-semibold text-neutral-600 border border-neutral-200 hover:-translate-y-1 transition-transform"
              >
                {technology}
              </div>
            ),
          )}
        </div>
      </motion.section>

      {/* =================================================
          LINKS
      ================================================= */}

      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="grid sm:grid-cols-2 gap-4"
      >
        <a
          href="https://github.com/ibhimwhar"
          target="_blank"
          rel="noopener noreferrer"
          className="clay-soft p-5 flex items-center justify-between group hover:-translate-y-1 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-neutral-900 text-white flex items-center justify-center">
              <Github size={20} />
            </div>

            <div>
              <p className="font-bold text-sm">GitHub</p>

              <p className="text-xs text-neutral-400 mt-1">Explore the code</p>
            </div>
          </div>

          <ArrowUpRight
            size={18}
            className="text-neutral-300 group-hover:text-[var(--TextColor)] transition-colors"
          />
        </a>

        <div className="clay-soft p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-400 flex items-center justify-center">
              <Heart size={20} />
            </div>

            <div>
              <p className="font-bold text-sm">Thanks for visiting</p>

              <p className="text-xs text-neutral-400 mt-1">
                Keep learning & building
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://www.instagram.com/ibhimwhar"
          target="_blank"
          rel="noopener noreferrer"
          className="clay-soft p-5 flex items-center justify-between group hover:-translate-y-1 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FFD600] via-[#FF0069] to-[#7638FA] text-white flex items-center justify-center">
              <Instagram size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">Instagram</p>

              <p className="text-xs text-neutral-400 mt-1">Explore the code</p>
            </div>
          </div>

          <ArrowUpRight
            size={18}
            className="text-neutral-300 group-hover:text-[var(--TextColor)] transition-colors"
          />
        </a>
        <a
          href="https://x.com/ibhimwhar"
          target="_blank"
          rel="noopener noreferrer"
          className="clay-soft p-5 flex items-center justify-between group hover:-translate-y-1 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-sky-500 text-white flex items-center justify-center">
              <Twitter size={20} />
            </div>

            <div>
              <p className="font-bold text-sm">X/Twitter</p>

              <p className="text-xs text-neutral-400 mt-1">Explore the code</p>
            </div>
          </div>

          <ArrowUpRight
            size={18}
            className="text-neutral-300 group-hover:text-[var(--TextColor)] transition-colors"
          />
        </a>
      </motion.section>

      {/* =================================================
          BACK BUTTON
      ================================================= */}

      <div className="flex justify-center pt-2">
        <Link
          to="/content"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-neutral-600 text-sm font-semibold border border-neutral-200 hover:-translate-y-0.5 hover:text-[var(--TextColor)] transition-all"
        >
          <ArrowLeft size={16} />
          Back to Content
        </Link>
      </div>
    </div>
  );
};

export default Developer;
