import React from "react";
import "./List.css";

const List = props => (
  <div className="list">
    {props.list && (
      <div className="item-list-container">
        {props.list.map((item, i) => (
          <div
            className="item"
            onClick={() => props.strike(item._id, item.strikeThru)}
            key={i}
          >
            {item.strikeThru ? (
              <div className="item-container text-left strike">
                <span className="item-name">{item.item}</span>
                <span className="item-qty">{item.qty}</span>
              </div>
            ) : (
              <div className="item-container text-left">
                <span className="item-name">{item.item}</span>
                <span className="item-qty">&#40; {item.qty} &#41;</span>
              </div>
            )}

            <div className="item-btn-container text-right">
              <div
                className="item-delete-btn"
                onClick={() => props.delete(item._id)}
              >
                X
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default List;
