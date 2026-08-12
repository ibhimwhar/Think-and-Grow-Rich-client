// components/Footer.jsx

import { Link } from "react-router";
import {
  ArrowUp,
  BookOpen,
  Github,
  Heart,
  Instagram,
  Sparkles,
  Twitter,
} from "lucide-react";

import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="px-3 md:px-5 pb-5 pt-10">
      <div className="max-w-6xl mx-auto overflow-hidden rounded-[30px] bg-white border border-neutral-200">
        {/* =================================================
            TOP SECTION
        ================================================= */}

        <div className="p-6 md:p-8 grid md:grid-cols-[1.5fr_1fr_1fr] gap-8">
          {/* BRAND */}

          <div>
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-[14px] bg-[var(--TextColor)] text-white flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
                <BookOpen size={20} strokeWidth={2.2} />

                <Sparkles
                  size={9}
                  className="absolute top-1 right-1 opacity-80"
                />
              </div>

              <div>
                <h2 className="font-black text-neutral-800 leading-none">
                  Think & Grow Rich
                </h2>

                <p className="text-[9px] uppercase tracking-[0.18em] text-neutral-400 mt-1">
                  Reading Experience
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm text-neutral-500 leading-relaxed max-w-sm">
              Explore the ideas, principles, and lessons inside one of the most
              influential personal-development books ever written.
            </p>

            <div className="flex items-center gap-2 mt-5 text-xs text-neutral-400">
              <Sparkles size={14} className="text-[var(--TextColor)]" />
              Read. Reflect. Grow.
            </div>
          </div>

          {/* EXPLORE */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-800">
              Explore
            </h3>

            <div className="flex flex-col items-start gap-3 mt-4">
              <FooterLink to="/" label="Home" />

              <FooterLink to="/content/read" label="Read" />

              <FooterLink to="/content/book-mark" label="Bookmarks" />

              <FooterLink to="/content/notes" label="Notes" />
            </div>
          </div>

          {/* DISCOVER */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-800">
              Discover
            </h3>

            <div className="flex flex-col items-start gap-3 mt-4">
              <FooterLink to="/summary" label="Summary" />

              <FooterLink to="/quotations" label="Quotes" />

              <FooterLink to="/video" label="Video" />

              <FooterLink to="/developer" label="Developer" />
            </div>
          </div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="mx-6 md:mx-8 h-px bg-neutral-100" />

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            © {new Date().getFullYear()} Think & Grow Rich. Built with{" "}
            <Heart
              size={11}
              className="inline mx-1 text-[var(--TextColor)] fill-[var(--TextColor)]"
            />{" "}
            and curiosity.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://x.com/ibhimwhar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="w-9 h-9 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-500 hover:bg-[var(--TextColor)]/10 hover:text-[var(--TextColor)] transition-all"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.instagram.com/ibhimwhar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-500 hover:bg-[var(--TextColor)]/10 hover:text-[var(--TextColor)] transition-all"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://github.com/ibhimwhar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-500 hover:bg-[var(--TextColor)]/10 hover:text-[var(--TextColor)] transition-all"
            >
              <Github size={16} />
            </a>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl bg-[var(--TextColor)] text-white flex items-center justify-center cursor-pointer"
            >
              <ArrowUp size={17} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* =========================================================
   FOOTER LINK
========================================================= */

const FooterLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="text-sm text-neutral-500 hover:text-[var(--TextColor)] hover:translate-x-1 transition-all"
    >
      {label}
    </Link>
  );
};

export default Footer;
