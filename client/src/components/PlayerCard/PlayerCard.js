import React from 'react';
const PlayerCard = ({ player, allowMoreVotes, onPlayerClicked, isVotingEnded }) => {
    const playerImageClass = player.isVoted ? 'player-image-highlight' : 'player-image';
    const votingPercentIndicatorClass = player.isVoted ? 'voting-percent-indicator-highlight' : 'voting-percent-indicator';
    const shoulDisableClick = isVotingEnded || (!allowMoreVotes && !player.isVoted);
    const clickHandler = shoulDisableClick ? undefined
        : () => onPlayerClicked(player.participantId);

    return (<div className='player-card-container'>
        {isVotingEnded && <div className={votingPercentIndicatorClass}>
            <span>{player.votePercent}%</span>
        </div>}
        <img className={playerImageClass} src={player.avatarUrl} onClick={clickHandler} />
        {player.isVoted && <div className='your-selection-label'>
            <span>Your selection</span>
        </div>}
        <div className='player-name'><span>{player.nickname}</span></div>
        <div className='player-message'>{player.message}</div>
    </div>);
};

export default PlayerCard;
