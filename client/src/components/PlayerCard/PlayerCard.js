import React from 'react';
const PlayerCard = ({ player, isVoted, allowMoreVotes, onPlayerClicked, isVotingEnded }) => {
    const itemClass = isVoted ? "blurry" : "";
    const shoulDisableClick = isVotingEnded || (!allowMoreVotes && !isVoted);
    const clickHandler = shoulDisableClick ? undefined
        : () => onPlayerClicked(player.participantId);

    return (<div className='player-card-container'>
        {!isVotingEnded && <div className='voting-percent-indicator'>
            <span>{player.votePercent}%</span>
        </div>}
        <img className={itemClass} src={player.avatarUrl} onClick={clickHandler} />
        <div className='player-name'><span>{player.nickname}</span></div>
        <div className='player-message'>{player.message}</div>
    </div>);
};

export default PlayerCard;
