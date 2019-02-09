import * as playerApi from '../../api/playerApi/playerApi';
import * as types from '../constants/action-types';

export const loadPlayersDataSuccess = playersData => {
    return { type: types.LOAD_PLAYERS_DATA_SUCCESS, playersData };
};

export const togglePlayerVoteComplete = id => {
    return { type: types.TOGGLE_PLAYER_VOTE_COMPLETE, id };
};

export const endVotingComplete = () => {
    return { type: types.END_VOTING_COMPLETE };
};

export const toggleAdminModeComplete= (isAdmin) => {
    return { type: types.TOGGLE_ADMIN_MODE_COMPLETE, isAdmin };
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

export const endVoting = () => {
    return (dispatch) => {
        dispatch(endVotingComplete());
        return;
    };
};

export const selectRegion = (region) => {
    return (dispatch) => {
        dispatch(selectRegionComplete(region));
        return;
    };
};

export const toggleAdminMode = (isAdmin) => {
    return (dispatch) => {
        dispatch(toggleAdminModeComplete(isAdmin));
        return;
    };
};