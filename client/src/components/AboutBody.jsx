import React from "react";
import stars from "../images/stars.svg";
import profile from "../images/profile.png";
import "../styles/AboutBody.scss";

function AboutBody() {
  return (
    <div className="about-container section-gap">
      <div className="about-star-container">
        <img src={stars} alt="" />
      </div>
      <div className="about-content-container">
        <div className="left-content-container">
          <div className="file-type-container">
            <p>profile.py</p>
          </div>
          <div className="image-container">
            <div className="image-content-container">
              <img src={profile} alt="" />
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
              <span>def description</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> """
              <span className="description">
                hardik codes software, usually sequentially writing them to
                console. He also designs and builds things, some of which
                include apps and websites.
              </span>
              <br />
              <br />
              <span className="description one-gap">
                hardik pairs quite nicely with other things that include:
                [insert current reading book], programming languages, vs-code,
                coffee, cricket, travel, gaming and infitinum...
              </span>
              <span className="description">"""</span>
            </p>
            <p className="one-tab one-gap">
              <span>def title</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> ”python and web
              developer”
            </p>
            <p className="one-tab one-gap">
              <span>def skills</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> [“python”, “html”,
              “css”, “java”, “javascript”, "reactjs", "flask", "firebase"]
            </p>
            <p className="one-tab one-gap">
              <span>def tools</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> [“vscode”, “linux”,
              “git”, "figma"]
            </p>
            <p className="one-tab one-gap">
              <span>def usage</span>(self):
            </p>
            <p className="two-tabs">
              <span className="highlight">return</span> [“ai-ml”, “robotics”,
              “algo-trading”]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
