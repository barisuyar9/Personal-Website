import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isEnglish, isDark } = useTheme();

  const projects = [
    {
      id: 1,
      title: isEnglish ? "E-Commerce Website" : "E-Ticaret Sitesi",
      description: isEnglish 
        ? "An e-commerce application developed with current web technologies, featuring comprehensive functionalities and fully responsive design. The project focuses on a modular component architecture, mobile-friendly design, and a seamless user experience."
        : "Güncel web teknolojileriyle geliştirilen, kapsamlı özelliklere sahip ve tamamen duyarlı bir e-ticaret uygulaması.  Proje, düzenli bileşen mimarisi, mobil uyumlu tasarım ve akıcı kullanıcı deneyimine odaklanır.",
      image: "/images/projects-1.png",
      technologies: ["react", "redux", "tailwind css", "axios", "react router"],
      githubUrl: "https://github.com/barisuyar9/e-commerce-project",
      liveUrl: "https://e-commerce-project-steel-eta.vercel.app/"
    },
    {
      id: 2,
      title: isEnglish ? "Currency App" : "Döviz Kuru Uygulaması",
      description: isEnglish 
        ? "A currency converter app featuring current exchange rates for the euro, US dollar, and Turkish lira. Select your currency and get instant conversions."
        : "Euro, USD ve TRY kurlarını içeren güncel döviz kuru uygulaması. Para biriminizi seçin, anında dönüşüm sağlayın.",
      image: "/images/currency-app.png",
      technologies: ["react", "axios"],
      githubUrl: "https://github.com/barisuyar9/react.js-Project6-Currency-App",
      liveUrl: "https://react-js-project6-currency-app.vercel.app/"
    },
    {
      id: 3,
      title: isEnglish ? "Pizza Shop" : "Pizza Dükkanı",
      description: isEnglish 
        ? "It is a sample e-commerce site that offers the ability to thoroughly examine pizza varieties, quickly add products to the cart, and easily place orders. It has been designed with a fully mobile-compatible and user-friendly layout."
        : "Pizza çeşitlerini detaylıca inceleme, ürünleri hızlıca sepete ekleme ve kolay sipariş verme imkânı sunan örnek bir e-ticaret sitesidir. Tamamen mobil uyumlu ve kullanıcı dostu bir tasarım ile hazırlanmıştır.",
      image: "/images/pizza-shop.png",
      technologies: ["react", "react router dom", "axios"],
      githubUrl: "https://github.com/barisuyar9/fsweb-s8-challenge-pizza",
      liveUrl: "https://fsweb-s8-challenge-pizza-orcin.vercel.app/"
    },
    {
      id: 4,
      title: isEnglish ? "Portfolio Website" : "Portfolyo Websitesi",
      description: isEnglish 
        ? "This is a portfolio website designed with modern web technologies, showcasing projects and skills. With the dark/light theme option and Turkish–English language support, it offers users a flexible and accessible experience."
        : "Modern web teknolojileriyle tasarlanmış, projelerin ve yeteneklerin sergilendiği portfolyo web sitesidir. Dark/Light tema seçeneği ve Türkçe–İngilizce dil desteği ile kullanıcıya esnek ve erişilebilir bir deneyim sunar.",
      image: "/images/kişisel-web-sitesi.png",
      technologies: ["React", "Context API", "react router dom"],
      githubUrl: "https://github.com/barisuyar9/Personal-Website-2",
      liveUrl: "https://personal-website-zeta-virid-48.vercel.app/"
    }
  ];

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {isEnglish ? "Featured Projects" : "Öne Çıkan Projeler"}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {isEnglish 
              ? "Here are some of my recent projects that showcase my skills and experience."
              : "Yeteneklerimi ve deneyimimi gösteren son projelerimden bazıları."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Proje Resmi */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback - resim yüklenemezse gösterilir */}
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-medium">{project.title}</p>
                  </div>
                </div>
              </div>

              {/* Proje İçeriği */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Teknoloji Etiketleri */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Butonlar */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors text-center"
                  >
                    {isEnglish ? "View on GitHub" : "GitHub'da Görüntüle"}
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                  >
                    {isEnglish ? "Go to App" : "Uygulamaya Git"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
