import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faLaptopCode, faCode, faFile } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="container mx-auto px-12">
      <h2 className="text-4xl text-center font-bold py-5">Services</h2>
      <p className="text-secondary text-center">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <div className="my-5 flex flex-cols justify-center items-center gap-7 py-8">
        <div>
          <div className="p-4 services-info text-center shadow-2xl px-5 py-12 ">
            <FontAwesomeIcon className="text-6xl icon" icon={faLaptopCode} />
            <div className="after-position py-3 my-7">
              <h4 className="text-xl uppercase">WEB DESIGN</h4>
            </div>

            <p className="text-secondary">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>
          </div>
        </div>
        <div>
          <div className="p-4 services-info text-center shadow-2xl px-5 py-12">
            <FontAwesomeIcon className="text-6xl" icon={faCode} />
            <div className="after-position p-3 my-7">
              <h4 className="text-xl uppercase">WEB Development</h4>
            </div>
            <div className="hr-style"></div>
            <p className="text-secondary">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div>
          <div className="p-4 services-info text-center shadow-2xl px-5 py-12">
            <FontAwesomeIcon className="text-6xl" icon={faFile} />
            <div className="after-position p-3 my-7">
              <h4 className="text-xl uppercase">Design Upgrade</h4>
            </div>
            <div className="hr-style"></div>
            <p className="text-secondary">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
