import VotingPageState from "./VotingPageState";

class VotingPageStateBuilder {
    init(existingState) {
        this.state = new VotingPageState(existingState);
        return this;
    }

    withPlayersData(playersData) {
        this.state.setPlayersData(playersData);
    }

    withSelectedRegion(selectedRegion) {
        this.state.setSelectedRegion(selectedRegion);
        this.state.clearVotedPlayers();
    }

    withIsVotingEnded(isVotingEnded) {
        this.state.setIsVotingEnded(isVotingEnded);
    }

    withIsAdminMode(isAdminMode) {
        this.state.setIsAdminMode(isAdminMode);
    }

    withToggledPlayerVote(playerId) {
        this.state.togglePlayerVote(playerId);
    }

    // private methods
    __calculatePlayerVotePercent(targetPlayer, playersData) {
        const allPlayersInRegion = playersData.filter(playerData => playerData.teams === targetPlayer.teams);
        const totalLikes = allPlayersInRegion.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.likes;
        }, 0);
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