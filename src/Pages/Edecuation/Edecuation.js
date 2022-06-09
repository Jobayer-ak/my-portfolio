import React from "react";
import { Link } from "react-router-dom";


const Edecuation = () => {
  return (
    <div className="container mx-auto px-12 pt-20">
      <div className="flex flex-row px-5 py-7">
        <div className="basis-1/4">
          <ul>
            <li>
              <Link to="#education">Education</Link>
            </li>
            <li>
              <Link to="#skills">Skills</Link>
            </li>
            <li>
              <Link to="#experience">Experience</Link>
            </li>
          </ul>
        </div>
        <div className="basis-3/4">
            <div>
                <h2 className="text-primary text-3xl font-bold">Education</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Edecuation;
