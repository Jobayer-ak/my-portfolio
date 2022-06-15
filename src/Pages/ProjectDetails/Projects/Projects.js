import React from "react";
import { useNavigate } from "react-router-dom";
import useDetails from "../../../hooks/useDetails";

const Projects = ({ item }) => {
  //hooks
  const [details] = useDetails();
  const navigate = useNavigate();

  const { id, scr_link } = item;

  
  const handleDetails = (ID) =>{
    const project_details = details.find((detail) => ID === detail.id);

    // send data as props with link
    navigate("/projectDetails" , { state: project_details});
  }


  return (
    <div className="project shadow-2xl">
      <img src={scr_link} alt="Avatar" className="project_image" />
      <div className="overlay">
        <div className="text" >
            <button 
            className="btn btn-secondary  text-white"
            onClick={()=>handleDetails(id)}
             
            >Details</button>
          
       
        </div>
      </div>
    </div>
  );
};

export default Projects;
