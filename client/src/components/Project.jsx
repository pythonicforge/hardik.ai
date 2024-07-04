import "../styles/Project.scss";
import { Link } from "react-router-dom";
import PlaceholderImage from "../images/placeholder.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Project({ project_name, image, project_id, project_link }) {
  return (
    <Link to={`/${project_link}`}>
      <div className="project-grid-item">
        <p className="project-name">{project_name}</p>
        <div className="project-banner-image">
          <LazyLoadImage
            src={image}
            effect="blur"
            placeholderSrc={PlaceholderImage}
          />
        </div>
        <p className="project-id">{project_id}</p>
      </div>
    </Link>
  );
}

export default Project;