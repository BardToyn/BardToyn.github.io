import "./style.css";

import gm from "../../img/icon/gmail.svg";

const  GmailIcon = () => {
    return (
        <a href="mailto:blinkdewalker0708@gmail.com" className="icon-link">
            <img src={gm} alt="gmail" className="icon-img" />
        </a>
    );
}
 


export default GmailIcon;