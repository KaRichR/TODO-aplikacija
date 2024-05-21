import { Icon } from "@iconify/react";
import axios from "axios";
import MenuListCardColor from "./MenuListCardColor";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useManager } from "../../context/ManagerContext";

/* eslint-disable react/prop-types */
export default function MenuListCard({ data }) {
    const { setOpenListId } = useManager();
    const [items, setItems] = useState(0);

    useEffect(() => {
        if(data.tasks) {
            setItems(data.tasks.length)
        }
    })

    async function setListId() {
        setOpenListId(data.id);
        localStorage.setItem('listId', data.id);
    }

    return (
        <Link to={`/todo/${data.id}`} className="w-full h-10 rounded-lg hover:bg-slate-200 hover:dark:bg-neutral-700 px-5 flex items-center gap-2 select-none cursor-pointer transition-colors" onClick={setListId}>
            <div className="w-6 h-6 grid place-items-center">
                {
                    data.icon 
                    ? 
                    <Icon icon={data.icon} className="w-5 h-5" /> 
                    :
                    <MenuListCardColor color={data.color}/> 
                }
            </div>

            <h1 className="flex grow">{data.title}</h1>

            <div className="h-1/2 aspect-[5/3] bg-slate-150 dark:bg-neutral-600 grid place-items-center rounded transition-colors">
                <h1 className="leading-none text-xs font-bold">{items}</h1>
            </div>
        </Link>
    )
}