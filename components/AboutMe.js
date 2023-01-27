import Image from "next/image";
import aboutMePic from '../styles/Pictures/AboutMePic.jpg';

const AboutMe = () => {

    return (
        <div className="">
            <div className="h-screen flex flex-col text-center">
                <h1 className="text-2xl font-bold">About me</h1>
                <div className="h-full flex items-center">
                    <div className=""><Image src={aboutMePic} className='sm:w-1/2 lg:w-2/5 rounded-2xl m-4'/></div>
                    <div>text</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;