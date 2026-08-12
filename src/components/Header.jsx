// components/Header.jsx

import { Link, useLocation } from "react-router";
import {
  BookOpen,
  Bookmark,
  ChevronDown,
  Menu,
  NotebookPen,
  Palette,
  Quote,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  return (
    <>
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="sticky top-0 z-40 px-6 md:px-10 pt-6">
        <nav className="max-w-6xl mx-auto h-16 px-4 md:px-5 rounded-[24px] bg-white/90 backdrop-blur-xl border border-neutral-200 flex items-center justify-between">
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-[14px] bg-[var(--TextColor)] text-white flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
              <BookOpen size={20} strokeWidth={2.2} />

              <Sparkles
                size={9}
                className="absolute top-1 right-1 opacity-80"
              />
            </div>

            <div className="hidden sm:block">
              <p className="font-black text-neutral-800 text-sm leading-none">
                Think & Grow Rich
              </p>

              <p className="text-[9px] uppercase tracking-[0.18em] text-neutral-400 mt-1">
                Reading App
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <div className="hidden md:flex items-center gap-1">
            <NavItem
              to="/"
              icon={<BookOpen size={16} />}
              label="Home"
              active={isActive("/")}
            />

            <NavItem
              to="/content/read"
              icon={<BookOpen size={16} />}
              label="Read"
              active={isActive("/content/read")}
            />

            <NavItem
              to="/content/book-mark"
              icon={<Bookmark size={16} />}
              label="Saved"
              active={isActive("/content/book-mark")}
            />

            <NavItem
              to="/content/notes"
              icon={<NotebookPen size={16} />}
              label="Notes"
              active={isActive("/content/notes")}
            />

            {/* More */}

            <div className="relative">
              <button
                onClick={() => setMoreOpen((previous) => !previous)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                  moreOpen
                    ? "bg-neutral-100 text-neutral-800"
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800"
                }`}
              >
                More
                <ChevronDown
                  size={14}
                  className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    className="absolute right-0 mt-3 top-12 w-52 p-2 rounded-[20px] bg-white border border-neutral-200"
                  >
                    <DropdownItem
                      to="/summary"
                      icon={<BookOpen size={16} />}
                      label="Summary"
                      close={closeMenu}
                    />

                    <DropdownItem
                      to="/quotations"
                      icon={<Quote size={16} />}
                      label="Quotes"
                      close={closeMenu}
                    />

                    <DropdownItem
                      to="/theme"
                      icon={<Palette size={16} />}
                      label="Customize"
                      close={closeMenu}
                    />

                    <DropdownItem
                      to="/video"
                      icon={<Search size={16} />}
                      label="Video"
                      close={closeMenu}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            onClick={() => setMenuOpen((previous) => !previous)}
            className="md:hidden w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-600 hover:text-[var(--TextColor)] hover:bg-[var(--TextColor)]/10 transition-all cursor-pointer"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* =================================================
            MOBILE NAV
        ================================================= */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden max-w-6xl mx-auto mt-2 p-3 rounded-[24px] bg-white/95 backdrop-blur-xl border border-neutral-200"
            >
              <MobileNavItem
                to="/"
                icon={<BookOpen size={18} />}
                label="Home"
                active={isActive("/")}
                close={closeMenu}
              />

              <MobileNavItem
                to="/content/read"
                icon={<BookOpen size={18} />}
                label="Read"
                active={isActive("/content/read")}
                close={closeMenu}
              />

              <MobileNavItem
                to="/content/book-mark"
                icon={<Bookmark size={18} />}
                label="Bookmarks"
                active={isActive("/content/book-mark")}
                close={closeMenu}
              />

              <MobileNavItem
                to="/content/notes"
                icon={<NotebookPen size={18} />}
                label="Notes"
                active={isActive("/content/notes")}
                close={closeMenu}
              />

              <div className="h-px bg-neutral-100 my-2" />

              <MobileNavItem
                to="/summary"
                icon={<BookOpen size={18} />}
                label="Summary"
                active={isActive("/summary")}
                close={closeMenu}
              />

              <MobileNavItem
                to="/quotations"
                icon={<Quote size={18} />}
                label="Quotes"
                active={isActive("/quotations")}
                close={closeMenu}
              />

              <MobileNavItem
                to="/theme"
                icon={<Palette size={18} />}
                label="Customize"
                active={isActive("/theme")}
                close={closeMenu}
              />

              <MobileNavItem
                to="/video"
                icon={<Search size={18} />}
                label="Video"
                active={isActive("/video")}
                close={closeMenu}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

/* =========================================================
   DESKTOP NAV ITEM
========================================================= */

const NavItem = ({ to, icon, label, active }) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
        active
          ? "bg-[var(--TextColor)]/10 text-[var(--TextColor)]"
          : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800"
      }`}
    >
      {icon}

      {label}
    </Link>
  );
};

/* =========================================================
   DROPDOWN ITEM
========================================================= */

const DropdownItem = ({ to, icon, label, close }) => {
  return (
    <Link
      to={to}
      onClick={close}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-neutral-600 hover:bg-[var(--TextColor)]/10 hover:text-[var(--TextColor)] transition-all"
    >
      {icon}

      {label}
    </Link>
  );
};

/* =========================================================
   MOBILE NAV ITEM
========================================================= */

const MobileNavItem = ({ to, icon, label, active, close }) => {
  return (
    <Link
      to={to}
      onClick={close}
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
        active
          ? "bg-[var(--TextColor)]/10 text-[var(--TextColor)]"
          : "text-neutral-600 hover:bg-neutral-50"
      }`}
    >
      <span
        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
          active
            ? "bg-[var(--TextColor)] text-white"
            : "bg-neutral-100 text-neutral-500"
        }`}
      >
        {icon}
      </span>

      {label}
    </Link>
  );
};

export default Header;
