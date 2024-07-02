import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';
import AboutBody from './components/AboutBody';
import ProjectBody from './components/ProjectBody';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ProjectContainer from './components/ProjectContainer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <PageTransition>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomeBody />} />
              <Route path="/about" element={<AboutBody />} />
              <Route path="/projects" element={<ProjectBody />} />
              <Route path="/peripheral-killing-system" element={<ProjectContainer title="Peripheral Killing System" description="Peripheral Killing System is a Python project designed to enable hands-free computer interaction through hand gestures, eliminating the need for a mouse and keyboard. Utilizing OpenCV and MediaPipe libraries, it detects and tracks hand movements for intuitive control. The system allows users to control volume and brightness with zoom-in and zoom-out gestures, respectively. It also provides mouse control using the index finger for cursor movement and thumb-index finger pinching for left-clicks. Additionally, it simulates keyboard input with air keyboard gestures. The project, licensed under the MIT License, builds on resources from the open-source community." link="https://github.com/pythonicforge/peripheral-killing-system" skills={["Python", "OpenCV", "MediaPipe", "Tkinter"]} />} />

            <Route path="/melody-cli" element={<ProjectContainer title="Melody.CLI" description="Melody CLI is a versatile command-line music player that integrates YouTube Music into your terminal, perfect for developers and music enthusiasts alike. With Melody CLI, you can search for songs on YouTube Music, download audio, and play it directly from the terminal. Leveraging yt-dlp for downloading and converting videos, ytmusicapi for interfacing with YouTube Music, and pygame for audio playback, it offers a seamless experience. The intuitive command-line interface simplifies navigation and playback control, making it accessible even to beginners. As an open-source project, Melody CLI invites community contributions to enhance its features. It provides a distraction-free, immersive music experience, ideal for developers or terminal aficionados. Key features include searching songs by title or artist, downloading and converting audio to MP3, playing music, and intuitive playback controls like pause, resume, and stop." link="https://github.com/pythonicforge/Melody.CLI" skills={["Python", "YtMusicAPI", "Python args", "ytdlp"]} />} />

            <Route path="/devcraft" element={<ProjectContainer title="Dev-Craft" description="Dev-Craft is a powerful CLI tool designed to streamline the setup and management of development environments across various projects. It automates the installation of essential software like VSCode, Git, and Python, creates GitHub repositories, sets up project directories with common subfolders, and generates comprehensive README files using AI. Additionally, it installs base packages for various project templates and opens the project in VSCode, ensuring a smooth and efficient development process from the start. Dev-Craft simplifies the often complex task of environment setup, making it an invaluable tool for developers." link="https://github.com/pythonicforge/Dev-Craft" skills={["Python", "Shell", "APIs", "Python args"]} />} />

            <Route path="/hardik-ai" element={<ProjectContainer title="hardik.ai" description="Welcome to hardik.ai, my personal portfolio website designed to showcase my skills, projects, and experiences. This platform serves as a digital resume, highlighting my journey as a Python developer and aspiring AI engineer. The website features a React-based frontend and a Python backend, with an integrated voice assistant trained on my data to respond to user queries and navigate through the page accordingly." link="https://github.com/pythonicforge/hardik.ai" skills={["ReactJS", "SCSS", "HTML", "Python"]} />} />
            </Routes>
          </div>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
