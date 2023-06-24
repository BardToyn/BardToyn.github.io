import "./style.css"

import HtmlIcon from "../../components/Icon/HtmlIcon";
import FigmaIcon from "../../components/Icon/FigmaIcon";
import CssIcon from "../../components/Icon/CssIcon";
import JsIcon from "../../components/Icon/JsIcon";
import ReactIcon from "../../components/Icon/ReactIcon";
import GitHubIcon from "../../components/Icon/GitHubIcon";

import aboutimg from "../../img/me.webp"

function About() {
	return (
        <div className="about" id="about">
            <article className="about-article fade-in-right">
                <h3 className="heading-three">
                    <span className="heading-num">02.</span>
                    Обо мне
                </h3>
                <p className="text-normal">
                    Начинал свой путь как контент-менеджер, наполнял карточки-товаров, писал информационные текста для разных ресурсов, редактировал изображения в соответствий с требованиями проектов с которыми работал. После был администратором нескольких интернет-ресурсов.
                </p>
                <p className="text-normal text-mg">
                    После этого пришел к разработке/доработки сайтов на таких платформах как Tilda, MODX, WordPress, самописных сайтов. Также разрабатывал дизайн макетов для своих веб-проектов. На данный момент являюсь Front-end разработчиком.
                </p>
                <h3 className="heading-three heading-marg">
                    Основной стек 
                </h3>
                <div className="about-list">
                    <div className="about-item">
                        <HtmlIcon />
                    </div>
                    <div className="about-item">
                        <CssIcon />
                    </div>
                    <div className="about-item">
                        <JsIcon />
                    </div>
                    <div className="about-item">
                        <ReactIcon />
                    </div>
                    <div className="about-item">
                        <GitHubIcon />
                    </div>
                    <div className="about-item">
                        <FigmaIcon />
                    </div>
                </div>
            </article>
            <div className="about-block">
                <div className="about-block-wrap">
                    <div className="about-wrap"></div>
                    <img className="about-img" src={aboutimg} alt="me" />
                </div>
                <div className="about-border-wrap"></div>
            </div>
        </div>
	);
}

export default About;