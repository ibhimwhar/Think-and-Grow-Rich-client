// pages/Sidebars/Theme.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Palette,
  Sparkles,
  Type,
  MousePointer2,
  Circle,
} from "lucide-react";

const Theme = () => {
  const [selectedTheme, setSelectedTheme] = useState("original");
  const [message, setMessage] = useState(null);
  const [text, setText] = useState("Enter something");

  // =========================================================
  // Theme colors
  // =========================================================

  const themeColors = {
    original: "#008fe2",
    red: "#ef4444",
    yellow: "#eab308",
    green: "#22c55e",
    purple: "#8b5cf6",
    pink: "#ec4899",
    orange: "#f97316",
    teal: "#14b8a6",
    indigo: "#6366f1",
    lime: "#84cc16",
    amber: "#f59e0b",
    rose: "#f43f5e",
    violet: "#8b5cf6",
    gray: "#6b7280",
    brown: "#92400e",
  };

  // =========================================================
  // Theme names
  // =========================================================

  const themeLabels = {
    original: "Ocean",
    red: "Ruby",
    yellow: "Sun",
    green: "Forest",
    purple: "Purple",
    pink: "Pink",
    orange: "Sunset",
    teal: "Teal",
    indigo: "Indigo",
    lime: "Lime",
    amber: "Amber",
    rose: "Rose",
    violet: "Violet",
    gray: "Slate",
    brown: "Earth",
  };

  // =========================================================
  // Load saved theme
  // =========================================================

  useEffect(() => {
    axios
      .get(`${import.meta.env.DATA_API_URL}/theme`)
      .then((res) => {
        const savedTheme = res.data.theme || "original";

        setSelectedTheme(savedTheme);

        document.documentElement.style.setProperty(
          "--TextColor",
          themeColors[savedTheme],
        );
      })
      .catch((err) => {
        console.error("Failed to fetch theme", err);
      });
  }, []);

  // =========================================================
  // Change theme
  // =========================================================

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);

    document.documentElement.style.setProperty(
      "--TextColor",
      themeColors[theme],
    );

    setMessage(theme);

    setTimeout(() => {
      setMessage(null);
    }, 2500);

    axios.post(`${import.meta.env.DATA_API_URL}/theme`, { theme }).catch((err) => {
      console.error("Failed to save theme", err);
    });
  };

  return (
    <div className="space-y-8">
      {/* =================================================
          Toast
      ================================================= */}

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ y: -80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -80, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-[var(--TextColor)] shadow-[8px_8px_20px_rgba(180,190,205,0.35),-6px_-6px_15px_white] border border-neutral-200 text-sm font-semibold"
          >
            <Check size={16} />
            Theme changed to {themeLabels[message] || message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          Header
      ================================================= */}

      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-[var(--TextColor)] text-white flex items-center justify-center shadow-[5px_5px_12px_rgba(180,190,205,0.25)]">
            <Palette size={20} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--TextColor)]">
              Personalization
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">Make it yours.</h1>
          </div>
        </div>

        <p className="text-neutral-500 leading-relaxed max-w-2xl">
          Choose an accent color that matches your style. Your selection is
          saved automatically and used throughout the app.
        </p>
      </section>

      {/* =================================================
          Current Theme
      ================================================= */}

      <section className="p-5 md:p-6 mt-16">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
              style={{
                backgroundColor: themeColors[selectedTheme],
              }}
            >
              <Sparkles size={23} />
            </div>

            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest">
                Current theme
              </p>

              <h2 className="font-bold text-lg">
                {themeLabels[selectedTheme]}
              </h2>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-green-500">
            <Circle size={10} fill="currentColor" />
            Active
          </div>
        </div>
      </section>

      {/* =================================================
          Theme Picker
      ================================================= */}

      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold">Choose your color</h2>

          <p className="text-sm text-neutral-400 mt-1">
            Pick an accent for buttons, links, icons, and interactive elements.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Object.keys(themeColors).map((theme) => {
            const isSelected = selectedTheme === theme;

            return (
              <motion.button
                key={theme}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleThemeChange(theme)}
                className={`relative overflow-hidden text-left p-4 rounded-[22px] bg-white cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "ring-2 ring-[var(--TextColor)]"
                    : "border border-neutral-200"
                }`}
                style={{
                  boxShadow: isSelected
                    ? `0 8px 20px ${themeColors[theme]}30`
                    : "8px 8px 20px rgba(180,190,205,0.16), -5px -5px 15px rgba(255,255,255,0.9)",
                }}
              >
                {/* Color preview */}

                <div
                  className="relative h-16 rounded-2xl mb-4 overflow-hidden"
                  style={{
                    backgroundColor: themeColors[theme],
                  }}
                >
                  <div className="absolute -right-5 -top-8 w-24 h-24 rounded-full bg-white opacity-10" />

                  <div className="absolute bottom-2 left-3 right-3 h-1 rounded-full bg-white opacity-20" />

                  {isSelected && (
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white text-[var(--TextColor)] flex items-center justify-center">
                      <Check size={15} />
                    </div>
                  )}
                </div>

                <div>
                  <p className="font-semibold text-sm">{themeLabels[theme]}</p>

                  <p className="text-xs text-neutral-400 mt-1">{theme}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* =================================================
          Live Preview
      ================================================= */}

      <section className="my-16">
        <div className="mb-5">
          <h2 className="text-xl font-bold">Live preview</h2>

          <p className="text-sm text-neutral-400 mt-1">
            See how your selected accent looks across common interface elements.
          </p>
        </div>

        <div className="clay-soft p-5 md:p-7 space-y-7">
          {/* Text */}

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-white text-[var(--TextColor)] flex items-center justify-center border border-neutral-200">
              <Type size={18} />
            </div>

            <div className="space-y-2">
              <p className="text-xs text-neutral-400 uppercase tracking-widest">
                Text
              </p>

              <p className="font-semibold text-[var(--TextColor)]">
                This is your selected accent color.
              </p>

              <p className="text-sm text-neutral-500">
                It will appear throughout the interface wherever accent colors
                are used.
              </p>
            </div>
          </div>

          {/* Divider */}

          <div className="h-px bg-neutral-200/70" />

          {/* Input */}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Input preview
            </label>

            <input
              type="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Type something..."
              className="w-full bg-white border border-neutral-200 outline-none p-3 rounded-2xl text-sm transition-all focus:ring-2 focus:ring-[var(--TextColor)]"
            />
          </div>

          {/* Buttons */}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              Button preview
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-semibold text-sm cursor-pointer hover:opacity-90 transition"
                style={{
                  backgroundColor: themeColors[selectedTheme],
                }}
              >
                <MousePointer2 size={16} />
                Primary Button
              </button>

              <button
                className="px-5 py-3 rounded-2xl font-semibold text-sm cursor-pointer transition bg-white"
                style={{
                  color: themeColors[selectedTheme],
                  border: `1px solid ${themeColors[selectedTheme]}30`,
                }}
              >
                Secondary
              </button>
            </div>
          </div>

          {/* Accent bar */}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              Accent preview
            </label>

            <div className="h-3 rounded-full overflow-hidden bg-neutral-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="h-full rounded-full"
                style={{
                  backgroundColor: themeColors[selectedTheme],
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          Tip
      ================================================= */}

      <section className="rounded-[24px] p-5 bg-[var(--TextColor)]/5 border border-[var(--TextColor)]/10">
        <div className="flex gap-3 items-start">
          <Sparkles
            size={18}
            className="shrink-0 mt-0.5 text-[var(--TextColor)]"
          />

          <div>
            <p className="font-semibold text-sm">
              Your choice is saved automatically.
            </p>

            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              You don't need to reload the page. The selected accent is applied
              instantly across the application.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Theme;
