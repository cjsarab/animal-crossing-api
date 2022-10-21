import React from 'react';
import FishItem from './FishItem';

const FishList = ({ fish, showAvailabilityDetails }) => {

  const fishToMap = Object.entries(fish);

  const fishItems = fishToMap.map((fishItem, index) => {
    return <FishItem fishItem={fishItem} key={index} showAvailabilityDetails={showAvailabilityDetails}/>
  });

  return (
    <>
    <ul>
        {fishItems}
    </ul>
    </>
  );
};

export default FishList;