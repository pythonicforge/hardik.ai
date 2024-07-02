import "./styles/App.scss";
import Navbar from "./components/Navbar.js";
import HomeBody from "./components/HomeBody.js";
import AboutBody from "./components/AboutBody.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeBody />} />
            <Route path="/about" element={<AboutBody />} />
            <Route path="/projects" />
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;
