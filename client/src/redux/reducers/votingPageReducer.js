import * as types from "../constants/action-types";
import initialState from './initialState';

export default function votingPageReducer(state = initialState.ui.votingPage, action) {
    let newState;
    switch (action.type) {
        case types.LOAD_PLAYERS_DATA_SUCCESS:
            newState = { ...state };
            newState.playersData = action.playersData;
            break;
        case types.VOTE_FOR_PLAYER_COMPLETE:
            newState = { ...state };
            newState.votedPlayers.push(action.id);
            break;
        case types.END_VOTING_COMPLETE:
            newState = { ...state };
            newState.isVotingEnded = true;
            break;
        case types.SELECT_REGION_COMPLETE:
            newState = { ...state };
            newState.selectedRegion = action.region;
            break;
        case types.TOGGLE_ADMIN_MODE_COMPLETE:
            newState = { ...state };
            newState.isAdminMode = action.isAdminMode;
            break;
        default:
            break;
    }
    return newState || state;
}