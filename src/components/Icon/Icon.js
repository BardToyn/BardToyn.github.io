import "./style.css";

import GitIcon from "./GitIcon"
import GmailIcon from "./GmailIcon"
import TelegramIcon from "./TelegramIcon";


function Icon () {
    return (
        <div className="icon-wrapper">
            <GitIcon />
            <GmailIcon />
            <TelegramIcon />
        </div>
    )
}
 
export default Icon;