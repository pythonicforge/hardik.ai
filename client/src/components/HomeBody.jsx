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
  const [assistantText, setAssistantText] = useState("");
  const [transcript, setTranscript] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

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
    const speakText = (text) => {
      try {
        if (text) {
          const voices = speechSynthesis.getVoices();
          const utterance = new SpeechSynthesisUtterance(text);

          if (voices.length > 0) {
            const selectedVoice = voices.find(
              (voice) =>
                voice.name ===
                "Microsoft Emma Online (Natural) - English (United States)"
            );
            const fallbackVoice = voices.find(
              (voice) =>
                voice.name === "Microsoft Mark - English (United States)"
            );
            const defaultVoice = voices[0];

            if (selectedVoice) {
              utterance.voice = selectedVoice;
            } else if (fallbackVoice) {
              utterance.voice = fallbackVoice;
            } else {
              utterance.voice = defaultVoice;
            }

            utterance.onstart = function () {
              setIsSpeaking(true);
              setAssistantText(text);
            };

            utterance.onend = function () {
              setIsSpeaking(false);
            };

            window.speechSynthesis.speak(utterance);
          } else {
            <Popup
              type="warning"
              popupText="No voices available yet. Waiting for voiceschanged event."
            />;
            speechSynthesis.onvoiceschanged = function () {
              speechSynthesis.onvoiceschanged = null;
              speakText(text);
            };
          }
        } else {
          <Popup
            type="warning"
            popupText="No transcript available to speak."
          />;
        }
      } catch (error) {
        <Popup
          type="error"
          popupText="Program ran into an error! Please try again later"
        />;
      }
    };

    const checkWelcomeMessage = () => {
      if (!sessionStorage.getItem("welcomeMessageSpoken")) {
        sessionStorage.setItem("welcomeMessageSpoken", "true");
        speakText("Welcome to Hardik's portfolio! Feel free to ask any questions about Hardik.");
      }
    };

    checkWelcomeMessage();

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
