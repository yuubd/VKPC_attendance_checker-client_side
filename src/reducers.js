import {
	CHANGE_SEARCH_FIELD,
	REQUEST_PEOPLE_PENDING,
	REQUEST_PEOPLE_SUCCESS,
	REQUEST_PEOPLE_FAILED,
	CHANGE_ROUTE,
	POST_SIGNINFO_NAME,
	POST_SIGNINFO_PASSWORD,
	POST_SIGNINFO_EMAIL
} from './constants.js';

const initialStateSearch = {
	searchField: ''
};
/** searchRobots should be a true function
* return an output does not modify anything some input, same output
* setting default parameter prevent errors when empty parameters passed
*/
export const searchPerson = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			// merge state and then action.payload to an empty obj
			return Object.assign({}, state, { searchField: action.payload });
		default:
			return state;
	}
};

const initialStatePeople = {
	isPending: false,
	people: [],
	error: ''
};

export const requestPeople = (state = initialStatePeople, action = {}) => {
	switch (action.type) {
		case REQUEST_PEOPLE_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_PEOPLE_SUCCESS:
			return Object.assign({}, state, {
				people: action.payload,
				isPending: false
			});
		case REQUEST_PEOPLE_FAILED:
			return Object.assign({}, state, {
				error: action.payload,
				isPending: false
			});
		default:
			return state;
	}
};

const initialRoute = {
	route: ''
};
export const changeRoute = (state = initialRoute, action = {}) => {
	switch (action.type) {
		case CHANGE_ROUTE:
			return Object.assign({}, state, { route: action.payload });
		default:
			return state;
	}
};

const initialSignInfo = {
	email: '',
	password: '',
	name: ''
};
export const postSignInfo = (state = initialSignInfo, action = {}) => {
	switch (action.type) {
		case POST_SIGNINFO_EMAIL:
			return Object.assign({}, state, {
				email: action.payload
			});
		case POST_SIGNINFO_PASSWORD:
			return Object.assign({}, state, {
				password: action.payload
			});
		case POST_SIGNINFO_NAME:
			return Object.assign({}, state, {
				name: action.payload
			});
		default:
			return state;
	}
};
