// Utilisez "use client" pour indiquer que ce composant doit s'exécuter uniquement côté client
"use client";
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`z-50 fixed top-0 left-0 flex flex-col justify-start items-start h-full fill-white ${isOpen ? 'w-1/6' : 'w-24'} bg-[#141010] transition-width duration-300`}>
            <button onClick={() => setIsOpen(!isOpen)} className="p-4 self-start">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>
            </button>
            {isOpen && (
                <nav>
                    <ul className="flex flex-row space-x-4 text-2xl mt-4">
                        <li className="text-white"><a href="/">Home</a></li>
                        <li className="text-white"><a href="/contact">Contact</a></li>
                        <li className="text-white"><a href="/formation">Formation</a></li>
                        {/* Autres liens */}
                    </ul>
                </nav>
            )}
        </div>

    );
};

export default Navbar
