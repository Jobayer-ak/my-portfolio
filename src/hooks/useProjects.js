import React, { useEffect, useState } from 'react';

const useProjects = () => {
    const [single, setSingle] = useState([]);

    useEffect(()=>{
        fetch("projectSingleImg.json")
        .then(res=> res.json())
        .then(data=> setSingle(data));
    },[])

    return [single];
};

export default useProjects;