import { Instagram, Github } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="max-w-2xl mx-auto p-5 border-t border-neutral-100 mt-10 text-center text-sm text-neutral-500 space-y-4">
            <div className="flex justify-center gap-5">
                <a href="https://instagram.com/viralface_1" target="_blank" className="hover:text-[var(--TextColor)] transition-colors">
                    <Instagram size={18} />
                </a>
                <a href="http://github.com/ibhimwhar" target="_blank" className="hover:text-[var(--TextColor)] transition-colors">
                    <Github size={18} />
                </a>
            </div>

            <p>&copy; {new Date().getFullYear()} Think and Grow Rich. All rights reserved.</p>
            <p>
                Built by <a href="https://yourportfolio.com" target="_blank" className="underline hover:text-[var(--TextColor)]">Ibhimwhar</a>
            </p>
        </footer>
    )
}

export default Footer