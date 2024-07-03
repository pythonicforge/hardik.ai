import React, { useState, useEffect } from "react";
import "../styles/Subtitle.scss";

function Subtitle({ subtitle }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupClass, setPopupClass] = useState("");

  useEffect(() => {
    let showTimeout;
    let hideTimeout;

    if (subtitle) {
      showTimeout = setTimeout(() => {
        setShowPopup(true);
        setPopupClass("visible");

        hideTimeout = setTimeout(() => {
          setPopupClass("");
          setTimeout(() => {
            setShowPopup(false);
          }, 500);
        }, 4000);
      }, 500);

      return () => {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
        setShowPopup(false);
        setPopupClass("");
      };
    }
  }, [subtitle]);

  return (
    <div className={`subtitle-container ${popupClass}`}>
      {showPopup && <span>{subtitle}</span>}
    </div>
  );
}

export default Subtitle;
