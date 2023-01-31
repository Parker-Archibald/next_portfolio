import Image from "next/image";
import aboutMePic from '../styles/Pictures/AboutMePic.jpg';
import {
    ComputerDesktopIcon,
    CircleStackIcon
} from '@heroicons/react/24/outline';

const AboutMe = () => {

    return (
        <div className="h-screen flex flex-col text-center">
                <div className="">
                    <h1 className="text-2xl font-bold mt-4 mb-2 text-white">About me</h1>
                    <span className="text-white">25 Years</span>
                    <span className="text-[#36ACF5]"> | </span>
                    <span className="text-white">Web Developer</span>
                    <span className="text-[#36ACF5]"> || </span>
                    <span className="text-white">Father</span>
                </div>
                <div className="">
                    <div className="m-8"><Image src={aboutMePic} className=' md:w-2/5 rounded-2xl'/></div>
                    <div className="text-xs ml-3 mr-3 text-gray-400">
                        Nice to meet you, I'm Parker Archibald. Passionate, creative, dedicated 
                        Full Stack Web Developer. I have been designing and developing Full Stack
                        Web Applications since 2019. I have a deep understanding of the MERN stack with 
                        additional experience with NextJS, Tailwindcss, MySQL, Firebase and AWS. I have worked on several Full 
                        Stack applications with full CRUD functionality. Currently Studying Web 
                        Development while enjoy the love of my life Nicole, and my son, Boston. 
                        I strive to learn something new every day so that I can produce the quickest 
                        most responsive websites. 
                    </div>
                    <div className="m-8  flex space-x-9">
                        <div className="flex flex-col  text-xs items-center">
                            <div className=""><ComputerDesktopIcon className="w-8 text-blue-400 mb-1"/></div>
                            <div className="text-white text-lg mb-1">Development</div>
                            <div className="text-gray-400">Building attractive and responsive Web Applications 
                            that are fully API integrated.</div>
                        </div>
                        <hr className="border-[1px] h-[40px]"/>
                        <div className="flex flex-col ml-8 text-xs items-center">
                            <div><CircleStackIcon className="text-blue-400 w-8 mb-1"/></div>
                            <div className="text-white text-lg mb-1">Database</div>
                            <div className="text-gray-400">I build and Integrate fully functional REST 
                                API's to both SQL and NOSQL databases.</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AboutMe;