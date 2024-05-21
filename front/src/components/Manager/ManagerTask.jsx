import { useEffect, useState } from "react"
import axios from "axios";

import ManagerInput from "./ManagerInput"
import ManagerDueDate from "./ManagerDueDate"
import ManagerPriority from "./ManagerPriority"
import ManagerStatus from "./ManagerStatus"
import CancelButton from "./Buttons/CancelButton"
import SaveButton from "./Buttons/SaveButton"

import { useManager } from "../../context/ManagerContext"

export default function ManagerTask({ cancelAction }) {
    const { action, openListId, setOpenListId, editingItemId } = useManager();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState();
    const [status, setStatus] = useState('To do');
    const [priority, setPriority] = useState('Low');
    const createTask = async () => {
        if(action === 'add-task') {
            if (openListId === 'upcoming') {
                return
            }
            await axios.post('http://localhost:3000/api/task/add', { listID: openListId, title, description, dueDate, status, priority }, { withCredentials: true });
            window.location.href = window.location.pathname
        }
        else if (action === 'edit-task') {
            await axios.patch(`http://localhost:3000/api/task/update`, {taskID: editingItemId, title, description, dueDate, status, priority }, { withCredentials: true });
            window.location.href = window.location.pathname
        }
        cancelAction();
    }

    useEffect(() => {
        if(!openListId) {
            setOpenListId(localStorage.getItem('listId'));
        }
        const getTask = async () => {
            if(action === 'edit-task' && editingItemId) {
                const res = await axios.get(`http://localhost:3000/api/task/${editingItemId}`, { withCredentials: true })
                setTitle(res.data.task.title);
                setDescription(res.data.task.description);
                setStatus(res.data.task.status);
                setPriority(res.data.task.priority);
                if(res.data.task.dueDate) {
                    setDueDate(new Date(res.data.task.dueDate));
                }
                
            }
        }
        getTask()
    }, [editingItemId])

    useEffect(() => {
        if(action === 'add-task') {
            setTitle('');
            setDescription('');
            setDueDate();
            setStatus('To do');
            setPriority('Low');
        }
    }, [action])

    return (
        <>
            <section className="flex flex-col gap-4">
                <ManagerInput type="title" setData={updatedContent => {setTitle(updatedContent);}} data={title}/>
                <ManagerInput type="description" setData={updatedContent => {setDescription(updatedContent);}} data={description}/>
            

            <hr className="w-full h-px dark:bg-white bg-black opacity-20 transition-colors"/>
                <ManagerDueDate action={setDueDate} data={dueDate}/>
            
                <ManagerStatus action={setStatus} status={status}/>
                <ManagerPriority action={setPriority} priority={priority}/>
            </section>
                

            <section className="w-full h-10 grid grid-cols-2 gap-4 absolute bottom-6 left-1/2 -translate-x-1/2 px-6">
                <CancelButton action={cancelAction}/>
                <SaveButton action={createTask}/>
            </section>
        </>
    )
}