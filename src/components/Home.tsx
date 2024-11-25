import Headerimage from "../assets/Carousel2.png";
import { handleScrollToWelcomeSection } from "./HandleHistory";

const TeamSectionImages = [
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
];

const DivisionSectionImages = [
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
];

const CoreSectionImages = [
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
  { image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", alt: "Team Member" },
];
export default function Home() {

  return (
    <main>
      {/* Carousel Section */}
      <section className="flex justify-center w-screen h-screen-nav relative overflow-hidden Animated-Fadein">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 to-transparent z-10" />
        <img
          src={Headerimage}
          alt="Header Image"
          className="absolute drop-shadow-xl w-full h-screen-nav brightness-50 object-center object-cover"
        />
        <div className="absolute top-32 left-5 z-20 text-white px-4">
          <h1 className="text-xl md:text-3xl font-bold mb-2">Welcome to Abyakta Tech</h1>
          <p className="text-sm md:text-lg max-w-md">
            Discover innovative solutions and cutting-edge technology tailored for your needs.
          </p>
        </div>
        <div className="absolute bottom-5 w-full flex justify-center z-20">
          <button onClick={handleScrollToWelcomeSection} className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>
      {/* Welcoming Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center pt-5" id="welcomesection">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 lg:mx-10 pt-10 lg:pt-0">
          {TeamSectionImages.map((item,) => (
            <div className="flex flex-col items-center text-center">
              <img
                className="w-24 h-24 lg:w-36 lg:h-36 object-cover"
                src={item.image}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Division Section */}
      <section className="flex flex-col pt-20 lg:flex-row justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 lg:mx-10 order-last lg:order-none">
          {DivisionSectionImages.map((item,) => (
            <div className="flex flex-col items-center text-center">
              <img
                className="w-24 h-24 lg:w-36 lg:h-36 object-cover"
                src={item.image}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-11/12 mt-5 md:w-3/4 lg:w-1/2 text-white mb-8 lg:mb-0 lg:mr-3">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl text-center lg:text-end">
            What Division That We Have?!
          </h1>
          <p className="mt-5 text-center lg:text-end">Abyakta Team</p>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="flex flex-col justify-center items-center pt-20">
        <div className="flex flex-col w-11/12 mt-5 md:w-3/4 lg:w-1/2 text-white mb-8 lg:mb-0 lg:mr-3">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl text-center">
            Meet Our Core Team!
          </h1>
          <p className="text-center">Abyakta Team</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 lg:mx-10 mt-8">
          {CoreSectionImages.map((item,) => (
            <div className="flex flex-col items-center text-center">
              <img
                className="w-24 h-24 lg:w-36 lg:h-36 object-cover"
                src={item.image}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Footer Section */}
      <section className="flex justify-center mt-48 pb-48">
        <h1 className="text-4xl font-bold text-white text-center">Let’s work together with Us!</h1>
      </section>
    </main>
  );
}
