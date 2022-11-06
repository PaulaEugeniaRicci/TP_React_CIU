import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "../assets/css/Styles.css";

const Header = ( {brand} ) => {

  const styles = {
    brand: "uppercase text-3xl tracking-widest text-white nexa",
    title: "uppercase text-sm leading-loose hover:font-bold hover:cursor-pointer nexa",
    option: "text-gray-500 leading-loose hover:font-semibold",
    container: "absolute z-10 bg-white w-full grid grid-cols-3 gap-4 px-20 pt-4 pb-5 leading-loose border-b border-gray-200"
  }

  const [displayCat, setDisplayCat] = useState(false)
  const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <nav className="bg-black">
      <div className="mx-auto relative">
        <div className="py-4 mx-6">
          <div className="flex items-center justify-between pt-4 pb-3 px-4">
            <div className="hidden lg:block lg:w-60">
              <ul className="flex items-center space-x-7 text-white nexa">
                <li className="nav-item p-2">
                  <Link to='/' className="text text-sm">Home</Link>
                </li>
                <li className="nav-item p-2">
                  <button className="text text-sm select-none" onClick={() => setDisplayCat(!displayCat)}>
                    Fragancias                        
                  </button>
                </li>
              </ul>
            </div>
            <Link to='/' className="block cursor-pointer w-60">
              <h1 alt="Mugler" className={ (styles.brand) + " lg:mx-auto sm:mx-0"}>{ brand }</h1>
            </Link>
            <div className="flex ml-auto lg:ml-0 items-center justify-end space-x-5 lg:w-60">
              <button aria-label="open close menu" onClick={() => setDisplayMenu(!displayMenu)} className="lg:hidden focus:outline-none">
                <HiMenu className='w-5 h-5 text-white'/>
              </button>
            </div>
          </div>
        </div>

        <div className={ (displayCat ? "block" : "hidden") } onMouseLeave={() => setDisplayCat(!displayCat)} >
          <div className={styles.container}>
            <ul>
              <li className={styles.title}><NavLink to={`/category/${'femenino'}`}>Fragancias para mujer</NavLink></li>
              <li className={styles.title}><NavLink to={`/category/${'masculino'}`}>Fragancias para hombre</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;