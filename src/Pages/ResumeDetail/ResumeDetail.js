import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../Images/Screenshot1.png";
import image2 from "../../Images/Screenshot2.png";
import image3 from "../../Images/Screenshot3.png";
import image4 from "../../Images/Screenshot4.png";
import "./ResumeDetail.css";
import useDetails from "../../hooks/useDetails";

const ResumeDetail = () => {
  //hooks
  const [details] = useDetails();
  const [loadDetails, setLoadDetails] = useState("")
  

  const handleDetails = (details_id) => {
    const project_details = details.find((detail) => details_id === detail.id);
    
    setLoadDetails(project_details);    

  };

  return (
    <div className="container mx-auto px-12 pt-20">
      <div className="flex flex-cols py-7 gap-10">
        {/* sidebar menu */}
        <div className="side-menu ">
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 sticky top-20"
          >
            <li className="font-bold">
              <a href="#education">Education</a>
            </li>
            <li className="font-bold my-5">
              <a href="#skills">Skills</a>
            </li>
            <li className="font-bold">
              <a href="#projects">Projects</a>
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
                <div className="text-center bg-base-100 shadow-2xl rounded-md p-3">
                  <h2 className="text-2xl font-bold text-center py-8">HTML</h2>
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": "85" }}
                  >
                    85%
                  </div>
                  <div className="flex flex-cols items-center pt-12 pb-7">
                    <div
                      className="w-full"
                      style={{ borderRight: "1px solid blue" }}
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
                <div className="text-center bg-base-100 shadow-2xl rounded-md p-3">
                  <h2 className="text-2xl font-bold text-center py-8">CSS</h2>
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": "85" }}
                  >
                    85%
                  </div>
                  <div className="flex flex-cols items-center pt-12 pb-7">
                    <div
                      className="w-full"
                      style={{ borderRight: "1px solid blue" }}
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
                <div className="text-center bg-base-100 shadow-2xl rounded-md p-3">
                  <h2 className="text-2xl font-bold text-center py-8">
                    JavaScript
                  </h2>
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": "80" }}
                  >
                    80%
                  </div>
                  <div className="flex flex-cols items-center pt-12 pb-7">
                    <div
                      className="w-full"
                      style={{ borderRight: "1px solid blue" }}
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
                <progress
                  className="progress progress-primary w-90"
                  value="80"
                  max="100"
                ></progress>
              </div>

              <div>
                <div className="flex flex-cols justify-between px-2">
                  <h2 className="text-2xl font-bold">Tailwind Css</h2>
                  <h2 className="text-2xl font-bold">80%</h2>
                </div>
                <progress
                  className="progress progress-primary w-90"
                  value="80"
                  max="100"
                ></progress>
              </div>

              <div>
                <div className="flex flex-cols justify-between px-2">
                  <h2 className="text-2xl font-bold">Bootstrap</h2>
                  <h2 className="text-2xl font-bold">80%</h2>
                </div>
                <progress
                  className="progress progress-primary w-90"
                  value="80"
                  max="100"
                ></progress>
              </div>

              <div>
                <div className="flex flex-cols justify-between px-2">
                  <h2 className="text-2xl font-bold">Git</h2>
                  <h2 className="text-2xl font-bold">85%</h2>
                </div>
                <progress
                  className="progress progress-primary w-90"
                  value="85"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>

          {/* projects */}
          <div id="projects" className="mt-12">
            <h2 className="text-4xl text-primary font-bold text-center my-7">
              Projects
            </h2>
            <div className="grid grid-cols-2 gap-5 shadow-lg p-3">
              <div className="project shadow-2xl">
                <img src={image1} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                  <label onClick={()=>handleDetails(1)} htmlFor="my-modal-6" className="btn modal-button text-accent">
                      Details
                    </label>
                  </div>
                </div>
              </div>
              <div className="project shadow-2xl">
                <img src={image3} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                  <label onClick={()=>handleDetails(2)} htmlFor="my-modal-6" className="btn modal-button">
                      Details
                    </label>
                  </div>
                </div>
              </div>
              <div className="project shadow-2xl">
                <img src={image4} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                  <label onClick={()=>handleDetails(3)} htmlFor="my-modal-6" className="btn modal-button">
                      Details
                    </label>
                  </div>
                </div>
              </div>
              <div className="project shadow-2xl">
                <img src={image2} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">
                   
                    <label onClick={()=>handleDetails(4)} htmlFor="my-modal-6" className="btn modal-button">
                      Details
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Modal */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-xl text-primary font-bold">Features:</h3>
          <p className="pb-3">{loadDetails.features}</p>
          <h4 className="text-xl text-primary font-bold">Technology:</h4>
          <p>{loadDetails.technology}</p>
          
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-primary btn-md">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetail;
