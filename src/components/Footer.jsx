import {Link} from "react-router-dom";
import { useContext } from "react"
import { OptionsContext } from "../contexts/OptionsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons"
export default function Footer() {
    const {language, darkMode, apiData} = useContext(OptionsContext);
    return (
        <footer className="bg-[#F9F9F9] pt-10 sm:pt-20 pb-16 sm:pb-30 px-4 sm:px-8 md:px-16 lg:px-28 dark:bg-[#141414]" data-theme={darkMode ? "dark" : "light"}>
            <h2 className="text-[#1F2937] font-semibold text-2xl sm:text-[2.6rem] leading-[125%] w-full lg:w-[33rem] mb-10 dark:text-[#AEBCCF] text-center lg:text-start">{apiData[language].footerSection.title}</h2>
            <section className="footer-links flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
                <div className="email text-center lg:text-start w-full lg:w-auto mb-4 lg:mb-0">
                    <Link className="text-[#AF0C48] text-xl font-medium tracking-[5%] underline underline-offset-5 dark:text-[#BAB2E7]"><FontAwesomeIcon icon={faHandPointRight} className="text-yellow-500 mr-2"/> {apiData[language].footerSection.email}</Link>
                </div>
                <div className="socials flex flex-col sm:flex-row gap-4 justify-center lg:justify-between pt-4 lg:pt-0">
                    <Link className="text-[#0A0A14] text-lg leading-[150%] font-medium dark:text-[#E1E1FF]">{apiData[language].footerSection.blog}</Link>
                    <a href={apiData[language].footerSection.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#00AB6B] text-lg leading-[150%] font-medium dark:text-[#17D18B]">{apiData[language].footerSection.github}</a>
                    <a href={apiData[language].footerSection.linkedinLink} target="_blank" rel="noopener noreferrer" className="text-[#0077B5] text-lg leading-[150%] font-medium dark:text-[#0BA6F6]">{apiData[language].footerSection.linkedin}</a>
                </div>
            </section>
        </footer>
    )
}