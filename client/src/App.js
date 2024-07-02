import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';
import AboutBody from './components/AboutBody';
import ProjectBody from './components/ProjectBody';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

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
            </Routes>
          </div>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
