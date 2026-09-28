import { useEffect, useState } from "react";
import gym1 from "../assets/gym1.jpg";
import gym2 from "../assets/gym2.jpg";
import gym3 from "../assets/gym3.jpg";
import "./homeslider.css";
function HeroSlider() {
  const images = [gym1, gym2, gym3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[current]} alt="Gym" />

      <button
        className="prev"
        onClick={() =>
          setCurrent((prev) => (prev - 1 + images.length) % images.length)
        }
      >
        ❮
      </button>

      <button
        className="next"
        onClick={() =>
          setCurrent((prev) => (prev + 1) % images.length)
        }
      >
        ❯
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;