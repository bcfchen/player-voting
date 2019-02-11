import * as types from "../constants/action-types";
import initialState from './initialState';
import VotingPageStateBuilder from './VotingPageStateBuilder';

export default function votingPageReducer(state = initialState.ui.votingPage, action) {
    let newState, builder = new VotingPageStateBuilder().init({ ...state });
    switch (action.type) {
        case types.LOAD_PLAYERS_DATA_SUCCESS:
            builder.withPlayersData(action.playersData);
            break;
        case types.TOGGLE_PLAYER_VOTE_COMPLETE:
            builder.withToggledPlayerVote(action.id);
            break;
        case types.END_VOTING_COMPLETE:
            builder.withIsVotingEnded(action.isVotingEnded);
            break;
        case types.SELECT_REGION_COMPLETE:
            builder.withSelectedRegion(action.region);
            break;
        case types.TOGGLE_ADMIN_MODE_COMPLETE:
            builder.withIsAdminMode(action.isAdminMode);
            break;
        default:
            break;
    }

    newState = builder.build();
    return newState || state;
}