import "../styles/Footer.scss";
import QRCODE from "../images/qrcode.png";
import PlaceholderImage from "../images/placeholder.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content section-gap">
        <div className="row-1">
          <p>Stay in touch.</p>
          <LazyLoadImage
            src={QRCODE}
            effect="blur"
            placeholderSrc={PlaceholderImage}
          />
        </div>
        <div className="line"></div>
        <div className="footer-end-container">
          <div className="footer-links">
            <a
              href="https://linkedin.com/in/pseudopythonic"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/hardeadik"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
            <a
              href="https://github.com/pythonicforge"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linktr.ee/pseudopythonic"
              target="_blank"
              rel="noreferrer"
            >
              LinkTree
            </a>
            <a
              href="https://medium.com/@pythonicforge"
              target="_blank"
              rel="noreferrer"
            >
              Blogs
            </a>
          </div>
          <div className="footer-copyright">
            <p>
              © 2024 <span>Hardik Jaiswal</span>
            </p>
            <p>DESIGNED AND DEVELOPED BY HARDIK JAISWAL</p>
            <p>CODE FLOWS, GLOWS, CRAFTING DREAMS IN ROWS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
