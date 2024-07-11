import "../styles/AboutBody.scss";
import stars from "../images/stars.svg";
import profile from "../images/profile.png";
import { Link } from "react-router-dom";
import PlaceholderImage from "../images/placeholder.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Pdf from './Resume.pdf';

function AboutBody() {
  const onResumeClick = () => {
    window.open(Pdf);
  };
  return (
    <div className="about-container section-gap">
      <div className="about-star-container">
        <LazyLoadImage
          src={stars}
          effect="blur"
          placeholderSrc={PlaceholderImage}
        />
      </div>
      <div className="about-content-container">
        <div className="left-content-container">
          <div className="file-type-container">
            <p>profile.py</p>
          </div>
          <div className="image-container">
            <div className="image-content-container">
              <LazyLoadImage
                src={profile}
                effect="blur"
                placeholderSrc={PlaceholderImage}
              />
              <p>41.3kb</p>
            </div>
          </div>
          <div className="image-date-container">
            <p>2024-04-15</p>
            <p>20:42</p>
          </div>
        </div>
        <div className="right-content-container">
          <div className="text-container">
            <p>
              <span>class Hardik</span>(person):
            </p>
            <p className="one-tab">
              <span>def __init__</span>(self):
            </p>
            <p className="two-tabs">self.name = "Hardik Jaiswal"</p>
            <p className="one-tab one-gap">
              <span>def title</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> ”python and web
              developer”
            </p>
            <p className="one-tab one-gap">
              <span>def description</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> """
              <span className="description">
              Hardik Jaiswal is a passionate software
                 developer who loves coding and creating
                 innovative solutions. He excels in
                 designing and building applications and
                 websites with a keen eye for detail.
              </span>
              <br />
              <br />
              <span className="description one-gap">
              When not coding, Hardik enjoys:
              <br/>
                 - Reading (currently: [insert current
                   reading book])
                   <br/>
                 - Sipping on coffee
                 <br/>
                 - Watching cricket
                 <br/>
                 - Traveling to new places
                 <br/>
                 - Gaming for relaxation
              </span>
              <span className="description">"""</span>
            </p>
            <p className="one-tab one-gap">
              <span>def skills</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> [“python”, “html”,
              “css”, “javascript”, "java”, "reactjs", "flask", "SASS"]
            </p>
            <p className="one-tab one-gap">
              <span>def tools</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> [“vscode”, “linux”,
              “git”, "github", "figma", "firebase", "vercel", "netlify"]
            </p>
            <p className="one-tab one-gap">
              <span>def interests</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> [“ai-ml”, “robotics”,
              “algo-trading”]
            </p>
            <p className="one-tab one-gap">
              <span>def resume</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> <Link onClick={onResumeClick}>resume.pdf</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
