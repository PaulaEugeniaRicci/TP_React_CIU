import './App.css';
import Header from "./components/Header";
import ItemContainer from './components/ItemContainer';
import Cart from "./components/Cart"; 
import Footer from "./components/Footer"; 
import { CartContextProvider } from './context/CartContext';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='min-h-screen'>
        <CartContextProvider>
          <HashRouter>
            <Header brand = 'Mugler' />
            <Routes>
              <Route path='/' element={<ItemContainer/>} />
              <Route path='/category/:id' element={<ItemContainer/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </HashRouter>
        </CartContextProvider>
      </div>
      <Footer/>
    </>
  );
}

export default App;
