import { useEffect, useState } from "react"
import MenuListCard from "./Menu/MenuListCard"



export default function Menu() {

    return (
        <nav className="w-[400px] h-full bg-slate-100 p-6">
            <MenuListCard/>
        </nav>
    )
}