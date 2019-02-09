import React from 'react';

const RegionButton = ({onButtonClick, buttonText}) => {
   return (<div className='region-button' onClick={onButtonClick}>
        <span>{buttonText}</span>
    </div>);
};

export default RegionButton;