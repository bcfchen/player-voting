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
    __calculateIsPlayerTopThree(targetPlayer, playersData) {
        const playersWithMoreVotes = playersData
            .filter(playerData => playerData.team === targetPlayer.team && playerData.likes > targetPlayer.likes);
        return playersWithMoreVotes < 3;
    }

    build() {
        this.state.playersData.forEach(player => {
            const isTopThreeInRegion = this.__calculateIsPlayerTopThree(player, this.state.playersData);
            player.setIsTopThreeInRegion(isTopThreeInRegion);
        });

        return this.state;
    }
}

export default VotingPageStateBuilder;