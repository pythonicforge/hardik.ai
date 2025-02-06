import "../styles/BlogsBody.scss";
import stars from "../images/stars.svg";
import pixelated_book from "../images/bookpixelated.png"
import PlaceholderImage from "../images/placeholder.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Blogs from "./Blogs";

function BlogsBody() {
  return (
    <div className="blogs-body-container section-gap">
      <div className="blogs-star-container">
        <LazyLoadImage
          src={stars}
          effect="blur"
          placeholderSrc={PlaceholderImage}
        />
      </div>

      <div className="blogs-image-content">
        <p className="blogs-filename">$ls blogs</p>
        <div className="blogs-book-container">
        <LazyLoadImage
          src={pixelated_book}
          effect="blur"
          placeholderSrc={PlaceholderImage}
        />
        </div>
        <p className="blogs-filesize">6.1kB</p>
      </div>

      <div className="blogs-content-container">
        <Blogs/>
      </div>
    </div>
  );
}

export default BlogsBody;
