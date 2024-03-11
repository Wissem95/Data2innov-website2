import React from 'react';
import BackgroundImage from "@/app/assets/First-image-hero.jpeg";

function Hero() {
    return (
        <div className="relative w-full">
            <img src={BackgroundImage.src} alt="Description de l'image" className="w-full z-0 opacity-50"/>
            <div className=" absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center ">
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
            <div className="w-full text-black bg-white min-h-screen p-8">
                {/* Header avec titre sans les barres décoratives */}
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold mb-8">CHAQUE PROBLEME NECESSITE UNE SOLUTION</h1>
                </div>

                {/* Conteneur principal pour le texte et l'image */}
                <div className="flex flex-col lg:flex-row w-full">
                    {/* Conteneur pour le texte */}
                    <div className="lg:w-1/2 p-8 text-left">
                        <div className="text-3xl mb-8">DATA LAB</div>
                        <p className="text-lg text-justify">
                            LA DATA IMPOSE SES RÈGLES : COMPLEXE, SENSIBLE ET DYNAMIQUE. IL FAUT ALLER VITE POUR
                            MAXIMISER LE ROI. DATA2INNOV INTERVIENT À VOTRE CÔTÉ DE LA PHASE DE L'IDÉATION À L'ÉCLOSION
                            DU POC.
                        </p>
                    </div>

                    {/* Conteneur pour l'image avec cadre bleu */}
                    <div className="lg:w-1/2 flex justify-center items-center p-8">
                        <div className="border-4 border-blue-500 w-full">
                            <img src={BackgroundImage.src} alt="Description de l'image"
                                 className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>

                {/* Carousel pour les barres décoratives */}
                <div className="mt-8">
                    {/* Ici vous intégrerez votre carousel en utilisant une bibliothèque dédiée */}
                    <div className="carousel">
                        {/* Exemple de slide */}
                        <div className="flex justify-center">
                            <div className="w-32 h-2 bg-green-600"></div>
                            <div className="w-6 h-2 bg-black ml-2"></div>
                            <div className="w-6 h-2 bg-black ml-2"></div>
                        </div>
                        {/* Répétez les slides selon vos besoins */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero;