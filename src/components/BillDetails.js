import React, { useState } from 'react';

const BillDetails = ({ onAddItem, onDeleteItem }) => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddItem = () => {
        if (!item.trim()) {
            setErrorMessage(`Please input data in the Item section.`);
            return;
        }

        // Check if the item contains only alphabetical characters
        if (!/^[a-zA-Z]+$/.test(item)) {
            setErrorMessage(`Item should only contain 
                alphabetical characters.`);
            return;
        }
        const newItem = { item, quantity, price };
        onAddItem(newItem);
        setItem('');
        setQuantity(1);
        setPrice(0);
        setErrorMessage('');
    };

    return (
        <div>
          <label>Item:</label>
          <input
            type="text"
            name="item"
            value={item}
            onChange={handleAddItem}
          />
    
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={handleAddItem}
          />
    
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleAddItem}
          />
    
          <button onClick={handleAddItem}>Add Item</button>
    
          <p style={{ color: 'red' }}>{errorMessage}</p>
        </div>
      );
};

export default BillDetails;
