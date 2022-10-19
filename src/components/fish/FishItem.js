import React from 'react';

const FishItem = ({fishItem}) => {


  return (
    <>
    <h1>Fish Item</h1>
    <li>{fishItem.anchovy.location}</li>
    </>
  );
};

export default FishItem;