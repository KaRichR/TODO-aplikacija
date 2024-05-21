import { useEffect, useState } from "react";
import axios from "axios";

// @ Components
import ManagerInput from "./ManagerInput"
import ManagerColor from "./ManagerColor"
import CancelButton from "./Buttons/CancelButton"
import SaveButton from "./Buttons/SaveButton"

export default function ManagerList({ cancelAction }) {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('gray');

    const createList = async () => {
        await axios.post('http://localhost:3000/api/list/add', { title, color }, { withCredentials: true });
        cancelAction();
        window.location.href = window.location.pathname
        console.log('List created', title, color);
    }

    return (
        <>
            <section className="flex flex-col gap-4">
                <ManagerInput type="title" data={title} setData={updatedContent => {setTitle(updatedContent);}}/>
                <ManagerColor selectedColor={color} setColor={setColor}/>
            </section>

            <section className="w-full h-10 grid grid-cols-2 gap-4 absolute bottom-6 left-1/2 -translate-x-1/2 px-6">
                <CancelButton action={cancelAction}/>
                <SaveButton action={createList}/>
            </section>
        </>
    )
}