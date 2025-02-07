import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBody from "./components/HomeBody";
import NotFound from "./components/NotFound";
import AboutBody from "./components/AboutBody";
import BlogsBody from "./components/BlogsBody";
import Preloader from "./components/Preloader";
import MobileBody from "./components/MobileBody";
import ProjectBody from "./components/ProjectBody";
import PageTransition from "./components/PageTransition";
import ProjectContainer from "./components/ProjectContainer";

function App() {
  const [loading, setLoading] = useState(true);
  const [showMobileBody, setShowMobileBody] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true");
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
          <Preloader onLoadComplete={handleLoadComplete} />
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
                  <>
                    <Route path="/about" element={<AboutBody />} />
                    <Route path="/projects" element={<ProjectBody />} />
                    <Route
                      path="/peripheral-killing-system"
                      element={
                        <ProjectContainer
                          title="Peripheral Killing System"
                          description="Peripheral Killing System is a Python project designed to enable hands-free computer interaction through hand gestures, eliminating the need for a mouse and keyboard. Utilizing OpenCV and MediaPipe libraries, it detects and tracks hand movements for intuitive control. The system allows users to control volume and brightness with zoom-in and zoom-out gestures, respectively. It also provides mouse control using the index finger for cursor movement and thumb-index finger pinching for left-clicks. Additionally, it simulates keyboard input with air keyboard gestures. The project, licensed under the MIT License, builds on resources from the open-source community."
                          link="https://github.com/pythonicforge/peripheral-killing-system"
                          skills={["Python", "OpenCV", "MediaPipe", "Tkinter"]}
                        />
                      }
                    />
                    <Route
                      path="/melody-cli"
                      element={
                        <ProjectContainer
                          title="Melody.CLI"
                          description="Melody CLI is a versatile command-line music player that integrates YouTube Music into your terminal, perfect for developers and music enthusiasts alike. With Melody CLI, you can search for songs on YouTube Music, download audio, and play it directly from the terminal. Leveraging yt-dlp for downloading and converting videos, ytmusicapi for interfacing with YouTube Music, and pygame for audio playback, it offers a seamless experience. The intuitive command-line interface simplifies navigation and playback control, making it accessible even to beginners. As an open-source project, Melody CLI invites community contributions to enhance its features. It provides a distraction-free, immersive music experience, ideal for developers or terminal aficionados. Key features include searching songs by title or artist, downloading and converting audio to MP3, playing music, and intuitive playback controls like pause, resume, and stop."
                          link="https://github.com/pythonicforge/Melody.CLI"
                          skills={[
                            "Python",
                            "YtMusicAPI",
                            "Python args",
                            "ytdlp",
                          ]}
                        />
                      }
                    />
                    <Route
                      path="/devcraft"
                      element={
                        <ProjectContainer
                          title="Dev-Craft"
                          description="Dev-Craft is a powerful CLI tool designed to streamline the setup and management of development environments across various projects. It automates the installation of essential software like VSCode, Git, and Python, creates GitHub repositories, sets up project directories with common subfolders, and generates comprehensive README files using AI. Additionally, it installs base packages for various project templates and opens the project in VSCode, ensuring a smooth and efficient development process from the start. Dev-Craft simplifies the often complex task of environment setup, making it an invaluable tool for developers."
                          link="https://github.com/pythonicforge/Dev-Craft"
                          skills={["Python", "Shell", "APIs", "Python args"]}
                        />
                      }
                    />
                    <Route
                      path="/hardik-ai"
                      element={
                        <ProjectContainer
                          title="hardik.ai"
                          description="Welcome to hardik.ai, my personal portfolio website designed to showcase my skills, projects, and experiences. This platform serves as a digital resume, highlighting my journey as a Python developer and aspiring AI engineer. The website features a React-based frontend and a Python backend, with an integrated voice assistant trained on my data to respond to user queries and navigate through the page accordingly."
                          link="https://github.com/pythonicforge/hardik.ai"
                          skills={["ReactJS", "SCSS", "HTML", "Python"]}
                        />
                      }
                    />
                    <Route
                      path="/sunpy"
                      element={
                        <ProjectContainer
                          title="SunPy"
                          description="Investigated and resolved multiple issues in SunPy, including a data format inconsistency in VSO-backed Fido search, where long-duration queries incorrectly returned TAR archives instead of ZIP files. Identified root causes, collaborated with maintainers, and initiated discussions with VSO for a resolution. Additionally, fixed the SRSClient error to improve NOAA SRS data retrieval and ensure accurate solar data access. Worked on debugging, reproducing errors, and enhancing SunPy’s interaction with both VSO and NOAA services."
                          link="https://github.com/sunpy/sunpy"
                          skills={["Python", "C++", "C", "GSoC"]}
                        />
                      }
                    />
                    <Route
                      path="/openastronomy"
                      element={
                        <ProjectContainer
                          title="OpenAstronomy"
                          description="A contribution was made to OpenAstronomy’s website by improving the footer section, enhancing its design and functionality. The changes focused on creating a more polished and user-friendly experience while maintaining consistency with the overall website layout. This update refined the visual appeal and usability of the site, ensuring better navigation and accessibility for users."
                          link="https://github.com/OpenAstronomy/openastronomy.github.io"
                          skills={["Python", "C++", "C", "GSoC"]}
                        />
                      }
                    />
                    <Route
                      path="/blogs"
                      element={<BlogsBody />}
                    />
                    <Route path="*" element={<NotFound />} />
                  </>
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
