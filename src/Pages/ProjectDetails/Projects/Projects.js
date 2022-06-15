import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useDetails from "../../../hooks/useDetails";
import ProjectDetails from "../ProjectDetails";

const Projects = ({ item }) => {
  const [details] = useDetails();
  const navigate = useNavigate();

  const { id, scr_link } = item;

  
  const handleDetails = (ID) =>{
    const project_details = details.find((detail) => ID === detail.id);
    navigate("/projectDetails" , { state: project_details});
  }

  // console.log(det)

  // const handleDetails = (ID)=>{
  //   const project_details = details.find((detail) => ID === detail.id);
  //   // <ProjectDetails project_details={project_details}></ProjectDetails>
  //   console.log(project_details);
  //   navigate("/projectDetails" , {state: {project_details: project_details}})
  // }

  return (
    <div className="project shadow-2xl">
      <img src={scr_link} alt="Avatar" className="project_image" />
      <div className="overlay">
        <div className="text" >
            <button 
            className="btn modal-button text-accent"
            onClick={()=>handleDetails(id)}
             
            >Details</button>
          
          
         {/* {<ProjectDetails project_details={project_details}></ProjectDetails>} */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
