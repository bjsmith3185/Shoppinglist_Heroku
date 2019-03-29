import React, { Component } from "react";
import "./Landing.css";
// Redux
import { connect } from "react-redux";

class LandingPage extends Component {
  state = {
    name: "",
    myPassword: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    const { history } = this.props;
    this.props.submitLogin(
      this.state.name.toLowerCase(),
      this.state.myPassword.toString().toLowerCase(),
      history
    );

    this.setState({
      name: "",
      myPassword: ""
    });
  };

  demo = () => {
    this.setState({
      name: "brian smith",
      myPassword: "1234"
    });
  };

  render = () => {
    return (
      <div className="landing-page-container">
        <h1 className="landing-title text-center">Hey Don't Forget</h1>

        <div className="landing-demo text-center" onClick={this.demo}>
          demo login
        </div>

        <div className="login-form text-center">
          <div className="landing-input-area">
            <div className="landing-label text-center">User Name</div>
            <input
              className="landing-input"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="User Name"
            />
          </div>

          <div className="landing-input-area">
            <div className="landing-label text-center">Password</div>
            <input
              className="landing-input"
              name="myPassword"
              value={this.state.myPassword}
              onChange={this.onChange}
              placeholder="Password"
            />
            <div className="password-err text-center">
              {this.props.password}
            </div>
          </div>

          <button
            className="landing-login-btn btn btn-info"
            onClick={this.submit}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  };
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  return {
    userId: state.userId
  };
};

const mapDispachToProps = dispach => {
  return {
    submitLogin: (name, password, history) => {
      dispach({ type: "LOG_IN", payload: { name, password, history } });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(LandingPage);
