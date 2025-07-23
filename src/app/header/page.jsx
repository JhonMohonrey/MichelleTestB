'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../img/townImg.png'

export default function page() {

    const router = useRouter()
    // let [activeBtn, setActiveBtn] = React.useState(
    //     () => {
    //         return JSON.parse(localStorage.getItem("saveState")) || 
    //          [{isActive: false, name: "Sign in"},
    //             {isActive: false, name: "Contact"},
    //             {isActive: false, name: "Booking"},
    //             {isActive: false, name: "Program"},
    //             {isActive: false, name: "Service"},
    //             {isActive: false, name: "About"},]
    //     }
    // )

    // React.useEffect(() => {
    //     localStorage.setItem("saveState", JSON.stringify(activeBtn))
    // }, [activeBtn])
    let [activeBtn, setActiveBtn] = React.useState( [{isActive: false, name: "Sign in"},
                {isActive: false, name: "Contact"},
                {isActive: false, name: "Booking"},
                {isActive: false, name: "Program"},
                {isActive: false, name: "Service"},
                {isActive: false, name: "About"},])


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
            router.push('/about')
            setActiveBtn(prev => {
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

        if (BtnName === "Service") {
            router.push('/servicepage')
            setActiveBtn(prev => {
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

        if (BtnName === "Program") {
            router.push('/program')
            setActiveBtn(prev => {
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

        if (BtnName === "Booking") {
            router.push('/booking')
            setActiveBtn(prev => {
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

        if (BtnName === "Contact") {
            router.push('/contact')
            setActiveBtn(prev => {
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

        if (BtnName === "Sign in") {
            router.push('/login')
            setActiveBtn(prev => {
                return prev.map(item => {
                    return {...item, isActive: item.name === BtnName ? true : false}
                })
            })
        }

    }

    // For Phone User
    const [menuStatus, setMenuStatus] = React.useState(true)
    const openMenu = () => {
        setMenuStatus(prev => !prev)
    }
    const BtnOptions = () => {
        return activeBtn.map(item => {
            return (
                <div key={item.name}>
                    <p
                        onClick={() => test(item.name)}
                        className={`hidden md:block
                        relative hover:bg-[#00000030] rounded-[2px]
                        font-bold text-white cursor-pointer active:opacity-50
                        md:text-[clamp(0.875rem,1vw,1.25rem)] text-[clamp(1rem, 2vw, 2rem)] p-2 select-none
                        transition-all duration-300 ease-in-out
                        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
                        after:w-full after:transition-transform after:duration-200 after:scale-x-0
                        after:origin-left after:bg-white
                        ${item.isActive ? "after:scale-x-100" : ""}
                        `}
                    >
                        {item.name}
                    </p>
                    <p
                        className={`
                            md:hidden
                            block
                            text-sm
                            font-medium
                            px-5
                            py-2.5
                            mx-2
                            rounded-2xl
                            ${item.isActive ? "bg-white text-black " : "bg-black text-white "}
                            shadow-sm
                            hover:shadow-lg
                            active:scale-95
                            transition-all
                            duration-200
                            select-none
                            my-2
                            cursor-pointer
                        `}
                        onClick={() => test(item.name)}
                    >
                        {item.name}
                    </p>
                </div>
                
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

            <button onClick={openMenu} className="md:hidden text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            <div  className={`
            transition-all duration-400 ease-in-out md:hidden
            absolute top-0 right-0 bottom-0 w-[50%] bg-[#000000ab]
            ${menuStatus ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            `}
            >
                <div className='bg-black flex items-end py-3 px-2'>
                    <button onClick={openMenu} className="text-white hover:text-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                        </svg>
                    </button>
                </div>
                {BtnOptions()}
            </div>
        </div>
      </header>
    );
}