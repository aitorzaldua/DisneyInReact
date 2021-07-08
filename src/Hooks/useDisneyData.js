import {useState, useEffect } from 'react';

const useDisneyData = (API) => {

    const [ videoState, setVideoState] = useState({ mylist: [], movieTrailers: [] });

    useEffect(() => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => setVideoState(data));

    }, []);

    return videoState;


};

export default useDisneyData;

