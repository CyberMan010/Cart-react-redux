import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './componenrs/ProductList';
import Cart from './componenrs/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-dark-700 text-dark-100">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-accent-300"><p className='font-bold border-l-dark-100 text-amber-300'>Welcome to</p> Ramadan Shop!</h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <ProductList />
            </div>
            <div className="lg:w-1/3">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;