import React from 'react';

const ItemList = ({ items, onDeleteItem }) => {
    return (
        <div className="item-list">
          <h2>Item List</h2>
          {items.map((item) => (
            <div className="item" key={item.id || item.name /* Use unique identifier */}>
              <div>{item.item}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: <span>${item.price}</span></div>
              <button onClick={() => onDeleteItem(item.id || item.name)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      );
};

export default ItemList;
