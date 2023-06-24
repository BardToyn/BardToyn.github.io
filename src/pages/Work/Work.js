import "./style.css";
import Project from "../../components/project/project";

import { projects } from "../../helpers/progectsList";

function Work() {
	return (
		<div className="work-list" id="project">
			{projects.map((project, index) => {
				return (
					<Project
						 key={index}
						 title={project.title}
						 text={project.text}
						 skills={project.skills}
						 img={project.img}
						 gitHubLink={project.gitHubLink}
						 openDemo={project.openDemo}
					 />
				)
			})}
		</div>
	);
}

export default Work;