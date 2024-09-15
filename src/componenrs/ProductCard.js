import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#92c0df] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
    <h3 className="text-xl font-semibold mb-2 text-accent-200">{product.name}</h3>
    <p className="text-dark-200 mb-4">${product.price.toFixed(2)}</p>
    <button
      onClick={() => dispatch(addToCart(product))}
      className="w-full bg-accent-500 text-dark-100 px-4 py-2 rounded-md hover:bg-accent-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-opacity-50"
    >
      Add to Cart
    </button>
  </div>
  );
};

export default ProductCard;