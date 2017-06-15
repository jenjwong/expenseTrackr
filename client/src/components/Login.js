import React, { PureComponent } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import FormField from './Form/FormField';
import submit from './Form/loginHelpers';

class LoginFunc extends PureComponent {
  componentDidMount(){
    this.props.login({email: "q@q.com", password: "q"})
    // this.props.login({email: "test@test.com", password: "test"})
  }


  render() {
    let { handleSubmit, login, changeDay } = this.props;
    return (
      <form onSubmit={handleSubmit((fields) => submit(fields, login))}>
        <Field name="email" label='Email' component={FormField} type="email"/>
        <Field name="password" label='Password' component={FormField} type="password"/>
        <button className="pt-button pt-intent-primary submit-button" type="submit">Submit</button>
      </form>
    )
  }
}

const Login = reduxForm({
  form: 'log'
})(LoginFunc);

export default Login;
