import { Icon } from "@iconify/react";
import { useManager } from "../../../context/ManagerContext";

export default function SaveButton({ action }) {
    function handleSave() {
        action();
    }

    return (
        <button className="w-full h-full rounded-lg text-slate-800 dark:text-slate-100 active:scale-95 flex items-center gap-2 justify-center bg-gradient-to-br from-indigo-400 dark:from-indigo-500 to-fuchsia-400 dark:to-fuchsia-500 transition-transform border-2 border-white border-opacity-10" onClick={handleSave}>
            <Icon icon="tabler:save" className="w-5 h-5" />
            Save
        </button>
    )
}