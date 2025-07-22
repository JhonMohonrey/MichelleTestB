'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../img/townImg.png'

export default function page() {
    const router = useRouter()

    const loginFunction = () => {
        router.push('/login')
    }

    const ContactFunction = () => {
        router.push('/contact')
    }

    const BookingFunction = () => {
        router.push('/booking')
    }

    const ProgramFunction = () => {
        router.push('/program')
    }
    const ServiceFunction = () => {
        router.push('/servicepage')
    }
    const AboutFunction = () => {
        router.push('/about')
    }

    const backHome = () => {
        router.push('/')
    }
    return (
      <header className="bg-blue-400 px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div onClick={backHome} className='border flex items-center justify-center gap-2 active:opacity-50 '>
                <Image 
                    src={logo} 
                    className='w-8'
                    alt='logo'
                />
                <h1  className="text-xl text-white font-extrabold cursor-pointer select-none">
                    Barangay
                </h1>
            </div>

            <nav className="hidden md:flex gap-6 text-sm ">
                <p onClick={loginFunction}
                className='font-bold text-white cursor-pointer active:opacity-50 text-[1vw]'>
                    Sign in
                </p>
                <p onClick={ContactFunction}
                className='font-bold text-white cursor-pointer active:opacity-50 text-[1vw]'>
                    Contact
                </p>
                <p onClick={BookingFunction}
                className='font-bold text-white cursor-pointer active:opacity-50 text-[1vw]'>
                    Booking
                </p>
                <p onClick={ProgramFunction}
                className='font-bold text-white cursor-pointer active:opacity-50 text-[1vw]'>
                    Program
                </p>
                <p onClick={ServiceFunction}
                className='font-bold text-white cursor-pointer active:opacity-50 text-[1vw]'>
                    Service
                </p>
                <p onClick={AboutFunction}
                className='font-bold text-white cursor-pointer active:opacity-50 text-[1vw]'>
                    About
                </p>
            </nav>

            <button className="md:hidden text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
      </header>
    );
}