import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import * as ROUTES from "../../constants/routes";
import "./Home.css";
import Form from "../../components/Form";

// Redux
import { connect } from "react-redux";
import List from "../../components/List";
import Header from "../../components/Header";

class HomePage extends Component {
  state = {
    // item: "",
    // store: "",
    // qty: "",
    // showInputForm: false,

  };

  // componentDidMount() {
    componentWillMount() {
    this.props.getList();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  delete = item_id => {
    console.log("deleting");
    let data = {
      type: "DELETE_ITEM",
      id: item_id
    };

    this.props.removeItem(data);
  };

  strike = (id, strikeThru) => {
    console.log("strike thru");
    if ( strikeThru ) {
      strikeThru = false
    } else {
      strikeThru = true
    }
    this.props.checkOff(id, strikeThru)
  };

  

  render() {
    console.log(this.props);

    return (
      <div className="App ">
       
        <Header />
 
        <List list={this.props.list} delete={this.delete} strike={this.strike} />
      </div>
    );
  }
}


// this brings in the state to display on this component
const mapStateToProps = state => {
  console.log("hello");
  console.log(state);
  return {
    name: state.name,
    list: state.list
  };
};

const mapDispachToProps = dispach => {
  return {
    addItem: data => {
      dispach({
        type: data.type,
        val: data.val
      });
    },

    removeItem: data => {
      dispach({ type: data.type, val: data.id });
    },

    getList: () => {
      dispach({ type: "GET_LIST" });
    },

    checkOff: (id, strikeThru) => {
      dispach({ type: "CHECK_OFF", val: {id: id, strikeThru: strikeThru}})
    }

  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(HomePage);
