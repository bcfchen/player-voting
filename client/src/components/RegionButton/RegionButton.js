import React from 'react';

const RegionButton = ({isSelected, onButtonClick, buttonText}) => {
    const className = isSelected ? 'region-button-selected' : 'region-button';
   return (<div className={className} onClick={onButtonClick}>
        <span>{buttonText}</span>
    </div>);
};

export default RegionButton;