import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";

// @ Components
import { Icon } from "@iconify/react";
import ContentCard from "./ContentCard";
import FilterButton from "./Buttons/FilterButton";
import AddTaskButton from "./Buttons/AddTaskButton";
import MenuListCardColor from "../Menu/MenuListCardColor";
import { useEffect, useState, useRef } from "react";
import ChangeListColorMenu from "./ChangeListColorMenu";

import { useManager } from "../../context/ManagerContext";

export default function Content() {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [colorEditor, setColorEditor] = useState(false);
    const titleRef = useRef(null);
    const { menuCollapsed, setMenuCollapsed, setAction } = useManager();
    const { listId } = useParams();
    const list = useLoaderData();

    useEffect(() => {
        setAction('');
        setTitle(list.title);
        setColor(list.color);
    }, [list])

    async function changeTitle() {
        const newTitle = titleRef.current.innerText;
        setTitle(titleRef.current.innerText);
        await axios.patch('http://localhost:3000/api/list/update', { listID: listId, title: newTitle, color }, { withCredentials: true });
    }

    async function changeColor(givenColor) {
        setColor(givenColor)
        setColorEditor(false);
    }

    async function deleteList() {
        await axios.post(`http://localhost:3000/api/list/delete`, { listID: listId}, { withCredentials: true });
        window.location.href = "/todo/upcoming";
    }

    return (
        <>
            <header className="flex items-center justify-between px-2">
                <section className="flex items-center gap-4 h-full">
                        <div className="w-6 h-6 lg:hidden" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                            <Icon icon="tabler:menu-2" className="w-6 h-6 cursor-pointer" />
                        </div>
                    <div className="flex gap-2 h-full relative">
                        {
                            listId !== "upcoming" &&
                            <div className="h-full grid place-items-center relative">
                                <div className="w-min h-min cursor-pointer" onClick={() => setColorEditor(!colorEditor)}>
                                    <MenuListCardColor color={color}/>
                                </div>
                                    {
                                        colorEditor && <ChangeListColorMenu color={color} action={changeColor} listID={listId}/>
                                    }
                            </div>
                        }
                        <div>
                            {
                                listId === "upcoming" 
                                    ?
                                <h1 className={`text-3xl font-bold leading-6 select-none p-2 rounded-md focus:outline-none focus:bg-neutral-950`}>Upcoming</h1>
                                    :
                                <h1 
                                    contentEditable spellCheck={false}
                                    className={`md:text-3xl text-xl font-bold leading-6 select-none p-1 md:p-2 rounded-md focus:outline-none focus:bg-neutral-950`}
                                    ref={titleRef}
                                    suppressContentEditableWarning
                                    onBlur={() => changeTitle()}
                                    onKeyDown={(e) => {
                                        if(e.key === 'Enter') {
                                            e.preventDefault();
                                            titleRef.current.blur();
                                        }
                                    }}
                                >
                                    {title}
                                </h1>
                            }
                            
                        </div>
                    </div>
                    <div className="w-6 h-5 transition-colors duration-300 md:w-8 md:h-7 rounded bg-slate-100 dark:bg-neutral-700 grid place-items-center leading-3 font-bold md:text-lg select-none">
                        {
                            list.tasks.length
                        }
                    </div>
                </section>

                <section>
                    {
                        listId !== "upcoming" &&
                        <div className="w-8 h-8 grid place-items-center rounded-lg hover:bg-slate-100 hover:dark:bg-neutral-700 transition-[background,transform] active:scale-95 hover:text-red-400 hover:dark:text-red-500" onClick={deleteList}>
                            <Icon icon="tabler:trash" className="w-6 h-6 transition-colors"/>
                        </div>
                    }
                </section>
            </header>

            <section className="flex h-20 items-center justify-between py-5 px-1 sm:px-0">
                <div className="w-32 md:w-48 h-full text-sm md:text-base">
                    {
                        listId !== "upcoming" && <AddTaskButton/>
                    }
                </div>

                {/* <div className="w-32 md:w-48 h-full text-sm md:text-base">
                    <FilterButton/>
                </div> */}
            </section>

            <section className="w-full h-full flex flex-col gap-2">
                {
                    list.tasks &&
                    list.tasks.map((task, index) => (
                        <ContentCard key={index} task={task}/>
                    ))
                }
            </section>
        </>
    )
}

// Loader
export const ContentLoader = async ({ params }) => {
    const { listId } = params;
    
    try {
        if(listId === "upcoming") {
            const res = await axios.get('http://localhost:3000/api/task/upcoming', { withCredentials: true });
            return res.data.lists
        }
        else {
            const res = await axios.get(`http://localhost:3000/api/list/${listId}`, { withCredentials: true });
            return res.data.lists
        }
    }
    catch (err) {
        window.location.href = "/login";
    }
}