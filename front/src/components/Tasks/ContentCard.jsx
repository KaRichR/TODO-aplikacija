import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useManager } from "../../context/ManagerContext";

export default function ContentCard({ task }) {
    const { setAction, setEditingItemId } = useManager();
    const [circleOffset, setCircleOffset] = useState(0); //0 = 100%, 100 = 50%, 200 = 0%
    const [percent, setPercent] = useState('0%');

    const handleClick = () => {
        setAction('edit-task');
        setEditingItemId(task.id);
    }

    useEffect(() => {
        if(task.status === "To do") {
            setCircleOffset(200);
            setPercent('0%');
        }
        else if(task.status === "In progress") {
            setCircleOffset(110);
            setPercent('50%');
        }
        else if(task.status === "Done") {
            setCircleOffset(0);
            setPercent('100%');
        }
    }, [task.status]);

    return (
        <div className="w-full h-14 sm:h-20 grid sm:grid-cols-[minmax(4rem,4rem)_minmax(auto,auto)_minmax(5rem,5rem),minmax(4rem,4rem)] grid-cols-[minmax(3rem,3rem)_minmax(auto,auto)_minmax(3rem,3rem),minmax(3rem,3rem)] bg-slate-100 dark:bg-neutral-800 grid-rows-1 gap-2 sm:gap-4 px-3 sm:px-6 py-1 sm:py-2 rounded-lg transition-[background,transform] duration-300 cursor-pointer select-none active:scale-95" onClick={handleClick}>
            <section className="min-w-12 w-12 h-12 sm:min-w-16 sm:h-16 grid place-items-center relative">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 -rotate-90">
                    <circle cx="50%" cy="50%" r="45%" className="fill-none stroke-[7%] stroke-slate-300 dark:stroke-neutral-700"></circle>
                    <circle cx="50%" cy="50%" r="45%" className="fill-none stroke-[7%] stroke-indigo-400" style={{ strokeDasharray: "200, 200", strokeDashoffset: circleOffset, strokeLinecap: "round" }}></circle>
                </svg>
                <div className="w-full h-full absolute top-0 left-0 grid place-items-center font-bold">
                    {percent}
                </div>
            </section>

            <section className="flex flex-col justify-center overflow-hidden">
                <h1 className="w-full whitespace-nowrap font-bold min-w-0 truncate text-sm md:text-base">{task.title}</h1>
                <h2 className="whitespace-nowrap truncate text-slate-400 text-xs md:text-sm">{task.description}</h2>
            </section>

            <section className="min-w-14 h-12 sm:min-w-20 sm:h-16 grid place-items-center select-none">
                <div className={`w-full h-3/5 text-white text-xs sm:text-sm font-semibold grid place-items-center rounded-md
                    ${task.priority === "High" && "bg-red-400 dark:bg-red-500"}
                    ${task.priority === "Medium" && "bg-yellow-400 dark:bg-yellow-500"}
                    ${task.priority === "Low" && "bg-green-400 dark:bg-green-500"}`}>
                    {task.priority}
                </div>
            </section>

            <section className="w-12 sm:w-16 h-12 sm:h-16 grid place-items-center">
                <Icon icon="tabler:chevron-right" className="w-6 sm:w-8 h-6 sm:h-8" />
            </section>
        </div>

    )
}