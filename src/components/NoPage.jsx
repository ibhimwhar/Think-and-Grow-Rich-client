import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Image from "../assets/lamp-61d9b3cf.png"

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center text-[var(--TextColor)]">
            {/* Illustration */}
            <div className="w-full md:w-1/2 p-4">
                <img
                    src={Image}
                    alt="404 Illustration"
                    className="max-w-full h-auto"
                />
            </div>

            {/* Text & Button */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <h1 className="text-9xl font-bold">404</h1>
                <p className="text-2xl font-semibold">Oops! Page not found</p>
                <p className="text-sm text-neutral-500 max-w-md">
                    The page you're looking for doesn't exist or has been moved. Let's go back home.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-[var(--TextColor)] text-white px-5 py-2 rounded-full hover:opacity-80 transition"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;