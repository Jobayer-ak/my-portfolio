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
          <div id="education">
            <div className="edu-info">
              <div className="mb-9">
                <h2 className="text-primary text-4xl font-bold">Education</h2>
              </div>
              <div className="flex flex-cols gap-6 pb-3 edu-box">
                <FontAwesomeIcon
                  className="education-icon bg-primary my-2 text-white p-3"
                  icon={faGraduationCap}
                />

                <div className="institute-info pt-1">
                  <h2 className="text-primary text-xl font-bold">
                    2017 to 2018
                  </h2>
                  <h2 className="text-3xl font-bold my-2">Chinese Language</h2>
                  <h3 className="text-xl font-bold py-2">
                    Changde Vocational Technical College, Hunan, China
                  </h3>
                  <p className="pb-5">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
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
                  <h2 className="text-primary text-xl font-bold">
                    2011 to 2016
                  </h2>
                  <h2 className="text-3xl font-bold my-2">
                    Diploma In Textile Engineering
                  </h2>
                  <h3 className="text-xl font-bold py-2">
                    Shyamoli Ideal Polytechnic Institute, Dhaka, Bangladesh
                  </h3>
                  <p className="pb-5">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
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
                  <h2 className="text-primary text-xl font-bold">
                    2011 to 2016
                  </h2>
                  <h2 className="text-3xl font-bold my-2">
                    Secondary School Certificate
                  </h2>
                  <h3 className="text-xl font-bold py-2">
                    Taldighi High School, Tarakanada, Mymensingh, Bangladesh
                  </h3>
                  <p className="pb-5">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </div>
            </div>

            {/* skills  */}
          </div>

          {/* skills */}
          <div id="skills" className="skills-info">
            <div className="mb-9">
              <h2 className="text-primary text-4xl font-bold">Skills</h2>
            </div>
            <div className="grid grid-cols-3 gap-7">
              <div>
                <div class="text-center bg-base-100 shadow-xl rounded-md p-3">
                  <h2 className="text-2xl font-bold text-center py-8">HTML</h2>
                  <div
                    class="radial-progress text-primary"
                    style={{ "--value": "85" }}
                  >
                    85%
                  </div>
                  <div className="flex flex-cols items-center pt-12 pb-7">
                    <div
                      className="w-full"
                      style={{ "border-right": "1px solid blue" }}
                    >
                      <h2 className="text-3xl">28%</h2>
                      <p className="text-secondary">Last Week</p>
                    </div>
                    <div className="w-full">
                      <h2 className="text-3xl">60%</h2>
                      <p className="text-secondary">Last Month</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="text-center bg-base-100 shadow-xl rounded-md p-3">
                  <h2 className="text-2xl font-bold text-center py-8">CSS</h2>
                  <div
                    class="radial-progress text-primary"
                    style={{ "--value": "85" }}
                  >
                    85%
                  </div>
                  <div className="flex flex-cols items-center pt-12 pb-7">
                    <div
                      className="w-full"
                      style={{ "border-right": "1px solid blue" }}
                    >
                      <h2 className="text-3xl">28%</h2>
                      <p className="text-secondary">Last Week</p>
                    </div>
                    <div className="w-full">
                      <h2 className="text-3xl">60%</h2>
                      <p className="text-secondary">Last Month</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="text-center bg-base-100 shadow-xl rounded-md p-3">
                  <h2 className="text-2xl font-bold text-center py-8">
                    JavaScript
                  </h2>
                  <div
                    class="radial-progress text-primary"
                    style={{ "--value": "80" }}
                  >
                    80%
                  </div>
                  <div className="flex flex-cols items-center pt-12 pb-7">
                    <div
                      className="w-full"
                      style={{ "border-right": "1px solid blue" }}
                    >
                      <h2 className="text-3xl">28%</h2>
                      <p className="text-secondary">Last Week</p>
                    </div>
                    <div className="w-full">
                      <h2 className="text-3xl">60%</h2>
                      <p className="text-secondary">Last Month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* progress bar*/}
            <div className="grid grid-cols-2 gap-8 py-10">
              <div>
                <div className="flex flex-cols justify-between px-2">
                  <h2 className="text-2xl font-bold">React Js</h2>
                  <h2 className="text-2xl font-bold">80%</h2>
                </div>
                <progress class="progress progress-primary w-90" value="80" max="100"></progress>
              </div>

              <div>
                <div className="flex flex-cols justify-between px-2">
                <h2 className="text-2xl font-bold">Tailwind Css</h2>
                  <h2 className="text-2xl font-bold">80%</h2>
                </div>
                <progress class="progress progress-primary w-90" value="80" max="100"></progress>
              </div>

              <div>
              <div className="flex flex-cols justify-between px-2">
                <h2 className="text-2xl font-bold">Bootstrap</h2>
                  <h2 className="text-2xl font-bold">80%</h2>
                </div>
                <progress class="progress progress-primary w-90" value="80" max="100"></progress>
              </div>

              <div>
              <div className="flex flex-cols justify-between px-2">
                <h2 className="text-2xl font-bold">Git</h2>
                  <h2 className="text-2xl font-bold">85%</h2>
                </div>
                <progress class="progress progress-primary w-90" value="85" max="100"></progress>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
