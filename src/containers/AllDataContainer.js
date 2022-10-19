import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '.././components/ui/NavBar';
import FishContainer from './FishContainer';

const AllDataContainer = () => {

        const [fish, setFish] = useState({})
    
    useEffect(() => {
      getFish();
    
    }, []);
    
    const getFish = function(){
        fetch("http://acnhapi.com/v1/fish")
        .then(res => res.json())
        .then(fish => setFish(fish))
    };

  return (
    <>
    <Router>
      <NavBar />
        <Routes>
          <Route path="/fish" element={<FishContainer fish={fish} />} />
        </Routes>
    </Router>
    </>
  );
};


export default AllDataContainer;