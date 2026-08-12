// components/Loading.jsx

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-5">
      <div className="text-center">
        {/* Floating book */}

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, -2, 2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mx-auto w-20 h-20 rounded-[28px] bg-white flex items-center justify-center text-[var(--TextColor)] shadow-[8px_8px_22px_rgba(180,190,205,0.25),-5px_-5px_15px_rgba(255,255,255,0.9)]"
        >
          <BookOpen size={30} strokeWidth={1.8} />

          {/* Sparkle */}

          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="absolute -top-2 -right-2 w-7 h-7 rounded-xl bg-[var(--TextColor)]/10 flex items-center justify-center"
          >
            <Sparkles size={13} className="text-[var(--TextColor)]" />
          </motion.div>
        </motion.div>

        {/* Loading text */}

        <h2 className="mt-6 text-base font-bold text-neutral-700">
          Preparing your reading space
        </h2>

        <p className="mt-1 text-xs text-neutral-400">Just a moment...</p>

        {/* Progress dots */}

        <div className="flex items-center justify-center gap-1.5 mt-5">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{
                y: [0, -5, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: dot * 0.15,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-[var(--TextColor)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
