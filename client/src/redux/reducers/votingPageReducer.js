import * as types from "../constants/action-types";
import initialState from './initialState';

export default function votingPageReducer(state = initialState.ui.votingPage, action) {
    let newState;
    switch (action.type) {
        case types.LOAD_PLAYERS_DATA_SUCCESS:
            newState = { ...state };
            newState.playersData = action.playersData;
            break;
        case types.TOGGLE_PLAYER_VOTE_COMPLETE:
            newState = { ...state };
            if (state.votedPlayers.includes(action.id)){
                // if player already voted, unvote the player
                newState.votedPlayers = state.votedPlayers
                .filter(votedPlayerId => votedPlayerId !== action.id);
            } else {
                newState.votedPlayers = [...state.votedPlayers, action.id];
            }
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