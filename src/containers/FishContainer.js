import React from 'react'
import FishList from '../components/fish/FishList';

const FishContainer = ({fish}) => {
  return (
    <>
    <FishList fish={fish}/>
    </>
  );
};

export default FishContainer;