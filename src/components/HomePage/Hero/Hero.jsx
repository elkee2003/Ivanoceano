import { useState, useEffect, useMemo } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Hero.css";

// Custom hook to get screen size category
const useScreenCategory = () => {
  const [category, setCategory] = useState("large");

  useEffect(() => {
    const checkCategory = () => {
      const width = window.innerWidth;
      if (width >= 1100) setCategory("large");
      else if (width >= 500) setCategory("medium");
      else setCategory("small");
    };

    checkCategory();
    window.addEventListener("resize", checkCategory);
    return () => window.removeEventListener("resize", checkCategory);
  }, []);

  return category;
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const screenCategory = useScreenCategory();

  const imageSets = useMemo(() => {
    const largeImages = [
      "/heroImage1.png",
      "/heroImage2.png",
    ];

    return {
      large: largeImages,
      medium: [...largeImages],
      small: [...largeImages],
    };
  }, []);

  const images = imageSets[screenCategory] || [];

  // Preload images on category change only
  useEffect(() => {
      images.forEach((src) => {
      const img = new Image();
      img.src = src;
      });
  }, [screenCategory]);

  // Background image changer
  useEffect(() => {
      let isMounted = true;

      const changeImage = () => {
      const nextIndex = (currentImage + 1) % images.length;
      const img = new Image();
      img.src = images[nextIndex];
      img.onload = () => {
          if (isMounted) setCurrentImage(nextIndex);
      };
      };

      const interval = setInterval(changeImage, 4000);
      return () => {
      isMounted = false;
      clearInterval(interval);
      };
  }, [currentImage, images]);

  return (
    <div
      id="hero"
      className="hero-background"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Write up section */}
      <div className="writeup-container">
        Innovative <span>Digital Solutions</span> Crafted <span>to Perform</span>
      </div>

      {/* Hero Overlay */}
      <div className="hero-Overlay" />

      {/* Button container */}
      <div className="hero-book-session-container">
        {/* Mail with subject and body */}
        <a
            href="mailto:ivanoceanoltd@gmail.com?subject=Consultation%20Request&body=Hi%20Ivanoceano%2C%0AI%20would%20like%20to%20book%20a%20consultation.%20Please%20get%20back%20to%20me%20with%20available%20times."
            className="hero-button"
            >
            Book a consultation
        </a>
        {/* <a
            href="mailto:ivanoceanoltd@gmail.com"
            className="hero-button"
        >
            Book a consultation
        </a> */}
      </div>

      {/* Social Media accounts */}
      {/* <div className="hero-socialmedia-container">
        <a
          href="https://www.instagram.com/answer_ace?igsh=djJ6OGhqdmVzNGdx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-media-icon" />
        </a>
        <a
          href="https://x.com/answer_ace"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="social-media-icon" />
        </a>
      </div> */}
    </div>
  );
};

export default Hero;