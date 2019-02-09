class Player {
    constructor(properties) {
        this.teams = properties.teams;
        this.participantId = properties.participantId;
        this.avatarUrl = properties.avatarUrl;
        this.nickname = properties.nickname;
        this.message = properties.message;
        this.country = properties.country;
        this.likes = properties.likes;
    }
}

export default Player;
