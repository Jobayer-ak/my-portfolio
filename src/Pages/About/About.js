import React from "react";
import image from "../../Images/Jobayer.png";
import "./About.css";
// import pdf from "../Resume/Resume";
// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="container mx-auto px-12">
      <div id="about" className="flex flex-row">
        <img src={image} className="image basis-2/4"></img>

        <div className="aboutMe basis-2/4 p-10">
          <h2 className="text-bold text-5xl font-bold mb-5">About Me</h2>
          <p className="pb-5">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="flex flex-row">
            <div className="basis-2/6">
              <p className="text-xl font-bold">Name:</p>
              <p className="text-xl font-bold">Date Of birth:</p>
              <p className="text-xl font-bold">Address:</p>
              <p className="text-xl font-bold">Zip code:</p>
              <p className="text-xl font-bold">E-mail:</p>
              <p className="text-xl font-bold">Phone:</p>
            </div>
            <div className="basis-2/4 info">
              <p className="text-xl">Md. Jobayer Akanda</p>
              <p className="text-xl">January 01, 1993</p>
              <p className="text-xl">Mymensingh, Bangladesh</p>
              <p className="text-xl">2252</p>
              <p className="text-xl">jobayer.ak@gmail.com</p>
              <p className="text-xl">+8801725-008757</p>
            </div>
          </div>

          <h2 className="text-2xl py-5">
            <span className="text-primary text-3xl font-bold">
            <CountUp  end={12} />
            </span>{" "}
            Projects Complete
          </h2>

          <button className="btn btn-primary rounded-full">
            <a
              href="https://drive.google.com/file/d/1Pue-VnLk-WyJRhShobMSbjMXeq-vEa3n/view?usp=sharing"
              target="_blank"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
