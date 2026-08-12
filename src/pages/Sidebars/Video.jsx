// pages/Sidebars/Video.jsx

import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Play,
  Sparkles,
  Youtube,
} from "lucide-react";

import { Link } from "react-router";

import Image from "../../assets/maxresdefault.jpg";

const Video = () => {
  const videoUrl = "https://www.youtube.com/watch?v=WXXqB-i-ZzI";

  const topics = [
    "The core philosophy of Think & Grow Rich",
    "The thirteen principles of achievement",
    "How desire and persistence shape success",
    "Practical lessons you can apply to your own goals",
  ];

  return (
    <div className="space-y-8">
      {/* =================================================
          HEADER
      ================================================= */}

      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-500 text-xs font-semibold uppercase tracking-widest">
          <Youtube size={14} />
          Video Breakdown
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Understand the book
          <span className="text-[var(--TextColor)]"> visually.</span>
        </h1>

        <p className="text-neutral-500 max-w-2xl leading-relaxed">
          Watch a complete breakdown of Think & Grow Rich and explore the major
          ideas behind Napoleon Hill's classic work.
        </p>
      </section>

      {/* =================================================
          FEATURED VIDEO
      ================================================= */}

      <section className="overflow-hidden p-3 md:p-4">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full aspect-video overflow-hidden rounded-[22px] group bg-neutral-900"
        >
          {/* Thumbnail */}

          <img
            src={Image}
            alt="Think and Grow Rich video thumbnail"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark overlay */}

          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-300" />

          {/* Center Play Button */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-[var(--TextColor)] flex items-center justify-center shadow-[8px_8px_25px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:scale-110">
              <Play size={27} fill="currentColor" className="ml-1" />
            </div>
          </div>

          {/* Top label */}

          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-black/50 backdrop-blur-md text-white text-xs font-semibold">
            <Youtube size={14} />
            Watch on YouTube
          </div>

          {/* Bottom label */}

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
            <div className="text-white">
              <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">
                Complete Breakdown
              </p>

              <p className="font-semibold text-sm md:text-base">
                Think and Grow Rich
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/50 backdrop-blur-md text-white text-xs">
              <Clock3 size={13} />
              Full Video
            </div>
          </div>
        </a>
      </section>

      {/* =================================================
          VIDEO TITLE
      ================================================= */}

      <section className="space-y-3 m-16">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
            <Play size={18} fill="currentColor" />
          </div>

          <div>
            <p className="text-xs text-neutral-400">Featured video</p>

            <h2 className="font-bold text-lg">
              Think and Grow Rich — Complete Breakdown
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
          This breakdown explores the central concepts, principles, and lessons
          found throughout Think & Grow Rich by Napoleon Hill.
        </p>

        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--TextColor)] hover:gap-3 transition-all"
        >
          Open video on YouTube
          <ArrowUpRight size={16} />
        </a>
      </section>

      {/* =================================================
          WHAT YOU'LL LEARN
      ================================================= */}

      <section className="clay-soft rounded-[26px] p-6 md:p-7">
        <div className="flex items-center gap-3 mb-6 m-3">
          <div className="w-11 h-11 rounded-2xl bg-white text-[var(--TextColor)] flex items-center justify-center border border-neutral-200">
            <Sparkles size={19} />
          </div>

          <div>
            <h2 className="font-bold text-lg">What you'll learn</h2>

            <p className="text-xs text-neutral-400">
              Key ideas covered in the breakdown
            </p>
          </div>
        </div>

        <div className="grid gap-3">
          {topics.map((topic) => (
            <div
              key={topic}
              className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 border border-neutral-200"
            >
              <CheckCircle2
                size={18}
                className="shrink-0 mt-0.5 text-[var(--TextColor)]"
              />

              <p className="text-sm text-neutral-600 leading-relaxed">
                {topic}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================
          READING CTA
      ================================================= */}

      <section className="relative overflow-hidden rounded-[28px] bg-[var(--TextColor)] text-white p-6 md:p-8 shadow-[8px_8px_25px_rgba(0,143,226,0.22)]">
        <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white opacity-[0.08]" />

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest mb-2">
              <BookOpen size={14} />
              Go deeper
            </div>

            <h2 className="text-xl md:text-2xl font-bold">
              Ready to read the actual chapters?
            </h2>

            <p className="text-white/70 text-sm mt-2">
              Put the ideas from the video into context by exploring the book
              itself.
            </p>
          </div>

          <Link
            to="/content/read"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-[var(--TextColor)] px-5 py-3 rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            Start Reading
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* =================================================
          DEVELOPER
      ================================================= */}

      <div className="text-center pb-2">
        <p className="text-xs text-neutral-400">
          Want to know how this was built?
        </p>

        <Link
          to="/developer"
          className="inline-flex items-center gap-1 mt-1 text-sm text-[var(--TextColor)] font-medium hover:underline underline-offset-4"
        >
          Visit the developer page
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default Video;
