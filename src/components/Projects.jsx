import { useContext } from "react"
import { OptionsContext } from "../contexts/OptionsContext";
export default function Projects() {
    const {language, darkMode, apiData} = useContext(OptionsContext);
    return (
        <section id="projects" className="px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-25 dark:bg-[#252128]" data-theme={darkMode ? "dark" : "light"}>
            <h2 className="font-semibold text-3xl sm:text-5xl mb-8 text-gray-800 dark:text-[#AEBCCF] text-center lg:text-start">{apiData[language].projectsSection.title}</h2>
            <section className="projects-list">
                <div className="project-item flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-8">
                    {apiData[language].projectsSection.projects.map((project, index) => (
                        <div key={index} className="w-full sm:w-11/12 lg:w-72 text-center lg:text-start">
                            <img className="mb-4" src={project.image}/>
                            <h3 className="text-indigo-700 text-3xl font-medium mb-4 dark:text-[#CFCBFF]">{project.name}</h3>
                            <p className="text-sm text-gray-500 font-normal leading-[125%] mb-4 dark:text-[white]">{project.description}</p>
                            <div className="buttons text-sm text-indigo-800 font-medium leading-[100%] flex gap-2 mb-4 dark:text-[#8F88FF] lg:justify-between sm:justify-center">
                                {project.buttons.map((button, index) => (
                                    <button key={index} className="border border-indigo-800 rounded-[4px] w-17 h-7 cursor-pointer dark:bg-[#383838] dark:border-[#8F88FF]">{button.text}</button>
                                ))}
                            </div>
                                <div className="links flex justify-between lg:mb-0 sm:mb-4">
                                {project.links.map((link, index) => (
                                    <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className="text-indigo-800 text-base leading-4 underline dark:text-[#E1E1FF]">{link.text}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}