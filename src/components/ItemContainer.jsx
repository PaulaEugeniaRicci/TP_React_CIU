import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Item from './Item';

const ItemContainer = ( { products, cart, setCart } ) => {

  const {id} = useParams();
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-full lg:max-w-7xl m-auto">
      { items.map((item) => ( 
        <Item 
          key={item.id} 
          item={item}
          items={items}
          cart={cart}
          setCart={setCart}
        />
      ) )}
    </div>
  )
}

export default ItemContainer;
  

