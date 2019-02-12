import VotingPageState from "./VotingPageState";

class VotingPageStateBuilder {
    init(existingState) {
        this.state = new VotingPageState(existingState);
        return this;
    }

    withPlayersData(playersData) {
        this.state.setPlayersData(playersData);
        return this;
    }

    withSelectedRegion(selectedRegionId) {
        this.state.setSelectedRegionId(selectedRegionId);
        this.state.updatePlayersInRegion(selectedRegionId);
        // if voting in progress, clear voted players. if voting ended, dont clear
        if (!this.state.isVotingEnded) {
            this.state.clearVotedPlayers();
        }
        return this;
    }

    withIsVotingEnded(isVotingEnded) {
        this.state.setIsVotingEnded(isVotingEnded);
        return this;
    }

    withIsAdminMode(isAdminMode) {
        // switching between users (admin/regular) will clear voted players
        this.state.setIsAdminMode(isAdminMode);
        this.state.clearVotedPlayers();
        return this;
    }

    withToggledPlayerVote(playerId) {
        this.state.togglePlayerVote(playerId);
        return this;
    }

    // private methods
    __calculatePlayerVotePercent(targetPlayer, playersData) {
        const allPlayersInRegion = playersData.filter(playerData => playerData.teams === targetPlayer.teams);
        const totalLikes = allPlayersInRegion.reduce((accumulator, currentValue) => (accumulator + currentValue.likes), 0);
        return (targetPlayer.likes / totalLikes * 100).toFixed(2);
    }

    build() {
        this.state.playersData.forEach(player => {
            const playerVotePercent = this.__calculatePlayerVotePercent(player, this.state.playersData);
            player.setVotePercent(playerVotePercent);
        });

        return this.state;
    }
}

export default VotingPageStateBuilder;