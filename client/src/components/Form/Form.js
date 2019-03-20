import React from "react";
import "./Form.css";

const Form = props => (
  <div className="form-area">
    <div className="form-title text-center">Add Item to List</div>

    <div className="line-item">
  
      <label className="line-title">Item</label>
      <input
        className="line-input"
        value={props.item}
        name="item"
        onChange={props.onChange}
        type="text"
        placeholder="Enter Item"
      />
    </div>

    <div className="line-item">
      <label className="line-title">Qty</label>
      <input
        className="line-input"
        value={props.qty}
        name="qty"
        onChange={props.onChange}
        type="text"
        placeholder="Qty"
      />
    </div>

    <div className="line-item">
      <label className="line-title">Store</label>
      <input
        className="line-input"
        value={props.store}
        name="store"
        onChange={props.onChange}
        type="text"
        placeholder="Store"
      />
    </div>

      <div className="form-btn-area text-center">
      <button className="text-center form-btn btn btn-info" onClick={props.addToList}>
      Add
    </button>
      </div>
     
  </div>
);

export default Form;
