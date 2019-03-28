import React from "react";
import "./Menu.css";

const Menu = props => (
  <div className="menu-area">
    <div onClick={props.openStores} className="menu-link stores-link">
       - Stores
    </div>
    {props.showStores && (
      <div className="stores-dropdown">
        {props.stores.map((store, i) => (
          <div
            key={i}
            className="store-listing"
            onClick={() => {
              props.selectStore(store);
            }}
          >
            {store
            .toLowerCase()
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
            <span className="store-listing-qty" />
          </div>
        ))}
      </div>
    )}

    <div className="menu-link edit-link">- Edit List (coming soon)</div>
    <div
      className="menu-link signout-link"
      onClick={props.signOutUser}
    >
      - Signout
    </div>

    <div
      className="menu-link close-menu-link"
      onClick={props.showDropDown}
    >
      Close Menu
    </div>
  </div>
);

export default Menu;
