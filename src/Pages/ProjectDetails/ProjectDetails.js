import React from 'react';

const ProjectDetails = ({project_details}) => {
    // const {name} = project_details;
    console.log(project_details);
    return (
        <div>
            <h2 className='text-center'>Project Details</h2>
            {/* <p>{name}</p> */}
        </div>
    );
};

export default ProjectDetails;