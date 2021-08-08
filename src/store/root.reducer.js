import { combineReducers } from 'redux';
import chatsReducer from 'store/chats/chats.reducer';

const rootReducer = combineReducers({
	chats: chatsReducer
});

export default rootReducer;
