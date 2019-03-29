import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import Form from "../Form";
import Menu from "../Menu";
import "./Header.css";

class Header extends Component {
  state = {
    showInputForm: false,
    showDropDownMenu: false,
    showStores: false,
    stores: [],
    item: "",
    store: "",
    qty: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  moreItems = event => {
    event.preventDefault();
    let data = {
      item: this.state.item,
      store: this.state.store,
      qty: this.state.qty
    };
    let user = this.props.userId;

    this.props.addItem(user, data);
    this.setState({
      item: "",
      store: "",
      qty: "",
      showInputForm: false
    });
  };

  showDropdown = () => {
    if (this.state.showDropDownMenu) {
      this.setState({
        showDropDownMenu: false
      });
    } else {
      this.setState({
        showDropDownMenu: true,
        showInputForm: false
      });
    }
  };

  openInputForm = () => {
    if (this.state.showInputForm) {
      this.setState({
        showInputForm: false
      });
    } else {
      this.setState({
        showInputForm: true,
        showDropDownMenu: false
      });
    }
  };

  selectStore = store => {
    const myStore = {
      userId: this.props.userId,
      myStore: store
    };
    this.props.setStore(myStore);
    this.setState({
      showStores: false,
      showDropDownMenu: false
    });
  };

  closeMenu = event => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({
        showMenu: false
      });
      document.removeEventListener("click", this.closeMenu);
    }
  };

  openStores = store => {
    if (store) {
      this.setState({
        showStores: false
      });
    } else {
      this.setState({
        showStores: true
      });
    }
  };

  signOutUser = () => {
    this.props.signOut(this.props.userId, this.props.history);
  };

  render() {
    return (
      <div className="header-area">
        <div className="top-area">
          <div className="left-box text-center" onClick={this.showDropdown}>
            <i className="fas fa-bars" />
          </div>

          <div className="center-box text-center">
            <div className="top-title text-center">Hey Don't Forget</div>
          </div>

          <div className="right-box text-center" onClick={this.openInputForm}>
            <i className="fas fa-plus" />
          </div>
        </div>

        {/* Title on small screen  */}
        <div className="text-center bottom-title">Hey Don't Forget</div>

        <div className="header-name-area text-center">
          {this.props.name
            .toLowerCase()
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
        </div>

        {/* dropdown menu goes here  */}

        {this.state.showDropDownMenu && (
          <Menu
            openStores={this.openStores}
            showStores={this.state.showStores}
            stores={this.props.storeNames}
            selectStore={this.selectStore}
            signOutUser={this.signOutUser}
            showDropDown={this.showDropdown}
          />
        )}

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
  return {
    name: state.name,
    countRemaining: state.countRemaining,
    allList: state.allList,
    storeList: state.storeList,
    storeNames: state.storeNames,
    myStore: state.myStore,
    userId: state.userId,
    history: state.history
  };
};

// functions to dispatch actions
const mapDispachToProps = dispach => {
  return {
    addItem: (user, data) => {
      dispach({
        type: "ADD_ITEM",
        val: { user: user, data: data }
      });
    },

    setStore: data => {
      dispach({
        type: "SET_STORE",
        val: data
      });
    },

    signOut: (userId, history) => {
      dispach({
        type: "SIGN_OUT",
        payload: { userId, history }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);
