import React from 'react';
import './Person.css';

const Person = (props) => {
	const fontStyle = 'fw1 pa0 pl2 ma0 gray';

	return (
		<article
			onClick={props.onClickChangeRoute}
			className="mw9 center bg-white br3 pa1 pa4-ns mv1 ba b--black-10"
		>
			<div className="flex max-w">
				<div className="width-prop">
					<img
						className="pa0 ma0 bn br"
						src={require(`${props.imageURL}`)}
						alt={props.imageURL}
					/>
				</div>
				<ul className="text flex list flex-column ma0 pa0">
					<p className="pa0 ma0 pl2 fw-b name-font-sty">{props.name}</p>
					<p className={fontStyle}>{props.age}</p>
				</ul>
				<br />y
			</div>
		</article>
	);
};

export default Person;
