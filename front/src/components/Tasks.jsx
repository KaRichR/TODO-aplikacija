import { Outlet } from "react-router-dom";

export default function Tasks() {
    return (
        <main className="w-full sm:w-auto h-full flex sm:grow flex-col md:px-10 md:py-6 p-1 transition-transform duration-300">
            

            <Outlet/>
        </main>
    )
}