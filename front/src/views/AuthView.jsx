import { useLocation, Link } from 'react-router-dom';

import Register from '../components/Register';
import Login from '../components/Login';
import RegButton from '../components/Home/RegButton';
import LogButton from '../components/Home/LogButton';

export default function AuthView() {
    const location = useLocation();
    const lastWord = location.pathname.split('/').pop();
    const storedTheme = localStorage.getItem('theme');

    return (
        <main className='w-full h-full grid place-items-center bg-gradient-to-br from-indigo-400 to-pink-500 relative overflow-hidden'>
            <img src="/plus.png" className='w-full absolute top-0 left-0'/>
            {
                storedTheme === 'dark'
                    ?
                <img src="/waveDark.png" className="w-full absolute bottom-0 left-0"/>
                    :
                <img src="/waveLight.png" className="w-full absolute bottom-0 left-0"/>
                    
            }

            {
                lastWord === 'register' ? <Register /> : <Login />
            }

            <nav className="w-full h-16 absolute top-0 left-0 flex items-center justify-between px-48">
                <Link to="/" className="w-12 h-12">
                    <img src="/Logo.png" />
                </Link>
            </nav>
        </main>
    );
}
