import { useContext } from "react"
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi";
import { MdRemoveShoppingCart } from "react-icons/md";
import { currencyFormat } from "../helpers/currencyFormat";

const Cart = () => {
  
  const {items, clearCart, cartLength, removeItem, getSubtotal, getTotal} = useContext(CartContext)

  const styles = {
    title: "uppercase leading-loose tracking-wider font-medium pb-1 nexa-bold",
    grid: "grid grid-cols-6 gap-4 auto-cols-auto border-gray-200 border-b",
    detail: "text-gray-700 text-xs nexa-light",
    price: "font-semibold text-base tracking-wider",
    text: "my-auto text-center ",
    highlight: "lowercase flex flex-row items-center self-start mb-4 nexa-light",
    button: "outline-none focus:ring-transparent text-center btn select-none uppercase text-sm text-white bg-black py-3 px-9 mt-4 nexa"
  }

  return (
    <>
    {cartLength() === 0 ? (
       <div className="flex flex-col">
        <div className="m-auto mt-56">
          <p className="uppercase text-center tracking-wider px-2">Su carrito está vacio. Agregue algún producto para poder continuar.</p>
        </div>
        <Link to='/' className={(styles.button) + " m-auto flex flex-row items-center nexa"}>
          <IoIosArrowBack className="mr-1"/>Seguir comprando
        </Link>
      </div>
    ) : (
      <div className="mx-10 pt-10">
        <div className={styles.grid}>
          <div className={(styles.title) + ' col-span-2 pl-5'}>Producto</div>
          <div className={(styles.title) + " text-center"}>Precio</div>
          <div className={(styles.title) + " text-center"}>Cantidad</div>
          <div className={(styles.title) + " text-center"}>Subtotal</div>
        </div>
        {items.map((item) => (
          <div className={styles.grid} key={item.id}>
            <div className='col-span-2 flex flex-row justify-left items-center pr-40 md:pr-0'>
              <img className="p-4 h-60" src={item.image} alt={item.title} />
              <div className="flex flex-col text-left">
                <p className="uppercase leading-normal font-medium nexa-bold">{item.title}</p>
                <p className={styles.detail}>{item.concentration}</p>
              </div>
            </div>
            <div className={(styles.text) + (styles.price)}>{currencyFormat(item.price)}</div>
            <div className={(styles.text) + ' flex justify-center'}>
              <p className='rounded-lg border border-grey-200 py-1 w-24'>{item.quantity}</p></div>
            <div className={(styles.text) + (styles.price)}>{getSubtotal(item.price, item.quantity)}</div>
            <div className="my-auto flex justify-center">
              <HiOutlineTrash onClick={() => removeItem(item.id)} className="w-6 h-6 border-transparent focus:border-transparent focus:ring-0 text-gray-600 hover:scale-110 cursor-pointer"/>
            </div>
          </div>
        ))}
        <div className="flex flex-col md:flex-row justify-between mt-6 mb-3 mx-4">
          <div>
            <button onClick={clearCart} className={styles.highlight}>
              <MdRemoveShoppingCart className='mr-1'/> vaciar carrito
            </button>
            <Link to='/' className={styles.highlight}>
              <IoIosArrowBack className="mr-1"/>Seguir comprando
            </Link>
          </div>
          <div className="flex flex-col self-start w-full md:w-2/5">
            <div className={"flex flex-row justify-between " + (styles.text)}>
              <p className='nexa-light'>Cantidad de items</p>
              <p>{cartLength()}</p>
            </div>
            <div className={"flex flex-row justify-between " + (styles.text)}>
              <p className='nexa font-medium'>
                Costo de env<span className='font-sans'>í</span>o - Gratis
              </p>
            </div>
            <div className="flex flex-row justify-between font-semibold pt-3 ">
              <p className={(styles.title) + ' text-base'}>Total</p>
              <p className={styles.price}>{getTotal()}</p>
            </div>
            <button to='/checkout' className={styles.button}>Checkout</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Cart;

