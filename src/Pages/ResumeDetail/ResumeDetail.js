import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./ResumeDetail.css";
import useDetails from "../../hooks/useDetails";
import { useInView } from "react-intersection-observer";
import Projects from "../ProjectDetails/Projects/Projects";
import useProjects from "../../hooks/useProjects";

const ResumeDetail = () => {
  //hooks
  const [details] = useDetails();
  const [loadDetails, setLoadDetails] = useState("");
  const [single] = useProjects();
  const navigate = useNavigate();
  // const myRef = useRef();
  const { ref: eduRef, inView: eduIsVisible } = useInView();
  const { ref: skillsRef, inView: skillsIsVisible } = useInView();
  const { ref: projectsRef, inView: projectsIsVisible } = useInView();

  // console.log(eduIsVisible);

  const handleDetails = (details_id) => {
    const project_details = details.find((detail) => details_id === detail.id);

    setLoadDetails(project_details);
  };

  return (
    <div className="container mx-auto px-12 lg:pt-20">
      <div className="sm:flex md:flex-cols lg:flex-cols py-7 sm:gap-4 md:gap-10 lg:gap-10">
        {/* sidebar menu */}
        <div className="side-menu ">
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 sticky top-20"
          >
            <li className="font-bold">
              <a
                className={eduIsVisible ? "text-primary" : ""}
                href="#education"
              >
                Education
              </a>
            </li>
            <li className="font-bold my-5">
              <a
                className={skillsIsVisible ? "text-primary" : ""}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="font-bold">
              <a
                className={projectsIsVisible ? "text-primary" : ""}
                href="#projects"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* education skills experience */}
        <div>
          <div ref={eduRef} id="education" className="edu-info">
            <div className="mb-5">
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
                </div>
              </div>
            </div>

            {/* Polytechnic */}
            <div className="mb-5">
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
                </div>
              </div>
            </div>

            {/* School */}

            <div>
              <div className="flex flex-cols gap-6 pb-3 edu-box">
                <FontAwesomeIcon
                  className="education-icon bg-primary my-2 text-white p-3"
                  icon={faGraduationCap}
                />

                <div className="institute-info pt-1">
                  <h2 className="text-primary text-xl font-bold">
                    2004 to 2009
                  </h2>
                  <h2 className="text-3xl font-bold my-2">
                    Secondary School Certificate
                  </h2>
                  <h3 className="text-xl font-bold py-2">
                    Taldighi High School, Tarakanada, Mymensingh, Bangladesh
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* skills */}
          <div ref={skillsRef} id="skills" className="skills-info">
            <div className="mb-9  section_heading">
              <h2 className="text-primary text-4xl font-bold">Skills</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-7 py-10">
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

            {/* Familiar with Backend skills */}
            <div>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex flex-cols justify-between px-2">
                    <h2 className="text-2xl font-bold">Node Js</h2>
                    <h2 className="text-xl font-bold">Basic Knowledge</h2>
                  </div>
                  <progress
                    className="progress progress-primary w-90"
                    value="50"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div className="flex flex-cols justify-between px-2">
                    <h2 className="text-2xl font-bold">ExpressJs</h2>
                    <h2 className="text-xl font-bold">Basic Knowledge</h2>
                  </div>
                  <progress
                    className="progress progress-primary w-90"
                    value="50"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div className="flex flex-cols justify-between px-2">
                    <h2 className="text-2xl font-bold">Type Script</h2>
                    <h2 className="text-xl font-bold">Basic Knowledge</h2>
                  </div>
                  <progress
                    className="progress progress-primary w-90"
                    value="50"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div className="flex flex-cols justify-between px-2">
                    <h2 className="text-2xl font-bold">MongoDB</h2>
                    <h2 className="text-xl font-bold">Basic Knowledge</h2>
                  </div>
                  <progress
                    className="progress progress-primary w-90"
                    value="50"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>

          {/* projects */}
          <div ref={projectsRef} id="projects" className="mt-12">
            <h2 className="text-4xl text-primary font-bold text-center my-7">
              Projects
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 shadow-lg p-3">

              {single.map(item=> (<Projects key={item.id} item={item}></Projects>))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-top sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-xl text-primary font-bold">Features:</h3>
          <p className="pb-3">{loadDetails.features}</p>
          <h4 className="text-xl text-primary font-bold">Technology:</h4>
          <p>{loadDetails.technology}</p>
          
          <a className="btn btn-sm btn-primary text-center mr-2" href="https://github.com/Jobayer-ak/photographer-guy" target="_blank">Code Link</a>

          <a className="btn btn-sm btn-primary text-center" href="https://github.com/Jobayer-ak/photographer-guy" target="_blank">Code Link</a>
          
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-primary btn-md">
              Close
            </label>
          </div>
        </div>
      </div> */}
      
    </div>
  );
};

export default ResumeDetail;
