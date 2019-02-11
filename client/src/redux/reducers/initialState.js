const initialState = {
	ui: {
		votingPage: {
			selectedRegionId: undefined,
			votedPlayers: [],
			playersData: [],
			isVotingEnded: false,
			isAdminMode: false,
			playersInRegion: []
		}
	},
	server: {}
};

export default initialState;