import {
  faLocation,
  faPaperPlane,
  faPhone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container mx-auto mt-12 px-12">
      <h2 className="text-center text-5xl font-bold my-3">Contact Me</h2>
      <p className="text-center text-secondary">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>

      <div className="flex flex-cols justify-between items-center my-12">
        <div className="text-center w-96 shadow-2xl p-9">
          <FontAwesomeIcon
            className="text-5xl bg-primary p-7 my-5 icon"
            icon={faLocation}
          />
          <h4 className="text-xl font-bold mb-5">Address</h4>
          <p className="text-secondary">Tarakanda, Mymensingh, Bangladesh</p>
        </div>
        <div className="text-center w-96 shadow-2xl p-9">
          <FontAwesomeIcon
            className="text-5xl bg-primary p-7 my-5 icon"
            icon={faPhone}
          />
          <h4 className="text-xl font-bold mb-5">Phone Number</h4>
          <a href="tel://8801725008757">
            +880 1725 008757
          </a>
        </div>
        <div className="text-center w-96 shadow-2xl p-9">
          <FontAwesomeIcon
            className="text-5xl bg-primary p-7 my-5 icon"
            icon={faPaperPlane}
          />
          <h4 className="text-xl font-bold mb-5">E-mail</h4>
          <a href="https://www.gmail.com" target="_blank">
            <p className="text-primary">jobayer.ak@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
