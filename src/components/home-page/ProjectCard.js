"use client"
import React, {useState} from 'react'
import Image from 'next/image';
import { FiArrowRight } from "react-icons/fi";
export const ProjectCard = ({imgsrc,title,description}) => {
    const [cursorPos, setCursorPos] = useState({x:"50%", y:"50%"});
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCursorPos({x: `${x}px`, y:`${y}px`});
    }
  return (
    <div
    onMouseMove={handleMouseMove}
     className="relative flex-1 group" style={{overflow:"hidden"}}>
        <div>
            <Image height={600} width={600} src={imgsrc} alt='Project image' className="w-full h-[300px] md:h-[500px] object-cover md:rounded-[100px]
            shadow-md"
            />
            {/* Content */}
            <div className='flex flex-col md:flex-row justify-between items-center py-10 gap-6 px-5'>
                <div className='text-center md:text-left text-white'>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                    <p className='text-sm text-gray-400'>{description}</p>
                </div>
                <div className='border-2 border-gray-600 rounded-3xl px-6 py-4 text-white hover:text-black hover:bg-white 
                transition-all duration-300'>
                    <FiArrowRight className='text-lg md:text-xl'/>
                </div>
                {/* hover effect */}
                <div className='absolute inset-0 bg-black bg-opacity-20 rounded-[30px] md:rounded-[100px]
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                    <div
                    style={{
                        left:cursorPos.x,
                        top:cursorPos.y,
                        transform:"translateY(-50%, -50%)"}}
                    className='absolute w-32 h-32 bg-white/90 text-black justify-center items-center flex rounded-full shadow-lg 
                    transition-transform duration-150 cursor-pointer'
                    >
                        <p>View Project</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;