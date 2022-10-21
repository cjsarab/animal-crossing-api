import React from 'react';

const FishItem = ({fishItem}) => {


  return (
    <>
    <h1>{fishItem[1]["name"]["name-EUen"]}</h1>
    <li>{fishItem[1]["file-name"]}</li>
    <li>{fishItem[1]["museum-phrase"]}</li>

    <img src={fishItem[1]["image_uri"]} alt="image"/>
    <img src ={fishItem[1]["icon_uri"]} alt="icon"/>

    <li></li>
    </>
  );
};

export default FishItem;