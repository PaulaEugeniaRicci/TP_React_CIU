import { currencyFormat } from "../helpers/currencyFormat";
import { MdRemoveShoppingCart } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";

const styles = {
  grid: "border-gray-200 border-b py-3",
  detail: "text-gray-700 text-xs nexa-light",
  price: "font-semibold text-base tracking-wider",
  text: "my-auto text-center ",
  highlight: "lowercase flex flex-row items-center self-start mb-4 nexa-light",
}

const Cart = ( {cart, setCart} ) => {
    
  const clearCart = () => {
    setCart([])
  }

  const removeItem = ( id ) => {
    setCart(cart.filter((item) => (item.id !== id)))
  }

  return(
    <>
    <div className="fixed absolute top-28 right-0 w-96 h-screen bg-white">
    { cart.length === 0 ? (
       <div className="flex flex-col px-5">
        <div className="m-auto mt-56">
          <p className="uppercase text-center tracking-wider px-2">Su carrito está vacio. Agregue algún producto para poder continuar.</p>
        </div>
      </div>
    ) : (
      <div className="mx-auto pt-10 flex flex-col mt-6 px-5 overlay">
        <h1 className="text-center uppercase nexa-bold border-gray-200 border-b pb-2 leading-loose">Mi compra</h1>
        <div className= "w-full">
          {cart.map((item) => (
          <div className={styles.grid} key={item.id}>
            <div className='col-span-4 flex flex-row justify-between items-center'>
              <img className=" h-20" src={item.image} alt={item.title} />
              <div className="flex flex-col text-center">
                <p className="uppercase leading-normal font-medium nexa-bold">{item.title}</p>
                <p className={styles.detail}>{item.concentration}</p>
                <div className={styles.detail}>{item.quantity}</div>
                <div className={(styles.text) + (styles.price)}>{currencyFormat(item.price)}</div>
              </div>
              <div className="pr-4">
                <HiOutlineTrash onClick={() => removeItem(item.id)} className="w-6 h-6 border-transparent focus:border-transparent focus:ring-0 text-gray-600 hover:scale-110 cursor-pointer"/>
              </div>
            </div>
          </div>
           ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-6 mb-3">
          <button onClick={ clearCart } className={styles.highlight}>
            <MdRemoveShoppingCart className='mr-1'/> vaciar carrito
          </button>
        </div>
      </div>
    )}
    </div>
    </>
  );
}

export default Cart;