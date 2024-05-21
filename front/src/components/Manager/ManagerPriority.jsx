export default function ManagerPriority({ action, priority}) {
    return (
        <section className="w-full flex flex-col">
            <h1 className="font-bold">Priority</h1>
            <div className="w-full h-10 grid grid-cols-3 gap-4 text-slate-100">
                <button 
                    className={`w-full h-full rounded-lg bg-green-400 hover:bg-green-500 dark:bg-green-500 hover:dark:bg-green-600 border-2 dark:border-white border-black font-bold active:scale-95 transition-[background,transform,border] 
                        ${priority === "Low" ? "border-opacity-100 dark:border-opacity-100" : "border-opacity-20 dark:border-opacity-20"}`}
                    onClick={() => action('Low')}
                >
                    Low
                </button>

                <button 
                    className={`w-full h-full rounded-lg bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 hover:dark:bg-yellow-600 border-2 dark:border-white border-black font-bold active:scale-95 transition-[background,transform,border] 
                        ${priority === "Medium" ? "border-opacity-100 dark:border-opacity-100" : "border-opacity-20 dark:border-opacity-20"}`}
                    onClick={() => action('Medium')}
                >
                    Medium
                </button>

                <button 
                    className={`w-full h-full rounded-lg bg-red-400 hover:bg-red-500 dark:bg-red-500 hover:dark:bg-red-600 border-2 dark:border-white border-black font-bold active:scale-95 transition-[background,transform,border] 
                        ${priority === "High" ? "border-opacity-100 dark:border-opacity-100" : "border-opacity-20 dark:border-opacity-20"}`} 
                    onClick={() => action('High')}
                >
                    High
                </button>
            </div>
        </section>
    )
}