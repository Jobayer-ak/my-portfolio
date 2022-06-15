import React from "react";
import { Link } from "react-router-dom";
import useDetails from "../../../hooks/useDetails";
import ProjectDetails from "../ProjectDetails";

const Projects = ({ item }) => {
  const [details] = useDetails();

  const { id, scr_link } = item;

  
  const handleDetails = (ID)=>{
    const project_details = details.find((detail) => ID === detail.id);
    // <ProjectDetails project_details={project_details}></ProjectDetails>
    console.log(project_details);
  }

  return (
    <div className="project shadow-2xl">
      <img src={scr_link} alt="Avatar" className="project_image" />
      <div className="overlay">
        <div className="text">
          <Link to="/projectDetails">
            <button 
            className="btn modal-button text-accent"
            onClick={()=>handleDetails(id)}
            >Details</button>
          </Link>
          
         {/* {<ProjectDetails project_details={project_details}></ProjectDetails>} */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
