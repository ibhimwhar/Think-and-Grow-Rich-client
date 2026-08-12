// pages/Sidebars/Summary.jsx

import {
  ArrowDown,
  BookOpen,
  Brain,
  CheckCircle2,
  Compass,
  Crown,
  Lightbulb,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Image_1 from "../../assets/napoleon-hill-sitting.jpg";
import Image_2 from "../../assets/unnamed.jpg";
import Image_3 from "../../assets/Hill_Think+And+Grow+Rich_3DP.png";

const Summary = () => {
  const principles = [
    {
      icon: <Target size={20} />,
      title: "Definiteness of Purpose",
      description:
        "Know exactly what you want and create a clear direction for your efforts.",
    },
    {
      icon: <Brain size={20} />,
      title: "Faith",
      description:
        "Develop a strong belief in your ability to achieve the goals you have chosen.",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Desire",
      description:
        "A strong, focused desire becomes the starting point for meaningful achievement.",
    },
    {
      icon: <CheckCircle2 size={20} />,
      title: "Persistence",
      description:
        "Continue moving forward when setbacks appear instead of allowing temporary defeat to stop you.",
    },
    {
      icon: <Users size={20} />,
      title: "Mastermind",
      description:
        "Surround yourself with people who can contribute knowledge, encouragement, and perspective.",
    },
  ];

  return (
    <article className="space-y-10">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden rounded-[30px] bg-[var(--TextColor)] text-white p-6 md:p-9">
        {/* Decorative shapes */}

        <div className="absolute -right-20 -top-24 w-72 h-72 rounded-full bg-white opacity-[0.07]" />

        <div className="absolute -left-20 -bottom-32 w-64 h-64 rounded-full bg-white opacity-[0.05]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs uppercase tracking-[0.18em] font-semibold mb-5">
            <BookOpen size={14} />
            Book Summary
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Think & Grow Rich
          </h1>

          <p className="mt-3 text-white/70 text-sm md:text-base">
            By Napoleon Hill
          </p>

          <p className="mt-6 max-w-2xl text-white/75 text-sm md:text-base leading-relaxed">
            A timeless exploration of desire, belief, persistence, planning, and
            the mindset associated with personal and financial achievement.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <div className="px-3 py-2 rounded-xl bg-white/10 text-xs text-white/80">
              Personal Development
            </div>

            <div className="px-3 py-2 rounded-xl bg-white/10 text-xs text-white/80">
              Success
            </div>

            <div className="px-3 py-2 rounded-xl bg-white/10 text-xs text-white/80">
              Mindset
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section className="space-y-5 my-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--TextColor)]/10 text-[var(--TextColor)] flex items-center justify-center">
            <Lightbulb size={19} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-[var(--TextColor)]">
              The Big Idea
            </p>

            <h2 className="text-2xl font-bold">Thoughts become direction.</h2>
          </div>
        </div>

        <p className="text-sm md:text-base leading-[1.9] text-neutral-600">
          <strong className="text-[var(--TextColor)]">Think & Grow Rich</strong>{" "}
          is a classic personal-development and self-help book written by
          Napoleon Hill. It explores the mindset and habits associated with
          financial success and personal fulfillment.
        </p>

        <p className="text-sm md:text-base leading-[1.9] text-neutral-600">
          The book is presented as the result of more than 20 years of research
          into successful individuals. Hill studied the experiences and
          philosophies of influential figures including Andrew Carnegie, Henry
          Ford, and Thomas Edison.
        </p>
      </section>

      {/* =================================================
          IMAGE
      ================================================= */}

      <figure className="space-y-3">
        <div className="border border-neutral-200 rounded-4xl overflow-hidden p-2">
          <img
            src={Image_1}
            alt="Napoleon Hill"
            className="w-full rounded-[22px] object-cover max-h-[500px]"
          />
        </div>

        <figcaption className="text-center text-xs text-neutral-400">
          Napoleon Hill
        </figcaption>
      </figure>

      {/* =================================================
          CORE IDEA
      ================================================= */}

      <section className="clay-soft p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white text-[var(--TextColor)] flex items-center justify-center border border-neutral-200">
            <Brain size={20} />
          </div>

          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest">
              Core Principle
            </p>

            <h2 className="text-xl font-bold">The power of thought</h2>
          </div>
        </div>

        <p className="text-sm md:text-base leading-[1.9] text-neutral-600">
          At the heart of the book is the idea that your thoughts influence the
          direction of your life. Hill emphasizes that a definite purpose
          combined with faith, persistence, and desire can help transform ideas
          into action.
        </p>

        <div className="border-l-4 border-[var(--TextColor)] pl-5 py-2">
          <p className="text-lg md:text-xl font-semibold leading-relaxed text-neutral-800">
            Clear goals create direction. Persistent action creates movement.
          </p>
        </div>
      </section>

      {/* =================================================
          DEFINITENESS OF PURPOSE
      ================================================= */}

      <section className="space-y-5 mt-16">
        <div className="flex items-center gap-3">
          <Target size={22} className="text-[var(--TextColor)]" />

          <h2 className="text-2xl font-bold">Definite purpose</h2>
        </div>

        <p className="text-sm md:text-base leading-[1.9] text-neutral-600">
          One of the key principles is the importance of knowing exactly what
          you want. Hill encourages readers to define their goals clearly and
          write them down.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="clay-soft p-5">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              01
            </p>

            <h3 className="font-bold mt-2">Decide</h3>

            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
              Identify exactly what you want.
            </p>
          </div>

          <div className="clay-soft p-5">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              02
            </p>

            <h3 className="font-bold mt-2">Define</h3>

            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
              Turn the goal into something specific.
            </p>
          </div>

          <div className="clay-soft p-5">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              03
            </p>

            <h3 className="font-bold mt-2">Act</h3>

            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
              Build a plan and begin moving.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          IMAGE 2
      ================================================= */}

      <figure className="space-y-3">
        <div className="border border-neutral-200 rounded-4xl overflow-hidden p-2">
          <img
            src={Image_2}
            alt="Writing goals"
            className="w-full rounded-[22px] object-cover"
          />
        </div>

        <figcaption className="text-center text-xs text-neutral-400">
          Turning goals into something concrete
        </figcaption>
      </figure>

      {/* =================================================
          FAITH + PERSISTENCE
      ================================================= */}

      <section className="grid md:grid-cols-2 gap-5 mt-16">
        <div className="clay-soft p-6">
          <div className="w-11 h-11 rounded-2xl bg-white text-[var(--TextColor)] flex items-center justify-center border border-neutral-200 mb-5">
            <Sparkles size={20} />
          </div>

          <h2 className="text-xl font-bold">Faith</h2>

          <p className="text-sm text-neutral-500 leading-[1.8] mt-3">
            Hill describes faith as a deep conviction that you can accomplish
            your chosen goal. He connects this belief with visualization and
            positive affirmations.
          </p>
        </div>

        <div className="clay-soft p-6">
          <div className="w-11 h-11 rounded-2xl bg-white text-[var(--TextColor)] flex items-center justify-center border border-neutral-200 mb-5">
            <Compass size={20} />
          </div>

          <h2 className="text-xl font-bold">Persistence</h2>

          <p className="text-sm text-neutral-500 leading-[1.8] mt-3">
            Temporary failure does not have to become permanent defeat. The book
            emphasizes continuing to adapt, learn, and pursue the objective.
          </p>
        </div>
      </section>

      {/* =================================================
          IMAGE 3
      ================================================= */}

      <figure className="space-y-3">
        <div className="border border-neutral-200 rounded-4xl overflow-hidden p-2">
          <img
            src={Image_3}
            alt="Think and Grow Rich book"
            className="w-full rounded-[22px] object-contain bg-neutral-50"
          />
        </div>

        <figcaption className="text-center text-xs text-neutral-400">
          Think & Grow Rich
        </figcaption>
      </figure>

      {/* =================================================
          KEY PRINCIPLES
      ================================================= */}

      <section className="my-16">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Crown size={22} className="text-[var(--TextColor)]" />

            <h2 className="text-2xl font-bold">Key principles</h2>
          </div>

          <p className="text-sm text-neutral-400 mt-2">
            A few of the ideas that sit at the center of the book.
          </p>
        </div>

        <div className="grid gap-4">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="clay-soft p-5 flex items-start gap-4"
            >
              <div className="shrink-0 w-11 h-11 rounded-2xl bg-white text-[var(--TextColor)] flex items-center justify-center border border-neutral-200">
                {principle.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[var(--TextColor)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-bold">{principle.title}</h3>
                </div>

                <p className="text-sm text-neutral-500 leading-relaxed mt-2">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================
          MASTERMINDS
      ================================================= */}

      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <Users size={22} className="text-[var(--TextColor)]" />

          <h2 className="text-2xl font-bold">The Mastermind idea</h2>
        </div>

        <p className="text-sm md:text-base text-neutral-600 leading-[1.9]">
          Hill highlights the value of surrounding yourself with people who can
          support, challenge, and contribute to a shared objective. The idea is
          that collaboration can create knowledge and perspective that one
          person may not have alone.
        </p>

        <div className="p-6 rounded-[24px] bg-[var(--TextColor)]/5 border border-[var(--TextColor)]/10">
          <p className="text-sm font-semibold text-[var(--TextColor)]">
            Think about your circle.
          </p>

          <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
            Who encourages your goals? Who challenges your assumptions? Who has
            knowledge you can learn from?
          </p>
        </div>
      </section>

      {/* =================================================
          FEAR
      ================================================= */}

      <section className="mt-16 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-2xl bg-[var(--TextColor)]/10 text-[var(--TextColor)] flex items-center justify-center">
            <Brain size={20} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Mental obstacle
            </p>

            <h2 className="text-xl font-bold">Understanding fear</h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-neutral-600 leading-[1.9]">
          The book treats fear as one of the major obstacles that can prevent
          people from taking action. Hill discusses fears surrounding poverty,
          criticism, ill health, loss of love, old age, and death.
        </p>
      </section>

      {/* =================================================
          FINAL TAKEAWAY
      ================================================= */}

      <section className="relative overflow-hidden rounded-[28px] bg-[var(--TextColor)] text-white p-7 md:p-9 shadow-[8px_8px_25px_rgba(0,143,226,0.22)]">
        <div className="absolute right-[-60px] bottom-[-80px] w-52 h-52 rounded-full bg-white opacity-[0.07]" />

        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} />

            <span className="text-xs uppercase tracking-widest text-white/70 font-semibold">
              Final takeaway
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Build the mindset. Then build the life.
          </h2>

          <p className="text-sm md:text-base text-white/70 leading-relaxed mt-4 max-w-2xl">
            Think & Grow Rich is ultimately presented as more than a book about
            money. Its ideas focus on developing purpose, discipline,
            persistence, knowledge, relationships, and a mindset capable of
            turning ideas into deliberate action.
          </p>
        </div>
      </section>

      {/* =================================================
          BACK TO TOP
      ================================================= */}

      <div className="flex justify-center pb-3">
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-sm text-[var(--TextColor)] font-semibold hover:gap-3 transition-all"
        >
          Back to top
          <ArrowDown size={15} className="rotate-180" />
        </a>
      </div>
    </article>
  );
};

export default Summary;
