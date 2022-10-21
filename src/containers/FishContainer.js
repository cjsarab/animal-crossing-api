import React, { useState, useEffect } from 'react';
import FishList from '../components/fish/FishList';

const FishContainer = () => {

  const [fish, setFish] = useState([])
  const [availabilityDetails, setAvailabilityDetails] = useState(false)
  const [selectedFish, setSelectedFish] = useState(null)
    
  useEffect(() => {
    getFish();
  }, []);
  
  const getFish = function(){
      fetch("http://acnhapi.com/v1/fish")
      .then(res => res.json())
      .then(fish => setFish(fish))
  };

  const showAvailabilityDetails = function(fishItem) {
    setSelectedFish(fishItem);
    setAvailabilityDetails(true);
  }

  return (
    <>
    <FishList 
    fish={fish}
    selectedFish={selectedFish}
    availabilityDetails={availabilityDetails}

    showAvailabilityDetails={showAvailabilityDetails}/>
    </>
  );
};

export default FishContainer;