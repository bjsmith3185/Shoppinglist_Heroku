import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import Form from "../Form";
import Menu from "../Menu";
import "./Header.css";
import Edit from "../Edit";

class Header extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  showMenu = () => {
    let status;
    if (this.props.showDropdownMenu) {
      status = false;
    } else {
      status = true;
    }
    this.props.showMenuArea(status);
  };

  showAdd = () => {
    let status;
    if (this.props.showAddItemMenu) {
      status = false;
    } else {
      status = true;
    }
    this.props.showAddItem(status);
  };

  showEdit = () => {
      let showStatus;
    if (this.props.editing) {
      showStatus = false;
    } else {
      showStatus = true;
    }
    this.props.showEditItem(showStatus);
  };

  render() {
    return (
      <div className="header-area">
        <div className="top-area">
          <div className="left-box text-center" onClick={this.showMenu}>
            <i className="fas fa-bars" />
          </div>

          <div className="center-box text-center">
            <div className="top-title text-center">Hey Don't Forget</div>
          </div>

          <div className="right-box text-center" onClick={this.showAdd}>
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

        {/* Dropdown Area  */}

        {this.props.showDropdownMenu && <Menu />}

        {this.props.showAddItemMenu && <Form />}

        {/* {this.props.editing && <Edit />} */}
        {this.props.showEditMenu && <Edit />}
      </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  // console.log("state in Header");
  // console.log(state);
  return {
    showDropdownMenu: state.showDropdownMenu,
    showAddItemMenu: state.showAddItemMenu,
    showEditMenu: state.showEditMenu,
    name: state.name,
    editing: state.editing,
  };
};

// functions to dispatch actions
const mapDispachToProps = dispach => {
  return {
    showMenuArea: status => {
      dispach({
        type: "SHOW_DROPDOWN_MENU",
        payload: { showDropdownMenu: status }
      });
    },

    showAddItem: status => {
      dispach({
        type: "SHOW_ADD_ITEM",
        payload: { showAddItemMenu: status }
      });
    },

    showEditItem: (status) => {
      dispach({
        type: "SHOW_EDIT",
        payload: { showEditMenu: status }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);
