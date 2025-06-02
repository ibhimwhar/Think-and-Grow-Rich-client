import { Link } from "react-router"
import Image from "../assets/46aba262-6a24-4412-a5f9-958e276fb379.jpg"

const Home = () => {

    const content = [
        {
            title: "Overview",
            description: "'Think and Grow Rich' is more than just a self-help book. It is a roadmap for those who wish to create lasting success by mastering the power of thought and desire."
        },

        {
            title: "Key Message",
            description: "The core idea is simple: thoughts are powerful. What you consistently think about and believe, you can ultimately bring into reality.The book outlines thirteen principles that, when applied with discipline and purpose, can unlock personal and financial achievement."
        },

        {
            title: "Why Read It?",
            description: "If you are someone striving for success, feeling stuck, or wanting to gain clarity on your goals, this book will help shift your mindset and sharpen your vision. It has inspired millions worldwide to take control of their destiny."
        }

    ]
    return (
        <div className="md:p-5">
            <div className="relative rounded-2xl overflow-hidden">
                {/* Overlay */}
                <div className="bg-black/90 text-white absolute inset-0 p-4 flex flex-col justify-center gap-3 md:gap-5 items-center text-center">
                    <h1 className="font-semibold text-3xl md:text-5xl">Think and Grow Rich</h1>

                    <p className="tracking-wider text-sm md:text-base">
                        Wisdom of distinguished men of great success and achievement.
                    </p>

                    <p className="tracking-wider text-sm md:text-base">by</p>

                    <h3 className="text-xl md:text-2xl">Napoleon Hill</h3>

                    <Link to={"/content"}>
                        <button className="mt-6 px-10 py-2 rounded-md bg-[var(--TextColor)] cursor-pointer transition-all duration-300 hover:opacity-80">
                            Start
                        </button>
                    </Link>

                    <p className="text-[10px] tracking-widest text-center">
                        Curious about the developer?{" "}
                        <Link to="/developer" className="text-[12px] text-[var(--TextColor)] hover:underline underline-offset-2">
                            Visit the Developer Page
                        </Link>
                    </p>
                </div>

                {/* Background Image */}
                <img
                    src={Image}
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Additional Section */}
            {content.map((items, num) => {
                return (
                    <section key={num} className="mt-10 space-y-6">
                        <h2 className="text-2xl font-bold text-neutral-800">{items.title}</h2>
                        <p className="text-neutral-500">
                            {items.description}
                        </p>
                    </section>

                )
            })}



        </div>

    )
}

export default Home
