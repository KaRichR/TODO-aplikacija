import { useState, useEffect } from "react";

export default function ManagerStatus({ action, status }) {
    const [circleOffset, setCircleOffset] = useState(0); //0 = 100%, 110 = 50%, 200 = 0%
    const [percent, setPercent] = useState('0%');

    useEffect(() => {
        if(status === "To do") {
            setCircleOffset(200);
            setPercent('0%');
        }
        else if(status === "In progress") {
            setCircleOffset(130);
            setPercent('50%');
        }
        else if(status === "Done") {
            setCircleOffset(0);
            setPercent('100%');
        }
    }, [status]);

    return (
        <section className="w-full flex flex-col select-none">
            <h1 className="font-bold">Status</h1>
            <div className="w-full h-12 flex items-center gap-4">
                <section className="w-8 h-8 sm:w-12 sm:h-12 relative">
                    <svg className="w-8 h-8 sm:w-12 sm:h-12 -rotate-90">
                        <circle cx="50%" cy="50%" r="45%" className="fill-none stroke-[7%] stroke-slate-300 dark:stroke-neutral-700"></circle>
                        <circle cx="50%" cy="50%" r="45%" className="fill-none stroke-[7%] stroke-indigo-400" style={{ strokeDasharray: "200, 200", strokeDashoffset: circleOffset, strokeLinecap: "round" }}></circle>
                    </svg>
                    <div className="w-full h-full absolute top-0 left-0 grid place-items-center font-bold text-sm">
                        {percent}
                    </div>
                </section>

                <section className="h-10 flex grow p-1 bg-slate-200 dark:bg-neutral-900 rounded-lg relative transition-colors">
                    <div className="w-full h-full flex relative text-sm font-bold">
                        <button className="w-full h-full rounded-md transition-colors z-10" onClick={() => action('To do')}>
                            To do
                        </button>

                        <button className="w-full h-full rounded-md transition-colors z-10" onClick={() => action('In progress')}>
                            In progress
                        </button>

                        <button className="w-full h-full rounded-md transition-colors z-10" onClick={() => action('Done')}>
                            Done
                        </button>

                        <div 
                            className={`w-1/3 h-full absolute top-0 rounded-md dark:bg-neutral-700 bg-slate-100 transition-[left] duration-300
                                ${status === 'To do' && "left-0"}
                                ${status === 'In progress' && "left-1/3"}
                                ${status === 'Done' && "left-2/3"}
                            `}
                        ></div>
                    </div>
                </section>
            </div>
        </section>
    )
}