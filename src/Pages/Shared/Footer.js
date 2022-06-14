import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRightArrowLeft,
  faArrowRightLong,
  faEnvelope,
  faLocationDot,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import {fab, faFacebookF, faGit, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div id="footer">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-1 lg:grid-cols-4 md:gap-2 lg:gap-8">
          {/* About Section */}
          <div className="p-2">
            <div className="text-center">
              <h2 className="text-white text-2xl mb-5 py-4">About</h2>
              <p className="text-secondary">
                I am a passionate Front End Developer.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="p-4">
            <h2 className="text-white text-2xl mb-5 py-4">Links</h2>
            <ul className="links">
              <li>
                <a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="pr-2"/>Home</a>
              </li>
              <li>
                <a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="pr-2"/>About</a>
              </li>
              <li>
                <a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="pr-2"/>Contact</a>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div className="p-4">
            <h2 className="text-white text-2xl mb-5 py-4">Services</h2>
            <ul className="links">
              <li>
                <a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="pr-2"/>Web Design</a>
              </li>
              <li>
                <a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="pr-2"/>PSD TO HTML</a>
              </li>
              <li>
                <a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="pr-2"/>Web Development</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="p-4">
            <h2 className="text-white text-2xl mb-5 py-4">Have A Question?</h2>
            <div className="flex flex-cols justify-between gap-4">
              <a href="https://www.facebook.com" target="_blank">
                <FontAwesomeIcon
                  className="text-xl text-white pt-2"
                  icon={faLocationDot}
                />
              </a>
              <p className="text-secondary">
                Tarakanada, Mymensingh, Bangladesh
              </p>
            </div>

            <div className="flex flex-cols my-4">
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

            <div className="flex flex-cols my-3">
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
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-3xl social_icon" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/jobayer-ak" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-3xl social_icon"/>
            </a>
          </div>
          <div>
            <a href="https://github.com/Jobayer-ak" target="_blank">
              <FontAwesomeIcon
                className="text-white text-3xl social_icon"
                icon={faGithub} 
              />
            </a>
          </div>
        </div>

        {/* copy rights */}
        <div className="mt-6 pb-4">
          <p className="text-center text-secondary">Copyright &copy;2022 | All right reserved by Jobayer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
