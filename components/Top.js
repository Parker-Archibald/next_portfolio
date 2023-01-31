import {ArrowDownCircleIcon} from '@heroicons/react/24/outline';

const Top = () => {

    return (
        <div className="snap-start">
            <div className="w-full h-screen bg-center bg-cover bg-homePic bg-fixed"/>
            <div className="relative bottom-[200px] left-[15px] flex flex-col text-center w-[90%]">
                <h1 className="text-2xl font-bold mb-4">I'm Parker</h1>
                <p className="text-md mb-6">Certified and Passionate Full Stack Web Developer and Music Enthusiast.</p>
                <div className='cursor-pointer flex justify-center'><ArrowDownCircleIcon className='w-12 text-blue-500'/></div>
            </div>
        </div>
    )
}

export default Top;