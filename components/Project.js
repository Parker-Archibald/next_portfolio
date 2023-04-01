import Image from 'next/image';

const Project = ({image, title, description, mobile, link}) => {

    const handleOpenLink = () => {
        console.log(link)
    }

    return (
        <div onClick={handleOpenLink}>
            {mobile === true ? (
                <div className='h-[218px] overflow-hidden justify-center flex flex-col items-center border m-4 relative'>
                    <Image src={image} width={200} height={100} className=''/>
                    <div className='z-100 bg-gray-600 absolute bottom-0 w-full indent-4 p-2'>{title}</div>
                </div>
            ) : (
                <div className='h-[218px] overflow-hidden flex flex-col items-center border m-4 relative'>
                    <Image src={image} width={400} height={100} className=''/>
                    <div className='z-100 bg-gray-600 absolute bottom-0 w-full indent-4 p-2.5'>{title}</div>
                </div>
            )}
        </div>
    )
}

export default Project;