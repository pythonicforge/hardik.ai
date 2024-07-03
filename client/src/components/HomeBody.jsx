import React, { useEffect, useState, useCallback } from "react";
import "../styles/Body.scss";
import vKey from "../images/v-key.svg";
import mouse from "../images/left-mouse.svg";
import Blob from "./Blob";
import Popup from "./Popup";
import Subtitle from "./Subtitle";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function HomeBody() {
  const [isListening, setIsListening] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);
  const [transcript, setTranscript] = useState("");

  const toggleListening = useCallback(() => {
    try {
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
      setIsListening((prev) => !prev);
    } catch (error) {
      setIsListening(false);
      setPopupMessage("Error toggling speech recognition");
    }
  }, [isListening]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "v" || event.key === "V") {
        toggleListening();
      }
    },
    [toggleListening]
  );

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    recognition.onspeechend = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      setPopupMessage(`Error: ${event.error}`);
    };

    recognition.onresult = (event) => {
      let fullTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        fullTranscript += event.results[i][0].transcript + " ";
      }
      setTranscript(fullTranscript);
    };

    return () => {
      recognition.onstart = null;
      recognition.onspeechend = null;
      recognition.onend = null;
      recognition.onerror = null;
      recognition.onresult = null;
    };
  }, []);

  return (
    <div className="body section-gap">
      {popupMessage && <Popup popupText={popupMessage} type="error" />}
      <div className="body-file-container inter-container-space">
        <p>[RUNNING ECHO.PY]</p>
      </div>
      <div className="body-blob-container inter-container-space">
        <Blob />
        <Subtitle subtitle={transcript} />
      </div>
      <div className="body-stats-container">
        <p>[Currently in Kolkata]</p>
        <p>43.7kB</p>
      </div>
      <div
        className="body-instructions-container"
        onClick={toggleListening}
        style={{ display: isListening ? "none" : "flex" }}
      >
        <p className="right-gap">Toggle</p>
        <img src={vKey} alt="Keyboard Key" />
        <p className="left-gap right-gap">or click</p>
        <img src={mouse} alt="Mouse Click" />
        <p className="left-gap">to interact</p>
      </div>
      <div
        id="body-listening-indicator"
        className={isListening ? "" : "indicator-hidden"}
      >
        <div className="listening-bar"></div>
        <div className="listening-bar"></div>
        <div className="listening-bar"></div>
        <div className="listening-bar"></div>
        <div className="listening-bar"></div>
      </div>
    </div>
  );
}

export default HomeBody;
