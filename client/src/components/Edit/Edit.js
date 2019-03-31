import React, { Component } from "react";
import "./Edit.css";

// Redux
import { connect } from "react-redux";

class Edit extends Component {
  state = {
    showEditWindow: false,
    item: "",
    qty: "",
    store: "",

    selectedItem: "",
    selectedQty: "",
    selectedStore: "",
    selected_id: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  edit = id => {
    for (var i = 0; i < this.props.storeList.length; i++) {
      if (this.props.storeList[i]._id === id) {
        this.setState({
          selectedItem: this.props.storeList[i].item,
          selectedQty: this.props.storeList[i].qty,
          selectedStore: this.props.storeList[i].store,
          selected_id: id
        });
      }
    }

    this.setState({
      showEditWindow: true
    });
  };

  submitChanges = () => {
    let item, qty, store;

    if (this.state.item === "") {
      item = this.state.selectedItem;
    } else {
      item = this.state.item;
    }
    if (this.state.qty === "") {
      qty = this.state.selectedQty;
    } else {
      qty = this.state.qty;
    }
    if (this.state.store === "") {
      store = this.state.selectedStore;
    } else {
      store = this.state.store;
    }

    let updated = {
      item: item.toLowerCase(),
      qty: qty.toLowerCase(),
      store: store.toLowerCase()
    };

    let userInfo = {
      userId: this.props.userId,
      myStore: this.props.myStore.toLowerCase()
    };

    this.props.updateList(this.state.selected_id, updated, userInfo);
    this.cancelEdit();
    this.setState({
      item: "",
      qty: "",
      store: "",
      showEditWindow: false
    });
  };

  cancelEdit = () => {
    this.setState({
      showEditWindow: false
    });
    let data = false;
    this.props.cancelUpdate(data);
  };

  render() {
    // console.log(this.props)

    return (
      <div className="list-edit-window text-center">
      <div className="input-title">Item</div>
      <input
        className="list-edit edit-item-input"
        value={this.state.item}
        name="item"
        placeholder={this.props.selectedItem}
        onChange={this.onChange}
      />
      <div className="input-title">Qty</div>
      <input
        className="list-edit edit-qty-input"
        value={this.state.qty}
        name="qty"
        placeholder={this.props.selectedQty}
        onChange={this.onChange}
      />
      <div className="input-title">Store</div>
      <input
        className="list-edit edit-store-input"
        value={this.state.store}
        name="store"
        placeholder={this.props.selectedStore}
        onChange={this.onChange}
      />
      <br />
      <button className="edit-submit-btn" onClick={this.submitChanges}>
        Submit
      </button>
    </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  return {
    name: state.name,
    countRemaining: state.countRemaining,
    allList: state.allList,
    storeList: state.storeList,
    storeNames: state.storeNames,
    myStore: state.myStore,
    editing: state.editing,
    userId: state.userId,

    selectedItem: state.selectedItem,
    selectedQty: state.selectedQty,
    selectedStore: state.selectedStore,
    selected_id: state.selected_id,
  };
};

const mapDispachToProps = dispach => {
  return {
    checkOff: (id, strikeThru) => {
      dispach({ type: "STRIKE_THRU", val: { id: id, strikeThru: strikeThru } });
    },

    removeItem: data => {
      dispach({ type: "DELETE_ITEM", val: data });
    },

    updateList: (id, data, userInfo) => {
      dispach({
        type: "UPDATE_LIST",
        val: { id, payload: { data, userInfo } }
      });
    },

    cancelUpdate: editing => {
      dispach({
        type: "CANCEL_UPDATE",
        payload: { editing }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Edit);
