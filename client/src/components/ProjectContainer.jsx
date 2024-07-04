import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";
import "../styles/ProjectContainer.scss";
import github from "../images/github.svg";

function ProjectContainer({ title, description, link, skills }) {
  return (
    <>
      <ScrollToTop />
      <div className="project-container section-gap">
        <div className="project-content">
          <div className="text-container">
            <p className="project-title">{title}</p>
            <p className="project-description">{description}</p>
            <div className="skills-container">
              <p>Skills & Technologies:</p>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="media-container">
            <div className="video-container">
              <video autoPlay loop muted>
                <source
                  src="https://www.w3schools.com/html/movie.mp4"
                  type="video/mp4"
                />
              </video>
              <p className="video-size">2.3mB</p>
            </div>
            <Link to={link} className="link-container" target="_blank">
              <img src={github} alt="GitHub" className="github-icon" />
              <p>Visit GitHub</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectContainer;