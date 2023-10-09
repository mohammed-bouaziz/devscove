"use client";
import News from "../components/newsletter";
import Modal from "../components/Modal";
import { useState } from "react";

const Courses = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className="m-5">

            <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
            <a href="#" className="col-span-2 text-left text-gray-600 hover:text-gray-700">
                <div className="group relative h-full w-full overflow-hidden">
                <img src="https://mohammed.sirv.com/blog-post-1/hitesh-choudhary-D9Zow2REm8U-unsplash.jpg" alt="" className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125" />
                <span className="absolute top-2 left-2 rounded-full bg-yellow-200 px-2 text-xs font-semibold text-yellow-600">Python</span>
                <img src="/images/AnbWyIjnwNbW9Wz6c_cja.svg" className="absolute inset-1/2 w-10 max-w-full -translate-x-1/2 -translate-y-1/2 transition group-hover:scale-125" alt="" />
                </div>
            </a>
            <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
                <a href="#" className="mt-3 overflow-hidden text-2xl font-semibold"> Data Analytics with Python For the Complete Beginner </a>
                <p className="overflow-hidden text-sm">This course is the perfect entry to data science and AI, it teaches you everything you need to know about python, data and basic math to start your journey in Machine learning and AI</p>
                <a href="#" className="text-sm font-semibold text-gray-500 hover:text-gray-700">Mohammed Bouaziz</a>

                <div className="flex flex-col text-gray-700 sm:flex-row">
                <button onClick={() => setShowModal(true)} className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-orange-600 text-white">Enroll Now</button>
                </div>
            </div>
            </div>
        </div>
        
        <div className="mt-24">
            <News />
        </div>
        <Modal isvisible={showModal} onClose={() => setShowModal(false)} />
        
        </>
    )
        
        
}

export default Courses;