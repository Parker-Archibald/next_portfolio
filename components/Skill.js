import Image from 'next/image';

const Skill = ({icon, title}) => {
    return (
        <div className='flex cursor-pointer flex-col space-y-3 border border-gray-500 w-3/4 p-4 items-center m-3'>
            <Image src={icon} width={100} height={100} className='w-10 h-10 object-contain'/>
            <div>{title}</div>
        </div>
    )
}

export default Skill;