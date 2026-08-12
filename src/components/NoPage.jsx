// components/NoPage.jsx

import { Link } from "react-router";
import { ArrowLeft, Home, Compass, Sparkles } from "lucide-react";

import { motion } from "framer-motion";

import Image from "../assets/lamp-61d9b3cf.png";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl grid md:grid-cols-2 items-center gap-10 md:gap-16">
        {/* =================================================
            ILLUSTRATION
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] bg-white flex items-center justify-center shadow-[12px_12px_30px_rgba(180,190,205,0.25),-8px_-8px_25px_rgba(255,255,255,0.9)]">
            {/* Decorative circles */}

            <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full bg-[var(--TextColor)]/10" />

            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[var(--TextColor)]/5" />

            <div className="absolute top-7 left-7 flex items-center justify-center w-9 h-9 rounded-xl bg-white text-[var(--TextColor)] shadow-[4px_4px_10px_rgba(180,190,205,0.25)]">
              <Sparkles size={17} />
            </div>

            <motion.img
              src={Image}
              alt="Page not found illustration"
              className="relative z-10 w-44 md:w-56 object-contain"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* =================================================
            TEXT
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2 text-center md:text-left"
        >
          {/* Small label */}

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--TextColor)]/10 text-[var(--TextColor)] text-xs font-semibold uppercase tracking-widest">
            <Compass size={13} />
            Lost page
          </div>

          {/* 404 */}

          <h1 className="mt-5 text-8xl md:text-9xl font-black tracking-tighter text-neutral-800 leading-none">
            404
          </h1>

          {/* Heading */}

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-neutral-800">
            This page wandered off.
          </h2>

          {/* Description */}

          <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-500 max-w-md mx-auto md:mx-0">
            Looks like the page you're looking for doesn't exist anymore, or you
            followed a link that took a wrong turn.
          </p>

          {/* Actions */}

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-7">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-2xl bg-[var(--TextColor)] text-white text-sm font-semibold hover:-translate-y-0.5 transition-all"
            >
              <Home size={17} />
              Back Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-2xl bg-white text-neutral-600 text-sm font-semibold border border-neutral-200 hover:-translate-y-0.5 hover:text-[var(--TextColor)] transition-all cursor-pointer"
            >
              <ArrowLeft size={17} />
              Go Back
            </button>
          </div>

          {/* Bottom message */}

          <p className="mt-7 text-[11px] text-neutral-400 tracking-wide">
            Don't worry — your reading journey is still waiting for you.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
