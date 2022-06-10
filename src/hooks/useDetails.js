import React, { useEffect, useState } from 'react';

const useDetails = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = "details.json";
        
        fetch(url)
          .then((res) => res.json())
          .then((data) => console.log(data));
      }, []);
    

    return [details]
};

export default useDetails;