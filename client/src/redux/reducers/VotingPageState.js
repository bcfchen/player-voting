
class VotingPageState {
    constructor(properties) {
        this.selectedRegionId = properties.selectedRegionId;
        this.votedPlayers = properties.votedPlayers;
        this.playersData = properties.playersData;
        this.isVotingEnded = properties.isVotingEnded;
        this.isAdminMode = properties.isAdminMode;
        this.playersInRegion = properties.playersInRegion;
    }

    setPlayersData(playersData) {
        this.playersData = playersData;
    }

    setIsVotingEnded(isVotingEnded) {
        this.isVotingEnded = isVotingEnded;
    }

    updatePlayersInRegion(selectedRegionId) {
        this.playersInRegion = this.playersData.filter(player => player.teams === selectedRegionId);
    }

    setSelectedRegionId(selectedRegionId) {
        this.selectedRegionId = selectedRegionId;
    }

    setIsAdminMode(isAdminMode) {
        this.isAdminMode = isAdminMode;
    }

    clearVotedPlayers() {
        this.votedPlayers = [];
        // reset players' vote count if player was previously voted by user
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
