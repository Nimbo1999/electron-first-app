import AUTH_TYPES from 'store/auth/auth.types';

const INITIAL_STATE = {
	user: null,
	error: null
}

const authReducer = (state = INITIAL_STATE, action) => {
	if (!action.type) return state;

	switch (action.type) {
		case AUTH_TYPES.SET_USER_DATA: {
			return {
				...state,
				user: action.payload
			};
		}

		case AUTH_TYPES.SIGN_IN_FAILURE: {
			return {
				...state,
				user: null
			};
		}

		case AUTH_TYPES.SIGN_OUT_SUCCESS: {
			return {
				...state,
				user: null
			};
		}

		case AUTH_TYPES.SIGN_OUT_FAILURE: {
			return {
				...state,
				user: null
			};
		}

		case AUTH_TYPES.REGISTER_USER_EMAIL_AND_PASSWORD_STARTED: {
			return state;
		}

		case AUTH_TYPES.REGISTER_USER_EMAIL_AND_PASSWORD_SUCCESS: {
			return state;
		}

		case AUTH_TYPES.REGISTER_USER_EMAIL_AND_PASSWORD_FAILURE: {
			return {
				...state,
				error: action.payload
			};
		}

		default: {
			return state;
		}
	}
}

export default authReducer;
