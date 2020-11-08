import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../api/utils/validators';
import { Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field	placeholder={"Login"} validate={[required]} name={"login"} component={Input} />
			</div>
			<div>
				<Field placeholder={"Password"} validate={[required]} name={"password"} component={Input} />
			</div>
			<div>
				<Field name={"rememberMe"} validate={[required]} component={Input} type={"checkbox"} /> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData)
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

export default Login;