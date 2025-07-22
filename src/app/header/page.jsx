'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../img/townImg.png'

export default function page() {

    const router = useRouter()
    let [activeBtn, setActiveBtn] = React.useState([
        {
            isActive: false,
            name: "Sign in"
        },
        {
            isActive: false,
            name: "Contact"
        },
        {
            isActive: false,
            name: "Booking"
        },
        {
            isActive: false,
            name: "Program"
        },
        {
            isActive: false,
            name: "Service"
        },
        {
            isActive: false,
            name: "About"
        },
    ])

    function loginFunction() {
        router.push('/login')
    }

    function ContactFunction() {
        router.push('/contact')
    }

    function BookingFunction() {
        router.push('/booking')
    }

    function ProgramFunction() {
        router.push('/program')
    }

    function ServiceFunction() {
        router.push('/servicepage')
    }

    function AboutFunction() {
        router.push('/about')
    }

    const backHome = () => {
        router.push('/')
        setActiveBtn(prev => {
            return prev.map(item => {
                return {...item, isActive: false}
            })
        })
    }

    const test = (BtnName) => {
        console.log("Testing", BtnName)
        if (BtnName === "About") {
            AboutFunction()
            setActiveBtn(prev => {
                console.log(prev)
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

        if (BtnName === "Service") {
            ServiceFunction()
            setActiveBtn(prev => {
                console.log(prev)
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

        if (BtnName === "Program") {
            ProgramFunction()
            setActiveBtn(prev => {
                console.log(prev)
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

        if (BtnName === "Booking") {
            BookingFunction()
            setActiveBtn(prev => {
                console.log(prev)
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

        if (BtnName === "Contact") {
            ContactFunction()
            setActiveBtn(prev => {
                console.log(prev)
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

        if (BtnName === "Sign in") {
            loginFunction()
            setActiveBtn(prev => {
                console.log(prev)
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

    }
    const BtnOptions = () => {
        return activeBtn.map(item => {
            return (
  <p
    key={item.name}
    onClick={() => test(item.name)}
    className={`
      relative hover:bg-[#00000030] rounded-[2px]
      font-bold text-white cursor-pointer active:opacity-50
      text-[1vw] p-2 select-none
      transition-all duration-300 ease-in-out
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
      after:w-full after:transition-transform after:duration-200 after:scale-x-0
      after:origin-left after:bg-white
      ${item.isActive ? "after:scale-x-100" : ""}
    `}
  >
    {item.name}
  </p>
);

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