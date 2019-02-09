const initialState = {
	ui: {
		votingPage: {
			selectedRegion: undefined,
			votedPlayers: [],
			playersData: [],
			isVotingEnded: false,
			isAdminMode: false,
		},
		ajaxCallsInProgress: 0
	},
	server: {}
};

export default initialState;