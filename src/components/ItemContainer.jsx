import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Item from './Item';
import SideCart from './SideCart';
import { products } from './data/products';

const ItemContainer = ( ) => {

  const {id} = useParams();
  const [sideCart, setSideCart] = useState(false)
  const [items, setItems] = useState([])
  
  useEffect(()=>{
    if (!id){
      setItems(products)
    }
    else{
      const selectedCategory = products.filter(item=>item.category === id);
      setItems(selectedCategory)
    }
  },[id])

  return (
    <>
    <div className="relative">
      <div className={`${sideCart ? "block" : "hidden"} "absolute inset-0 fixed w-full h-full bg-gray-500 bg-opacity-75 z-40`} >
        <SideCart sideCart={sideCart} setCart={setSideCart}/>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:max-w-7xl m-auto">
      { items.map((item) => ( <Item key={item.id} item={item} sideCart={sideCart} setCart={setSideCart}/> ) )}
    </div>
    </>
  )
}

export default ItemContainer;
  

