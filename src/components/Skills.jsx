import { useContext } from "react"
import { OptionsContext } from "../contexts/OptionsContext";
export default function Skills() {
    const {language, darkMode, apiData} = useContext(OptionsContext);
    return (
        <>
        <section id="skills" className="px-4 sm:px-8 md:px-16 lg:px-28 pt-12 sm:pt-25 dark:bg-[#252128]" data-theme={darkMode ? "dark" : "light"}>
            <h2 className="font-semibold text-3xl sm:text-5xl text-gray-800 dark:text-[#AEBCCF] text-center lg:text-start">{apiData[language].skillsSection.title}</h2>
            <section className="skills mt-4">
                <div className="skill-item flex flex-col lg:flex-row lg:justify-between justify-center text-center lg:text-start gap-6">
                    {apiData[language].skillsSection.skills.map((skill, index) => (
                        <div key={index} className="w-full sm:w-11/12 lg:w-[18.75rem] lg:h-[6.5rem] mx-auto lg:mx-0">
                            <h3 className="text-indigo-700 text-3xl mt-8 font-medium leading-7 dark:text-[#B7AAFF]">{skill.name}</h3>
                            <p className="text-gray-500 font-normal mt-8 text-xs leading-5 dark:text-white">{skill.info}</p>
                        </div>
                    ))}
                </div>
                <div className="w-[auto] border-t border-[#BAB2E7] mx-auto mt-18" />
            </section>
        </section>
        </>
    )
}