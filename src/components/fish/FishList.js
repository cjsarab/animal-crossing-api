import React from 'react';
import FishItem from './FishItem';

const FishList = ({ fish }) => {

  const fishToMap = Object.entries(fish);

  const fishItems = fishToMap.map((fishItem, index) => {
    return <FishItem fishItem={fishItem} key={index} />
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