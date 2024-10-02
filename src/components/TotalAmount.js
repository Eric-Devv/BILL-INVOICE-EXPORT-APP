import React from 'react';

const TotalAmount = ({ total }) => {
    return (
        <div className="total">
          {total > 0 ? (
            <h3>Total Amount:{total.toFixed(2)}</h3>
          ) : (
            <p>No items added</p> // Or display a different message
          )}
        </div>
      );
};

export default TotalAmount;
