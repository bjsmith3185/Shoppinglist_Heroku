import React, { Component } from "react";
// import { browserHistory } from 'react-router';
import "./Home.css";



// Redux
import { connect } from "react-redux";
import List from "../../components/List";
import Header from "../../components/Header";

class HomePage extends Component {
  componentDidMount() {
  // componentWillMount() {
    //  this.props.loadAllData(this.props.userId);

    // Need a function to save user_id to local storeage

    // use sessionStoreage to determine if the page is reloaded
    // save the user_id to local storage

    // If the page is reloaded
          //  use the user_id from local storage

          // if (sessionStorage.getItem("is_reloaded")) alert('Reloaded!');

          // sessionStorage.setItem("is_reloaded", true);

      const user_id = localStorage.getItem("userId");
      // console.log(user_id)
      this.loadAllData(user_id)

  }

  loadAllData = (id) => {
   this.props.loadAllData(id)
  }

  render() {
    // console.log(this.props);

    return (
      <div className="App ">
        <Header />
        <List />
      </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  // console.log("state coming into home.js");
  // console.log(state);
  return {
   userId: state.userId
  };
};

const mapDispachToProps = dispach => {
  return {
    loadAllData: (data) => {
      // dispach({ type: "LOAD_DATA", val: '5c8e73b6add5286e74485f43' });
      dispach({ type: "LOAD_DATA", val: data });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(HomePage);


