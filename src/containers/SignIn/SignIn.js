import React from 'react';
import { connect } from 'react-redux';
import { postPassword, postEmail } from '../../actions';

const mapStateToProps = (state) => {
	return {
		signInEmail: state.postSignInfo.email,
		signInPassword: state.postSignInfo.password
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onEmailChange: (event) => dispatch(postEmail(event.target.value)),
		onPasswordChange: (event) => dispatch(postPassword(event.target.value))
	};
};

class SignIn extends React.Component {
	onSubmitSignIn = () => {
		const { signInEmail, signInPassword } = this.props;
		fetch('http://localhost:3001/signin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: signInEmail,
				password: signInPassword
			})
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// the data is user
				if (data.id) {
					this.props.onRouteChange('home');
				}
			})
			.catch((err) => console.log('no user exists'));
	};

	render() {
		const { onRouteChange, onPasswordChange, onEmailChange } = this.props;
		return (
			<main className="pa4 black-80">
				<form className="measure center">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f4 fw6 ph0 mh0">Sign In</legend>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="email-address">
								Email
							</label>
							<input
								className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
								type="email"
								name="email-address"
								id="email-address"
								onChange={onEmailChange}
							/>
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6" htmlFor="password">
								Password
							</label>
							<input
								className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
								type="password"
								name="password"
								id="password"
								onChange={onPasswordChange}
							/>
						</div>
						<label className="pa0 ma0 lh-copy f6 pointer">
							<input type="checkbox" /> Remember me
						</label>
					</fieldset>
					<div className="">
						<input
							onClick={this.onSubmitSignIn}
							className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
							type="submit"
							value="Sign in"
						/>
					</div>
					<div className="lh-copy mt3">
						<a
							onClick={() => onRouteChange('signUp')}
							href="#0"
							className="f6 link dim black db"
						>
							Sign up
						</a>
						<a href="#0" className="f6 link dim black db">
							Forgot your password?
						</a>
					</div>
				</form>
			</main>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
