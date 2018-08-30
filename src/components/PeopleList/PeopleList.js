import React from 'react';
import Person from '../Person/Person';
class PeopleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: 'list'
		};
	}
	onClickChangeRoute = (i) => {
		this.setState({
			route: ''
		});
	};
	personComponent = this.props.people.map((person, i) => {
		const { person } = this.props;
		return (
			<Person
				onClickChangeRoute={() => this.onClickChangeRoute(i)}
				key={people[i].id}
				imageURL={people[i].imageURL}
				name={people[i].name}
				age={people[i].age}
			/>
		);
	});
	render() {
		return (
			<ul className="pl0 pa0 ma0 flex flex-column justify-start list">
				{this.state.route === 'list' ? (
					this.personComponent
				) : (
					<p>{this.state.route}</p>
				)}
			</ul>
		);
	}
}

export default PeopleList;
