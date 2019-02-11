import React from 'react';

const ToggleAdminButton = ({ onButtonClick, buttonText }) => {
    return (<div className='toggle-admin-button' onClick={onButtonClick}>
        <span>{buttonText}</span>
    </div>);
};

export default ToggleAdminButton;