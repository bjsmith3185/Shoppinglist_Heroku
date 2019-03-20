import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import Form from "../../components/Form";

import "./Header.css";

class Header extends Component {
  state = {
    item: "",
    store: "",
    qty: "",
    showInputForm: false
  };

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  moreItems = event => {
    event.preventDefault();
    console.log("button was clicked");
    let data = {
      type: "ADD_ITEM",
      val: {
        item: this.state.item,
        store: this.state.store,
        qty: this.state.qty
      }
    };

    this.props.addItem(data);
    this.setState({
      item: "",
      store: "",
      qty: "",
      showInputForm: false
    });
  };

  openInputForm = () => {
    if (this.state.showInputForm) {
      this.setState({
        showInputForm: false
      });
    } else {
      this.setState({
        showInputForm: true
      });
    }
  };

  render() {

    return (
      <div className="header-area">
        <h1 className="text-center header-title">Don't Forget</h1>
        <h3 className="text-center">{this.props.name}</h3>

        <div className="home-addbar">
          <div className="addbar-remaining">
              Items Remaining {this.props.countRemaining}
          </div>
          <div className="move-right" onClick={this.openInputForm}>
            <i className="fas fa-plus" />
          </div>
        </div>

        {this.state.showInputForm && (
          <Form
            onChange={this.onChange}
            item={this.state.item}
            qty={this.state.qty}
            store={this.state.store}
            addToList={this.moreItems}
          />
        )}
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
    countRemaining: state.countRemaining
  };
};

// functions to dispatch actions
const mapDispachToProps = dispach => {
  return {
    addItem: data => {
      dispach({
        type: data.type,
        val: data.val
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);
