import React from "react";
import "./Menu.css";

const Menu = props => (

<div className="menu-area">
          <div onClick={props.openStores} className="menu-link stores-link">Stores</div>
          {props.showStores && (
            <div className="stores-dropdown">
                {props.stores.map((store, i) => (
                  <div 
                    key={i} 
                    className="store-listing"
                    onClick={() => {props.selectStore(store)}}
                    >{store}<span className="store-listing-qty"></span></div>
                ))}
              </div>
          )}

          <div className="menu-link edit-link">Edit List</div>
          <div 
            className="menu-link signout-link"
            // onClick={props.signOutUser}
            >Signout</div>
      </div>

)

  export default Menu;
