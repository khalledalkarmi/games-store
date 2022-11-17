import React from 'react'

const Footer = () => {
    return (
        <footer class="p-4 md:p-8 lg:p-10 bg-black">
            <div class="mx-auto max-w-screen-xl text-center">
                <a href="#" class="flex justify-center items-center text-2xl font-semibold text-white">

                    Game Store
                </a>
                <p class="my-6 text-gray-500 dark:text-gray-400">Open-source library of over 400+ web components and interactive elements built for better web.</p>

                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer