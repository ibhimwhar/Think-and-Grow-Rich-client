import Profile from ".././assets/profile.png"
import Image_1 from ".././assets/download.png"
import Image_2 from ".././assets/download (1).png"
import Image_3 from ".././assets/download (2).png"
import Image_4 from ".././assets/download (3).png"
import Image_5 from ".././assets/download (4).png"
import Image_6 from ".././assets/download (5).png"
import { Github } from "lucide-react"

const Developer = () => {

    const skills = [
        { id: 1, name: `HTML & CSS` },
        { id: 2, name: `JavaScript (ES6+)` },
        { id: 3, name: `React.js` },
        { id: 4, name: `Tailwind CSS` },
        { id: 5, name: `Node.js (Basic)` },
        { id: 6, name: `Git & GitHub` },
    ]

    const projects = [
        { id: 1, title: "quotes-generator", link: "https://quotes-generator-ten-neon.vercel.app/", img: Image_1 },
        { id: 2, title: "threads-hub", link: "https://threads-hub.vercel.app/", img: Image_2 },
        { id: 3, title: "task-manager", link: "https://task-manager-client-pearl.vercel.app/", img: Image_3 },
        { id: 4, title: "dark-sole", link: "https://dark-sole-client.vercel.app/", img: Image_4 },
        { id: 5, title: "blog", link: "https://blog-eight-gamma-48.vercel.app/", img: Image_5 },
        { id: 6, title: "website", link: "https://website-project-eta.vercel.app/", img: Image_6 },

    ]
    return (
        <div className="min-h-screen flex items-center justify-center text-[var(--TextColor)]">

            <div className="max-w-4xl w-full border border-neutral-200 rounded-md p-5">

                {/* Profile Section */}
                <div className="md:flex items-center gap-6">

                    <img
                        src={Profile}
                        alt="Developer"
                        className="md:w-24 h-34 md:h-42 object-cover"
                    />

                    <div className="space-y-2">

                        <h1 className="text-4xl sm:text-5xl font-bold">I'm Ibrahim</h1>

                        <p className="text-neutral-500 text-sm">Frontend Developer & UI / UX Designer</p>

                        <a
                            href="http://github.com/ibhimwhar"
                            target="_blank"
                        >
                            <button
                                className="text-sm cursor-pointer border border-neutral-100 p-1.5 rounded-full">
                                <Github size={20} />
                            </button>
                        </a>

                    </div>

                </div>

                <div className="mt-10 space-y-10">
                    {/* About Me */}
                    <div className="md:p-10">

                        <h2 className="text-2xl font-semibold mb-2">About Me</h2>

                        <p className="text-neutral-500 leading-relaxed text-justify">
                            I'm a passionate web developer skilled in creating responsive and dynamic websites using modern tools like React, Tailwind CSS, and JavaScript. I love turning ideas into clean, interactive interfaces and constantly improve my skills to stay ahead in the web development space.
                        </p>

                    </div>

                    {/* Skills */}
                    <>

                        <h2 className="text-2xl font-semibold mb-2">My Skills</h2>

                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-black">
                            {skills.map((item) => {
                                return (
                                    <li key={item.id} className="border border-neutral-200 p-4 rounded-md">{item.name}</li>
                                )
                            })}
                        </ul>

                    </>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">

                    {projects.map((items) => (
                        <a
                            key={items.id}
                            href={items.link}
                            target="_blank"
                            title={items.title}
                        >
                            <img
                                src={items.img}
                                alt={`vercel project ${items.id}`}
                                className="w-full border border-neutral-100 object-cover rounded-md"
                            />
                        </a>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default Developer;