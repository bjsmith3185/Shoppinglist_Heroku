import React, { Component } from "react";
import "./List.css";

// Redux
import { connect } from "react-redux";

class List extends Component {
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

  render() {
    return (
      <div className="list">
        <div>
          <div className="list-store-area">
            <div className="list-store-title text-center">
              {this.props.myStore
                .toLowerCase()
                .split(" ")
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(" ")}
            </div>
            <div className="list-qty-remaining text-right">
              Items Remaining {this.props.countRemaining}
            </div>
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
                      <span className="item-qty">&#40; {item.qty} &#41;</span>
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
    myStore: state.myStore
  };
};

const mapDispachToProps = dispach => {
  return {
    checkOff: (id, strikeThru) => {
      dispach({ type: "STRIKE_THRU", val: { id: id, strikeThru: strikeThru } });
    },

    removeItem: data => {
      dispach({ type: "DELETE_ITEM", val: data });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(List);
