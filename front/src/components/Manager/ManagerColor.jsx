import { useState } from "react"
import MenuListCardColor from "../Menu/MenuListCardColor";

export default function ManagerColor({ selectedColor, setColor }) {
    const colors = ['gray', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'rose', 'red']

    return (
        <section className="w-full flex flex-col">
            <header className="w-full flex items-center justify-between">
                <h1 className="font-bold">Color</h1>
            </header>
            <div className="w-full h-12 flex items-center justify-evenly bg-slate-200 dark:bg-neutral-900 rounded-lg">
                {
                    colors.map((color, index) => (
                        <div key={index} className={`w-8 h-8 bg-slate-100 dark:bg-neutral-800 rounded-md grid place-items-center cursor-pointer border-opacity-50 dark:border-opacity-50 ${selectedColor === color ? "border-2 border-black dark:border-white" : ""}`} onClick={() => setColor(color)}>
                            <MenuListCardColor color={color}/>
                        </div>
                    ))
                    
                }
            </div>
        </section>
    )
}