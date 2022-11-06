import "../assets/css/Styles.css";
import { currencyFormat } from "../helpers/currencyFormat";
import { useState } from 'react';
import Cart from "./Cart";

const Item = ( { item, items, cart, setCart } ) => {
  
  const styles = {
    text: "nexa-bold tracking-wider h-14",
    price: "font-semibold mt-7 text-base tracking-wider",
    button: "btn select-none uppercase text-sm text-white bg-black py-3 px-9 mt-3 nexa"
  }

  const isInCart = (id) => {
    return cart.some((item) => (item.id === id))
  } 

  const selectItem = ( id ) => {
    const selectedItem = items.filter(
      item => item.id === id
    )[0];

    if (isInCart(item.id)){
      let index = cart.indexOf(selectedItem)
      let auxCart = [...cart]
      auxCart[index].quantity += 1
      setCart(auxCart)
    } else {
      setCart([...cart, selectedItem])
    }
  }

  return (
    <>
      <div className="group m-5 h-full">
        <div className='overflow-hidden relative'>
          <img src={item.image} alt={item.title} className="duration-500 group-hover:opacity-0"/>
          <img src={item.image2} alt={item.title} className="scale-95 absolute top-0 -z-50"/>
        </div>
        <div className='text-center uppercase pt-5'>
          <div><p className={(styles.text)+" pt-2"}>{item.title}</p></div>
          <div><p className="text-gray-500 nexa-ligth text-sm">{item.concentration}</p></div>
          <div><p className={styles.price}>{currencyFormat(item.price)}</p></div>
          <button className={styles.button} onClick= { () => selectItem(item.id) }>Comprar</button>
        </div>
      </div>
    </>
    )
}
    
export default Item;