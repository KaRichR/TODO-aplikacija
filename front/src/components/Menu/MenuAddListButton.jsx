import { Icon } from "@iconify/react";
import { useManager } from "../../context/ManagerContext";

export default function MenuAddListButton() {
    const { setAction } = useManager();

    const handleClick = () => {
        setAction('add-list');
    }

    return (
        <button className="w-full h-10 rounded-lg hover:bg-slate-200 hover:dark:bg-neutral-700 px-5 flex items-center gap-2 select-none cursor-pointer transition-[background,transform] active:scale-95" onClick={handleClick}>
            <div className="w-6 h-6 grid place-items-center">
                <Icon icon="tabler:plus" className="w-5 h-5" /> 
            </div>

            <h1 className="flex grow">Add List</h1>

        </button>
    )
}