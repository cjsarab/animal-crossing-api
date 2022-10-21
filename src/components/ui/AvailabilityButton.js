import React from 'react';

const AvailabilityButton = ({ fishItem, showAvailabilityDetails }) => {

const handleClick = function(){
    showAvailabilityDetails(fishItem);
};

  return (
    <button onClick={handleClick}>Availability</button>
  );
};

export default AvailabilityButton;