import React from 'react'
import Image from 'next/image';
import ScrollingBanner from './home-components/ScrollingBanner';
type NavProps = {
    navClick: boolean,
    onNaveClick: () => void
}
export default function Navbar({ navClick, onNaveClick }: NavProps) {
    return (

        <nav className="">
            <div className="">
                <div className='max-w-screen-2xl h-min:50  flex flex-wrap items-center justify-between  mx-3 p-2'>
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
                        onClick={(e) => { e.preventDefault(); onNaveClick() }}
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
                    <div className={`w-full md:block md:w-auto ${navClick ? 'hidden' : 'hidden'}`} id="navbar-default">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <a href="/#home"
                                    className="block py-2 pl-2 pr-2 text-white rounded
                                hover:text-gray-300 md:hover:bg-transparent  md:p-0 dark:text-white"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/#aboutUs"
                                    className="block py-2 pl-2 pr-2 text-white rounded
                               hover:text-gray-300 md:hover:bg-transparent  md:p-0 dark:text-white"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/#dolar-detail"
                                    className="block py-2 pl-2 pr-2 text-white rounded
                               hover:text-gray-300 md:hover:bg-transparent  md:p-0 dark:text-white"
                                >
                                    Dolor
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={`w-full ${navClick ? '' : 'hidden'}`} style={{ height: window.innerHeight }}>
                    <div className='max-w-screen-2xl h-min:50  items-center justify-between mx-3 p-2 ' style={{ height: '87%', paddingTop: '50%' }}>
                        <div className='uppercase text-lg text-white'>
                            <div className='row leading-10'>
                                <div className='col' onClick={(e) => { onNaveClick() }} ><a href="/#home">Home</a></div>
                            </div>
                            <div className='row leading-10'>
                                <div className='col' onClick={(e) => { onNaveClick() }}><a href="/#aboutUs">About</a></div>
                            </div>
                            <div className='row leading-10'>
                                <div className='col' onClick={(e) => { onNaveClick() }}><a href="/#dolar-detail">Dolor</a></div>
                            </div>
                            <div className='row flex flex-wrap justify-between para-text leading-10' >
                                <div className='col'><a href="#">Lorem ipsum</a></div>
                                <div className='col'><a href="#">coming soon </a></div>
                            </div>
                        </div>
                    </div>
                    <ScrollingBanner />
                </div>
            </div>
        </nav >

    )
}
