import React from 'react';

const ButtonsPanel = ({buttonTexts, selectedButton, onButtonClick}) => {
    const buttons = buttonTexts
    .map(buttonText => <button onClick={() => onButtonClick(buttonText)}>{buttonText}</button>);
    return (<div className='buttons-panel'>
        
    </div>);
};

export default ButtonsPanel;
