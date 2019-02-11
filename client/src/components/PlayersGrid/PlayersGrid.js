import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const PlayersGrid = ({ players, votesRemaining, onTogglePlayerVote, isVotingEnded }) => {
    const listItems = players.map(player => {
        if (!player.participantId) {
            return <div className='placeholder-card'></div>
        }

        return <div key={player.participantId}>
            <PlayerCard player={player}
                onPlayerClicked={onTogglePlayerVote}
                allowVote={votesRemaining > 0}
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
