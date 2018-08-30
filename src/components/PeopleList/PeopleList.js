import React from 'react';
import Person from '../Person/Person';
class PeopleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: 'list'
		};
	}

	personComponent = this.props.people.map((person, i) => {
		const { people } = this.props;
		return (
			<Person
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
				{this.personComponent}
			</ul>
		);
	}
}

export default PeopleList;
