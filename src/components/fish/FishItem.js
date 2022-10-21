import React from 'react';
import AvailabilityButton from '../ui/AvailabilityButton';
import FishAvailabilityDetails from './FishAvailabilityDetails';

const FishItem = ({ 
  fishItem,
  selectedFish,
  availabilityDetails, 
  showAvailabilityDetails
  }) => {

  const fishName = fishItem[1]["name"]["name-EUen"].replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  //This code converts the first character of each word to a capital letter.

  return (
    <>
    <h1>{fishName}</h1>

    <li>Blathers: {fishItem[1]["museum-phrase"]}</li>
    <li>Price: {fishItem[1]["price"]}</li>

    <AvailabilityButton
    fishItem={fishItem}
    showAvailabilityDetails={showAvailabilityDetails}
    />

    {
    availabilityDetails ? 
    <FishAvailabilityDetails 
    selectedFish={selectedFish}
    /> : null }


    <img src={fishItem[1]["image_uri"]} alt="image"/>
    <img src ={fishItem[1]["icon_uri"]} alt="icon"/>

    <li></li>
    </>
  );
};

export default FishItem;

