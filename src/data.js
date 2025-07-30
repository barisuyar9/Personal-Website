import project1 from "./assets/projects-1.png";
import project2 from "./assets/projects-2.png";
import project3 from "./assets/projects-3.png";
import profilfoto from "./assets/banner.png";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

const data = {
    en: {
        headerSection: {
            navButtons: [
                {
                    text: "Skills",
                    link: "#skills",
                },
                {
                    text: "Projects",
                    link: "#projects",
                },
                {
                    text: "Hire me",
                },
            ],
            nameIcon: "B",
            darkMode: "DARK MODE",
            lightMode: "LIGHT MODE",
            language1: "TÜRKÇE'YE",
            language2: "GEÇ",
        },
        heroSection: {
            name: "Barış Uyar",
            title1: "Creative thinker",
            title2: "Minimalist lover",
            intro: "Hi, I’m Barış. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
            buttons: [
                {
                    text: "Hire me",
                    link: "#",
                    icon: "",
                },
                {
                    text: "Github",
                    link: "https://github.com/barisuyar9?tab=repositories",
                    icon: faGithub,
                },
                {
                    text: "Linkedin",
                    link: "https://www.linkedin.com/in/bar%C4%B1%C5%9F-uyar-1a4495207/",
                    icon: faLinkedinIn,
                }
            ],
            profileImage: profilfoto,
        },
        skillsSection: {
            title: "Skills",
            skills: [
                {
                    name: "JavaScript",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    name: "React.Js",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    name: "Node.Js",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                }
            ],
        },
        profileSection: {
            title: "Profile",
            profile: "Profile",
            birthday1: "Birth Date",
            birthday2: "09.02.1999",
            city1: "City ​​of Residence",
            city2: "İstanbul",
            education1: "Education Status",
            education2: "Dogus Uni.",
            education3: "Sociology",
            role1: "Preferred Role",
            role2: "Full Stack Developer, UI",
            aboutMe: "About Me",
            aboutMeText1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            aboutMeText2: "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        },
        projectsSection: {
            title: "Projects",
            projects: [
                {
                    name: "Workintech",
                    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    image: project1,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "#",
                        },
                        {
                            text: "View Site",
                            link: "#",
                        },
                    ],
                },
                {
                    name: "Random Jokes",
                    description: "A Single Page Application project. This React project was created using Vite. It uses React Router to navigate between components, Axios to post FormData to a mock api service, prop lifting to transfer order data and Cypress to test several success and error scenarios.",
                    image: project2,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "https://github.com/barisuyar9/fsweb-s8-challenge-pizza",
                        },
                        {
                            text: "View Site",
                            link: "#",
                        },
                    ],
                },
                {
                    name: "Journey",
                    description: "A simple, static web page. This was one of my first frontend projects. It uses fundamental HTML elements, a scroll feature to horizontally scroll movie items, Fontawesome icons to create features like star ratings and CSS to create the skeleton of a Netflix-like page.",
                    image: project3,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "https://github.com/barisuyar9/react.js-Project6-Currency-App",
                        },
                        {
                            text: "View Site",
                            link: "#",
                        },
                    ],
                },
            ]
        },
        footerSection: {
            title: "Let's work together on your next product.",
            email: "barisuyarh@gmail.com",
            blog: "Personal Blog",
            github: "Github",
            githubLink: "https://github.com/barisuyar9?tab=repositories",
            linkedin: "Linkedin",
            linkedinLink: "https://www.linkedin.com/in/bar%C4%B1%C5%9F-uyar-1a4495207/",
        },
    },
    tr: {
        headerSection: {
            navButtons: [
                {
                    text: "Yetenekler",
                },
                {
                    text: "Projeler",
                },
                {
                    text: "İşe al",
                },
            ],
            nameIcon: "B",
            darkMode: "KARANLIK MOD",
            lightMode: "AYDINLIK MOD",
            language1: "SWITCH TO",
            language2: "ENGLISH",
        },
        heroSection: {
            name: "Barış Uyar",
            title1: "Yaratıcı düşünür",
            title2: "Minimalist sever",
            intro: "Merhaba, ben Barış. Ben bir full-stack geliştiriciyim. Harika kullanıcı deneyimiyle, sağlam ve ölçeklenebilir frontend ürünler geliştirilebilen bir geliştirici arıyorsanız, gelin el sıkışalım.",
            buttons: [
                {
                    text: "İşe al",
                    link: "#",
                    icon: "",
                },
                {
                    text: "Github",
                    link: "https://github.com/barisuyar9?tab=repositories",
                    icon: faGithub,
                },
                {
                    text: "Linkedin",
                    link: "https://www.linkedin.com/in/bar%C4%B1%C5%9F-uyar-1a4495207/",
                    icon: faLinkedinIn,
                }
            ],
            profileImage: profilfoto,
        },
        skillsSection: {
            title: "Yetenekler",
            skills: [
                {
                    name: "JavaScript",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    name: "React.Js",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    name: "Node.Js",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                }
            ],
        },
        profileSection: {
            title: "Profil",
            profile: "Profil",
            birthday1: "Doğum Tarihi",
            birthday2: "09.02.1999",
            city1: "İkamet Şehri",
            city2: "İstanbul",
            education1: "Eğitim Durumu",
            education2: "Doğuş Üni.",
            education3: "Sosyoloji",
            role1: "Tercih Ettiği Rol ",
            role2: "Full Stack Developer, UI",
            aboutMe: "Hakkımda",
            aboutMeText1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            aboutMeText2: "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        },
        projectsSection: {
            title: "Projeler",
            projects: [
                {
                    name: "Workintech",
                    description: "Kullanıcılarınızın hangi çerezleri kabul edip hangilerini reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal bir çerez eklentisi. Bu eklenti, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve NPM paketi olarak mevcuttur. Git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
                    image: project1,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "#",
                        },
                        {
                            text: "Websiteye Git",
                            link: "#",
                        },
                    ],
                },
                {
                    name: "Rastgele Şakalar",
                    description: "Bir tek sayfa uygulama projesidir. Bu React projesi Vite kullanılarak oluşturulmuştur. Bileşenler arasında gezinmek için React Router'ı, FormData'yı bir sahte api hizmetine göndermek için Axios'u ve birkaç başarı ve hata senaryosunu test etmek için Cypress'i kullanır.",
                    image: project2,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "https://github.com/barisuyar9/fsweb-s8-challenge-pizza",
                        },
                        {
                            text: "Websiteye Git",
                            link: "#",
                        },
                    ],
                },
                {
                    name: "Yolculuk",
                    description: "Basit, statik bir web sayfasıdır. İlk frontend projelerimden biriydi. Temel HTML öğelerini, film kutularını yatay kaydırmak için bir kaydırma özelliğini, yıldız derecelendirmeleri gibi özellikler oluşturmak için Fontawesome simgelerini ve Netflix benzeri bir sayfanın iskeletini oluşturmak için CSS kullanır.",
                    image: project3,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "https://github.com/barisuyar9/react.js-Project6-Currency-App",
                        },
                        {
                            text: "Websiteye Git",
                            link: "#",
                        },
                    ],
                },
            ]
        },
        footerSection: {
            title: "Haydi bir sonraki ürününüzde birlikte çalışalım.",
            email: "barisuyarh@gmail.com",
            blog: "Kişisel Blog",
            github: "Github",
            githubLink: "https://github.com/barisuyar9?tab=repositories",
            linkedin: "Linkedin",
            linkedinLink: "https://www.linkedin.com/in/bar%C4%B1%C5%9F-uyar-1a4495207/",
        },
    }, 
}

export default data;