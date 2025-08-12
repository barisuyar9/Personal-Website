import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isEnglish, isDark } = useTheme();

  const skills = [
    { name: 'React.js', icon: '/images/react.png' },
    { name: 'JavaScript', icon: '/images/javascript.png' },
    { name: 'TypeScript', icon: '/images/typescript.png' },
    { name: 'PostgreSQL', icon: '/images/postgresql.png' },
    { name: 'Tailwind CSS', icon: '/images/tailwindcss.png' },
    { name: 'Redux', icon: '/images/redux.png' },
    { name: 'Java', icon: '/images/java.png' },
    { name: 'Spring Boot', icon: '/images/spring-boot.png' },
    { name: 'Cypress', icon: '/images/cypress.png' },
    { name: 'Git', icon: '/images/git.png' },
    { name: 'Google Analytics', icon: '/images/google-analytics.png' },
    { name: 'Tag Manager', icon: '/images/google-tag-manager.png' },
    { name: 'Looker Studio', icon: '/images/looker-studio.png' },
    { name: 'Microsoft Clarity', icon: '/images/clarity.png' },
    { name: 'Excel', icon: '/images/excel.png' },
  ];

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {isEnglish ? "Skills & Technologies" : "Yetenekler & Teknolojiler"}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {isEnglish 
              ? "I work with a variety of technologies to create amazing digital experiences."
              : "Harika dijital deneyimler yaratmak için çeşitli teknolojilerle çalışıyorum."
            }
          </p>
        </div>

        {/* Skills Container */}
        <div className="relative">
          <div className="flex space-x-8 overflow-x-auto pb-4 scrollbar-hide">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
              >
                <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 group-hover:scale-110">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className={`text-center mt-3 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays for smooth scrolling effect */}
          <div className={`absolute left-0 top-0 w-16 h-full bg-gradient-to-r ${isDark ? 'from-gray-800' : 'from-gray-50'} to-transparent pointer-events-none`}></div>
          <div className={`absolute right-0 top-0 w-16 h-full bg-gradient-to-l ${isDark ? 'from-gray-800' : 'from-gray-50'} to-transparent pointer-events-none`}></div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {isEnglish ? "Scroll to see more" : "Daha fazlasını görmek için kaydırın"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
