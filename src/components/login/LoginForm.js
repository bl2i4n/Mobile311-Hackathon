import React from 'react';
import { gql, graphql} from 'react-apollo'


class LoginForm extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        email: '',
        password: '',
      }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value});
  }

   async onSubmit(event){
    event.preventDefault(event);
    const {email, password} = this.state;
    await this.props.signinUser({variables: { email, password} })
    window.location.pathname = '/main'
  }

  render (){
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Welcome Back!</h1>


        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value ={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value ={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        </div>


        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Log In
          </button>
        </div>

      </form>

    );
  }

}

const addMutation = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(
      email: {
        email: $email,
        password: $password
      })
      {
        token
      }
  }
`


const LogInConnectedToGQ = graphql(addMutation, {name: 'signinUser'})(LoginForm)


export default LogInConnectedToGQ;
