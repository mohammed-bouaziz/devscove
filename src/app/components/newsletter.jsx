'use client'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const News = () => {

    const [email, setEmail] = useState()

    const notify = () => toast("You will now recieve the latest insights");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = {
            email
        }
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        console.log(response)
        setEmail('')
        notify()
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col bg-gray-100 rounded-lg items-center space-y-5 p-10">
            <h1 className="font-mont text-xl text-gray-700">Subscribe to get free courses, books and insights</h1>
            <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" className="block p-2.5 w-full text-center z-20 text-sm text-gray-900 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-l-gray-200  dark:border-gray-200 dark:placeholder-gray-700 dark:text-black dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
            <button href="#" className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-orange-600 text-white">Subscribe</button>
        </div>
        </form>
        <ToastContainer />
        </>
        
        
    )
}

export default News;