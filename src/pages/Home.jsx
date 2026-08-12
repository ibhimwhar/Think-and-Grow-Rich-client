// pages/Home.jsx

import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

import { Link } from "react-router";

import Image from "../assets/46aba262-6a24-4412-a5f9-958e276fb379.jpg";

const Home = () => {
  const features = [
    {
      icon: <BookOpen size={20} />,
      title: "Read & Explore",
      description:
        "Work through the book chapter by chapter with a clean and focused reading experience.",
    },
    {
      icon: <Brain size={20} />,
      title: "Understand Ideas",
      description:
        "Break down the biggest concepts and principles into simple ideas you can actually understand.",
    },
    {
      icon: <Target size={20} />,
      title: "Apply What You Learn",
      description:
        "Turn powerful ideas into practical goals, notes, and actions for your own life.",
    },
  ];

  const stats = [
    {
      value: "13",
      label: "Core Principles",
    },
    {
      value: "20+",
      label: "Years of Research",
    },
    {
      value: "47",
      label: "Quotes",
    },
  ];

  return (
    <div className="space-y-10">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#eef8ff] via-white to-[#f4f8ff] border border-neutral-200 p-6 sm:p-8 md:p-12">
        {/* Decorative blobs */}

        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--TextColor)] opacity-[0.07] blur-3xl" />

        <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-blue-400 opacity-[0.06] blur-3xl" />

        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* =============================================
              Hero Content
          ============================================= */}

          <div className="space-y-7">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-neutral-200 text-sm font-medium text-[var(--TextColor)]">
              <Sparkles size={16} />
              Personal Growth Library
            </div>

            {/* Title */}

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] font-semibold text-[var(--TextColor)]">
                Featured Book
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900">
                Think
                <span className="text-[var(--TextColor)]"> and Grow Rich</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-500 max-w-xl leading-relaxed">
                Explore Napoleon Hill's timeless ideas about desire,
                persistence, purpose, mindset, and achievement.
              </p>
            </div>

            {/* Author */}

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--TextColor)]">
                <Trophy size={19} />
              </div>

              <div>
                <p className="text-xs text-neutral-400">Written by</p>

                <p className="font-semibold text-neutral-800">Napoleon Hill</p>
              </div>
            </div>

            {/* CTA */}

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/content"
                className="clay-button px-6 py-3 rounded-2xl group"
              >
                Start Reading
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/summary"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-neutral-600 bg-white/70 hover:bg-white transition border border-neutral-200"
              >
                View Summary
              </Link>
            </div>

            {/* Small reassurance */}

            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <CheckCircle2 size={16} className="text-[var(--TextColor)]" />
              Read at your own pace
            </div>
          </div>

          {/* =============================================
              Floating Book
          ============================================= */}

          <div className="relative flex justify-center items-center min-h-[360px]">
            {/* Glow */}

            <div className="absolute w-64 h-64 rounded-full bg-[var(--TextColor)] opacity-[0.08] blur-3xl" />

            {/* Book card */}

            <div className="relative w-[210px] sm:w-[240px] md:w-[270px] aspect-[3/4] rounded-[24px] overflow-hidden rotate-[-5deg] transition-transform duration-500 hover:rotate-0 hover:scale-105">
              <img
                src={Image}
                alt="Think and Grow Rich by Napoleon Hill"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
            </div>

            {/* Floating badge */}

            <div className="absolute top-8 right-2 sm:right-6 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur border border-neutral-200 rotate-3">
              <p className="text-[10px] uppercase tracking-widest text-neutral-400">
                Focus
              </p>

              <p className="font-bold text-[var(--TextColor)]">Think Bigger</p>
            </div>

            {/* Bottom floating card */}

            <div className="absolute bottom-4 left-2 sm:left-6 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur border border-neutral-200 -rotate-3">
              <p className="text-xs text-neutral-400">Author</p>

              <p className="font-semibold text-neutral-800">Napoleon Hill</p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          STATS
      ================================================= */}

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-16">
        {stats.map((stat) => (
          <div key={stat.label} className="p-5 text-center">
            <p className="text-3xl font-bold text-[var(--TextColor)]">
              {stat.value}
            </p>

            <p className="text-sm text-neutral-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* =================================================
          INTRO
      ================================================= */}

      <section className="space-y-3 max-w-3xl">
        <div className="flex items-center gap-2 text-[var(--TextColor)]">
          <Sparkles size={18} />

          <span className="text-sm font-semibold uppercase tracking-widest">
            Why this book?
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          More than a book.
          <span className="text-neutral-400"> A way of thinking.</span>
        </h2>

        <p className="text-neutral-500 leading-relaxed text-base md:text-lg">
          Think and Grow Rich is a classic personal-development book centered
          around the relationship between thought, desire, persistence, purpose,
          and achievement.
        </p>
      </section>

      {/* =================================================
          FEATURES
      ================================================= */}

      <section className="mt-16 grid md:grid-cols-3 gap-5">
        {features.map((feature) => (
          <div key={feature.title} className="p-6 group">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-neutral-100 text-[var(--TextColor)] mb-5 transition-transform duration-300 group-hover:scale-110">
              {feature.icon}
            </div>

            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>

            <p className="text-sm leading-relaxed text-neutral-500">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="relative overflow-hidden rounded-[28px] bg-[var(--TextColor)] text-white p-7 md:p-10 shadow-[8px_8px_25px_rgba(0,143,226,0.22)]">
        <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-white opacity-10 blur-2xl" />

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-2">
              Ready?
            </p>

            <h2 className="text-2xl md:text-3xl font-bold">
              Start building a better mindset.
            </h2>

            <p className="text-white/70 mt-2 max-w-xl">
              Dive into the chapters, save important ideas, and create notes as
              you go.
            </p>
          </div>

          <Link
            to="/content"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-[var(--TextColor)] px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            Explore the Book
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* =================================================
          Developer
      ================================================= */}

      <div className="text-center pb-2">
        <p className="text-xs text-neutral-400">
          Built with curiosity and code.
        </p>

        <Link
          to="/developer"
          className="text-sm text-[var(--TextColor)] font-medium hover:underline underline-offset-4"
        >
          Meet the developer →
        </Link>
      </div>
    </div>
  );
};

export default Home;
