import axios from "axios";

import MenuListCardColor from "../Menu/MenuListCardColor"

export default function ChangeListColorMenu({ action, color, listID }) {
    async function changeColor(givenColor) {
        action(givenColor);
        const newColor = givenColor;

        await axios.patch('http://localhost:3000/api/list/update', { listID, color: newColor }, { withCredentials: true });
    }

    return (
        <div className="w-min z-50 flex items-center justify-evenly gap-2 absolute top-12 -left-[2.84rem] sm:top-14 md:left-0 bg-slate-100 dark:bg-neutral-800 p-1 rounded-md">
            <div className={`w-8 h-8 grid place-items-center hover:bg-slate-200 hover:dark:bg-neutral-700 rounded ${color === "gray" && "border-2 border-black dark:border-white"}`} onClick={() => changeColor("gray")}>
                <MenuListCardColor color="gray"/>
            </div>

            <div className={`w-8 h-8 grid place-items-center hover:bg-slate-200 hover:dark:bg-neutral-700 rounded ${color === "orange" && "border-2 border-black dark:border-white"}`} onClick={() => changeColor("orange")}>
                <MenuListCardColor color="orange"/>
            </div>

            <div className={`w-8 h-8 grid place-items-center hover:bg-slate-200 hover:dark:bg-neutral-700 rounded ${color === "yellow" && "border-2 border-black dark:border-white"}`} onClick={() => changeColor("yellow")}>
                <MenuListCardColor color="yellow"/>
            </div>

            <div className={`w-8 h-8 grid place-items-center hover:bg-slate-200 hover:dark:bg-neutral-700 rounded ${color === "green" && "border-2 border-black dark:border-white"}`} onClick={() => changeColor("green")}>
                <MenuListCardColor color="green"/>
            </div>

            <div className={`w-8 h-8 grid place-items-center hover:bg-slate-200 hover:dark:bg-neutral-700 rounded ${color === "cyan" && "border-2 border-black dark:border-white"}`} onClick={() => changeColor("cyan")}>
                <MenuListCardColor color="cyan"/>
            </div>

            <div className={`w-8 h-8 grid place-items-center hover:bg-slate-200 hover:dark:bg-neutral-700 rounded ${color === "blue" && "border-2 border-black dark:border-white"}`} onClick={() => changeColor("blue")}>
                <MenuListCardColor color="blue"/>
            </div>

            <div className={`w-8 h-8 grid place-items-center hover:bg-slate-200 hover:dark:bg-neutral-700 rounded ${color === "purple" && "border-2 border-black dark:border-white"}`} onClick={() => changeColor("purple")}>
                <MenuListCardColor color="purple"/>
            </div>

            <div className={`w-8 h-8 grid place-items-center hover:bg-slate-200 hover:dark:bg-neutral-700 rounded ${color === "pink" && "border-2 border-black dark:border-white"}`} onClick={() => changeColor("pink")}>
                <MenuListCardColor color="pink"/>
            </div>

            <div className={`w-8 h-8 grid place-items-center hover:bg-slate-200 hover:dark:bg-neutral-700 rounded ${color === "rose" && "border-2 border-black dark:border-white"}`} onClick={() => changeColor("rose")}>
                <MenuListCardColor color="rose"/>
            </div>

            <div className={`w-8 h-8 grid place-items-center hover:bg-slate-200 hover:dark:bg-neutral-700 rounded ${color === "red" && "border-2 border-black dark:border-white"}`} onClick={() => changeColor("red")}>
                <MenuListCardColor color="red"/>
            </div>
        </div>
    )
}