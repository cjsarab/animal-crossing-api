import React from 'react';

const FishDetails = ({ selectedFish, fishItem }) => { 

    const availability = selectedFish[1]["availability"]

    
  return (
    <>
        <div>Location: {availability["location"]}</div>
        <div>Rarity: {availability["rarity"]}</div>

        { //Checks if fish available all day
        availability["isAllDay"] ?
        <div>Available all day!</div>
        :
        <div>Time of Day: {availability["time"]}</div>
        }

        { //Checks if fish available all year
        availability["isAllYear"] ?
        <div>Available all year!</div>
        :
        <div>
        <div>Northern Hemisphere Months: {availability["month-northern"]}</div>
        <div>Southern Hemisphere Months: {availability["month-southern"]}</div>
        </div>
        }
    </>
  );
};

export default FishDetails;