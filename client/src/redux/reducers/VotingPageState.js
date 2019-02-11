
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

    clearVotedPlayers() {
        this.votedPlayers = [];
        this.playersData.forEach(player => {
            if (player.isVoted) {
                player.setIsVoted(false);
            }
        });
    }

    togglePlayerVote(toggledPlayerId) {
        const existingVotedPlayers = [...this.votedPlayers];
        const toggledPlayer = this.playersData.find(player => player.participantId === toggledPlayerId);

        if (existingVotedPlayers.includes(toggledPlayerId)) {
            this.votedPlayers = existingVotedPlayers
                .filter(votedPlayerId => votedPlayerId !== toggledPlayerId);
            toggledPlayer.setIsVoted(false);
        } else {
            this.votedPlayers = [...existingVotedPlayers, toggledPlayerId];
            toggledPlayer.setIsVoted(true);
        }
    }
}

export default VotingPageState;
