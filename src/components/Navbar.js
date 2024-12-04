"use client"

import { useState } from "react";
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }
    return (
        <header className = "bg-[#060608] text-white fixed top-0 left-0 right-0 z-[9999] px-5">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center md:py-8 py-5">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="text-lg font-semibold">HUZEFA BAJWA</div>
            </div>
            {/* Desktop Navigation */}
            <div>
                <p className="text-[#86868D] hidden md:block">
                    Software Engineer <br />
                    Full Stack Developer
                </p>
            </div>
            <div className="hidden md:flex space-x-6 font-semibold">
                <Link href="#Projects" className="hover:underline hover:text-blue-500">Projects</Link>
                <Link href="#Education" className="hover:underline hover:text-blue-500">Education</Link>
                <Link href="#Experience" className="hover:underline hover:text-blue-500">Experience</Link>
            </div>
            {/* Book Appointment Button */}
            <div className="hidden md:flex items-center justify-end">
                <button className="bg-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200
                ease-in">Contact Me</button>
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden">
                <button onClick={toggleDrawer} className="text-2xl">
                    {
                        isDrawerOpen? <FiX /> 
                        : <FiMenu />
                    }
                </button>
                </div>
              
            </div>
              {/* Mobile Drawer */}
              {
                isDrawerOpen && (
                    <div className="mt-3 bg-gray-800 p-4 rounded-lg md-hidden">
                        <p className="mb-4">Software Engineer <br />
                        Full Stack Developer</p>
                        <Link href="#Projects" className="block mb-2 hover:underline hover:text-gray-400">Projects</Link>
                        <Link href="#Education" className="block mb-2 hover:underline hover:text-gray-400">Education</Link>
                        <Link href="#Experience" className="block mb-2 hover:underline hover:text-gray-400">Experience</Link>
                    </div>
                )
            }
            </header>
    )
}

export default Navbar;