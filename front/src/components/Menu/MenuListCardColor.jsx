export default function MenuListCardColor({color}) {
    return (
        <>
            {
                color === "gray" && <div className="w-4 h-4 rounded border-4 dark:border-slate-500 border-slate-400 transition-colors"></div>
            }
            {
                color === "orange" && <div className="w-4 h-4 rounded border-4 dark:border-orange-500 border-orange-400 transition-colors"></div>
            }
            {
                color === "yellow" && <div className="w-4 h-4 rounded border-4 dark:border-yellow-500 border-yellow-400 transition-colors"></div>
            }
            {
                color === "green" && <div className="w-4 h-4 rounded border-4 dark:border-green-500 border-green-400 transition-colors"></div>
            }
            {
                color === "cyan" && <div className="w-4 h-4 rounded border-4 dark:border-cyan-500 border-cyan-400 transition-colors"></div>
            }
            {
                color === "blue" && <div className="w-4 h-4 rounded border-4 dark:border-blue-500 border-blue-400 transition-colors"></div>
            }
            {
                color === "purple" && <div className="w-4 h-4 rounded border-4 dark:border-purple-500 border-purple-400 transition-colors"></div>
            }
            {
                color === "pink" && <div className="w-4 h-4 rounded border-4 dark:border-pink-500 border-pink-400 transition-colors"></div>
            }
            {
                color === "rose" && <div className="w-4 h-4 rounded border-4 dark:border-rose-500 border-rose-400 transition-colors"></div>
            }
            {
                color === "red" && <div className="w-4 h-4 rounded border-4 dark:border-red-500 border-red-400 transition-colors"></div>
            }
        </>
    )
}