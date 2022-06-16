import React from "react";
import image from "../../Images/my-bg-with-pic.png";
import "./About.css";
// import pdf from "../Resume/Resume";
// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";
import pdf from "../../Resume PDF File/Resume of Jobayer.pdf";

const About = () => {
  return (
    <div id="about" className="container mx-auto px-12">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 py-7">
        <div className="p-3 md:pr-10 lg:p-8">
          <img src={image} className="image"></img>
        </div>

        <div className="aboutMe lg:p-10">
          <h2 className="text-bold text-5xl font-bold mb-5">About Me</h2>
          <p className="pb-5">
            To take a challenging role as Front End Web Developer in a highly
            technical company where I could utilize my skills in Web Design, Web Development, and use these skills in providing quality service to the company.
          </p>
          <div className="flex flex-row">
            <div className="basis-2/6">
              <p className="text-xl font-bold">Name:</p>
              <p className="text-xl font-bold">Address:</p>
              <p className="text-xl font-bold">Zip code:</p>
              <p className="text-xl font-bold">E-mail:</p>
              <p className="text-xl font-bold">Phone:</p>
            </div>
            <div className="basis-2/4 info">
              <p className="text-xl">Md. Jobayer Akanda</p>
              <p className="text-xl">Mymensingh, Bangladesh</p>
              <p className="text-xl">2252</p>
              <p className="text-xl">jobayer.ak@gmail.com</p>
              <p className="text-xl">+8801725-008757</p>
            </div>
          </div>

          <h2 className="text-2xl py-5">
            <span className="text-primary text-3xl font-bold">
              <CountUp end={20} />
            </span>{" "}
            Projects Complete
          </h2>

          <a
            href={pdf}
            className="btn btn-primary resume rounded-full"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
