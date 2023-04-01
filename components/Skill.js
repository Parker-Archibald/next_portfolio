import Image from 'next/image';
import { motion } from 'framer-motion';

const Skill = ({icon, title}) => {
    return (
        <motion.div 
        initial={{y: '40%'}}
        whileInView={{y: '0%'}}
        transition={{duration: 1.5}}
        className='flex cursor-pointer flex-col space-y-3 border border-gray-500 w-3/4 p-4 items-center m-3'>
            <Image src={icon} width={100} height={100} className='w-10 h-10 object-contain lg:w-[200px] lg:h-[100px]'/>
            <div>{title}</div>
        </motion.div>
    )
}

export default Skill;