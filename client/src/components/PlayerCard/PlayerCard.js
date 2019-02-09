import React from 'react';
const PlayerCard = ({player, isVoted, allowMoreVotes, onPlayerClicked, isVotingEnded}) => {
    const itemClass = isVoted ? "blurry" : "";
    const shoulDisableClick = isVotingEnded || (!allowMoreVotes && !isVoted);
    const clickHandler = shoulDisableClick? undefined 
    : () => onPlayerClicked(player.participantId);

    return (<div className='player-card-container'>
        {!isVotingEnded && <div className='voting-percent-indicator'>
            <span>5.48%</span>
        </div>}
        <img className={itemClass} src={player.avatarUrl} onClick={clickHandler} />
        <span>{player.nickname}</span>
        <p>{player.message}</p>
    </div>);
};

export default PlayerCard;
