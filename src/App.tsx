import React from 'react';
import Header from './components/header/headerContainer';
import Home from './components/home/homeContainer';
import { Route, Routes } from 'react-router-dom';
import CartContainer from './components/cart/cartContainer';

const App:React.FC=() => {
  return (
    <div className="container">
 
        <Header />
        <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
       
        
</div>
    
  );
}

export default App;
