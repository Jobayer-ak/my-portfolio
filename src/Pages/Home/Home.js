import React, { useEffect, useRef } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import About from "../About/About";
import ResumeDetail from "../ResumeDetail/ResumeDetail";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Shared/Footer";
import ReactTypingEffect from "react-typing-effect";
import Blog from "../Blog/Blog";

const Home = () => {
  const el = useRef(null);

  const handleScroll = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    <div >
      <div id="home" className="bg-wrap">
        <div className="text-center flex flex-col justify-center items-center animate-box" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-primary text-xl font-bold tracking-widest uppercase">
            Hey! I am
          </p>
          <h1 className="font-bold text-6xl">Md. Jobayer Akanda</h1>
          <h2 className="mt-3 text-3xl font-bold">
            I'm a
            <ReactTypingEffect
              className="text-primary text-4xl ml-1"
              eraseSpeed={200}
              eraseDelay={400}
              typingDelay={400}
              text={["Front End Developer."]}
            />
          </h2>
        </div>
        <div className="mouse" onClick={() => handleScroll()} data-aos="fade-up" data-aos-duration="1000">
          <a href="#" className="mouse-icon">
            <div className="mouse-wheel">
              <div className="arrow-icon">
                <FontAwesomeIcon icon={faArrowDownLong} />
              </div>
            </div>
          </a>
        </div>
      </div>
      <About></About>
      <ResumeDetail></ResumeDetail>
      <Services></Services>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default Home;
