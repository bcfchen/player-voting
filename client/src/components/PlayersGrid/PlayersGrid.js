import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
const MAX_PLAYER_VOTES = 3;

const PlayersGrid = ({players, votedPlayers, onTogglePlayerVote, isVotingEnded}) => {
    const listItems = players.map(player => {
        const isPlayerVoted = votedPlayers.includes(player.participantId);
        const allowMoreVotes = votedPlayers.length < MAX_PLAYER_VOTES;
         return <div key={player.participantId}>
            <PlayerCard player={player} 
                isVoted={isPlayerVoted}
            onPlayerClicked={onTogglePlayerVote} allowMoreVotes={allowMoreVotes} isVotingEnded={isVotingEnded}/>
        </div>;
    });

    return (
        <div>
            <div className="thumbnail-list">{listItems}</div>
        </div>
    );
};

export default PlayersGrid;
