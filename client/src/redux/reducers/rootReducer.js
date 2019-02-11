import { combineReducers } from 'redux';
import votingPageReducer from './votingPageReducer';

const rootReducer = combineReducers({
	votingPage: votingPageReducer
});

export default rootReducer;