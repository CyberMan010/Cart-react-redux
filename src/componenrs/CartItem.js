import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex justify-between items-center mb-4 p-4 bg-dark-600 rounded-lg">
      <span className="font-semibold text-accent-200">{item.name}</span>
      <div className="flex items-center">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 mr-2 p-1 bg-dark-500 text-dark-100 border border-dark-400 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-opacity-50"
        />
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="bg-red-600 text-dark-100 px-2 py-1 rounded-md hover:bg-red-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;