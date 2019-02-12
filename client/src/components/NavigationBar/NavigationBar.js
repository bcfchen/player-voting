import React from 'react';

const NavigationBar = ({ onSwitchUser, isAdminMode, onEndVoting }) => {
    const switchUserDisplayText = isAdminMode ? 'admin user' : 'regular user';
    return (<div className="navbar">
        <div className="dropdown">
            <button>{switchUserDisplayText}</button>
            <div className="dropdown-content">
                <a href="#" onClick={onSwitchUser}><span>Switch User</span></a>
                {isAdminMode && <a href="#" onClick={onEndVoting}><span>Toggle End Voting</span></a>}
            </div>
        </div>
    </div>);
};

export default NavigationBar;
