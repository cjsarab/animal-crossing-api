import React from 'react';
import AvailabilityButton from '../ui/AvailabilityButton';
import FishAvailabilityDetails from './FishAvailabilityDetails';

import styled from 'styled-components';

const FishItem = ({ 
  fishItem,
  selectedFish,
  availabilityDetails, 
  showAvailabilityDetails
  }) => {

  const fishName = fishItem[1]["name"]["name-EUen"].replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  //This code converts the first character of each word to a capital letter.

  const Item = styled.div`
  cursor: pointer;
  background-color: transparent;
  height: 300px;
  perspective: 1000px;
  padding: 20px;
  `

  const ItemInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1.5s;
  transform-style:preserve-3d;
  `

  const ItemInner:hover = styled.div`
  transform:rotateY('angle')(180deg)
  `
  
  const ItemFront = styled.div`
  position:absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  `

  const ItemBack = styled.div` 
  background-color: red;
  color: white;
  padding: 20px;
  transform: rotateY(180deg);
  border: 2px solid black;
  border-radius: 10px;
  `



  return (
    <>
    <Item >
      <ItemInner>
        <ItemFront>
          <img src ={fishItem[1]["icon_uri"]} alt="icon"/>
        </ItemFront>
        <ItemBack>
          <h1>{fishName}</h1>
          <ul>
            <li>Price: {fishItem[1]["price"]}</li>
          </ul>
          <AvailabilityButton
            fishItem={fishItem}
            showAvailabilityDetails={showAvailabilityDetails}
            />
        </ItemBack>
      </ItemInner>
    </Item>


    {
      //This code checks that selected fish
      //is the only one to show it's availability details
    availabilityDetails && 
    fishItem[1]["file-name"] == 
    selectedFish[1]["file-name"] 
    ? 
    <FishAvailabilityDetails
    fishItem={fishItem} 
    selectedFish={selectedFish}
    /> : null }


    <img src={fishItem[1]["image_uri"]} alt="image"/>
    </>
  );
};

export default FishItem;

