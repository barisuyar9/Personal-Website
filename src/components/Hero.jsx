import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isEnglish, isDark } = useTheme();

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Yazılar */}
          <div className="space-y-6">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {isEnglish ? (
                <>
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">Barış</span>
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl">Full Stack Developer</span>
                </>
              ) : (
                <>
                  Merhaba, Ben <span className="text-blue-600 dark:text-blue-400">Barış</span>
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl">Full Stack Developer</span>
                </>
              )}
            </h1>
            
            <p className={`text-lg sm:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {isEnglish 
                ? "Passionate about creating innovative web applications and turning ideas into reality through code. I specialize in modern web technologies and user experience design."
                : "Yenilikçi web uygulamaları oluşturmaya ve fikirleri kod aracılığıyla gerçeğe dönüştürmeye tutkulu bir geliştiriciyim. Modern web teknolojileri ve kullanıcı deneyimi tasarımında uzmanım."
              }
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/cv-baris-uyar.pdf" 
                download="Baris_Uyar_CV.pdf"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {isEnglish ? "Download CV" : "CV İndir"}
              </a>
            </div>
          </div>
          
          {/* Sağ Taraf - Resim */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-2">
                  <img
                    src="/images/hero-1.jpeg"
                    alt="Barış Uyar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
