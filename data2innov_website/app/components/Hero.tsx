import React from 'react';
import BackgroundImage from "@/app/assets/First-image-hero.jpeg";

function Hero() {
    return (
        <div className="relative w-full">
            <img src={BackgroundImage.src} alt="Description de l'image" className="w-full z-0 opacity-50"/>
            <div className=" absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
                <div className="p-4 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl text-center ">
                    <h1 className=" text-white font-bold text-center text-7xl whitespace-normal break-words  ">
                        LOREMLOREMLOREMLOREMLOREMLOREMLOREMLOREMLOREMLOREMLOREM
                    </h1>
                    <p className="text-white text-3xl text-center whitespace-normal break-words mt-10 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="mt-10">
                    <button className="bg-black  text-white text-2xl font-bold px-8 py-4
                     rounded-md border-2 border-[#3472C2]">
                        DECOUVRIR
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;