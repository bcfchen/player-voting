class Player {
    constructor(properties) {
        this.teams = properties.teams;
        this.participantId = properties.participantId;
        this.avatarUrl = properties.avatarUrl;
        this.nickname = properties.nickname;
        this.message = properties.message;
        this.country = properties.country;
        this.likes = properties.likes;
        this.isVoted = false; // this is default value
        this.isTopThreeInRegion = false;
        this.votePercent = 0;
    }

    setVotePercent(votePercent) {
        this.votePercent = votePercent;
    }

    setIsVoted(isVoted) {
        this.isVoted = isVoted;
        this.isVoted ? this.likes++ : this.likes--;
    }
}

export default Player;
