import { useState, useEffect } from "react";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";

const carouselImages = [
  { alt: "image 1", src: Carousel1 },
  { alt: "image 2", src: Carousel2 },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nextImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      setIsFading(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Carousel Section */}
      <section className="flex justify-center mt-2 mx-5 h-32 md:h-52 lg:mx-48 lg:h-96 relative overflow-hidden rounded-md Animated-Fadein">
        {carouselImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className={`absolute drop-shadow-xl w-full object-center object-cover transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </section>

      {/* Navigation Dots */}
      <section className="flex justify-center mt-2">
        <div className="flex">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-5 h-5 mx-1 rounded-full ${currentIndex === index ? "bg-gray-600" : "bg-gray-950"}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Main Section */}
      <section className="flex justify-center mt-2 mx-5 lg:mx-48">
        <div className="Animated-Slideup">
          <div className="w-3/4 mx-auto bg-gray-950 rounded-md p-4 drop-shadow-xl">
            <h1 className="text-xl lg:text-2xl text-white">Welcome to Abyakta!</h1>
            <p className="text-white text-sm lg:text-md mt-2 text-justify">
              We are a team of passionate individuals dedicated to innovation, collaboration, and growth. Whether you're here to learn more about our projects, meet the team, or explore new opportunities, you've come to the right place. Together, we aim to create impactful solutions and foster a community where ideas thrive. Thank you for visiting, and we hope you find inspiration and value in what we share.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
