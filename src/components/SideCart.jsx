import { currencyFormat } from "../helpers/currencyFormat";
import { MdRemoveShoppingCart, MdShoppingCart } from "react-icons/md";
import { HiOutlineTrash, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useContext } from "react"
import { CartContext } from '../context/CartContext';

const styles = {
  grid: "border-gray-200 border-b py-3",
  detail: "text-gray-700 text-xs nexa-light",
  price: "font-semibold text-base tracking-wider",
  text: "my-auto text-center ",
  highlight: "lowercase flex flex-row items-center self-start mb-4 nexa-light",
}

const SideCart = ( { sideCart, setCart } ) => {

  console.log(setCart)

  const {items, clearCart, cartLength, removeItem} = useContext(CartContext)

  const closeHandler = () => {
    setCart(!sideCart)
  }

  return(
    <>
    <div className="fixed right-0 w-10/12 h-full bg-white z-20">
      <p className="p-3 font-bold cursor-pointer hover:text-lg h-10" onClick={closeHandler}><HiX/></p>
    { cartLength === 0 ? (
       <div className="flex flex-col px-5">
        <div className="m-auto mt-56">
          <p className="uppercase text-center tracking-wider px-2">Su carrito está vacio. Agregue algún producto para poder continuar.</p>
        </div>
      </div>
    ) : (
      <div className="mx-auto flex flex-col px-5">
        <h1 className="text-center uppercase nexa-bold border-gray-200 border-b pb-5 leading-loose">Resumen de compra</h1>
        <div className= "w-full h-80 overflow-auto">
          {items.map((item) => (
          <div className={styles.grid} key={item.id}>
            <div className='col-span-4 flex flex-row justify-between items-center'>
              <img className="h-20" src={item.image} alt={item.title} />
              <div className="flex flex-col text-center">
                <p className="uppercase leading-normal font-medium nexa-bold">{item.title}</p>
                <p className={styles.detail}>{item.concentration}</p>
                <div className={styles.detail}>Cantidad: {item.quantity}</div>
                <div className={(styles.text) + (styles.price)}>{currencyFormat(item.price)}</div>
              </div>
              <div className="pr-4">
                <HiOutlineTrash onClick={() => removeItem(item.id)} className="w-6 h-6 border-transparent focus:border-transparent focus:ring-0 text-gray-600 hover:scale-110 cursor-pointer"/>
              </div>
            </div>
          </div>
           ))}
        </div>

        <div className="flex flex-col md:flex-row justify-around mt-6 mb-3">
          <Link to='/' className={styles.highlight} onClick={closeHandler}>
            <IoIosArrowBack className="mr-1"/>Seguir comprando
          </Link>
          <Link to='/cart' className={styles.highlight}>
            <MdShoppingCart className="mr-1"/>Ir a carrito
          </Link>
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

export default SideCart;