import { Link } from "react-router-dom";

export default function LogButton() {
    return (
        <div className="relative w-min text-lg font-bold py-2 px-6 border-2 border-black border-opacity-20 rounded-lg overflow-hidden active:scale-95 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-pink-400"></div>
            <button className="relative z-10 w-full h-full text-white">
                LOGIN
            </button>
        </div>
    )
}
