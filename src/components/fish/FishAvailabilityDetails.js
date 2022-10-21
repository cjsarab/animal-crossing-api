import React from 'react';

const FishAvailabilityDetails = ({ selectedFish, fishItem }) => {
    
  return (
    <div>{selectedFish[1]["availability"]["location"]}</div>
  );
};

export default FishAvailabilityDetails;