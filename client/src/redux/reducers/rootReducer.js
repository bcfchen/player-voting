import { combineReducers } from 'redux';
import votingPageReducer from './votingPageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	votingPage: votingPageReducer,
	ajaxCallsInProgress
});

export default rootReducer;