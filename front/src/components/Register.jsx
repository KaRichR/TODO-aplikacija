import axios from 'axios';
import { useState, useRef } from 'react';

import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

export default function Register() {
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [passwordsNotMatch, setPasswordsNotMath] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [passwordStrength, setPasswordStrength] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(invalidUsername || invalidEmail || passwordsNotMatch || passwordStrength === 'Invalid') {
            return
        }

        try {
            await axios.post('http://localhost:3000/api/auth/register', { username, email, password });
            window.location = '/login';
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const validateUsername = () => {
        const username = usernameRef.current.value.trim();
        const isValid = /^[a-zA-Z0-9]+$/.test(username);
    
        if (isValid) {
          setUsername(username);
          setInvalidUsername(false);
        } else {
          setInvalidUsername(true);
        }
    };

    const validateEmail = () => {
        const email = emailRef.current.value.trim();
    
        // Regular expression to check for valid email format
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
        if (isValid) {
          setEmail(email);
          setInvalidEmail(false);
        } else {
          setInvalidEmail(true);
        }
    };

    const validatePassword = () => {
        const password = passwordRef.current.value;

        let strength = 'Weak';
        if(password.length === 0) {
            strength = ''
        }
        else if (password.length < 7 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
            strength = 'Invalid';
        } else if (password.length >= 7 && password.length <= 10) {
            strength = /[\W_]/.test(password) ? 'Medium' : 'Weak';
        } else {
            strength = /[\W_]/.test(password) ? 'Very Strong' : 'Strong';
        }
    
        if(strength === 'Invalid') {
            setPasswordStrength('Invalid');
        }
        else {
            setPasswordStrength(strength);
            setPassword(password);
        }

        setPasswordStrength(strength);
    };

    const comparePasswords = () => {
        const password = passwordRef.current.value;
        const repeatPassword = passwordConfirmRef.current.value;
        const isMatch = password === repeatPassword;
        if (!isMatch) {
            setPasswordsNotMath(true);
        }   
        else {
            setPasswordsNotMath(false);
        }
    };

    return (
        <main className='w-[520px] h-[720px] bg-slate-100 dark:bg-neutral-800 z-10 rounded-xl flex flex-col px-8 py-4 justify-around select-none'>
            <header className='w-full flex flex-col items-center'>
                <h1 className='w-min text-4xl leading-[48px] font-black text-center bg-gradient-to-br from-indigo-400 to-pink-500 bg-clip-text text-transparent'>Register</h1>
                <h2 className='text-black dark:text-white text-xl font-semibold text-center'>your new account</h2>
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
                        ref={usernameRef}
                        className={`w-full h-10 px-4 rounded-lg bg-slate-200 dark:bg-neutral-700 focus:outline-none ${invalidUsername && 'border border-red-400 dark:border-red-500'}`}
                        onBlur={validateUsername}
                    />
                    <p className={`text-xs text-red-400 dark:text-red-500 ${invalidUsername ? '' : 'hidden'}`}>Username can not contain special characters or spaces</p>
                </div>

                <div className='w-full flex flex-col gap-1'>
                    <header className='flex items-center gap-1'>
                        <Icon icon="tabler:mail" className="w-5 h-5" />
                        <h1 className='text-black dark:text-white text-base font-semibold'>Email</h1>
                    </header>

                    <input 
                        type="email" 
                        name='email'
                        placeholder='Email'
                        ref={emailRef}
                        className={`w-full h-10 px-4 rounded-lg bg-slate-200 dark:bg-neutral-700 focus:outline-none ${invalidEmail && 'border border-red-400 dark:border-red-500'}`}
                        onBlur={validateEmail}
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
                        ref={passwordRef}
                        className={`w-full h-10 px-4 rounded-lg bg-slate-200 dark:bg-neutral-700 focus:outline-none ${passwordStrength === 'Invalid' && 'border border-red-400 dark:border-red-500'}`}
                        onBlur={validatePassword}
                    />
                    {
                        passwordStrength === 'Invalid' && (
                            <p className='text-xs text-red-400 dark:text-red-500'>Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character</p>
                        )
                    }
                    {
                        passwordStrength === 'Weak' && (
                            <p className='text-xs text-red-400 dark:text-red-500'>Your password is weak</p>
                        )
                    }
                    {
                        passwordStrength === 'Medium' && (
                            <p className='text-xs text-yellow-400 dark:text-yellow-500'>Your password is medium</p>
                        )
                    }
                    {
                        passwordStrength === 'Strong' && (
                            <p className='text-xs text-green-400 dark:text-green-500'>Your password is strong</p>
                        )
                    }
                    {
                        passwordStrength === 'Very Strong' && (
                            <p className='text-xs text-green-400 dark:text-green-500'>Your password is very strong</p>
                        )
                    }
                </div>

                <div className='w-full flex flex-col gap-1'>
                    <header className='flex items-center gap-1'>
                        <Icon icon="tabler:lock" className="w-5 h-5" />
                        <h1 className='text-black dark:text-white text-base font-semibold'>Password</h1>
                    </header>

                    <input 
                        type="password" 
                        name='repeat_password' 
                        placeholder='Repeat Password'
                        ref={passwordConfirmRef}
                        className={`w-full h-10 px-4 rounded-lg bg-slate-200 dark:bg-neutral-700 focus:outline-none ${passwordsNotMatch && 'border border-red-400 dark:border-red-500'}`}
                        onBlur={comparePasswords}
                    />
                    <p className={`text-xs text-red-400 dark:text-red-500 ${passwordsNotMatch ? '' : 'hidden'}`}>Passwords do not match</p>
                </div>
            </section>

            <footer className='w-full flex flex-col gap-8'>
                <button 
                    className='w-full h-12 bg-gradient-to-br from-indigo-400 to-pink-500 rounded-lg text-white font-bold text-xl active:scale-95 transition-transform' 
                    onClick={handleSubmit}
                >
                    Register
                </button>
                <div className='w-full flex flex-col gap-1'>
                    <h1 className='font-semibold text-center'>Already have an account?</h1>
                    <Link to='/login' className='w-full h-12 text-xl font-black active:scale-95 transition-transform text-center'>
                        Login
                    </Link>
                </div>
            </footer>
        </main>
    )
}