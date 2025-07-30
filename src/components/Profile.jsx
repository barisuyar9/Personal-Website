import { useContext } from "react"
import { OptionsContext } from "../contexts/OptionsContext";
export default function Profile() {
  const { language, darkMode, apiData } = useContext(OptionsContext);
  return (
    <section
      className="px-4 sm:px-8 md:px-16 lg:px-28 pt-12 sm:pt-20 dark:bg-[#252128]"
      data-theme={darkMode ? "dark" : "light"}
    >
      <h2 className="font-semibold text-2xl sm:text-4xl lg:text-5xl text-gray-800 dark:text-[#AEBCCF] text-center lg:text-start">
        {apiData[language].profileSection.title}
      </h2>
      <section className="flex flex-col lg:flex-row justify-between mt-8 gap-12">
        {/* Left Section */}
        <section className="profile-left flex flex-col w-full lg:w-1/2">
            <h3 className="text-indigo-700 text-2xl sm:text-3xl font-medium mt-4 mb-6 text-center lg:text-start dark:text-[#B7AAFF]">
                {apiData[language].profileSection.profile}
            </h3>
            <div className="space-y-4">
        {/* Doğum günü */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-start text-black lg:text-lg text-sm leading-[180%] dark:text-white w-full gap-1 sm:gap-0">
            <span className="font-semibold sm:w-1/2">{apiData[language].profileSection.birthday1}</span>
            <span className="font-normal">{apiData[language].profileSection.birthday2}</span>
        </div>
        {/* Şehir */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-start text-black lg:text-lg text-sm leading-[180%] dark:text-white w-full gap-1 sm:gap-0">
            <span className="font-semibold sm:w-1/2">{apiData[language].profileSection.city1}</span>
            <span className="font-normal">{apiData[language].profileSection.city2}</span>
        </div>
        {/* Eğitim */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-start text-black lg:text-lg text-sm leading-[180%] dark:text-white w-full gap-1 sm:gap-0">
            <span className="font-semibold sm:w-2/3 lg:w-1/2">{apiData[language].profileSection.education1}</span>
            <span className="font-normal">
                {apiData[language].profileSection.education2}
                <br />
                {apiData[language].profileSection.education3}
            </span>
         </div>
        {/* Rol */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-start text-black lg:text-lg text-sm leading-[180%] dark:text-white w-full gap-1 sm:gap-0">
            <span className="font-semibold sm:w-1/2">{apiData[language].profileSection.role1}</span>
            <span className="font-normal">{apiData[language].profileSection.role2}</span>
         </div>
         </div>
        </section>
        {/* Right Section */}
        <section className="profile-right w-full lg:w-1/2">
          <h3 className="text-indigo-700 text-2xl sm:text-3xl font-medium mt-4 mb-6 text-center lg:text-start dark:text-[#B7AAFF]">
            {apiData[language].profileSection.aboutMe}
          </h3>
          <div className="w-full lg:w-[34rem] mx-auto lg:mx-0">
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg font-normal leading-[160%] mb-6 text-center lg:text-start dark:text-white">
              {apiData[language].profileSection.aboutMeText1}
            </p>
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg font-normal leading-[160%] text-center lg:text-start dark:text-white">
              {apiData[language].profileSection.aboutMeText2}
            </p>
          </div>
        </section>
      </section>
      {/* Alt çizgi */}
      <div className="w-full border-t border-[#BAB2E7] mt-12" />
    </section>
  );
}