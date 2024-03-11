import React from 'react';
import Logo from "@/app/assets/data2innov_logo.svg";

function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-1 sm:px-6 lg:px-8">
                <div
                    className="mt-16 grid grid-cols-1 gap-20 border-t border-gray-800 pt-16 md:grid-cols-4 lg:grid-cols-5 dark:border-gray-800"
                >

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">Contact Info</p>

                        <ul className="mt-8 space-y-4 text-base">
                            <li>
                                <h1 className=" text-indigo-500 ">Address</h1>
                                <p>52 Rue Pierre et Marie Curie 91170 Viry Châtillon </p>
                            </li>

                            <li>
                                <h1 className=" text-indigo-500 ">Phone</h1>
                                <p>+33 (0) 621704877 </p>
                            </li>

                            <li>
                                <h1 className=" text-indigo-500 ">Email</h1>
                                <p>contact@data2innov.fr</p>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/data2innov/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>


                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">Nos Services</p>

                        <ul className="mt-8 space-y-4 text-base">
                            <li>
                                <a
                                    className="text-white transition hover:text-gray-700/75  dark:hover:text-indigo-500/75"
                                    href="#"
                                >
                                    Data Lab
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-white transition hover:text-gray-700/75  dark:hover:text-indigo-500/75"
                                    href="#"
                                >
                                    Data Factory
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-white transition hover:text-gray-700/75  dark:hover:text-indigo-500/75"
                                    href="#"
                                >
                                    Formations Data
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">About Us</p>

                        <ul className="mt-8  text-base">
                            <li>
                                <p>Data2Innov regroupe des experts passionnés dans le domaine de la data et par
                                    l’innovation. Notre mission est de vous aidez dans votre transformation
                                    digitale.</p>
                            </li>


                        </ul>
                    </div>


                    <div className="ml-20 -mr-16  text-center sm:text-left md:col-span-4 lg:col-span-2">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">Stay in Touch</p>

                        <div className="mx-auto mt-8 max-w-md sm:ms-0">
                            <p
                                className="text-center leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right dark:text-gray-400"
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id, iure consectetur et
                                error hic!
                            </p>

                            <form className="mt-4">
                                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                                    <label htmlFor="email" className="sr-only">Email</label>

                                    <input
                                        className="w-full rounded-full border-gray-200 bg-white px-6 py-3 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                        type="email"
                                        placeholder="Enter your email"
                                    />

                                    <button
                                        className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                                        type="submit"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-16  border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between dark:border-gray-800"
                >
                    <p className="w-full flex justify-center text-center text-base text-gray-500 sm:text-left dark:text-gray-400">
                        DATA2INNOV - &copy; Copyright  2024. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>);
}

export default Footer;