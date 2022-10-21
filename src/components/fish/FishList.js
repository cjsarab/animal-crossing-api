import React from 'react';
import FishItem from './FishItem';

import styled from 'styled-components';

const FishList = ({ 
  fish,
  selectedFish,
  availabilityDetails, 
  showDetails
  }) => {

  const fishToMap = Object.entries(fish);

  const fishItems = fishToMap.map((fishItem, index) => {
    return <FishItem
    fishItem={fishItem} 
    key={index}
    
    selectedFish={selectedFish}
    availabilityDetails={availabilityDetails} 
    showDetails={showDetails} 
    />
  });

  const FishItemsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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