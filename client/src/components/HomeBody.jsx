import "../styles/Body.scss";
import vKey from "../images/v-key.svg";
import mouse from "../images/left-mouse.svg";
import Blob from "./Blob";

function HomeBody() {
  return (
    <div className="body section-gap">
      <div className="body-file-container inter-container-space">
        <p>[RUNNING ECHO.PY]</p>
      </div>
      <div className="body-blob-container inter-container-space">
        <Blob />
      </div>
      <div className="body-stats-container">
        <p>[Currently in Kolkata]</p>
        <p>43.7kB</p>
      </div>
      <div className="body-instructions-container">
        <p className="right-gap">Toggle</p>
        <img src={vKey} alt="Keyboard Key" />
        <p className="left-gap right-gap">or click</p>
        <img src={mouse} alt="Mouse Click" />
        <p className="left-gap">to interact</p>
      </div>
    </div>
  );
}

export default HomeBody;
