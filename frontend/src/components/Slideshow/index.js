import React from "react";
import { useSelector } from "react-redux";
import stockImages from "../Splash/imageArr";
import '../Splash/Splash.css'

const images = stockImages;
const delay = 3500;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          <div>

          </div>
          {images.map((img) => (
            <div
              className="slide"
              key={img.spotId}
              style={{ background: "url("+img.url+") no-repeat center center ", backgroundSize: 'cover'  }}
            >
              {/* <img src={img.url}></img> */}
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
