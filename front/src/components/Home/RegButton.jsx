import { Link } from "react-router-dom";    

export default function RegButton() {

    return (
        <Link to={'/register'} className="w-min cursor-pointer text-lg font-bold py-2 px-6 border-2 border-slate-100 text-slate-100 rounded-lg active:scale-95 select-none">
            REGISTER
        </Link>
    )
}