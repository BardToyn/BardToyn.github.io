import project01 from "../img/work/1.webp"
import project02 from "../img/work/2.webp"

const projects = [
    {
        title: 'Первый проект',
        text: 'Классический одностраничный лендинг.',
        skills: ['HTML', 'CSS'],
        img: project01,
        gitHubLink: 'https://github.com/BardToyn/Lionic',
        openDemo: 'https://bardtoyn.github.io/Lionic/'
    },

    {
        title: 'Второй проект',
        text: 'Портфолио фотографа',
        skills: ['HTML', 'CSS', 'VanillaJS', 'Swiper'],
        img: project02,
        gitHubLink: 'https://github.com/BardToyn/temluche.portfolio',
        openDemo: 'https://bardtoyn.github.io/temluche.portfolio/'
    }
];

export {projects}