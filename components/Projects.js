import Project from './Project';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen flex flex-col items-center relative overflow-hidden text-left
        md:flex-row max-w-full p-x-10 justify-evenly mx-auto'>

            <h3 className='absolute top-12 uppercase tracking-[6px] text-gray-500 text-xl'>Recent Projects</h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-0 scrollbar-thumb-blue-400'>
                <ProjectCard image='/huluClone.png' projectName='Hulu Clone' position='Web Developer' tech={['/nextjs.png', '/tailwindLogo.png', '/JSLogo.png']} 
                points={[
                    "Connected to TMDB's database.",
                    "Utilized TailwindCSS to style the site.",
                    "Imported HeroIcons for all icons."
                ]} link='https://hulu-clone-kappa-two.vercel.app/?genre=fetchTrending'/>
                <ProjectCard image='/instaClone.png' projectName='Instagram Clone' position='Web Developer' tech={['/firebaseLogo.png', '/nextjs.png', '/tailwindLogo.png', '/JSLogo.png']}
                points={[
                    "Used Google Oath to handle login.",
                    "Stored data in Firebase and Firebase Storage.",
                    "Utilized Next.js and TailwindCSS to style the frontend.",
                ]} link='https://insta-clone-red-ten.vercel.app/'/>
                <ProjectCard image='/relieLogin.png' projectName='Reli Energy' position='Designer/Developer' tech={['/mysqlLogo.png', '/reactLogo.png', '/JSLogo.png', '/css3Logo.png', '/postmanLogo.png']}
                points={[
                    "Designed and Developed frontend which connected to a REST API that I built.",
                    "Pulled information from a MySQL database.",
                    "Handled it's own password hashing and login verification."
                ]}/>
                <ProjectCard image='/lyrics-app.png' projectName='Lyric finder' position='Full Stack Web Developer' tech={['/nextjs.png', '/tailwindLogo.png', '/JSLogo.png']}
                points={[
                    "Connected to Genius Lyric API.",
                    "Sent requests to API to get top chart songs.",
                    "Allow users to search API to find lyrics."
                ]}
                link='https://song-lyrics-ten.vercel.app/'/>
                <ProjectCard image='/slackClone.png' projectName='Slack Clone' position='Web Developer' tech={['/JSLogo.png', '/reactLogo.png', '/firebaseLogo.png', 'css3Logo.png']}
                points={[
                    "Stored room and chat data in Firebase database.",
                    "Google Oath in order to login.",
                    "Snapshots of data to update UI in real time.",
                    
                ]} link='https://slackclone-40f8f.web.app/'/>
            </div>

        </motion.div>
    )
}

export default Projects;