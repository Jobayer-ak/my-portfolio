import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./Education.css";

const Education = () => {
  return (
    <div className="container mx-auto px-12 pt-20">
      <div className="flex flex-cols py-7 gap-10">
        {/* sidebar menu */}
        <div className="side-menu">
          <ul>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </div>

        {/* education skills experience */}
        <div>
          <div className="edu-info">
            <div className="mb-9">
              <h2 className="text-primary text-3xl font-bold">Education</h2>
            </div>
            <div className="flex flex-cols gap-6 pb-3 edu-box">
              <FontAwesomeIcon
                className="education-icon bg-primary my-2 text-white p-3"
                icon={faGraduationCap}
              />

              <div className="institute-info pt-1">
                <h2 className="text-primary text-xl font-bold">2017 to 2018</h2>
                <h2 className="text-3xl font-bold my-2">Chinese Language</h2>
                <h3 className="text-xl font-bold py-2">
                  Changde Vocational Technical College, Hunan, China
                </h3>
                <p className="pb-5">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>

          {/* Polytechnic */}
          <div className="edu-info">
            <div className="flex flex-cols gap-6 pb-3 edu-box">
              <FontAwesomeIcon
                className="education-icon bg-primary my-2 text-white p-3"
                icon={faGraduationCap}
              />

              <div className="institute-info pt-1">
                <h2 className="text-primary text-xl font-bold">2011 to 2016</h2>
                <h2 className="text-3xl font-bold my-2">Diploma In Textile Engineering</h2>
                <h3 className="text-xl font-bold py-2">
                Shyamoli Ideal Polytechnic Institute, Dhaka, Bangladesh
                </h3>
                <p className="pb-5">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>

          {/* School */}

          <div className="edu-info">
            <div className="flex flex-cols gap-6 pb-3 edu-box">
              <FontAwesomeIcon
                className="education-icon bg-primary my-2 text-white p-3"
                icon={faGraduationCap}
              />

              <div className="institute-info pt-1">
                <h2 className="text-primary text-xl font-bold">2011 to 2016</h2>
                <h2 className="text-3xl font-bold my-2">Secondary School Certificate</h2>
                <h3 className="text-xl font-bold py-2">
                Taldighi High School, Tarakanada, Mymensingh, Bangladesh
                </h3>
                <p className="pb-5">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Education;
