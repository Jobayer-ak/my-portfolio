import {
  faLocationDot,
  faPaperPlane,
  faPhone,
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

      <div className="flex flex-cols justify-between items-center gap-7 my-12">
        <div className="text-center w-96 shadow-2xl p-9">
          <div className="flex flex-col justify-center items-center icon_parent">
            <FontAwesomeIcon
              className= "icon"
              icon={faLocationDot}
            />
          </div>
          <h4 className="text-xl font-bold my-5">Address</h4>
          <p className="text-secondary">Tarakanda, Mymensingh, Bangladesh</p>
        </div>
        <div className="text-center w-96 shadow-2xl p-9">
          <div className="flex flex-col justify-center items-center icon_parent">
            <FontAwesomeIcon
              className= "icon"
              icon={faPhone}
            />
          </div>
          <h4 className="text-xl font-bold my-5">Phone Number</h4>
          <a className="text-secondary" href="tel://8801725008757">+880 1725 008757</a>
        </div>
        <div className="text-center w-96 shadow-2xl p-9">
          <div className="flex flex-col justify-center items-center icon_parent">
            <FontAwesomeIcon
              className= "icon"
              icon={faPaperPlane}
            />
          </div>
          <h4 className="text-xl font-bold my-5">E-mail</h4>
          <a  href="https://www.gmail.com" target="_blank">
            <p className="text-primary">jobayer.ak@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
