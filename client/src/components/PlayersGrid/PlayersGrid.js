import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
const MAX_PLAYER_VOTES = 3;

const PlayersGrid = ({ players, votedPlayers, onTogglePlayerVote, isVotingEnded }) => {
    const listItems = players.map(player => {
        const allowMoreVotes = votedPlayers.length < MAX_PLAYER_VOTES;
        if (!player.participantId) {
            return <div className='placeholder-card'></div>
        }

        return <div key={player.participantId}>
            <PlayerCard player={player}
                onPlayerClicked={onTogglePlayerVote}
                allowMoreVotes={allowMoreVotes}
                isVotingEnded={isVotingEnded} />
        </div>;
    });

    return (
        <div className='players-grid-wrapper'>
            <div className='players-grid'>{listItems}</div>
        </div>
    );
};

export default PlayersGrid;
