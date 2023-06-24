import TextSphere from "../../components/TextSphere/TextSphere";
import "./style.css";

function Home() {
	return (
        <div className="Home">
            <section className="hero">
                <article className="hero-article">
                    <p className="text-code animated fadeInDown">
                        Привет! Меня зовут
                    </p>
                    <h1 className="heading hero-name">
                        Станислав Ткачев
                    </h1>
                    <h2 className="heading hero-heading">
                        Front-end Developer
                    </h2>
                    <p className="text-normal hero-text">
                        Я специализируюсь на разработке пользовательских интерфейсов для веб-сервисов.
                    </p>
                    <form action="https://leetcode.com/blinkdewalker0708/" method="get" target="_blank">
                        <button className="hero-btn">
                            Я на leetcode!
                        </button>
                    </form>
                </article>
                <TextSphere />
            </section>
        </div>
	);
}

export default Home;