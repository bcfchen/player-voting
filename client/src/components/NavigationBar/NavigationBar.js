import React from 'react';

const NavigationBar = ({ onSwitchUser, isAdminMode, onEndVoting }) => {
    const switchUserDisplayText = isAdminMode ? 'admin user' : 'regular user';
    return (<div className="navbar">
        <div className="dropdown">
            <button class="dropbtn">{switchUserDisplayText}
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <a href="#" onClick={onSwitchUser}>Switch User</a>
                {isAdminMode && <a href="#" onClick={onEndVoting}>Toggle End Voting</a>}
            </div>
        </div>
    </div>);
};

export default NavigationBar;
