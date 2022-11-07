import { createContext, useState } from 'react';
import { currencyFormat } from "../helpers/currencyFormat";

const CartContext = createContext()

const CartContextProvider = ( {children} ) => {

  const [items, setItems] = useState([]) 
 
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let index = items.findIndex((index) => (index.id === item.id))
      let auxCart = [...items]
      auxCart[index].quantity += quantity
      setItems(auxCart)
    } else {
      const itemToAdd = { ...item, quantity }
      setItems([...items, itemToAdd])
    }
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => (item.id !== id)))
  }

  const getSubtotal = (price, quantity) => {
    let subtotal = 0
    subtotal = subtotal + (price * quantity)
    return currencyFormat(Number(subtotal))
  }

  const getTotal = () => {
    let total = 0
    items.forEach((item) => {
       total = total + (item.quantity * item.price)
    })
    return currencyFormat(Number(total))
  }

  const clearCart = () => {
    setItems([])
  }

  const cartLength = () => {
    let quantity = 0
    items.forEach(i => {
      quantity = quantity + i.quantity
    })
    return quantity
  }

  const isInCart = (id) => {
    return items.some((item) => (item.id === id))
  } 

 return (
    <CartContext.Provider 
      value={{
        addItem,
        cartLength,
        clearCart,
        getTotal,
        getSubtotal,
        items,
        removeItem,
      }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider };



