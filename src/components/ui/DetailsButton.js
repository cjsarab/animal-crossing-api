import React from 'react';
import styled from 'styled-components';

const DetailsButton = ({ fishItem, showDetails }) => {

const handleClick = function(){
    showDetails(fishItem);
};

const Button = styled.button`
text-align: center;
display: flex;
padding: 2em;
color: white;
background-color: turquoise;
border-radius: 8px;
box-shadow: 5px black;
&:hover {
    background-color: teal;
}
`

  return (
    <Button onClick={handleClick}>More Details</Button>
  );
};

export default DetailsButton;