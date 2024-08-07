import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Context } from "./Context";
import Counter from "./Counter";

export default function Cart() {
  const props = useContext(Context);
  return (
    <div className="cart_container" onClick={(e) => {
        if(e.target.className === 'cart_container') {
          props.setBooleanForCart(false);
        }
    }} style={{ display : props.booleanForCart ? 'flex' : 'none' }}>
      <div className="cart">
        <div className="cart_options">
          <h2>SHOP CART</h2>
          <FaTimes
            onClick={() => {
              props.setBooleanForCart(false);
            }}
          />
        </div>
        <h4>Cart count is {props.cart.length} {props.cart.length <= 1 ? 'element' : 'elements'}</h4>
        <div className="grand_total_value">Grand Total: {props.total}֏</div>
        <div className="cart_products">
            {props.cart.map(cart_item => {
              return <div className="cart_item" key={cart_item.id}>
                  <img src={cart_item.product} alt="" />
                  <h2>{cart_item.name}</h2>
                  <span>{cart_item.price}֏</span>
                  <Counter quanity={cart_item} />
                  <span>{cart_item.price * cart_item.quanity}֏</span>
                  <button onClick={() => {
                      props.removeCart(cart_item.id);
                      props.setTotal(props.total - cart_item.price * cart_item.quanity);
                      cart_item.quanity = 1;
                  }}>x</button>
              </div>
            })}
        </div>
      </div>
    </div>
  );
}