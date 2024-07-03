import React, { useState, useEffect } from "react";
import "../styles/Popup.scss";

function Popup({ type, popupText }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupClass, setPopupClass] = useState("");

  useEffect(() => {
    let showTimeout;
    let hideTimeout;

    if (type) {
      showTimeout = setTimeout(() => {
        setShowPopup(true);
        const newClass = type === "error" ? "error-visible" : "warning-visible";
        setPopupClass(newClass);
      }, 1000);

      hideTimeout = setTimeout(() => {
        setPopupClass("");
        setTimeout(() => {
          setShowPopup(false);
        }, 300);
      }, 6000);

      return () => {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
        setShowPopup(false);
        setPopupClass("");
      };
    }
  }, [type]);

  return (
    <div className={`popup-container ${showPopup ? popupClass : ""}`}>
      <span>
        {type === "error" && "❌ "}
        {type === "warning" && "⚠️ "}
        {popupText}
      </span>
    </div>
  );
}

export default Popup;
