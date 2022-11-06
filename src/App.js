import './App.css';
import Header from "./components/Header";
import ItemContainer from './components/ItemContainer';
import Cart from "./components/Cart"; 
import Footer from "./components/Footer"; 
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { products } from './components/data/products';

function App() {

  const [cart, setCart ] = useState([])

  return (
    <>
      
      <HashRouter>
        <Header brand = 'Mugler' />
          <Routes>
            <Route path='/' 
              element={
                <ItemContainer 
                  products = { products }
                  cart = { cart }
                  setCart = { setCart }
                />
              }
            />
            <Route path='/category/:id' element={
              <ItemContainer 
                products = { products }
                cart = { cart }
                setCart = { setCart }
              />
            } />
          </Routes>
        </HashRouter>
        <Cart cart = {cart} setCart = {setCart}/>
      <Footer/>
    </>
  );
}

export default App;
