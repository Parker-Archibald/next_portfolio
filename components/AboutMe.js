import Image from "next/image";
import aboutMePic from '../styles/Pictures/AboutMePic.jpg';
import {
    ComputerDesktopIcon,
    CircleStackIcon
} from '@heroicons/react/24/outline';
import { motion } from "framer-motion";

const AboutMe = () => {

    return (
        <motion.div 
        initial={{opacity: 0, y: '20%'}}
        whileInView={{opacity: 1, y: '0%'}}
        transition={{duration: 1}}
        viewport={{once: true}}
        className="h-screen flex flex-col text-center items-center">
                    <div className="">
                        <h1 className="mt-6 uppercase tracking-[6px] text-gray-500 text-xl xl:mb-0">About me</h1>
                        <span className="text-white">25 Years</span>
                        <span className="text-[#36ACF5]"> | </span>
                        <span className="text-white">Web Developer</span>
                        <span className="text-[#36ACF5]"> || </span>
                        <span className="text-white">Father</span>
                    </div>
                    <div className="flex flex-col lg:flex-row flex-shrink-0 items-center lg:h-full xl:max-w-[1400px] lg:-mt-10">
                        <div className="mx-8 my-5 w-9/12 md:w-3/5 lg:w-1/2"><Image src={aboutMePic} className='rounded-2xl '/></div>
                        <div className="w-11/12 flex flex-col items-center lg:w-1/2">
                            <div className="text-xs text-gray-400 lg:text-lg lg:w-3/4 ">
                                Nice to meet you, I'm Parker Archibald. Passionate, creative, dedicated 
                                Full Stack Web Developer. I have been designing and developing Full Stack
                                Web Applications since 2019. I have a deep understanding of the MERN stack with 
                                additional experience with NextJS, Tailwindcss, MySQL, Firebase and AWS. I have worked on several Full 
                                Stack applications with full CRUD functionality. Currently Studying Web 
                                Development while enjoy the love of my life Nicole, and my son, Boston. 
                                I strive to learn something new every day so that I can produce the quickest 
                                most responsive websites. 
                            </div>
                            <div className="m-8  flex space-x-9 lg:mt-[100px]">
                                <div className="flex flex-col  text-xs items-center">
                                    <div className=""><ComputerDesktopIcon className="w-8 text-blue-400 mb-1"/></div>
                                    <div className="text-white text-lg mb-1">Development</div>
                                    <div className="text-gray-400 md:w-4/5">Building attractive and responsive Web Applications 
                                    that are fully API integrated.</div>
                                </div>
                                <hr className="border-[1px] h-[40px]"/>
                                <div className="flex flex-col ml-8 text-xs items-center">
                                    <div><CircleStackIcon className="text-blue-400 w-8 mb-1"/></div>
                                    <div className="text-white text-lg mb-1">Database</div>
                                    <div className="text-gray-400 md:w-4/5">I build and Integrate fully functional REST 
                                        API's to both SQL and NOSQL databases.</div>
                                </div>
                            </div>
                        </div>
                    </div>
        </motion.div>
    )
}

export default AboutMe;