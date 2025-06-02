import { Clipboard } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Image from "../../assets/41c1be30-bb0a-40a2-8ba2-306cbac25746.jpg"

const Quotations = () => {
    const [message, setMessage] = useState(false)

    const quotes = [
        { id: 1, description: "Whatever the mind can conceive and believe, it can achieve." },
        { id: 2, description: "Set your mind on a definite goal and observe how quickly the world stands aside to let you pass." },
        { id: 3, description: "A quitter never wins and a winner never quits." },
        { id: 4, description: "When defeat comes, accept it as a signal that your plans are not sound, rebuild those plans, and set sail once more toward your coveted goal." },
        { id: 5, description: "The starting point of all achievement is desire." },
        { id: 6, description: "You are the master of your destiny. You can influence, direct and control your own environment." },
        { id: 7, description: "More gold had been mined from the mind of men than the earth itself." },
        { id: 8, description: "Great achievement is usually born of great sacrifice, and is never the result of selfishness." },
        { id: 9, description: "Strength and growth come only through continuous effort and struggle." },
        { id: 10, description: "Success comes to those who become success conscious." },
        { id: 11, description: "There are no limitations to the mind except those we acknowledge." },
        { id: 12, description: "The way of success is the way of continuous pursuit of knowledge." },
        { id: 13, description: "Success requires no explanation. Failure permits no alibis." },
        { id: 14, description: "You are the master of your fate, the captain of your soul." },
        { id: 15, description: "A person who does not make decisions for himself is at the mercy of others' decisions." },
        { id: 16, description: "Don't wait for the right conditions. They will never come." },
        { id: 17, description: "Desire is the starting point of all achievement." },
        { id: 18, description: "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit." },
        { id: 19, description: "The chief function of the body is to carry the brain around." },
        { id: 20, description: "The ladder of success is never crowded at the top." },
        { id: 21, description: "The more you give, the more you receive." },
        { id: 22, description: "True greatness comes through service to others." },
        { id: 23, description: "If you cannot do great things, do small things in a great way." },
        { id: 24, description: "When one door closes, another door opens." },
        { id: 25, description: "A person with a definite purpose in life is a person who attracts others." },
        { id: 26, description: "Riches begin in the form of thought." },
        { id: 27, description: "Action is the real measure of intelligence." },
        { id: 28, description: "Success comes to those who become success conscious." },
        { id: 29, description: "What you think about, you bring about." },
        { id: 30, description: "Fear is the most destructive emotion." },
        { id: 31, description: "Our minds become magnetized with the dominating thoughts which we hold in our minds." },
        { id: 32, description: "The only limitation is the one you set up in your own mind." },
        { id: 33, description: "Every person who achieves success in any great venture must expect to meet with opposition." },
        { id: 34, description: "You are where you are and what you are because of your own mental attitude." },
        { id: 35, description: "Success is not the key to happiness. Happiness is the key to success." },
        { id: 36, description: "The person who takes no chances generally has to take whatever is left when others are through choosing." },
        { id: 37, description: "What you give in return is what you get." },
        { id: 38, description: "If you want riches, you must develop the habits of rich people." },
        { id: 39, description: "One of the most common causes of failure is the habit of quitting when one is overtaken by temporary defeat." },
        { id: 40, description: "The most important thing is to understand that the power lies within you." },
        { id: 41, description: "A rich person is someone who has learned how to turn their thoughts into action." },
        { id: 42, description: "The most successful people are those who are willing to change their thinking and actions." },
        { id: 43, description: "Great achievements come from bold decisions and audacious plans." },
        { id: 44, description: "The greatest strength in any man is the strength of his will." },
        { id: 45, description: "Failure is a temporary event that can be overcome." },
        { id: 46, description: "You can think your way into or out of almost anything." },
        { id: 47, description: "Your burning desire is the starting point to success." },
    ]
    const handleShare = async (quote) => {
        try {
            await navigator.clipboard.writeText(quote.description)
            setMessage(`Quote copied: "${quote.description}"`)
            setTimeout(() => setMessage(false), 3000)
        } catch (err) {
            setMessage("Failed to copy quote.")
            setTimeout(() => setMessage(false), 3000)
        }
    }

    return (
        <div className=" px-4 py-6">
            <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--TextColor)]">
                Quotes from <span className="italic">Think & Grow Rich</span>
            </h1>

            {message && (
                <AnimatePresence>
                    <motion.div
                        role="alert"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs md:max-w-sm lg:max-w-md text-sm p-3 rounded-md bg-green-100 text-green-700 border border-green-200 text-center"
                    >
                        Quote Copied
                    </motion.div>
                </AnimatePresence>
            )}

            <img
                src={Image}
                alt="Think and grow rich book"
                className="w-full rounded-md mb-4"
            />

            <p className='mt-8 mb-5 text-sm text-[var(--TextColor)]'>{quotes.length} quotes available</p>

            <div className="grid gap-4">
                {quotes.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow"
                    >
                        <div className="text-neutral-700 text-sm md:text-base leading-relaxed mb-3">
                            {item.id}. {item.description}
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => handleShare(item)}
                                className="cursor-pointer border border-neutral-100 transition-all hover:ring-2 active:ring-2 ring-[var(--TextColor)] p-1.5 rounded-md"
                            >
                                <Clipboard size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Quotations
