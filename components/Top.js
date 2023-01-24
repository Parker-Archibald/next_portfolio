import {ArrowDownCircleIcon} from '@heroicons/react/24/outline';

const Top = () => {

    return (
        <div className=" relative">
            <div className="w-full h-screen bg-center bg-cover bg-homePic bg-fixed"/>
            <div className="absolute bottom-[28%] left-[15%] flex flex-col text-center">
                <h1 className="text-2xl font-bold mb-4">I'm Parker</h1>
                <p className="text-md mb-6">Certified and Passionate Full Stack Web Developer and Music Enthusiast.</p>
                <div className='cursor-pointer flex justify-center'><ArrowDownCircleIcon className='w-12 text-blue-500'/></div>
            </div>
        </div>
    )
}

export default Top;