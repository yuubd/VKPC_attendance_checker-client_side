import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import PeopleList from '../../components/PeopleList/PeopleList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Scroll from '../../components/Scroll/Scroll';
import SignIn from '../SignIn/SignIn';
import './App.css';
import { setSearchField, requestPeople, changeRoute } from '../../actions';

// this can replace searchField in the state
const mapStateToProps = (state) => {
	return {
		searchField: state.searchPerson.searchField,
		people: state.requestPeople.people,
		pending: state.requestPeople.isPending,
		error: state.requestPeople.error,
		route: state.changeRoute.route
	};
};

// dispatch is what triggers the actions
// this can replace onSearchChane(event)
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestPeople: () => dispatch(requestPeople()),
		onRouteChange: (routeTo) => dispatch(changeRoute(routeTo))
	};
};

class App extends Component {
	componentDidMount() {
		this.props.onRequestPeople();
	}

	render() {
		const {
			searchField,
			onSearchChange,
			onRouteChange,
			people,
			isPending,
			route
		} = this.props;

		const filteredPeople = people.filter((people) => {
			return people.name.toLowerCase().includes(searchField.toLowerCase());
		});
		const navigation = (
			<Navigation onRouteChange={onRouteChange} displayMenu={route} />
		);
		const signIn = <SignIn onRouteChange={onRouteChange} />;

		const peopleList = (
			<div className="pa0 ma0 width-middle">
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<PeopleList people={filteredPeople} />
				</Scroll>
			</div>
		);

		return (
			<div>
				{navigation}
				{navigation}
				{route === 'home' ? signIn : peopleList}
			</div>
		);
	}
}

/**
 * connect() is a higher order function: return another function
 * app knows there is redux store and interested in changes
 * what state should listen to = mapStateToProps, 
 * what action should listen to = mapDispatchToProps
 * the returned objects are passed to App
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
