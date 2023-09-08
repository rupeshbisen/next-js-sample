import React from 'react'
import Image from 'next/image';
type NavProps = {
    navClick: boolean,
    onNaveClick: () => void
}
export default function Navbar({ navClick, onNaveClick }: NavProps) {
    return (

        <nav className="">
            <div className="max-w-screen-2xl h-min:50  flex flex-wrap items-center justify-between mx-3 p-2">
                <a href="#" className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="Lorem Logo"
                        width={30} // Set the desired width
                        height={18} // Set the desired height
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ms-3">
                        {!navClick ? 'Lorem' : 'Menu'}
                    </span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                    onClick={(e)=>{e.preventDefault(); onNaveClick()}}
                     className="inline-flex items-center p-1 w-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" >
                    {!navClick &&

                        <svg className="fill-white shrink-0 ml-6" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-180 transition duration-200 ease-out `} />
                            <rect width="16" height="2" rx="1" className={`transform origin-center rotate-180 transition duration-200 ease-out `} />
                        </svg>

                    }
                    {navClick &&

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    }
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                   
                </div>
            </div>
        </nav>

    )
}
