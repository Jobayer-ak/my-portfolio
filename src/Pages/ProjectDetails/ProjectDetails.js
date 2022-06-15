import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProjectDetails = () => {
   const location = useLocation();
    
    const name = location.state.name;
    const features = location.state.features;
    const technology = location.state.technology;
    
    return (
        <div>
            <h2 className='text-center'>Project Details</h2>
            <p>{name}</p>
            <p>{features}</p>
            <p>{technology}</p>
        </div>
    );
};

export default ProjectDetails;