"use client"
import React, {useState} from 'react';
import BackgroundImage from "@/app/assets/First-image-hero.jpeg";
import Image1 from "@/app/assets/DataLab2.jpeg";
import Image2 from "@/app/assets/DataLab3.jpeg";
import Link from "next/link";





    function Hero() {

        const [currentSlide, setCurrentSlide] = useState(0);
        const slides = [
            <div className="text-center uppercase p-4 max-h-[731px]">
                <h2 className="text-[#3472C2] text-lg sm:text-xl md:text-2xl font-semibold">SERVICES & EXPERTISE</h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">CHAQUE PROBLEME NECESSITE UNE
                    SOLUTION</h1>
                <div className="flex flex-col sm:flex-row mt-10 sm:mt-28 w-full">
                    <div className="sm:w-1/2 p-4 sm:p-8 ml-0 sm:ml-12 text-left">
                        <div className="text-2xl hover:text-gray-600 sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8">
                            <Link href="/services">DATA LAB </Link></div>
                        <p className="text-md sm:text-lg md:text-xl max-w-full sm:max-w-2xl text-justify">
                            LA DATA IMPOSE SES RÈGLES : COMPLEXE, SENSIBLE ET DYNAMIQUE. IL FAUT ALLER VITE POUR MAXIMISER
                            LE ROI. DATA2INNOV INTERVIENT À VOTRE CÔTÉ DE LA PHASE DE L'IDÉATION À L'ÉCLOSION DU POC.
                        </p>
                    </div>
                    <div className="sm:w-1/2 flex justify-center items-center p-8">
                        <div className="border-4 border-blue-500 w-full sm:w-[48rem]">
                            <Link href="/services">
                            <img src={Image1.src} alt="Description de l'image"
                                 className="hover:brightness-90 transition-all duration-300 ease-in-out  w-full h-full max-h-[423px] object-cover"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>,

            <div className="text-center uppercase max-h-[731px] p-4">
                <h2 className="text-[#3472C2] text-lg sm:text-xl md:text-2xl font-semibold">SERVICES & EXPERTISE</h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">CHAQUE PROBLEME NECESSITE
                    UNE
                    SOLUTION</h1>
                <div className="flex flex-col sm:flex-row mt-10 sm:mt-28  w-full">
                    <div className="sm:w-1/2 p-4 sm:p-8 ml-0 sm:ml-12 text-left">
                        <div className="text-2xl hover:text-gray-600 sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8">
                            <Link href="/services">Data Factory</Link>
                            </div>
                        <p className="text-md sm:text-lg md:text-xl max-w-full sm:max-w-2xl text-justify ">
                            Un POC valide le RIO sous conditions d'une bonne industrialisation. On suit toutes les étapes de l'industrialisation de l'arrivée des données à la mise en valeur des résultats dans une solution de visualisation et de partage.
                        </p>
                    </div>
                    <div className="sm:w-1/2 flex justify-center items-center p-8">
                        <div className="border-4 border-blue-500 w-full max-h-[431px] sm:w-[48rem]">
                            <Link href="/services">
                            <img src={Image2.src} alt="Description de l'image"
                                 className="w-full h-auto max-h-[423px] hover:brightness-90 transition-all duration-300 ease-in-out object-cover"/>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>,
            <div className="text-center uppercase max-h-[731px] p-4">
                <h2 className="text-[#3472C2] text-lg sm:text-xl md:text-2xl font-semibold">SERVICES & EXPERTISE</h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">CHAQUE PROBLEME NECESSITE UNE
                    SOLUTION</h1>
                <div className="flex flex-col sm:flex-row mt-10 sm:mt-28 w-full">
                    <div className="sm:w-1/2 p-4 sm:p-8 ml-0 sm:ml-12 text-left">
                        <div className="text-2xl hover:text-gray-600 sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8">
                           <Link href="/formations"> formation data </Link>
                        </div>
                        <p className="text-md sm:text-lg md:text-xl max-w-full sm:max-w-2xl uppercase text-justify">
                            Data2Innov vous accompagne dans la mise en place de votre stratégie pour former vos collaborateurs aux métiers de la data.
                        </p>
                    </div>
                    <div className="sm:w-1/2 flex justify-center items-center p-8">
                        <div className="border-4 border-blue-500 w-full max-h-[431px]  sm:w-[48rem]">
                            <Link href="/formations">
                            <img src={BackgroundImage.src} alt="Description de l'image"
                                 className="w-full h-full max-h-[423px] hover:brightness-90 transition-all duration-300 ease-in-out object-cover"/>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        ];

        const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
        const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);



        return (

            <section className="font-sans uppercase  dark:bg-gray-900 ">
                <div className="relative w-full ">
                    <img src={BackgroundImage.src} alt="Description de l'image" className="w-full z-0 opacity-50"/>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="p-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl text-center">
                            <h1 className="text-white font-bold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal break-words">
                                LOREMLOREMLOREMLOREMLOREMLOREMLOREMLOREMLOREMLOREMLOREM
                            </h1>
                            <p className="text-white text-xl sm:text-2xl md:text-3xl text-center whitespace-normal break-words mt-10">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div className="mt-10">
                                <button
                                    className="bg-black text-white text-lg sm:text-xl md:text-2xl font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-md border-2 border-[#3472C2]">
                                DECOUVRIR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                <article className="Nos formations text-black bg-white">
                    <div className="relative w-full">
                        {/* Navigation du carrousel */}
                        <button onClick={prevSlide} className="absolute left-4 z-30 mt-96 h-10 w-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
                                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                            </svg>
                        </button>
                        <button onClick={nextSlide} className="absolute right-4 z-30 mt-96 h-10 w-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
                                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
                            </svg>
                        </button>

                        {/* Affichage de la slide actuelle */}
                        <div className="slide">{slides[currentSlide]}</div>
                    </div>
                </article>
            </section>
        );
    }

export default Hero;
