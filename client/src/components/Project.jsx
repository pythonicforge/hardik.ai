import "../styles/Project.scss";
import { Link } from "react-router-dom";

function Project({ project_name, image, project_id, project_link }) {
  return (
    <Link to={`/${project_link}`}>
      <div className="project-grid-item">
        <p className="project-name">{project_name}</p>
        <div className="project-banner-image">
          <img src={image} alt="" />
        </div>
        <p className="project-id">{project_id}</p>
      </div>
    </Link>
  );
}

export default Project;
