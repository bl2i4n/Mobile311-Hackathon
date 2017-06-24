import React from 'react';
import axios from 'axios';

class SignupForm extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
        state: '',
        phone: '',
      }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    axios.post('/api/users', {user: this.state});
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


export default SignupForm;
