'use client'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({isvisible, onClose}) => {

    const [fullname, setFullname] = useState()
    const [email, setEmail] = useState()

    const notify = () => toast("Congrats you are now enrolled in the course, check your mail");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = {
            fullname,
            email
        }
        const response = await fetch('/api/getmail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        console.log(response)
        setFullname('')
        setEmail('')
        notify()
    }


    if(!isvisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
                <button onClick={() => onClose()} className="text-white font-bold text-sm place-self-end bg-gray-900 p-2 rounded-lg mb-1">
                    X
                </button>
                <div className="bg-white p-2 rounded">
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-xl font-bold py-5">Enter your information to enroll in the free course</h1>
                            <div className="mb-6">
                                <input value={fullname} name="full_name" onChange={e => setFullname(e.target.value)}  id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
                            </div>
                            <div className="mb-6">
                                <input value={email} name="email" onChange={e => setEmail(e.target.value)} id="mail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enroll in free course</button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;