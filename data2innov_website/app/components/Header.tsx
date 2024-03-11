"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Logo from "@/app/assets/data2innov_logo.svg";
const Header: React.FC = () => {
    return (
        <header className="z-50 w-full  fixed bg-white dark:bg-gray-900">
            <div >
                <div className="flex  h-24 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600 dark:text-teal-600" href="#">
                            <img src={Logo.src} alt="Data2Innov" className="h-20 w-auto"/>
                        </a>
                    </div>

                    <div className=" hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-20 text-lg">
                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Nos Formations
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Nos Services Data
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Contact
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <div className="flex mr-3 items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                href="#"
                            >
                                Login
                            </a>

                            <div className="hidden sm:flex">
                                <a
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Register
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;
