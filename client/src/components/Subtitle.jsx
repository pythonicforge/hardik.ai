import React, { useState, useEffect } from "react";
import "../styles/Subtitle.scss";

function Subtitle({ subtitle, isSpeaking }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupClass, setPopupClass] = useState("");

  useEffect(() => {
    if (subtitle && isSpeaking) {
      setShowPopup(true);
      setPopupClass("visible");
    } else {
      setPopupClass("");
      setTimeout(() => {
        setShowPopup(false);
      }, 500);
    }
  }, [subtitle, isSpeaking]);

  return (
    <div className={`subtitle-container ${popupClass}`}>
      {showPopup && <span>{subtitle}</span>}
    </div>
  );
}

export default Subtitle;
