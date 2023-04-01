import {NavState} from '../Atoms/NavAtom';
import {useRecoilState} from 'recoil';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';


const Nav = () => {

    const [nav, setNav] = useRecoilState(NavState);

    return (
        <div>
        {nav === false ? (
            <div>
                <div className='fixed z-10 top-2 left-2 w-10 h-10 cursor-pointer' onClick={() => setNav(true)}><Bars3Icon/></div>
                <motion.div 
                initial={{x:-100, opacity: 1}}
                whileInView={{x:-300, opacity: .3}}
                transition={{duration: .25}}
                className="bg-white w-60 h-screen z-10 fixed text-black">
                    <div className="text-right mr-2 font-bold cursor-pointer">X</div>
                    <div className="flex flex-col items-center">
                        <img src='/profile.png' className="w-24 h-24 rounded-full mt-8 "/>
                        <h3 className="mt-6 text-xl font-bold">Parker Archibald</h3>
                        <div className='text-xs mb-6'>Full Stack Web Developer</div>
                        <hr className='w-5/6 mb-8'/>
                        <div className=' flex flex-col space-y-6 text-xl w-full text-center'>
                            {/* <Link href='#aboutMe'><button className='hover:bg-blue-500 h-[60px] pt-4 cursor-pointer z-10'>About Me</button></Link> */}
                            <button className='hover:bg-blue-500 h-[60px] pt-4 cursor-pointer z-10' section='aboutMe' onClick={() => document.getElementById('top').scrollIntoView()}>About Me</button>
                            <button  className='hover:bg-blue-500 h-[60px] pt-4 cursor-pointer' onClick={() => document.getElementById('aboutMe').scrollIntoView()}>Skills</button>
                            <Link href='#projects' className='hover:bg-blue-500 h-[60px] pt-4 cursor-pointer'>Projects</Link>
                            <Link href='#contact' className='hover:bg-blue-500 h-[60px] pt-4 cursor-pointer'>Contact Me</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
            ) : (
            <motion.div 
            initial={{x:-200, opacity: 0}}
            whileInView={{x:-10, opacity: 100}}
            transition={{duration: .25}}
            className="bg-white w-60 h-screen z-10 fixed text-black">
                <div className="text-right mr-2 font-bold cursor-pointer" onClick={() => setNav(false)}>X</div>
                <div className="flex flex-col items-center">
                    <Link href='#top'><img src='/profile.png' className="w-24 h-24 rounded-full mt-8"/></Link>
                    <Link href='#top'><h3 className="mt-6 text-xl font-bold">Parker Archibald</h3></Link>
                    <div className='text-xs mb-6'>Full Stack Web Developer</div>
                    <hr className='w-5/6 mb-8'/>
                    <div className=' flex flex-col space-y-6 text-xl w-full text-center '>
                        <Link href='#aboutMe' className='hover:bg-blue-500 h-[60px] pt-4 cursor-pointer z-10'>About Me</Link>
                        <Link href='#skills' className='hover:bg-blue-500 h-[60px] pt-4 cursor-pointer'>Skills</Link>
                        <Link href='#projects' className='hover:bg-blue-500 h-[60px] pt-4 cursor-pointer'>Projects</Link>
                        <Link href='#contact' className='hover:bg-blue-500 h-[60px] pt-4 cursor-pointer'>Contact Me</Link>
                    </div>
                </div>
            </motion.div>
            )}
        </div>
    )
}

export default Nav;