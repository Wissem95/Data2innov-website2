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
                                    <span className="sr-only">Linkedin</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px"
                                         height="30px">
                                        <path fill="#0288D1"
                                              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/>
                                        <path fill="#FFF"
                                              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/>
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