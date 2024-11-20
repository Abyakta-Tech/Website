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
      <section className="flex justify-center mt-2 mx-5 lg:mx-48 h-96 relative overflow-hidden rounded-md">
        {carouselImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className={`absolute w-full object-bottom object-cover brightness-50 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </section>
    </main>
  );
}
