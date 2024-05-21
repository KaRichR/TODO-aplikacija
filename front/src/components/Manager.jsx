import { useState, useEffect } from "react";
import axios from "axios";

// @ Context
import { useManager } from "../context/ManagerContext";

// @ Components
import { Icon } from "@iconify/react";
import ManagerTask from "./Manager/ManagerTask";
import ManagerList from "./Manager/ManagerList";

export default function Manager() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { action, setAction, editingItemId, setEditingItemId } = useManager();

    useEffect(() => {
        if(action === 'add-list' || action === 'edit-list' || action === 'add-task' || action === 'edit-task') {
            setIsCollapsed(false);
        }
        else if(action === '') {
            setIsCollapsed(true);
        }
    }, [action])

    function cancelAction() {
        setIsCollapsed(true);
        setAction('');
    }

    async function deleteTask() {
        await axios.delete(`http://localhost:3000/api/task/delete/${editingItemId}`, { withCredentials: true });
        setEditingItemId('');
        cancelAction();
        window.location.href = window.location.pathname
    }

    return (
        <aside className={`
            max-w-[548px] h-full p-4 pl-2 flex flex-col transition-[width,min-width] duration-300
            ${isCollapsed ? 'w-0 min-w-0' : "lg:w-2/5 sm:w-1/2 w-full min-w-[300px]"}
            xl:relative absolute top-0 right-0 z-20
            `}>
            <main className={`w-full h-full bg-slate-100 dark:bg-neutral-800 rounded-xl p-5 flex transition-[background,transition] relative ${isCollapsed ? 'translate-x-[100%]' : "translate-x-0"}`}>
                

                <div className={`h-full min-h-full relative transition-[width,opacity] duration-300 overflow-hidden ${action === 'add-list' ? 'w-full opacity-100' : 'w-0 opacity-0'}`}> 
                    <h1 className="text-2xl font-bold">Add List</h1>

                    <ManagerList cancelAction={cancelAction}/>
                </div>

                <div className={`h-full min-h-full relative transition-[width,opacity] duration-300 overflow-hidden  ${action === 'add-task' ? 'w-full  opacity-100' : 'w-0 opacity-0'}`}>
                    <h1 className="text-2xl font-bold">Add Task</h1>

                    <ManagerTask cancelAction={cancelAction}/>
                </div>


                <div className={`h-full min-h-full relative transition-[width,opacity] duration-300 overflow-hidden  ${action === 'edit-task' ? 'w-full  opacity-100' : 'w-0 opacity-0'}`}>
                    <header className="w-full flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Edit Task</h1>
                        <div 
                            className="w-7 h-7 rounded-md cursor-pointer active:scale-95 hover:bg-slate-200 hover:dark:bg-neutral-700 transition-[background,transform] grid place-items-center text-red-400 dark:text-red-500"
                            onClick={deleteTask}
                        >
                            <Icon icon="tabler:trash" className="w-5 h-5"/>
                        </div>
                    </header>

                    <ManagerTask cancelAction={cancelAction}/>
                </div>
                
            </main>
        </aside>
    )
}