import React, { Component } from "react";
import * as ROUTES from "../../constants/routes";
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
    qty: "",
  };

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  moreItems = event => {
    event.preventDefault();
    // console.log("button was clicked");
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
        showDropDownMenu: true
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
        showInputForm: true
      });
    }
  };

  selectStore = store => {
    // console.log(store);
    // console.log("selecting store")
    // console.log(this.props.userId)
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

  openStores = () => {
    // console.log("clicked open stores");
    // this.storeNames();
    if (this.state.showStores) {
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
    console.log("Good Bye")
    this.props.signOut()
    this.props.history.push(ROUTES.LANDING)
  }

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

        <div className="header-name-area text-center">{this.props.name}</div>

        {/* dropdown menu goes here  */}

        {this.state.showDropDownMenu && (
          <Menu
            openStores={this.openStores}
            showStores={this.state.showStores}
            stores={this.props.storeNames}
            selectStore={this.selectStore}
            signOutUser={this.signOutUser}
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
  // console.log("state coming into Header.js");
  // console.log(state);
  return {
    name: state.name,
    countRemaining: state.countRemaining,
    allList: state.allList,
    storeList: state.storeList,
    storeNames: state.storeNames,
    myStore: state.myStore,
    userId: state.userId
  };
};

// functions to dispatch actions
const mapDispachToProps = dispach => {
  return {
    addItem: (user, data) => {
      dispach({
        type: 'ADD_ITEM',
        val: {user: user, data: data}
      });
    },

    setStore: data => {
      dispach({
        type: 'SET_STORE',
        val: data
      });
    },

    signOut: () => {
      dispach({
        type: 'SIGN_OUT'
      })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);




// <div className="header-area">
// {/* Menu Button  */}
// <div className="menu-button-area" onClick={this.showDropdown}>
//   <i className="mybutton fas fa-bars" />
// </div>
// {/* Title  */}
// <h1 className="text-center header-title-top">Hey Don't Forget</h1>
// {/* Add Item Button  */}
// <div className="add-button-area" onClick={this.openInputForm}>
//   <i className="myAdd fas fa-plus" />
// </div>

// {/* Title on small screen  */}
// <h1 className="text-center header-title-below">Hey Don't Forget</h1>

// <h3 className="header-name-area text-center">{this.props.name}</h3>

// {/* dropdown menu goes here  */}

// {this.state.showDropDownMenu && (
//   <Menu
//     openStores={this.openStores}
//     showStores={this.state.showStores}
//     stores={this.props.storeNames}
//     selectStore={this.selectStore}
//     signOutUser={this.signOutUser}
//   />
// )}

// {this.state.showInputForm && (
//   <Form
//     onChange={this.onChange}
//     item={this.state.item}
//     qty={this.state.qty}
//     store={this.state.store}
//     addToList={this.moreItems}
//   />
// )}
// </div>