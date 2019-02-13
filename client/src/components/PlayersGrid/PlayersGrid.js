import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const PlayersGrid = ({ players, votesRemaining, onTogglePlayerVote, isVotingEnded }) => {

    const listItems = players.map(player => {
        if (!player.participantId) {
            return <div key='' className='placeholder-card'></div>
        }

        return <div key={player.participantId}>
            <PlayerCard player={player}
                onPlayerClicked={onTogglePlayerVote}
                allowVote={votesRemaining > 0}
                isVotingEnded={isVotingEnded} />
        </div>;
    });

    // this is to add some placeholder cards to deal with flexbox limitation
    for (let ii = 0; ii < 8; ii++) {
        listItems.push(<div key={`placeholder-${ii}`} className='placeholder-card'></div>);
    }

    return (
        <div className='players-grid-wrapper'>
            <div className='players-grid'>{listItems}</div>
        </div>
    );
};

export default PlayersGrid;
