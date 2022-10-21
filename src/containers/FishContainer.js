import React, { useState, useEffect } from 'react';
import FishList from '../components/fish/FishList';
import styled from 'styled-components';

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

  const Title = styled.h1`
  text-align: center;
  background-color: dodgerblue;
  padding: 16px;
  margin:0;
  `

  const Subtitle = styled.h2`
  text-align:center;
  background-color:dodgerblue;
  padding:16px;
  margin:0;
  `

  return (
    <>
    <Title>Animal Crossing: New Horizons</Title>
    <Subtitle>Fish</Subtitle>
    <FishList 
    fish={fish}
    selectedFish={selectedFish}
    availabilityDetails={availabilityDetails}

    showAvailabilityDetails={showAvailabilityDetails}/>
    </>
  );
};

export default FishContainer;