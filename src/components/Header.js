import React from 'react'

const Header = () => {
    return (
        <div>
            <header class="text-white body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img src='https://i.postimg.cc/hPBLMhJY/logo.png' className='w-7'></img>
                        <span class="ml-3 text-xl">Classroom GPT</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center">
                        <a class="mr-5 hover:text-gray-900">Home</a>
                        <a class="mr-5 hover:text-gray-900">Product</a>
                        <a class="mr-5 hover:text-gray-900">About Us</a>
                    </nav>
                    <button class="inline-flex items-center text-black bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-sm mt-4 md:mt-0">Download Plugin
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header