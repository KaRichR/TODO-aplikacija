import { useEffect, useState } from "react";
import axios from "axios";
import { useManager } from "../context/ManagerContext";

import { Icon } from "@iconify/react/dist/iconify.js";
import MenuListCard from "./Menu/MenuListCard";
import MenuLogoutButton from "./Menu/MenuLogoutButton";
import MenuThemeSwitch from "./Menu/MenuThemeSwitch";
import MenuAddListButton from "./Menu/MenuAddListButton";

export default function Menu() {
    const { menuCollapsed, setMenuCollapsed } = useManager();
    const [lists, setLists] = useState([]);
    const [upcoming, setUpcoming] = useState({});
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const getLists = async () => {
            const res = await axios.get('http://localhost:3000/api/list/lists', { withCredentials: true });
            setLists(res.data.lists);
            const getUpcoming = res.data.lists.find(list => list.id === "upcoming");
            setUpcoming(getUpcoming);
        }
        getLists();
    },[])

    useEffect(() => {
        window.addEventListener('resize', () => {
            const viewportSize = async () => {
                if(window.innerWidth >= 1024) {
                    setMenuCollapsed(false);
                }

                if(window.innerWidth < 1024) {
                    setMenuCollapsed(true);
                }
            }
            viewportSize();
        })
        
    }, []) 

    return (
        <nav 
        className={`
            h-full bg-slate-100 dark:bg-neutral-800 p-6 flex flex-col gap-6
            transition-[background,transform] duration-300
            w-full absolute top-0 left-0 z-20 ${menuCollapsed ? "-translate-x-full" : "translate-x-0"}

            sm:max-w-[360px]

            lg:w-1/3

            xl:w-1/4 xl:max-w-[360px] xl:min-w-[300px] lg:static
            select-none
        `}>
            <header className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Menu</h1>

                <div className="w-6 h-6 lg:hidden">
                    <Icon icon="tabler:x" className="w-6 h-6 cursor-pointer" onClick={() => setMenuCollapsed(!menuCollapsed)} />
                </div>
            </header>

            <section className="w-full flex flex-col grow gap-4">
                <section className="w-full flex flex-col gap-2">

                    <MenuListCard data={upcoming}/>

                </section>

                <hr className="w-full h-px bg-black dark:bg-white bg-opacity-20"/>

                <section className="w-full flex flex-col gap-1">
                    {
                        lists.length > 0 &&
                        lists.map((item, index) => {
                            if(item.id === "upcoming") return null
                            return <MenuListCard key={index} data={item}/>
                        })
                    }
                </section>

                <MenuAddListButton />
            </section>

            <footer className="w-full flex justify-between items-center">
                <MenuLogoutButton />
                <MenuThemeSwitch/>
            </footer>
        </nav>
    )
}