import React from 'react';
const PlayerCard = ({player, isVoted, allowMoreVotes, onPlayerClicked, isVotingEnded}) => {
    const itemClass = isVoted ? "blurry" : "";
    const shoulDisableClick = isVotingEnded || (!allowMoreVotes && !isVoted);
    const clickHandler = shoulDisableClick? undefined 
    : () => onPlayerClicked(player.participantId);

    return (<div className='player-card-container'>
    <img className={itemClass} src={player.avatarUrl} onClick={clickHandler} />
    </div>);
};

export default PlayerCard;
