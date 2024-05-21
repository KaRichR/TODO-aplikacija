import axios from 'axios';
import { useState } from 'react';

import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/api/auth', { username, password } ,{withCredentials: true});
            window.location = '../todo/upcoming';
        }
        catch (error) {
            setError(true);
            console.error('Login error:', error);
        }
    }

    return (
        <main className='w-[520px] h-[720px] bg-slate-100 dark:bg-neutral-800 z-10 rounded-xl flex flex-col px-8 py-4 justify-around select-none'>
            <header className='w-full flex flex-col items-center'>
                <h1 className='w-min text-4xl leading-[48px] font-black text-center bg-gradient-to-br from-indigo-400 to-pink-500 bg-clip-text text-transparent'>Login</h1>
                <h2 className='text-black dark:text-white text-xl font-semibold text-center'>with your account</h2>
            </header>

            <section className='w-full flex flex-col gap-4'>
                <div className='w-full flex flex-col gap-1'>
                    <header className='flex items-center gap-1'>
                        <Icon icon="tabler:user" className="w-5 h-5" />
                        <h1 className='text-black dark:text-white text-base font-semibold'>Username</h1>
                    </header>

                    <input 
                        type="text" 
                        name='username'
                        placeholder='Username'
                        className='w-full h-10 px-4 rounded-lg bg-slate-200 dark:bg-neutral-700 focus:outline-none'
                        onInput={e => setUsername(e.target.value)}
                    />
                </div>

                <div className='w-full flex flex-col gap-1'>
                    <header className='flex items-center gap-1'>
                        <Icon icon="tabler:lock" className="w-5 h-5" />
                        <h1 className='text-black dark:text-white text-base font-semibold'>Password</h1>
                    </header>

                    <input 
                        type="password" 
                        name='password' 
                        placeholder='Password'
                        className='w-full h-10 px-4 rounded-lg bg-slate-200 dark:bg-neutral-700 focus:outline-none'
                        onInput={e => setPassword(e.target.value)}
                    />
                    <p className={`text-xs text-red-400 dark:text-red-500 ${error ? '' : 'hidden'}`}>Incorrect username or password. Try again!</p>
                </div>
            </section>

            <footer className='w-full flex flex-col gap-8'>
                <button 
                    className='w-full h-12 bg-gradient-to-br from-indigo-400 to-pink-500 rounded-lg text-white font-bold text-xl active:scale-95 transition-transform' 
                    onClick={handleSubmit}
                >
                    Login
                </button>
                <div className='w-full flex flex-col gap-1'>
                    <h1 className='font-semibold text-center'>Don't have an account?</h1>
                    <Link to='/register' className='w-full h-12 text-xl font-black active:scale-95 transition-transform text-center'>
                        Create
                    </Link>
                </div>
            </footer>
        </main>
    )
}