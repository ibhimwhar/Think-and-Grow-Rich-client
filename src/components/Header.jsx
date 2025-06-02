import {
    Menu,
    X,
    Instagram,
    Book,
    TextQuote,
    Palette,
    MessageSquareText,
    Star,
    Share2,
    MonitorPlay,
    MapPinHouse,
    CodeXml,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import BackgroundImage from "../assets/artworks-000490784616-5lx6n0-t500x500.jpg"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "framer-motion";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [message, setMessage] = useState(null)

    const closeSidebarMenuRef = useRef(null)

    let navigatorLink = useLocation();
    const Location = navigatorLink.pathname;

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (closeSidebarMenuRef.current && !closeSidebarMenuRef.current.contains(event.target)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [menuOpen])

    const SideMenus = [
        {
            group: "Menus",
            items: [
                { title: "Summary", icon: <Book size={17} />, link: "/summary" },
                { title: "Quotations", icon: <TextQuote size={17} />, link: "/quotations" },
                {
                    title: "Custom Theme",
                    icon: <Palette size={17} />,
                    link: "/theme"
                },
                {
                    title: "Play Video",
                    icon: <MonitorPlay size={17} />,
                    link: "/video"
                },
                {
                    title: "Give Feedback",
                    icon: <MessageSquareText size={17} />,
                    onClick: () => { setMessage("Thank you! Feedback form coming soon."); setTimeout(() => setMessage(false), 3000) },
                },
            ],
        },
        {
            group: "Others",
            items: [
                {
                    title: "Share with friends",
                    icon: <Share2 size={17} />,
                    onClick: () => navigator.share ? navigator.share({ title: "My App", url: "/" }) : console.log("Sharing not supported.")
                },
                {
                    title: "Developer",
                    icon: <CodeXml size={17} />,
                    link: "/developer"
                },
                {
                    title: "Follow us",
                    icon: <Instagram size={17} />,
                    onClick: () => window.open("https://instagram.com/viralface_1", "_blank")
                },
            ],
        },
    ]


    return (
        <>
            {message && (
                <AnimatePresence>
                    <motion.div
                        role="alert"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs md:max-w-sm lg:max-w-md text-sm p-3 rounded-md bg-sky-100 text-sky-700 border border-sky-200 text-center"
                    >
                        {message}
                    </motion.div>
                </AnimatePresence>
            )}
            {/* Fixed Header */}
            <header className={`z-40 fixed w-full transition-transform ${scroll ? "translate-y-0" : "-translate-y-full"} bg-white border-b border-neutral-200 p-5 flex justify-between md:justify-around items-center`}>
                <div className="flex items-center gap-2 md:gap-5">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="cursor-pointer transition-all border border-neutral-100 hover:ring-2 active:ring-2 ring-[var(--TextColor)] p-1.5 rounded-md"
                    >
                        <span className={`block transition-transform duration-300 ${menuOpen ? "rotate-180" : "rotate-0"}`}>
                            {menuOpen ? <X /> : <Menu />}
                        </span>
                    </button>
                    <h1 className="font-semibold text-[var(--TextColor)]">Think and Grow Rich</h1>
                </div>
                <button
                    onClick={() => window.open("https://instagram.com", "_blank")}
                    className="cursor-pointer transition-all border border-neutral-100 hover:ring-2 ring-[var(--TextColor)] p-1.5 rounded-md"
                >
                    <Instagram />
                </button>
            </header>

            {/* Sidebar */}
            <aside
                ref={closeSidebarMenuRef}
                className={`transition-transform duration-500 ${menuOpen ? "translate-x-0" : "-translate-x-full"} fixed bg-white w-[60%] md:w-[25%] h-full z-50`}
            >
                {/* Sidebar Top Image */}
                <div
                    className="bg-cover bg-center h-[20%] text-white"
                    style={{ backgroundImage: `url(${BackgroundImage})` }}
                >
                    <div className="bg-black/80 p-2 h-full flex flex-col justify-end gap-2">
                        <h2 className="text-[var(--TextColor)]">Think and Grow Rich</h2>
                        <h4 className="text-white text-sm">Napoleon Hill</h4>
                    </div>
                </div>

                {/* Sidebar Menu Items */}
                <div className="border-r border-neutral-100 h-full overflow-y-auto">

                    <Link to={"/"}>
                        <button className="flex cursor-pointer items-center gap-3 w-full text-left text-sm mt-5 px-5 py-2 hover:bg-neutral-100 transition">
                            <span className={`${Location === "/" ? "text-[var(--TextColor)]" : ""}`}><MapPinHouse size={17} /></span> Home
                        </button>
                    </Link>

                    {SideMenus.map((section, index) => (
                        <div key={index} className={`${index === 0 && "border-b border-neutral-100 mb-3 pt-2 pb-5"}`}>
                            <h4 className="p-2 text-xs text-neutral-500">{section.group}</h4>
                            {section.items.map((item, i) =>
                                item.link ? (
                                    <Link key={i} to={item.link}>
                                        <button onClick={() => setMenuOpen(false)} className="flex cursor-pointer items-center gap-3 w-full text-left text-sm px-5 py-2 hover:bg-neutral-100 transition">
                                            <span className={`${item.link === Location ? "text-[var(--TextColor)]" : ""}`}>{item.icon}</span> {item.title}
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        key={i}
                                        onClick={item.onClick}
                                        className="flex cursor-pointer items-center gap-3 w-full text-left text-sm px-5 py-2 hover:bg-neutral-100 transition-colors"
                                    >
                                        {item.icon} {item.title}
                                    </button>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </aside>
        </>
    )
}

export default Header
