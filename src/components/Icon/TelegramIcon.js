import "./style.css";

import tg from "../../img/icon/tg.svg";

const  TelegramIcon = () => {
    return (
        <a href="https://t.me/EobardThawne1" className="icon-link">
            <img src={tg} alt="telegram" className="icon-img" />
        </a>
    );
}
 


export default TelegramIcon;