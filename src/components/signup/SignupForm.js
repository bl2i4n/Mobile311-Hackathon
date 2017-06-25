import React from 'react';
import { gql, graphql} from 'react-apollo'


class SignupForm extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
        state: '',
      }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value});
  }

   async onSubmit(event){
    event.preventDefault(event);
    const {email, password, username, state} = this.state;
    await this.props.createUser({variables: { email, password, username, state } })
    this.props.router.push('/main');
  }

  render (){
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <div className="form-group">
          <label className="control-label">Name</label>
          <input
            value ={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
        </div>

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
          <label className="control-label">State</label>
          <input
            value ={this.state.state}
            onChange={this.onChange}
            type="text"
            name="state"
            className="form-control"
          />
        </div>


        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>

      </form>

    );
  }

}

const addMutation = gql`
  mutation createUser($email: String!, $password: String!, $username: String!, $state: String!) {
    createUser(
      authProvider: {
        email: {
          email: $email,
          password: $password
        }
      }
      username: $username
      state: $state)
      {
        id
      }
  }
`

const SignUpConnectedToGQ = graphql(addMutation, {name: 'createUser'})(SignupForm)


export default SignUpConnectedToGQ;
