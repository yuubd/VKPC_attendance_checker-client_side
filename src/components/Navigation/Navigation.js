import React from 'react';

const Navigation = ({ name }) => {
	const ulStyle = 'bg-washed-blue pa1 ma0 list flex flex-row justify-between';
	const pStyle = 'f7 link dim black underline pa1 pointer fw5 mt0 dark-green';
	return (
		<ul className={ulStyle}>
			<li>
				<p className={pStyle}>welcome +{name}+!</p>
			</li>
		</ul>
	);
};

export default Navigation;
