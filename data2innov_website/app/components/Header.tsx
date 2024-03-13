"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Logo from "@/app/assets/data2innov_logo.svg";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="z-50 w-full fixed bg-white dark:bg-gray-900 shadow-md">
            <div className="px-5 py-4 flex justify-between items-center">
                <Link href="/#" className="flex items-center">
                    <img src={Logo.src} alt="Data2Innov" className="max-h-28 w-auto"/>

                </Link>

                <div className="flex justify-between items-center w-full md:w-auto">
                    <nav
                        className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:flex items-center justify-center flex-1`}>
                        <Link href="/"
                              className="py-2 text-white  hover:text-gray-900 dark:hover:text-gray-600 text-lg mx-2">Home</Link>
                        <Link href="/formations"
                              className="py-2 text-white  hover:text-gray-900 dark:hover:text-gray-600 text-lg mx-2">Nos
                            Formations</Link>
                        <Link href="/services"
                              className="py-2 text-gray-600 hover:text-gray-900 dark:hover:text-white text-lg mx-2">Nos
                            Services Data</Link>
                        <Link href="/contact"
                              className="py-2 text-gray-600 hover:text-gray-900 dark:hover:text-white text-lg mx-2">Contact</Link>

                    </nav>


                    {isMenuOpen && (
                        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden">
                            <ul className="space-y-4 flex flex-col items-center py-4">
                                <Link href="/login"
                                      className="px-5 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 text-sm">Login</Link>
                                <Link href="/register"
                                      className="px-5 py-2 rounded-md bg-gray-100 text-teal-600 hover:bg-gray-200 text-sm">Register</Link>
                            </ul>
                        </div>
                    )}
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className=" text-gray-500 focus:outline-none md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                        )}
                    </svg>
                </button>
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login"
                          className="px-5 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 text-sm">Login</Link>
                    <Link href="/register"
                          className="px-5 py-2 rounded-md bg-gray-100 text-teal-600 hover:bg-gray-200 text-sm">Register</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;