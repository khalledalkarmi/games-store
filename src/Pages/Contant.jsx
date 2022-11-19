import React, { useState } from "react";
import img from './img.jpg'

function Contact() {
    return (
        <div className="min-h-screen h-[50rem]  bg-gray-900" >
            <div className="h-[35rem] w-full bg-[url('https://media.rawg.io/media/games/400/4002e3aa52cf33d184f0f74cc2348134.jpg')] " >
                <div className="md:px-20 px-4 py-8">
                </div>
                <div className="w-full flex items-center justify-center  ">
                    <div className="absolute w-1/2 top-40 bg-gray-200 shadow rounded py-12 lg:px-28 px-8 opacity-90 ">
                        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s chat and get a quote!</p>
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                                <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-3 ">
                                <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                                <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                                <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                            </div>
                        </div>
                        <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                        <div className="flex items-center justify-center w-full">
                            <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
