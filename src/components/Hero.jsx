import { useContext } from "react"
import { OptionsContext } from "../contexts/OptionsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Hero() {
    const {language, darkMode, apiData} = useContext(OptionsContext);
    return (
        <main className="flex flex-col lg:flex-row lg:justify-between lg:gap-0 gap-4 items-center px-4 sm:px-8 md:px-16 lg:px-28 pt-12 sm:pt-20 dark:bg-[#252128]" data-theme={darkMode ? "dark" : "light"}>
            <section className="hero-left w-full lg:w-1/2">
            <div className="flex items-center space-x-4 sm:justify-center lg:justify-normal">
                <div className="w-25 h-0.5 bg-indigo-800 dark:bg-[#BAB2E7]"></div>
                <span className="text-indigo-700 font-medium text-xl dark:text-[#BAB2E7]">{apiData[language].heroSection.name}</span>
            </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mt-8 leading-none w-full lg:w-[37.25rem] text-gray-800 dark:text-[#AEBCCF] text-center lg:text-start">{apiData[language].heroSection.title1}<br/>{apiData[language].heroSection.title2}</h1>
                <p className="text-gray-500 text-base sm:text-lg font-normal w-full lg:w-[34.5rem] mt-8 leading-7 dark:text-white text-center lg:text-start">{apiData[language].heroSection.intro}</p>
                <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center lg:items-start">
                    {apiData[language].heroSection.buttons.map((button, index) => (
                        <button key={index} onClick={() => window.open(button.link, "_blank", "noopener,noreferrer")} className="w-32 cursor-pointer h-14 text-lg text-indigo-800 border dark:text-[#E1E1FF] border-indigo-800 rounded-md hover:bg-indigo-800 hover:text-white dark:hover:bg-[#E1E1FF] dark:hover:text-[#000000] dark:border-[#E1E1FF] dark:bg-[#383838]">{button.icon && <FontAwesomeIcon icon={button.icon} className="text-2xl"/>} {button.text}</button>
                    ))}
                </div>
            </section>
            <section className="hero-right w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <img className="hidden sm:block w-full max-w-[22rem] md:max-w-[29.75rem] h-auto md:h-[23.43rem] rounded-[1.125rem] drop-shadow-2xl drop-shadow-[#18274B24]" src={apiData.en.heroSection.profileImage} alt="profile"/>
            </section>
        </main>
    )
}