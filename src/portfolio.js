/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ivan Moreno",
  title: "Hola a todos, Mi nombre es pepe",
  subTitle: emoji(
    " Soy Técnico Superior en ASIR 🚀. Tengo grandes conociemientos sobre sistemas, redes, BBDD y servidores"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1rEtKkyiRGVqrcGdZcgkrGTGx1E-eiNTn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/galanig",
  linkedin: "https://www.linkedin.com/in/ivan-moreno-galan-/",
  gmail: "ivanmgalan@gmail.com",
  gitlab: "https://github.com/galanig",
  facebook: "https://www.facebook.com",
  medium: "https://medium.com/",
  stackoverflow: "https://stackoverflow.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "¿Que es lo que hago?",
  subTitle: "En mis pŕacticas he trabajado como Administrador de Sistemas de TI, sin embargo, me gustaría desarrollar mis habilidades relaccionadas con las bases de datos y en DevOps. De ahí éste trabajo",
  skills: [
    emoji(
      "⚡ Habilidades con lenguaje SQL."
    ),
    emoji(
      "⚡ Instalación y configuración de Windows Server 2022"
    ),
    emoji("⚡ Configuración de servidores. DHCP, DNS, WEB, Correo, FTP, mensajeria..."),
    emoji(
      "⚡ Integración en AWS de sitio Web."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Centro de estudios profesionales CCC",
      logo: require("./assets/images/ccc.png"),
      subHeader: "Grado superior en Administración de sistemas informáticos en red",
      duration: "Septiembre 2022 - Junio 2024",
      desc: "Nota media de Sobresaliente",
      descBullets: [
      ]
    }
   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Adimisntración de sistemas", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "BBDD",
      progressPercentage: "90%"
    },
    {
      Stack: "Seguridad en redes",
      progressPercentage: "75%"
    },
    {
      Stack: "Intergación Continua / Despliegue Continuo",
      progressPercentage: "60%"
    },
    {
      Stack: "Programación",
      progressPercentage: "70%"
    },
    {
      Stack: "Configuración servidores",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Top Team Leader",
      company: "Bosch",
      companylogo: require("./assets/images/bosch.png"),
      date: "Junio 2018 – Actualidad",
      desc: "Durante estos años he utilizado tecnologias como Microsoft 365 y la herramienta SAP encargandome de asignar cargas de trabajo a los operarios, atender incidencias de los mismos, control de tiempos del personal a cargo, correo de empresa, inventarios etc...",
      descBullets: [
      ]
    },
    {
      role: "Administrador de sistemas de TI",
      company: "Diwiot",
      companylogo: require("./assets/images/diwi.png"),
      date: "Abril 2024 – Junio 2024",
      desc: "Durante mi formación he utilizado tecnologías como Micorsoft 365, procesos de digitalizacion IoT , Windows Server 2022, GPO's, curso sobre Fundamentos de Azure 20h y curso sobre fundamentos Microsoft 20 H"
    },
    {
      role: "Agente aeroportuario",
      company: "Iberia",
      companylogo: require("./assets/images/iberia.png"),
      date: "Enero 2015 – Diciembre 2017",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "CCC Centro de formación profesional",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/ccc.png"),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "Visita la página web",
          url: "https://www.cursosccc.com/titulos-fp/online/?codigo=AJNZ&utm_term=ccc%20fp&utm_campaign=AJNZ+-+ES_BR_MARCA_AMPLIA&utm_source=adwords&utm_medium=ppc&hsa_acc=2080918641&hsa_cam=16341114642&hsa_grp=130970199062&hsa_ad=654763224879&hsa_src=g&hsa_tgt=kwd-362697374053&hsa_kw=ccc%20fp&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=EAIaIQobChMIvO3_-LL5hQMVaGZBAh333QOUEAAYASAAEgKU2vD_BwE"
        }
        //  you can add extra buttons here.
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Logros y Certificaciones 🏆 "),
  subtitle:
    "Logoros y certificaciones que he obtenido en estos años !",

  achievementsCards: [
    {
      title: "Microsoft Azure y Microsoft 365 basics",
      subtitle:
        "Cursos sobre fundamentos básicos de MS365 20h y curso sobre principios básicos de Azure 20h",
      image: require("./assets/images/microsoft.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Carta de recomendación",
          url: "https://drive.google.com/file/d/1niPRZvb8ZU6HeurIMDm8FPmF950p7A-V/view?usp=sharing"
        }
       
      ]
    },
    {
      title: "Fundamentos básicos de Big Data",
      subtitle:
        "Curso sobre fundamentos y principios básicos de Big data 25h",
      image: require("./assets/images/imagendata.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Página de CCC",
          url: "https://www.cursosccc.com/"
        }
      ]
    },

    {
      title: "Windows Server 2022",
      subtitle: "Instalación y configuración para producción de Windows Server 2022 Standart editión. Configuración usuarios, grupos, GPO, enrutamiento, acceso remoto, despliegue de software, inicio de apps, entorno usuario etc...",
      image: require("./assets/images/server.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Información",
          url: "https://www.microsoft.com/es-es/windows-server"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Si quieres información extra sobre algunos blogs de interés no dudes en echarle un vistazo",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Gana 200$ y una camiseta del Asistente de Google",
      description:
        "¿Quieres ganar 200$ y una camiseta del Asistente de Google creando una acción del Asistente de Google en menos de 30 minutos?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "¿Por qué REACT es mejor?",
      description:
        "React es una biblioteca de JavaScript para crear una interfaz de usuario. Lo mantienen Facebook y una comunidad de desarrolladores individuales y empresas."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "HABLA",
  subtitle: emoji(
    "ME ENCANTA COMPARTIR MI CONOCIMIENTO Y SEGUIR FORMANDOME 😅"
  ),

  talks: [
    {
      title: "Contacta conmigo a traves de linkedIn",
      subtitle: "Accede y contacta conmigo. Es un placer poder dedicarte unos minutos.",
      slides_url: "",
      event_url: "https://www.linkedin.com/in/ivan-moreno-galan-/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contacto ☎️"),
  subtitle:
    "Si quieres contactar conmigo pongase en contacto con esta dirección",
  number: "+34 645403343",
  email_address: "ivanmgalan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
