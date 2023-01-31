import Skill from "./Skill";

const Skills = () => {
    return (
        <div className="">
            <div className="text-center pt-4 mb-8 text-3xl">My Skills</div>
            {/* <div className="flex items-center justify-center flex-wrap m-2"> */}
            <div className="flex justify-center">
                <div className="grid grid-cols-3 m-2 items-center md:grid-cols-4 lg:grid-cols-5 xl:m-8
                max-w-[80%]">
                    <Skill icon='/html5Logo.png' title='HTML5'/>
                    <Skill icon='/css3Logo.png' title='CSS3'/>
                    <Skill icon='/JSLogo.png' title='JavaScript'/>
                    <Skill icon='/reactLogo.png' title='React'/>
                    <Skill icon='/expressJS.png' title='Express'/>
                    <Skill icon='/jiraLogo.png' title='Jira'/>
                    <Skill icon='/firebaseLogo.png' title='Firebase'/>
                    <Skill icon='/mongoDBLogo.png' title='MongoDB'/>
                    <Skill icon='/mysqlLogo.png' title='MySQL'/>
                    <Skill icon='/githubLogo.png' title='Github'/>
                    <Skill icon='/tailwindLogo.png' title='Tailwind'/>
                    <Skill icon='/postmanLogo.png' title='Postman'/>
                </div>
            </div>
        </div>
    )
}

export default Skills;