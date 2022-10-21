import React from 'react';
import FishItem from './FishItem';

import styled from 'styled-components';

const FishList = ({ 
  fish,
  selectedFish,
  availabilityDetails, 
  showAvailabilityDetails
  }) => {

  const fishToMap = Object.entries(fish);

  const fishItems = fishToMap.map((fishItem, index) => {
    return <FishItem
    fishItem={fishItem} 
    key={index}
    
    selectedFish={selectedFish}
    availabilityDetails={availabilityDetails} 
    showAvailabilityDetails={showAvailabilityDetails} 
    />
  });

  const FishItemsList = styled.ul`
  background-color: transparent;
  list-style: none;
  `

  return (
    <>
    <FishItemsList>
        {fishItems}
    </FishItemsList>
    </>
  );
};

export default FishList;