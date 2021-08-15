import { combineReducers } from 'redux';

import chatsReducer from 'store/chats/chats.reducer';
import authReducer from 'store/auth/auth.reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	chats: chatsReducer,
});

export default rootReducer;
