import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [fix, setFix] = useState(false);

  

  const setFixed = () =>{
    if(window.scrollY >= 100){
      setFix(true);
    }
    else{
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);


    const menuItmes = (
        <>
            <li>
                <HashLink smooth to="/#home">Home</HashLink>
            </li>
            
            <li>
                <HashLink smooth to="#about">About</HashLink>
            </li>

            <li>
                <HashLink smooth to="#blog">Blog</HashLink>
            </li>

            
            <li>
                <HashLink smooth to="#contact">Contact</HashLink>
            </li>
            
        </>
    )

    const desabledMenu = (
      <>
          <li className="bg-sky-500/80 hover:bg-sky-700/80 rounded-md p-3">
              <Link to="/" className="text-white hover:text-white">Back To Home Page</Link>
          </li>
          
      </> 
      )
  
  return (
    <div className="bg_color">
        <div className={fix ? "navbar fixed scroll z-50 py-6": "navbar py-6 mx-auto no_scroll"}>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                 {location.pathname ==="/projectDetails" ? desabledMenu : menuItmes}
              </ul>
            </div>
            <Link to="/" className="navbar-brand md:text-end font-bold ml-10"><span className="single text-3xl text-white ">J</span>obayer</Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="nav-items p-0">
              {location.pathname ==="/projectDetails" ? desabledMenu : menuItmes}
              
            </ul>
          </div>
          {/* <div className="navbar-end">
            <a className="btn">Get started</a>
          </div> */}
        </div>
  </div>  );
};

export default Navbar;
