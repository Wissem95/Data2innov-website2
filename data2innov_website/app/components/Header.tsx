import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-black z-10">
            <div className="mx-auto max-w-screen-xl">
                <div className="flex h-16 items-center justify-between">

                    <div className="flex items-center gap-4 ml-auto"> {/* Utilisez ml-auto pour aligner vers la droite */}
                        <div className="sm:flex sm:gap-4">
                            <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="/">Login</a>
                            <div className="hidden sm:flex">
                                <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600" href="/">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
