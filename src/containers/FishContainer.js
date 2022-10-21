import React, { useState, useEffect } from 'react';
import FishList from '../components/fish/FishList';
import FishAvailabilityDetails from '../components/fish/FishAvailabilityDetails';

const FishContainer = () => {

  const [fish, setFish] = useState([])
    
  useEffect(() => {
    getFish();
  
  }, []);
  
  const getFish = function(){
      fetch("http://acnhapi.com/v1/fish")
      .then(res => res.json())
      .then(fish => setFish(fish))
  };

  const showAvailabilityDetails = function(fishItem) {
    
  }

  return (
    <>
    <FishList fish={fish} showAvailabilityDetails={showAvailabilityDetails}/>
    </>
  );
};

export default FishContainer;