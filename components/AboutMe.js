import Image from "next/image";
import aboutMePic from '../styles/Pictures/AboutMePic.jpg';

const AboutMe = () => {

    return (
        <div className="h-screen">
            <div className="flex flex-col text-center">
                <h1 className="text-2xl font-bold ">About me</h1>
                <div className="flex">
                    <div><Image src={aboutMePic} className='w-3/12 rounded-2xl '/></div>
                    <div>text</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;