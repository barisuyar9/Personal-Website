import { useTheme } from '../context/ThemeContext';

const Profile = () => {
  const { isEnglish, isDark } = useTheme();

  const personalInfo = [
    { label: isEnglish ? "Name" : "Ad", value: "Barış Uyar" },
    { label: isEnglish ? "Location" : "Konum", value: "İstanbul, Turkey" },
    { label: isEnglish ? "Email" : "E-posta", value: "barisuyarh@gmail.com" },
    { label: isEnglish ? "Phone" : "Telefon", value: "+90 536 858 2008" },
    { label: isEnglish ? "Experience" : "Deneyim", value: "1+ Years" },
    { label: isEnglish ? "Languages" : "Diller", value: "Turkish, English" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {isEnglish ? "About Me" : "Hakkımda"}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {isEnglish 
              ? "Get to know me better through my personal information and background."
              : "Kişisel bilgilerim ve geçmişim aracılığıyla beni daha iyi tanıyın."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sol Taraf - Kişisel Bilgiler */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {isEnglish ? "Personal Information" : "Kişisel Bilgiler"}
            </h3>
            
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {info.label}:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Sosyal Medya Linkleri */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {isEnglish ? "Social Media" : "Sosyal Medya"}
              </h4>
              <div className="flex space-x-4">
                <a href="https://github.com/barisuyar9" className="w-10 h-10 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-uyar-1a4495207/" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Hakkımda Yazısı */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {isEnglish ? "My Story" : "Hikayem"}
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  {isEnglish 
                    ? "I am a software developer who has passionately pursued an interest in technology since childhood, loves to create innovative solutions, and aims for continuous learning. At the age of 18, I made a concrete entry into the world of software by publishing my own mobile game, and this process provided me with significant experiences both technically and creatively."
                    : "Ben, teknolojiye olan ilgisini çocukluk yıllarından beri tutkuyla sürdüren, yenilikçi çözümler üretmeyi seven ve sürekli öğrenmeyi hedefleyen bir yazılım geliştiriciyim.  18 yaşında kendi mobil oyunumu yayınlayarak yazılım dünyasına somut bir giriş yaptım ve bu süreç, bana hem teknik hem de yaratıcılık anlamında önemli deneyimler kazandırdı."
                  }
                </p>
                
                <p>
                  {isEnglish 
                    ? "In the early stages of my career, by working in the field of Data Analytics, I built a strong foundation in data-driven thinking, analyzing user behaviors, and integrating results into business processes. However, the goal of becoming a full-time software developer, which has been on my mind since high school, led me to take a bold step and fully transition into the world of software."
                    : "Kariyerimin ilk basamaklarında Veri Analitiği alanında çalışarak, veri odaklı düşünme, kullanıcı davranışlarını analiz etme ve sonuçları iş süreçlerine entegre etme konularında güçlü bir temel edindim. Ancak, lise yıllarımdan beri aklımda olan tam zamanlı yazılım geliştirici olma hedefim beni, cesur bir adım atarak tam anlamıyla yazılım dünyasına geçiş yapmaya yönlendirdi."
                  }
                </p>
                
                <p>
                  {isEnglish 
                    ? "Today, as a professional who continues to develop myself in both front-end and back-end technologies, eager to acquire new skills and growth-oriented, I aim to turn every challenge I encounter into a learning opportunity. I see coding not just as a profession, but also as a passion; I believe that every line of code is a small but meaningful step taken to solve a problem or bring an idea to life."
                    : "Bugün, hem ön yüz hem de arka yüz teknolojilerinde kendimi geliştirmeye devam eden, yeni beceriler kazanma konusunda hevesli ve büyüme odaklı bir profesyonel olarak, karşıma çıkan her zorluğu öğrenme fırsatına dönüştürmeyi hedefliyorum. Kodlamayı yalnızca bir meslek değil, aynı zamanda bir tutku olarak görüyor; her satır kodun, bir problemi çözmek veya bir fikri hayata geçirmek için atılmış küçük ama anlamlı bir adım olduğuna inanıyorum."
                  }
                </p>
              </div>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-center text-white">
                <div className="text-3xl font-bold">70+</div>
                <div className="text-sm opacity-90">
                  {isEnglish ? "Projects" : "Proje"}
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-center text-white">
                <div className="text-3xl font-bold">1+</div>
                <div className="text-sm opacity-90">
                  {isEnglish ? "Years Experience" : "Yıl Deneyim"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
