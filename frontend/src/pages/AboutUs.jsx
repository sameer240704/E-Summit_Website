import React from "react";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="h-screen w-full flex items-center justify-center "
    >
      <div id="main" className="h-full w-full py-5 px-5 md:px-10">
        <h1 className="text-center md:text-[4vw] my-2 md:my-5">About Us</h1>
        <p className="md:text-xl text-[4vw]">
          E-Summit is a three day event, started as an initiative of the E-Cell
          of Dj Sanghvi College of Engineering. The Summit seeks to facilitate
          interaction among industrialists, funding agencies, seasoned and
          upcoming entrepreneurs, academia and students of the participating
          institutes. E-Summit’24 will include a gamut of activities such as
          entrepreneurial guest lectures, workshops and panel discussions with
          experts, startup internship fair and investors drive. E-summit, as a
          culture of DJ Sanghvi, has proved its worth in depleting the Chasm
          that exists between Entrepreneurship and management. It is the stage
          for future Industry leaders and Entrepreneurs to exercise their skills
        </p>
      </div>
    </div>
  );
};

export default AboutUs;