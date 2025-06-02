import Image_1 from "../../assets/napoleon-hill-sitting.jpg"
import Image_2 from "../../assets/unnamed.jpg"
import Image_3 from "../../assets/Hill_Think+And+Grow+Rich_3DP.png"

const Summary = () => {
    return (
        <div className="px-4 py-6 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl text-center font-semibold mb-6">
                Think & Grow Rich by Napoleon Hill
            </h1>

            <article className="text-justify text-sm md:text-base leading-relaxed text-neutral-700 space-y-6">
                <p>
                    <strong className="text-[var(--TextColor)]">Think & Grow Rich</strong> is a classic personal development and self-help book written by Napoleon Hill. It explores the mindset and habits necessary to achieve financial success and personal fulfillment. The book is the result of over 20 years of research, during which Hill interviewed many of the most successful people of his time, including Andrew Carnegie, Henry Ford, and Thomas Edison.
                </p>
                <img
                    src={Image_1}
                    alt="Napoleon Hill"
                    className="w-full rounded-md shadow-md mb-4"
                />

                <p>
                    At the heart of the book is the idea that your thoughts are powerful and directly influence your reality. Hill emphasizes that a definite purpose combined with unwavering faith, persistence, and a burning desire are essential ingredients to transform ideas into riches. Without a clear goal, he argues, success is nearly impossible.
                </p>

                <p>
                    One of the key principles is the power of <em>definiteness of purpose</em>. Hill stresses the importance of knowing exactly what you want and writing down your goals clearly. This focus acts as a guiding beacon and keeps you motivated through obstacles and setbacks.
                </p>
                <img
                    src={Image_2}
                    alt="Writing goals"
                    className="w-full rounded-md shadow-md mb-4"
                />

                <p>
                    The concept of <em>faith</em> is another cornerstone of the book. Hill suggests that faith isn't just religious belief, but a deep conviction that you can achieve your goals. By combining faith with positive affirmations and visualization, you reprogram your subconscious mind to help you take the necessary actions.
                </p>

                <p>
                    Persistence is crucial. Many people give up at the first sign of failure, but Hill found that successful individuals persist through challenges and keep trying until they succeed. The book encourages readers to develop a never-give-up attitude.
                </p>

                <p>
                    Hill also highlights the importance of specialized knowledge, creative imagination, and planning. He encourages readers to continuously educate themselves, gather information, and use imagination to create new ideas or solutions. A well-laid plan, even if imperfect, is better than no plan at all.
                </p>

                <p>
                    Another notable idea is the <em>Mastermind</em> principle, which is about surrounding yourself with like-minded individuals who support and challenge you. Hill believed that a group of people working toward a common purpose creates a synergy that helps all members grow.
                </p>

                <p>
                    The book addresses the role of fear, warning that it is one of the biggest obstacles to success. Fear can paralyze the mind and prevent people from taking necessary risks. Hill identifies six basic fears, including fear of poverty, criticism, ill health, loss of love, old age, and death, and teaches how to overcome them.
                </p>
                <img
                    src={Image_3}
                    alt="Think and grow rich book"
                    className="w-full rounded-md mb-4"
                />

                <p>
                    Finally, <strong className="text-[var(--TextColor)]">Think & Grow Rich</strong> is not just about material wealth; it also promotes personal growth and building a rich life in every sense—emotional, intellectual, and spiritual. Hill's timeless wisdom encourages readers to cultivate a mindset of abundance, discipline, and focused effort to achieve their dreams.
                </p>

                <p>
                    Overall, this book remains a foundational read for anyone interested in entrepreneurship, financial independence, or self-improvement. It emphasizes that true riches come from within, starting with your thoughts and beliefs.
                </p>
            </article>
        </div>
    )
}

export default Summary
