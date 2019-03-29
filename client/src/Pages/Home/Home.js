import React, { Component } from "react";
import "./Home.css";
// Redux
import { connect } from "react-redux";
import List from "../../components/List";
import Header from "../../components/Header";

class HomePage extends Component {

  
  componentWillMount() {
    const { history } = this.props;
    const user_id = localStorage.getItem("userId");
    this.props.loadAllData(user_id, history);
  }

  render() {
    return (
      <div className="App ">
        <Header />

        {!this.props.myStore ? (
          <div className="text-center home-no-list">No items on your list</div>
        ) : (
          <List />
        )}
      </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {

  return {
    userId: state.userId,
    allList: state.allList,
    myStore: state.myStore,
    editing: state.editing,
  };
};

const mapDispachToProps = dispach => {
  return {
    loadAllData: (id, history) => {
      dispach({ type: "LOAD_DATA", payload: { id, history } });
    },

    setHistory: history => {
      dispach({ type: "SET_HISTORY", payload: { history } });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(HomePage);
