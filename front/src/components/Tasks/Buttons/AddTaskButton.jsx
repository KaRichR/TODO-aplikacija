import { Icon } from "@iconify/react";
import { useManager } from "../../../context/ManagerContext";


export default function handleClick() {
    const { setAction } = useManager();
    function handleAddTask() {
        setAction('add-task');
    }

    return (
        <button className={`w-full h-full rounded-lg text-slate-800 dark:text-slate-100 flex items-center gap-2 justify-center border-2 dark:border-neutral-500 border-slate-400 transition-[transform,background] active:scale-95`} onClick={handleAddTask}>
            <Icon icon={`tabler:plus`} className="w-5 h-5" />
            Add Task
        </button>
    )
}