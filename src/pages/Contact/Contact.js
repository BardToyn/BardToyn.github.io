import "./style.css"

import GitIcon from "../../components/Icon/GitIcon"
import GmailIcon from "../../components/Icon/GmailIcon"
import TelegramIcon from "../../components/Icon/TelegramIcon";

function Contact() {
	return (
		<div className="contact" id="contact">
			<span className="heading-num">
				04. Что дальше?
			</span>
			<h3 className="heading-three">
				Свяжитесь со мной
            </h3>
			<p className="text-normal text-contact">
				Хотя сейчас я не ищу новых возможностей, мой почтовый ящик всегда открыт. Если у вас есть вопрос или вы просто хотите сказать привет, я сделаю все возможное, чтобы ответить вам!
			</p>
			<form action="mailto:blinkdewalker0708@gmail.com" method="get">
				<button className="hero-btn contact-btn">
					Сказать Привет!
				</button>
            </form>
		</div>
	);
}

export default Contact;