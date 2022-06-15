import React, { useEffect, useState } from 'react';

const useFeatures = () => {
    const [features, setFeatures] = useState([]);

    useEffect(()=>{
        fetch("details.json")
        .then(res=> res.json())
        .then(data=> setFeatures(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default useFeatures;