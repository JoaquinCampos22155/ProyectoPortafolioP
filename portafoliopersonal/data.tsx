import { BookText, CodeSquare, HomeIcon,Instagram,Github, Brain,  UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaPython, FaHtml5, FaDocker, FaReact, FaNodeJs, FaGithub} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql, SiNextdotjs, SiVercel, SiExpress, SiTailwindcss, SiTypescript} from "react-icons/si";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={40} strokeWidth={1} />,
        src: "https://www.instagram.com/joaquin_campos10?igsh=OHM2amNqMmprdHh6&utm_source=qr",
    },
    {
        id: 2,
        logo: <Linkedin size={40} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/joaqu%C3%ADn-campos-enr%C3%ADquez-770b2522b/",
    },
    {
        id: 3,
        logo: <Github size={40} strokeWidth={1} />,
        src: "https://github.com/JoaquinCampos22155",
    },
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },
    {
        id: 4,
        title: "Tec",
        icon: <Brain size={25} color="#fff" strokeWidth={1} />,
        link: "/technologies",
    },

];

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 3,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 6,
        text: "Proyectos finalizados",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <IoLogoCss3 />,
        title: "CSS",
    },
    {
        icon: <IoLogoJavascript />,
        title: "JavaScript",
    },
    {
        icon: <FaJava />,
        title: "Java",
    },
    {
        icon: <FaPython />,
        title: "Python",
    },
    {
        icon: <FaHtml5 />,
        title: "HTML",
    },
    {
        icon: <GrMysql />,
        title: "Mysql",
    },
    {
        icon: <SiPostgresql />,
        title: "Postresql",
    },
    {
        icon: <FaDocker />,
        title: "Docker",
    },
    {
        icon: <FaReact />,
        title: "React",
    },
    {
        icon: <SiNextdotjs />,
        title: "Next",
    },
    {
        icon: <FaNodeJs />,
        title: "Node",
    },
    {
        icon: <SiVercel />,
        title: "Vercel",
    },
    {
        icon: <FaGithub />,
        title: "Github",
    },
    {
        icon: <SiExpress />,
        title: "Express",
    },
    {
        icon: <SiTailwindcss />,
        title: "Tailwind",
    },
    {
        icon: <SiTypescript />,
        title: "TypeScript",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "HTML only",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/JoaquinCampos22155",
        urlDemo: "http://18.217.0.253/sitios/paginaunohistoria.html",
    },
    {
        id: 2,
        title: "Blog de Volley",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/JoaquinCampos22155/proyecto1vr",
        urlDemo: "http://uwu-guate.site:3856/",
    },
    {
        id: 3,
        title: "Calculadora",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/JoaquinCampos22155/lab8CT",
        urlDemo: "https://github.com/JoaquinCampos22155/lab8CT",
    }
];

