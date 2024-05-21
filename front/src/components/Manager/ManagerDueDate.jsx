import { useEffect, useRef, useState } from "react"

export default function ManagerDueDate({ action, data }) {
    const [inputValue, setInputValue] = useState("");
    const dueDateRef = useRef(null)

    useEffect(() => {
        if (data) {
            const formattedDate = new Date(data).toISOString().slice(0, 16);
            setInputValue(formattedDate);
        }
    }, [data]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        action(e.target.value);
    };

    return (
        <section className="w-full flex flex-col">
            <h1 className="font-bold">Due date</h1>
            <input type="datetime-local" className={`w-full h-10 px-4 py-2 border-2 border-slate-400 dark:border-neutral-600 rounded-lg resize-none 
                    overflow-hidden focus:outline-none break-words bg-transparent`} value={inputValue}
                    onChange={handleChange} ref={dueDateRef}/>
        </section>
    )
}

