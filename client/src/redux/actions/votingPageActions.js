import * as playerApi from '../../api/playerApi/playerApi';
import * as types from '../constants/action-types';

export const loadPlayersDataSuccess = playersData => {
    return { type: types.LOAD_PLAYERS_DATA_SUCCESS, playersData };
};

export const togglePlayerVoteComplete = id => {
    return { type: types.TOGGLE_PLAYER_VOTE_COMPLETE, id };
};

export const endVotingComplete = (isVotingEnded) => {
    return { type: types.END_VOTING_COMPLETE, isVotingEnded };
};

export const toggleAdminModeComplete = (isAdminMode) => {
    return { type: types.TOGGLE_ADMIN_MODE_COMPLETE, isAdminMode };
};

export const selectRegionComplete = (region) => {
    return { type: types.SELECT_REGION_COMPLETE, region };
}

export const loadPlayersData = () => {
    return async (dispatch) => {
        const playersData = await playerApi.getPlayersData();
        dispatch(loadPlayersDataSuccess(playersData));
        return;
    };
};

export const togglePlayerVote = (id) => {
    return (dispatch) => {
        dispatch(togglePlayerVoteComplete(id));
        return;
    };
};

export const endVoting = (isVotingEnded) => {
    return (dispatch) => {
        dispatch(endVotingComplete(isVotingEnded));
        return;
    };
};

export const selectRegion = (region) => {
    return (dispatch) => {
        dispatch(selectRegionComplete(region));
        return;
    };
};

export const toggleAdminMode = (isAdminMode) => {
    return (dispatch) => {
        dispatch(toggleAdminModeComplete(isAdminMode));
        return;
    };
};