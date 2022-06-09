import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./Education.css";

const Education = () => {
  return (
    <div className="container mx-auto px-12 pt-20">
      <div className="flex flex-row py-7 gap-10">
        <div className="basis-1/4">
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
        <div className="basis-3/4 px-5">
          <div id="education">
            <h2 className="text-primary text-3xl font-bold">Education</h2>
            {/* University */}
            <div className="flex flex-cols justify-center gap-7 py-7 education-section">
              <FontAwesomeIcon
                className="education-icon bg-primary my-2 text-white rounded-full p-3"
                icon={faGraduationCap}
              />
              <div>
                <h2 className="text-primary text-xl font-bold">2017 to 2018</h2>
                <h2 className="text-3xl font-bold my-2">Chinese Language</h2>
                <h3 className="text-xl font-bold py-2">
                  Changde Vocational Technical College, Hunan, China
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
            {/* Polytechnic */}
            <div className="flex flex-cols justify-center gap-7 py-7 education-section">
              <FontAwesomeIcon
                className="education-icon bg-primary my-2 text-white rounded-full p-3"
                icon={faGraduationCap}
              />
              <div>
                <h2 className="text-primary text-xl font-bold">2011 to 2016</h2>
                <h2 className="text-3xl font-bold my-2">
                  Diploma in Textile Engineering
                </h2>
                <h3 className="text-xl font-bold py-2">
                  Shyamoli Ideal Polytechnic Institute, Dhaka, Bangladesh
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
            {/* High School */}
            <div className="flex flex-cols justify-center gap-7 py-7 education-section">
              <FontAwesomeIcon
                className="education-icon bg-primary my-2 text-white rounded-full p-3"
                icon={faGraduationCap}
              />
              <div>
                <h2 className="text-primary text-xl font-bold">2004 to 2009</h2>
                <h2 className="text-3xl font-bold my-2">High School</h2>
                <h3 className="text-xl font-bold py-2">
                  Taldighi High School, Tarakanada, Mymensingh, Bangladesh
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}

          <div id="skills">
            <h2 className="text-primary text-3xl font-bold">Skills</h2>
            <div className="flex flex-cols justify-between items-center gap-">
              <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                  <figure class="px-10 pt-10">
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                      class="rounded-xl"
                    />
                  </figure>
                  <div class="card-body items-center text-center">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                      <button class="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                  <figure class="px-10 pt-10">
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                      class="rounded-xl"
                    />
                  </figure>
                  <div class="card-body items-center text-center">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                      <button class="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                  <figure class="px-10 pt-10">
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                      class="rounded-xl"
                    />
                  </figure>
                  <div class="card-body items-center text-center">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                      <button class="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="experience">
            <h2 className="text-primary text-3xl font-bold">Experience</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
