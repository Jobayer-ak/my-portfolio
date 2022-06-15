import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();

  const name = location.state.name;
  const features = location.state.features;
  const technology = location.state.technology;
  const slider_1= location.state.slider_1;
  const slider_2= location.state.slider_2;
  const slider_3= location.state.slider_3;
  const slider_4= location.state.slider_4;


  return (
    <div>
      <div className="container px-12 mx-auto my-5">
        <h2 className="text-4xl font-bold text-center">Project Details</h2>
        <p>Project Name: {name}</p>
        <li>{features}</li>
        <p>{technology}</p>
        <img src={slider_1}></img>
      </div>
    </div>
  );
};

export default ProjectDetails;
