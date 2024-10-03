import React from 'react';

const ItemList = ({ items, onDeleteItem }) => {
    return (
        <div className="item-list">
          <h2><u>Item List</u></h2>
          {items.map((item) => (
            <div className="item" key={item.id || item.name /* Use unique identifier */}>
              <div>{item.item}</div>
              <div>Quantity/pieces: {item.quantity}</div>
              <div>Price: <span>Ksh {item.price}</span></div>
              <button className="removebtn"onClick={() => onDeleteItem(item.id || item.name)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      );
};

export default ItemList;
