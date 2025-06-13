import { useState, useEffect } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Hero.css";

// Custom hook to check screen width
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // useEffect to check media query to display background images
  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Detect screen size using multiple queries
  const isLargeScreen = useMediaQuery("(min-width: 1100px)");
  const isMediumScreen = useMediaQuery("(min-width: 500px) and (max-width: 1099px)");
  const isSmallScreen = useMediaQuery("(min-width: 250px) and (max-width: 499px)");

  const largeScreenImages = [
    "/heroImage1.png",
    "/heroImage2.png",

  ];


  const mediumScreenImages = [...largeScreenImages];
  const smallScreenImages = [...largeScreenImages];

  // Choose images based on screen size
  let images = [];
  if (isLargeScreen) {
    images = largeScreenImages;
  } else if (isMediumScreen) {
    images = mediumScreenImages;
  } else if (isSmallScreen) {
    images = smallScreenImages;
  } else {
    images = [];
  }

  // Function to change the image every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

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
      <div className="hero-socialmedia-container">
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
      </div>
    </div>
  );
};

export default Hero;