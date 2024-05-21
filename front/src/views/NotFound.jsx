export default function NotFound() {
    return (
        <main className="w-full h-full select-none flex flex-col gap-8 justify-center items-center bg-slate-200 dark:bg-neutral-900 text-slate-100 dark:text-neutral-800">
            <header className="flex flex-col items-center">
                <h1 className="text-9xl font-black">404</h1>
                <h2 className="text-4xl font-bold">Page not found</h2>
            </header>

            <button 
                className="px-6 py-2 rounded-lg font-bold text-lg bg-gradient-to-br from-indigo-400 to-pink-500 text-white active:scale-95 transition-transform"
                onClick={() => window.location.href = "/"}
            >
                Go home
            </button>
        </main>
    )
}