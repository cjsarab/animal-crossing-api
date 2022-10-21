import React from 'react';
import DetailsButton from '../ui/DetailsButton';
import FishDetails from './FishDetails';

import styled from 'styled-components';

const FishItem = ({ 
  fishItem,
  selectedFish,
  availabilityDetails, 
  showDetails
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

  const ItemTitle = styled.h2`
  text-align: center;
  font-size: 1.5em;
  border-bottom: 2px solid black;
  padding: 0.5em;
  margin: 0.2em;
  `

  const ItemInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1.5s;
  transform-style:preserve-3d;
  &:hover {
    transform:rotateY(180deg);
    background-color: transparent;
  }
  `

  const ItemFront = styled.div`
  position:absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2px solid black;
  background-color: dodgerblue;
  `

  const ItemBack = styled.div`
  position:absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; 
  background-color: dodgerblue;
  color: black;
  transform: rotateY(180deg);
  border: 2px solid black;
  border-radius: 10px;
  `
  const ItemPrice = styled.div`
  text-align: center;
  font-size: 1em;
  padding: 0.5em;
  border-bottom: 2px solid black;
  `

  const ItemBackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 36px;
  `

  return (
    <>
    <Item >
      <ItemInner>
        <ItemFront>
          <img className="fish-icon" src ={fishItem[1]["icon_uri"]} alt="icon"/>
        </ItemFront>
        <ItemBack className="item-back">
          <ItemTitle>{fishName}</ItemTitle>
            <ItemPrice><strong>Nook Sell Price: {fishItem[1]["price"]} bells</strong></ItemPrice>
            <ItemPrice><strong>CJ Sell Price: {fishItem[1]["price-cj"]} bells</strong></ItemPrice>
           <ItemBackButton classname="item-back-button">
          <DetailsButton className="details-button"
            fishItem={fishItem}
            showDetails={showDetails}
            />
            {
            //This code checks that selected fish
            //is the only one to show it's availability details
            availabilityDetails 
            && 
            fishItem[1]["file-name"] == selectedFish[1]["file-name"] 
            ? 
            <FishDetails
            fishItem={fishItem} 
            selectedFish={selectedFish}
            />
            :
            null 
            }
            </ItemBackButton> 
        </ItemBack>
      </ItemInner>
    </Item>


    {/* <img src={fishItem[1]["image_uri"]} alt="image"/> */}
    </>
  );
};

export default FishItem;

