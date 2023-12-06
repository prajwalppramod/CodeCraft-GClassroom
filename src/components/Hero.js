import React from 'react'

const Hero = () => {
    return (
        <div>
            <section class="text-white body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Empower Your Classroom Experience with ClassGPT
                        </h1>
                        <p class="mb-8 leading-relaxed">Unleashing the Power of AI for Personalized Learning and Seamless Exploration.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download Plugin</button>
                            <button class="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">About Us</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="https://i.postimg.cc/PrDtfr2d/hero.png"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero