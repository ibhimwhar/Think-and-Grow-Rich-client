import { Link } from "react-router"
import Image from "../../assets/maxresdefault.jpg"
import { Play } from "lucide-react"

const Video = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-5 space-y-10">
            <h2 className="mt-10 text-lg sm:text-xl md:text-2xl font-semibold text-center leading-snug text-neutral-800 max-w-3xl">
                THINK and GROW RICH By Napoleon Hill. A Complete Breakdown of the Classic Book That Changed Millions of Lives Around the World.
            </h2>

            {/* Thumbnail with overlay */}
            <div className="relative w-full max-w-3xl aspect-video overflow-hidden rounded-md shadow-md group cursor-pointer">
                <a
                    href="https://www.youtube.com/watch?v=WXXqB-i-ZzI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                >
                    <img
                        src={Image}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition">
                        <div className="flex items-center gap-2">
                            <Play className="w-6 h-6" />
                            Click to Watch
                        </div>
                    </div>

                </a>
            </div>

            <p className="text-sm md:text-base font-semibold text-center leading-snug text-[var(--TextColor)]">
                Click the thumbnail to play the full video on YouTube
            </p>

            <p className="text-sm tracking-widest text-center">
                Curious about the developer?{" "}
                <Link to="/developer" className="text-base text-[var(--TextColor)] hover:underline underline-offset-2">
                    Visit the Developer Page
                </Link>
            </p>

        </div>
    )
}

export default Video