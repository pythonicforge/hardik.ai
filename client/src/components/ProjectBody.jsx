import Project from "./Project";
import "../styles/ProjectBody.scss";
import stars from "../images/stars.svg";
import devcraft from "../images/devcraft.svg";
import hardik_ai from "../images/hardik-ai.svg";
import melodi_cli from "../images/melodi-cli.svg";
import sunpy from '../images/sunpy.png'
import pks from "../images/peripheral-killing-system.svg";
import pixelated_computer from "../images/pixelated-computer.svg";
import PlaceholderImage from "../images/placeholder.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const projects = [
  {
    project_name: "Peripheral Killing System",
    image: pks,
    project_id: "00",
    project_link: "peripheral-killing-system",
  },
  {
    project_name: "Melody.cli",
    image: melodi_cli,
    project_id: "01",
    project_link: "melody-cli",
  },
  {
    project_name: "devcraft",
    image: devcraft,
    project_id: "02",
    project_link: "devcraft",
  },
  {
    project_name: "hardik.ai",
    image: hardik_ai,
    project_id: "03",
    project_link: "hardik-ai",
  },
  {
    project_name: "sunpy",
    image: sunpy,
    project_id: "04",
    project_link: "sunpy",
  },
];

function ProjectBody() {
  return (
    <div className="project-body-container section-gap">
      <div className="project-star-container">
        <LazyLoadImage
          src={stars}
          effect="blur"
          placeholderSrc={PlaceholderImage}
        />
      </div>

      <div className="project-image-content">
        <p className="project-filename">$ls project</p>
        <div className="project-computer-container">
        <LazyLoadImage
          src={pixelated_computer}
          effect="blur"
          placeholderSrc={PlaceholderImage}
        />
        </div>
        <p className="project-filesize">24.1kB</p>
      </div>

      <div className="project-grid-container">
        {projects.map((project) => (
          <Project
            key={project.project_id}
            project_name={project.project_name}
            image={project.image}
            project_id={project.project_id}
            project_link={project.project_link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectBody;
