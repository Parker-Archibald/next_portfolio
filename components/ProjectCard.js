import { motion } from "framer-motion";

const ProjectCard = ({image, projectName, position, tech, points, link}) => {
    return (
        <article className="flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[600px] snap-center bg-gray-800 p-10 hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity
        duration-200 overflow-hidden" onClick={() => window.open(link)}>
            <motion.img 
            initial={{y: -100, opacity: 0}}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            src={image} 
            className='w-36 h-36 rounded-xl object-cover object-center'/>

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{projectName}</h4>
                <p className="font-bold text-2xl mt-1">{position}</p>
                <div className="flex space-x-2 my-2">
                    {/* <img src={tech} className='h-10 w-10 rounded-full'/> */}

                    {tech && tech.map(path => (
                        <img src={path} className='h-10 w-10 rounded-full object-contain'/>
                    ))}
                </div>
                {/* <div className="uppercase py-5 text-gray-300">Started... Finished...</div> */}
                <ul className="list-disc space-y-4 ml-5 pt-10 text-md">
                    {points?.map(point => (
                        <li>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ProjectCard;