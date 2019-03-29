import React, { Component } from "react";
import "./List.css";

// Redux
import { connect } from "react-redux";

class List extends Component {
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

  delete = item_id => {
    let deleteData = {
      item: item_id,
      user: localStorage.getItem("userId")
    };
    this.props.removeItem(deleteData);
  };

  strike = (id, strikeThru) => {
    if (strikeThru) {
      strikeThru = false;
    } else {
      strikeThru = true;
    }
    this.props.checkOff(id, strikeThru);
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
      store: store.toLowerCase(),
    };

    let userInfo = {
      userId: this.props.userId,
      myStore: this.props.myStore.toLowerCase(),
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
    return (
      <div className="list">
        <div className="list-store-area">
          <div className="list-store-title text-center">
            {this.props.myStore
              .toLowerCase()
              .split(" ")
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}
          </div>

          {this.props.editing ? (
            <div>
              <div className="update-edit-area text-left">
                <div className="cancel-edit-btn" onClick={this.cancelEdit}>
                  Cancel Edit
                </div>
              </div>

              <div className="list-qty-remaining text-right">
                Items Remaining {this.props.countRemaining}
              </div>

              {this.state.showEditWindow && (
                <div className="list-edit-window text-center">
                  <div className="input-title">Item</div>
                  <input
                    className="list-edit edit-item-input"
                    value={this.state.item}
                    name="item"
                    placeholder={this.state.selectedItem}
                    onChange={this.onChange}
                  />
                  <div className="input-title">Qty</div>
                  <input
                    className="list-edit edit-qty-input"
                    value={this.state.qty}
                    name="qty"
                    placeholder={this.state.selectedQty}
                    onChange={this.onChange}
                  />
                  <div className="input-title">Store</div>
                  <input
                    className="list-edit edit-store-input"
                    value={this.state.store}
                    name="store"
                    placeholder={this.state.selectedStore}
                    onChange={this.onChange}
                  />
                  <br />
                  <button
                    className="edit-submit-btn"
                    onClick={this.submitChanges}
                  >
                    Submit
                  </button>
                </div>
              )}

              {this.props.storeList && (
                <div className="item-list-container">
                  {this.props.storeList.map((item, i) => (
                    <div className="item" key={i}>
                      <div
                        className="item-container text-left"
                        onClick={() => this.strike(item._id, item.strikeThru)}
                      >
                        <span className="item-name">{item.item}</span>
                        <span className="item-qty">&#40; {item.qty} &#41;</span>
                      </div>

                      <div className="item-btn-container text-right">
                        <div
                          className="item-edit-btn text-cener"
                          onClick={() => this.edit(item._id)}
                        >
                          Edit
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="list-qty-remaining-solo text-right">
                Items Remaining {this.props.countRemaining}
              </div>
              {this.props.storeList && (
                <div className="item-list-container">
                  {this.props.storeList.map((item, i) => (
                    <div className="item" key={i}>
                      {item.strikeThru ? (
                        <div
                          className="item-container text-left strike"
                          onClick={() => this.strike(item._id, item.strikeThru)}
                        >
                          <span className="item-name">{item.item}</span>
                          <span className="item-qty">{item.qty}</span>
                        </div>
                      ) : (
                        <div
                          className="item-container text-left"
                          onClick={() => this.strike(item._id, item.strikeThru)}
                        >
                          <span className="item-name">{item.item}</span>
                          <span className="item-qty">
                            &#40; {item.qty} &#41;
                          </span>
                        </div>
                      )}

                      <div className="item-btn-container text-right">
                        <div
                          className="item-delete-btn"
                          onClick={() => this.delete(item._id)}
                        >
                          X
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
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
    userId: state.userId
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
)(List);
