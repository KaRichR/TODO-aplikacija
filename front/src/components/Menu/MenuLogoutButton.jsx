import axios from "axios";
import { Icon } from "@iconify/react";

export default function MenuActionButton() {
    const signOut = async () => {
        await axios.post('http://localhost:3000/api/auth/logout', { withCredentials: true });
        window.location = "/";
    }

    return (
        <div className="w-min h-8 rounded-lg hover:bg-slate-200 hover:dark:bg-neutral-700 px-5 flex items-center gap-2 select-none cursor-pointer transition-colors" onClick={signOut}>
            <div className="w-6 h-6 grid place-items-center">
                <Icon icon="tabler:logout" className="w-5 h-5" /> 
            </div>

            <h1 className="flex grow whitespace-nowrap">Sign out</h1>
        </div>
    )
}