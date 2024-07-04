import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBody from "./components/HomeBody";
import AboutBody from "./components/AboutBody";
import ProjectBody from "./components/ProjectBody";
import PageTransition from "./components/PageTransition";
import ProjectContainer from "./components/ProjectContainer";
import NotFound from "./components/NotFound";
import Preloader from "./components/Preloader";
import MobileBody from "./components/MobileBody";

function App() {
  const [loading, setLoading] = useState(true);
  const [showMobileBody, setShowMobileBody] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisited", "true");
      }, 12700);
      return () => clearTimeout(timeout);
    } else {
      setLoading(false);
    }
  }, []);

  const handleActivate = () => {
    setShowMobileBody(false);
  };

  return (
    <Router>
      <div className="app-container">
        {loading ? (
          <Preloader onLoadComplete={() => setLoading(false)} />
        ) : (
          <>
            <PageTransition>
              <Navbar />
              <div className="main-content">
                <Routes>
                  {showMobileBody ? (
                    <Route
                      path="/"
                      element={<MobileBody onActivate={handleActivate} />}
                    />
                  ) : (
                    <Route path="/" element={<HomeBody />} />
                  )}
                  <Route path="/about" element={<AboutBody />} />
                  <Route path="/projects" element={<ProjectBody />} />
                  <Route
                    path="/peripheral-killing-system"
                    element={
                      <ProjectContainer
                        title="Peripheral Killing System"
                        description="Peripheral Killing System is a Python project designed to enable hands-free computer interaction through hand gestures, eliminating the need for a mouse and keyboard. Utilizing OpenCV and MediaPipe libraries, it detects and tracks hand movements for intuitive control. The system allows users to control volume and brightness with zoom-in and zoom-out gestures, respectively. It also provides mouse control with the right index finger and offers voice-command activation for mouse functions, making it a versatile and user-friendly tool for enhanced computer interaction."
                        videoSrc="https://drive.google.com/file/d/1E3K2u80kHpM2RAxyoI9NTpN_JW-rKDhh/preview"
                        projectLink="https://github.com/HardikJ2023/Peripheral-Killing-System"
                        githubLink="https://github.com/HardikJ2023/Peripheral-Killing-System"
                        skills={["Python", "OpenCV", "MediaPipe", "Voice Commands", "Hand Gesture Recognition"]}
                      />
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </PageTransition>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
