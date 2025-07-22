'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../img/townImg.png'

export default function page() {

    const router = useRouter()

    const loginFunction = () => {
        // setActive(prev => {
        //     prev.map(item => {
        //         return {
        //             ...item,
        //             isActive: item.name === "about" ? true : false,
        //         }
        //     })
        // })
        router.push('/login')
    }

    const ContactFunction = () => {
        // setActive(prev => {
        //     prev.map(item => {
        //         return {
        //             ...item,
        //             isActive: item.name === "about" ? true : false,
        //         }
        //     })
        // })
        router.push('/contact')
    }

    const BookingFunction = () => {
        // setActive(prev => {
        //     prev.map(item => {
        //         return {
        //             ...item,
        //             isActive: item.name === "about" ? true : false,
        //         }
        //     })
        // })
        router.push('/booking')
    }

    const ProgramFunction = () => {
        // setActive(prev => {
        //     prev.map(item => {
        //         return {
        //             ...item,
        //             isActive: item.name === "about" ? true : false,
        //         }
        //     })
        // })
        router.push('/program')
    }

    const ServiceFunction = () => {
        // setActive(prev => {
        //     prev.map(item => {
        //         return {
        //             ...item,
        //             isActive: item.name === "about" ? true : false,
        //         }
        //     })
        // })
        router.push('/servicepage')
    }

    const AboutFunction = () => {
        // setActive(prev => {
        //     prev.map(item => {
        //         return {
        //             ...item,
        //             isActive: item.name === "about" ? true : false,
        //         }
        //     })
        // })
        router.push('/about')
    }

    const backHome = () => {
        router.push('/')
    }

    let [activeBtn, setActive] = React.useState([
        {
            isActive: false,
            btn:loginFunction,
            name: "Sign in"
        },
        {
            isActive: false,
            btn:ContactFunction,
            name: "Contact"
        },
        {
            isActive: false,
            btn:BookingFunction,
            name: "Booking"
        },
        {
            isActive: false,
            btn:ProgramFunction,
            name: "Program"
        },
        {
            isActive: false,
            btn: ServiceFunction,
            name: "Service"
        },
        {
            isActive: true,
            btn: AboutFunction,
            name: "About"
        },
    ])
    
    const BtnOptions = () => {
        return activeBtn.map(item => {
            return <p key={item.name} onClick={item.btn}
                className={`
                ${item.isActive ? "" : ""}
                font-bold text-white cursor-pointer active:opacity-50 text-[1vw] p-2 rounded-2xl
                `}>
                {item.name}
            </p>
        })
    }
    return (
      <header className="bg-[#1e1e2f60] px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div onClick={backHome} className='flex items-center justify-center gap-2 active:opacity-50 '>
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
                {BtnOptions()}
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