import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import "./Form.css";

class Form extends Component {
  state = {
    item: "",
    qty: "",
    store: ""
  };

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  add = event => {
    event.preventDefault();
    let data = {
      item: this.state.item.toLowerCase(),
      store: this.state.store.toLowerCase(),
      qty: this.state.qty
    };
    let user = this.props.userId;

    let menu = { showAddItemMenu: false };

    this.props.addItem(user, data, menu);
    this.setState({
      item: "",
      store: "",
      qty: ""
    });
  };

  render() {
    return (
      <div className="form-area">
        <div className="form-title text-center">Add Item to List</div>

        <div className="line-item">
          <label className="line-title">Item</label>
          <input
            className="line-input"
            value={this.item}
            name="item"
            onChange={this.onChange}
            type="text"
            placeholder="Enter Item"
          />
        </div>

        <div className="line-item">
          <label className="line-title">Qty</label>
          <input
            className="line-input"
            value={this.qty}
            name="qty"
            onChange={this.onChange}
            type="text"
            placeholder="Qty"
          />
        </div>

        <div className="line-item">
          <label className="line-title">Store</label>
          <input
            className="line-input"
            value={this.store}
            name="store"
            onChange={this.onChange}
            type="text"
            placeholder="Store"
          />
        </div>

        <div className="form-btn-area text-center">
          <button
            className="text-center form-btn btn btn-info"
            onClick={this.add}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  return {
    showDropdownMenu: state.showDropdownMenu,
    showAddItemMenu: state.showAddItemMenu,
    showEditMenu: state.showEditMenu,
    name: state.name,
    countRemaining: state.countRemaining,
    allList: state.allList,
    storeList: state.storeList,
    storeNames: state.storeNames,
    myStore: state.myStore,
    userId: state.userId,
    history: state.history,
    editing: state.editing
  };
};

// functions to dispatch actions
const mapDispachToProps = dispach => {
  return {
    addItem: (user, data, menu) => {
      dispach({
        type: "ADD_ITEM",
        payload: { user, data, menu }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Form);
