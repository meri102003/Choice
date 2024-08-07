import { useContext } from "react";
import Navbar from "./Navbar";
import { Context } from "./Context";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Header() {
  const props = useContext(Context);
  return (
    <header>
      <Link to="/" onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}><img src="pictures/logo.svg" alt="" /></Link>
      <Navbar />
      <label>
        <span>
          <GiShoppingCart
            onClick={() => {
              props.setBooleanForCart(true);
            }}
          />
          <button>{props.cart.length}</button>
        </span>
        <Link to='/Favorite'>
          <span>
            <CiHeart />
            <button>{props.favorite.length}</button>
          </span>
        </Link>
      </label>
    </header>
  );
}
