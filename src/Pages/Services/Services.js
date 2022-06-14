import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faLaptopCode, faCode, faFile } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="container mx-auto px-12">
      <h2 className="text-4xl text-center font-bold py-5">Services</h2>
      
      <div className="my-5 grid md:grid-cols-1 lg:grid-cols-3 gap-7 py-8">
      <div>
          <div className="services-info text-center shadow-2xl p-12">
            <FontAwesomeIcon className="text-6xl" icon={faLaptopCode} />
            <div className="after-position p-3 my-7">
              <h4 className="text-xl uppercase px-5">WEBsite design</h4>
            </div>
            <div className="hr-style"></div>
          
          </div>
        </div>
        <div>
          <div className="services-info text-center shadow-2xl p-12">
            <FontAwesomeIcon className="text-6xl" icon={faCode} />
            <div className="after-position p-3 my-7">
              <h4 className="text-xl uppercase">WEB Development</h4>
            </div>
            <div className="hr-style"></div>
            {/* <p className="text-secondary">
              As a web developer i develop website with ReactJs, NodeJs, ExpressJs, and MongoDB. 
            </p> */}
          </div>
        </div>
        <div>
          <div className="services-info text-center shadow-2xl p-12">
            <FontAwesomeIcon className="text-6xl" icon={faFile} />
            <div className="after-position p-3 my-7">
              <h4 className="text-xl uppercase px-2">Design Upgrade</h4>
            </div>
            <div className="hr-style"></div>
            {/* <p className="text-secondary">
              As a web developer i develop website with ReactJs, NodeJs, ExpressJs, and MongoDB. 
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
