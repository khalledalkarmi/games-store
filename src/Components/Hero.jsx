import React from 'react'
import image from './pngegg.png'
const Hero = () => {
    return (
        <section class=" dark:bg-gray-900 bg-black text-white">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Game Store</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Shop GameStore, the world's largest retail gaming and trade-in destination for Xbox, PlayStation, and Nintendo games, systems, consoles & accessories. </p>
                    <br/>
                    <br/>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        All Game
                    </a>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={image} alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Hero