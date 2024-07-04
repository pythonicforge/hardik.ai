import Blob from "./Blob";
import Popup from "./Popup";
import "../styles/Body.scss";
import Subtitle from "./Subtitle";
import vKey from "../images/v-key.svg";
import mouse from "../images/left-mouse.svg";
import { useEffect, useState, useCallback } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function HomeBody() {
  const [isListening, setIsListening] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);
  const [assistantText, setAssistantText] = useState("");
  const [transcript, setTranscript] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);

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
    const loadVoices = () => {
      const synthVoices = speechSynthesis.getVoices();
      if (synthVoices.length !== 0) {
        setVoices(synthVoices);
      } else {
        speechSynthesis.onvoiceschanged = () => {
          setVoices(speechSynthesis.getVoices());
        };
      }
    };

    loadVoices();
  }, []);

  useEffect(() => {
    if (voices.length > 0 && !sessionStorage.getItem("welcomeMessageSpoken")) {
      sessionStorage.setItem("welcomeMessageSpoken", "true");
      speakText(
        "Welcome to Hardik's portfolio! Feel free to ask any questions about Hardik."
      );
    }
  }, [voices]);

  useEffect(() => {
    recognition.onspeechend = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      speakText(transcript);
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      let error;
      switch (event.error) {
        case "network":
          error =
            "Network error. Please check your internet connection and try again.";
          break;
        case "no-speech":
          error = "No speech detected. Please try again.";
          break;
        case "audio-capture":
          error =
            "No microphone was found. Ensure that a microphone is installed and that microphone settings are configured correctly.";
          break;
        case "not-allowed":
          error =
            "Permission to use microphone is blocked. To change, go to chrome://settings/content/microphone";
          break;
        default:
          error = "An unknown error occurred: " + event.error;
      }
      setPopupMessage(`Error: ${error}`);
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
  }, [transcript]);

  const speakText = useCallback(
    (text) => {
      if (!text) {
        setPopupMessage("No transcript available to speak.");
        return;
      }
      if (voices.length === 0) {
        setPopupMessage("No voices available.");
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      const selectedVoice = voices.find(
        (voice) =>
          voice.name ===
          "Microsoft Emma Online (Natural) - English (United States)"
      );
      const fallbackVoice = voices.find(
        (voice) => voice.name === "Microsoft Mark - English (United States)"
      );

      utterance.voice = selectedVoice || fallbackVoice || voices[0];

      utterance.onstart = () => {
        setIsSpeaking(true);
        setAssistantText(text);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    },
    [voices]
  );

  return (
    <div className="body section-gap">
      {popupMessage && <Popup popupText={popupMessage} type="error" />}
      <div className="body-file-container inter-container-space">
        <p>[RUNNING ECHO.PY]</p>
      </div>
      <div className="body-blob-container inter-container-space">
        <Blob />
        <Subtitle subtitle={assistantText} isSpeaking={isSpeaking} />
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