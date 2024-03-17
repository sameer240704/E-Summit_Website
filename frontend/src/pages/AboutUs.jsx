import { useState } from "react";
import Image1 from "../assets/events/img1.jpg";
import Image2 from "../assets/events/img27.jpg";
import Image3 from "../assets/events/img34.jpg";

const AboutUs = () => {
  const [currentButton, setCurrentButton] = useState("Empowering Innovation");

  const handleButtonClick = (buttonText) => {
    setCurrentButton(buttonText);
  };

  return (
    <div id="about-us" className="h-screen flex items-center p-5">
      <div className="mt-20 w-[350px]">
        <button
          className={`about-us-button py-3 px-6 mb-3 rounded-lg focus:outline-none ${
            currentButton === "Empowering Innovation"
            ? "bg-transparent border-2 border-white text-white"
              : "text-white"
          }`}
          onClick={() => handleButtonClick("Empowering Innovation")}
        >
          Empowering Innovation
        </button>
        <button
          className={`about-us-button py-3 px-6 mb-3 rounded-lg focus:outline-none ${
            currentButton === "Crafting Entrepreneurial Paths"
            ? "bg-transparent border-2 border-white text-white"
              : "text-white"
          }`}
          onClick={() => handleButtonClick("Crafting Entrepreneurial Paths")}
        >
          Crafting Entrepreneurial Paths
        </button>
        <button
          className={`about-us-button py-3 px-6 mb-3 rounded-lg focus:outline-none ${
            currentButton === "Fostering Problem-Solving"
              ? "bg-transparent border-2 border-white text-white"
              : "text-white"
          }`}
          onClick={() => handleButtonClick("Fostering Problem-Solving")}
        >
          Fostering Problem-Solving
        </button>
      </div>
      <div className="about-us-container h-[80%] w-full flex items-center justify-center rounded-xl mt-20 ml-10 text-center">
        <div
          style={{
            backgroundImage: currentButton === "Empowering Innovation" ? `url(${Image1})` :
              currentButton === "Crafting Entrepreneurial Paths" ? `url(${Image2})` :
              `url(${Image3})`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            flex: "1",
            overflow: "hidden",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          {currentButton === "Empowering Innovation" && (
            <div className="h-full w-full" style={{ backdropFilter: "blur(2px)" }}>
              <p
                className="md:text-2xl text-[4vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
              >
                We are here to foster innovative, ideation and entrepreneurial pursuits among students. Thereby, empowering students to become agents of change and modernization in the society.
              </p>
            </div>
          )}
          {currentButton === "Crafting Entrepreneurial Paths" && (
            <div className="h-full w-full" style={{ backdropFilter: "blur(2px)" }}>
              <p
                className="md:text-2xl text-[4vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
              >
                Through our meticulously crafted sessions, we provide aspiring entrepreneurs with the roadmap they need to navigate the complexities of bringing ideas to life. From conception to market launch, we're dedicated to nurturing every aspect of your journey.
              </p>
            </div>
          )}
          {currentButton === "Fostering Problem-Solving" && (
            <div className="h-full w-full" style={{ backdropFilter: "blur(2px)" }}>
              <p
                className="md:text-2xl text-[4vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
              >
                At IIC, our focus extends beyond mere idea generation, as we equip individuals with the problem-solving skills essential for thriving in today's dynamic environment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
