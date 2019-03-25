import React, { Component } from "react";
// import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./Landing.css";

// Redux
import { connect } from "react-redux";



class LandingPage extends Component {

  state = {
    name: '',
    myPassword: '',


  }
// componentWillReceiveProps() {
//   console.log("component will get props")
//     console.log(this.props)
//     // if (this.props.userId) {
//     //   this.props.history.push(ROUTES.HOME)
//     // }
// }
  // componentWillUpdate() {
  //   console.log("component will update")
  //   console.log(this.props)
  //   // if (this.props.userId) {
  //   //   this.props.history.push(ROUTES.HOME)
  //   // }
  // }
  

  // componentWillReceiveProps () {
  //   if (this.props.userId) {
  //     this.props.history.push(ROUTES.HOME)
  //   }
  // }

  pageRedirect = () => {
    // console.log("page redirect ()")
    // console.log(this.props.userId)
    if(this.props.userId) {

      // set user_id to local storage
      localStorage.setItem("userId", this.props.userId)

      this.props.history.push(ROUTES.HOME)
    }
    if(this.props.password) {
      // console.log(this.props.password)
    }

  }

onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = (event) => {
    event.preventDefault();
    

    let info = {
      name: this.state.name.toLowerCase(),
      password: this.state.myPassword.toString().toLowerCase()
    }
    this.props.submitLogin(info)
    setTimeout(this.pageRedirect, 1000)
    this.setState({
      name: '',
      myPassword: ''
    })
  };

  demo = () => {
    this.setState({
      name: 'brian smith',
      myPassword: '1234'
    })
  }

  render = () => {
    // console.log("__________________")
    // console.log(this.props)
    return (
      <div className="landing-page-container">
        <h1 className="landing-title text-center">Hey Don't Forget</h1>

        <div 
          className="landing-demo text-center"
          onClick={this.demo}
          >
          demo login
        </div>

        <div className="login-form text-center">
          <div className="landing-input-area">
            <div className="landing-label text-center">User Name</div>
            <input
              className="landing-input"
              name='name'
              value={this.state.name}
              onChange={this.onChange}
              placeholder="User Name"
               />
          </div>

          <div className="landing-input-area">
            <div className="landing-label text-center">Password</div>
            <input
              className="landing-input"
              name='myPassword'
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
            >Sign In</button>
        </div>
      </div>
    );
  };
}


// this brings in the state to display on this component
const mapStateToProps = state => {
  // console.log("state coming into Landing.js");
  // console.log(state);
  return {
    name: state.name,
    allList: state.allList,
    countRemaining: state.countRemaining,
    myStore: state.myStore,
    storeList: state.storeList,
    storeNames: state.storeNames,
    password: state.password,
    userId: state.userId,
  };
};

const mapDispachToProps = dispach => {
  return {
    submitLogin: (data) => {
      dispach({ type: "LOG_IN", val: data});
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(LandingPage);



