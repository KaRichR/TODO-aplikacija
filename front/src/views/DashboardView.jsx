import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

// @ Context
import {useManager } from "../context/ManagerContext";

// @ Components
import Tasks from "../components/Tasks";
import Manager from "../components/Manager";
import Menu from "../components/Menu";


export default function DashboardView() {
    const Data = useLoaderData();
    return (
        <div className="w-full h-full flex relative justify-center">
            {
                Data.authenticated
                &&
                <>

                    <Menu userID={Data.userID}/>
                        <div className="w-full sm:w-auto flex sm:grow">
                            <Tasks userID={Data.userID}/>
                            <Manager userID={Data.userID}/>
                        </div>
                </>
                    

                        
            }
    
        </div>
    )
}

// Loader
export const DashboardLoader = async () => {
    try {
        const res = await axios.get('http://localhost:3000/api/auth/status', { withCredentials: true });
        return res.data
    }
    catch (err) {
        window.location.href = "/login";
    }
}