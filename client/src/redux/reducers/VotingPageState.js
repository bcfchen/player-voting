
class VotingPageState {
    constructor(properties) {
        this.selectedRegion = properties.selectedRegion;
        this.votedPlayers = properties.votedPlayers;
        this.playersData = properties.playersData;
        this.isVotingEnded = properties.isVotingEnded;
        this.isAdminMode = properties.isAdminMode;
    }

    setPlayersData(playersData) {
        this.playersData = playersData;
    }

    setIsVotingEnded(isVotingEnded) {
        this.isVotingEnded = isVotingEnded;
    }

    setSelectedRegion(selectedRegion) {
        this.selectedRegion = selectedRegion;
    }

    setIsAdminMode(isAdminMode) {
        this.isAdminMode = isAdminMode;
    }

    togglePlayerVote(toggledPlayerId) {
        const existingVotedPlayers = [...this.votedPlayers];
        if (existingVotedPlayers.includes(toggledPlayerId)) {
            this.votedPlayers = existingVotedPlayers
                .filter(votedPlayerId => votedPlayerId !== toggledPlayerId);
        } else {
            this.votedPlayers = [...existingVotedPlayers, toggledPlayerId];
        }

        this.playersData.forEach(player => {
            const isPlayerVoted = this.votedPlayers.includes(player.participantId);
            if (isPlayerVoted) {
                player.setIsVoted(true);
            } else {
                player.setIsVoted(false);
            }
        });
    }
}

export default VotingPageState;
