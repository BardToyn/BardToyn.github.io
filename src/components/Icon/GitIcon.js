import "./style.css";

import gt from "../../img/icon/github.svg";

const  GitIcon = () => {
    return (
        <a href="https://github.com/BardToyn/" target="blank_" className="icon-link">
            <img src={gt} alt="github" className="icon-img" />
        </a>
    );
}
 


export default GitIcon;