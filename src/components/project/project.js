const Project = ({title, text, img, skills, gitHubLink, openDemo}) => {
    return (
        <div className="work-item">
            <article className="work-article">
            <p className="text-code">{title}</p>
            <h3 className="heading-three">
                <span className="heading-num">03.</span>
                Проекты
            </h3>
            <div className="work-hero-mob">
                <a href={openDemo} target="_blank" rel="noreferrer">
                    <img className="work-img" src={img} alt={title} />
                </a>
            </div>
            <div className="text-wrap">
                <p className="text-normal">
                    {text}
                </p>
            </div>
            <ul className="stack-list">
                <li className="stack-item">{skills[0]}</li>
                <li className="stack-item">{skills[1]}</li>
                <li className="stack-item">{skills[2]}</li>
            </ul>
            <div className="work-btn-wrap">
                <form className="work-form" action={gitHubLink} method="GET" target="_blank">
                    <button className="work-btn">
                        Репозитории Github
                    </button>
                </form>
                <form className="work-form" action={openDemo} method="GET" target="_blank">
                    <button className="work-btn">
                        Открыть демо
                    </button>
                </form>
            </div>
            </article>
            <div className="work-hero">
                <a href={openDemo} target="_blank" rel="noreferrer">
                    <img className="work-img" src={img} alt={title} />
                </a>
            </div>
		</div>
    );
}
 
export default Project;