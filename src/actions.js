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
import { people } from './components/Person/people';
// this is filetering placelist action
// payload is whatever data needed to go on to the reducer
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

export const requestPeople = () => (dispatch) => {
	// dispatch({ type: REQUEST_PEOPLE_PENDING });
	// fetch('./components/Restaurant/peoeple.json')
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		dispatch({ type: REQUEST_PEOPLE_SUCCESS, payload: data });
	// 	})
	// 	.catch((error) => dispatch({ type: REQUEST_PEOPLE_FAILED, payload: error }));

	dispatch({ type: REQUEST_PEOPLE_PENDING });
	dispatch({ type: REQUEST_PEOPLE_SUCCESS, payload: people });
};

export const changeRoute = (routeTo) => ({
	type: CHANGE_ROUTE,
	payload: routeTo
});

export const postEmail = (email) => ({
	type: POST_SIGNINFO_EMAIL,
	payload: email
});

export const postPassword = (password) => ({
	type: POST_SIGNINFO_PASSWORD,
	payload: password
});

export const postName = (name) => ({
	type: POST_SIGNINFO_NAME,
	payload: name
});
