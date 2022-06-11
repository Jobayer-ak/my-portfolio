import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
  faLocation,
  faPaperPlane,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container mx-auto px-12">
        <div className="flex flex-row gap-7">
          {/* About Section */}
          <div className="basis-1/4 p-4">
            <div className="text-center">
              <h2 className="text-white text-2xl mb-5 py-4">About</h2>
              <p className="text-secondary">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="basis-1/4 p-4">
            <h2 className="text-white text-2xl mb-5 py-4">Links</h2>
            <ul className="links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div className="basis-1/4 p-4">
            <h2 className="text-white text-2xl mb-5 py-4">Services</h2>
            <ul className="links">
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">PSD TO HTML</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="basis-1/4 p-4">
            <h2 className="text-white text-2xl mb-5 py-4">Have A Question?</h2>
            <div className="flex flex-cols justify-between gap-4">
              <a href="https://www.facebook.com" target="_blank">
                <FontAwesomeIcon
                  className="text-xl text-white pt-2"
                  icon={faLocation}
                />
              </a>
              <p className="text-secondary">
                Tarakanada, Mymensingh, Bangladesh
              </p>
            </div>
            <div className="flex flex-cols my-7">
              <a href="https://www.twitter.com" className="pr-1" target="_blank">
                <FontAwesomeIcon
                  className="text-xl text-white"
                  icon={faPhone}
                />
              </a>
              
                <a href="tel://8801725008757" className="pl-3 phone">
                  +880 1725 008757
                </a>
              
            </div>
            <div className="flex flex-cols my-7">
              <a href="https://www.twitter.com" className="pr-1" target="_blank">
                <FontAwesomeIcon
                  className="text-xl text-white"
                  icon={faEnvelope}
                />
              </a>
              
                <a href="https://www.gmail.com" target="_blank" className="pl-3 mail">
                  jobayer.ak@gmail.com
                </a>
              
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-cols justify-center items-center gap-10 py-2 social-links">
          <div>
            <a href="https://www.facebook.com" target="_blank">
              <FontAwesomeIcon
                className="text-xl text-white social_icon"
                icon={faLocation}
              />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com" target="_blank">
              <FontAwesomeIcon
                className="text-xl text-white social_icon"
                icon={faPaperPlane}
              />
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com" target="_blank">
              <FontAwesomeIcon
                className="text-xl text-white social_icon"
                icon={faPhone}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
