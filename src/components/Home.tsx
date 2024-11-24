import { useState, useEffect } from "react";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";

const carouselImages = [
  { alt: "image 1", src: Carousel1 },
  { alt: "image 2", src: Carousel2 },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsFading] = useState(false);

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

      {/* Welcoming Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center">
        {/* Text Section */}
        <div className="flex flex-col w-11/12 mt-5 md:w-3/4 lg:w-1/2 text-white mb-8 lg:mb-0 lg:mr-3">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
            Welcome to Our Page!
          </h1>
          <p className="text-justify mt-2 text-sm md:text-md">
            Perkenalan Abyakta Tech itu apa? <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="mt-5">Best Regards, Abyakta Teams!</p>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 lg:mx-10">
          {/* Team Member Cards */}
          <div className="flex flex-col items-center text-center">
            <img
              className="w-36 h-36 object-cover"
              src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              alt="Team Member"
            />
            <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="w-36 h-36 object-cover"
              src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              alt="Team Member"
            />
            <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="w-36 h-36 object-cover"
              src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              alt="Team Member"
            />
            <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="w-36 h-36 object-cover"
              src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              alt="Team Member"
            />
            <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="w-36 h-36 object-cover"
              src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              alt="Team Member"
            />
            <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="w-36 h-36 object-cover"
              src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              alt="Team Member"
            />
            <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
          </div>
        </div>
      </section>

      {/* Division Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center">

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 lg:mx-10">
        {/* Team Member Cards */}
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
      </div>

      <div className="flex flex-col w-11/12 mt-5 md:w-3/4 lg:w-1/2 text-white mb-8 lg:mb-0 lg:mr-3">
        <h1 className="text-xl font-bold md:text-3xl lg:text-4xl text-end">
        What Division That We Have?!
        </h1>
        <p className="mt-2 text-sm md:text-md text-end">
          Perkenalan Abyakta Tech itu apa? <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="mt-5 text-end">Abyakta Team</p>
      </div>

    
      </section>

      {/* Core Team Section */}
      <section className="flex flex-col justify-center items-center mt-10">
      
      <div className="flex flex-col w-11/12 mt-5 md:w-3/4 lg:w-1/2 text-white mb-8 lg:mb-0 lg:mr-3">
        <h1 className="text-xl font-bold md:text-3xl lg:text-4xl text-center">
          Meet Our Core Team!
        </h1>
        <p className="text-center">Abyakta Team</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 lg:mx-10 mt-8">
        {/* Team Member Cards */}
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover"
            src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="Team Member"
          />
          <p className="text-sm text-white mt-2">Foto team <br /> Kalo bisa tiap divisi</p>
        </div>
      </div>

      </section>

      {/* Footer Section */}
      <section className="flex justify-center mt-48 pb-48">
        <h1 className="text-4xl font-bold text-white">Let’s work together with Us!</h1>
      </section>

    </main>
  );
}
