import { homeproductslist } from "./homeproductslist";
import Counter from "../../actual components/Counter";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../actual components/Context";

export default function Homeproducts() {
  const props = useContext(Context);
  return (
    <div className="home_products_container">
      <h2 className="title">Products</h2>
      <div className="home_products_content">
        {homeproductslist.map((product, i) => {
          if (i < 8) {
            return (
              <div className="home_products_item" key={product.id}>
                <img src={product.product} alt="" />
                <h4>{product.name}</h4>
                <span>{product.price}֏</span>
                <Counter quanity={product} />
                <span>
                  {(product.price * product.quanity).toLocaleString()}֏
                </span>
                <div className="home_products_item_icons">
                  {!props.cart.includes(product) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-cart-plus"
                      viewBox="0 0 16 16"
                      onClick={() => {
                        if (!props.cart.includes(product)) {
                          props.addCart(product);
                          props.setTotal(props.total + product.price);
                          if(!props.productAdding){
                            props.setProductAdding(true)
                            setTimeout(() =>{
                              props.setProductAdding(false) 
                            },4000)
                          }
                        }
                      }}
                    >
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-cart-check"
                      viewBox="0 0 16 16"
                      onClick={() => {
                        props.removeCart(product.id);
                        props.setTotal(props.total - product.price * product.quanity);
                        product.quanity = 1;
                    }}
                    >
                      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  )}
                  <FaHeart
                    style={{ color : !props.favorite.includes(product) ? 'var(--bg-dark-green-pallette)' : 'gold'}}
                    onClick={() => {
                      if (!props.favorite.includes(product)) {
                        props.addFavorite(product);
                        if(!props.productAdding){
                          props.setProductAdding(true)
                          setTimeout(() =>{
                            props.setProductAdding(false) 
                          },4000)
                        }
                      }
                      else {
                        props.removeFavorite(product.id);
                        product.quanity = 1;
                      }
                    }}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      <Link data-aos="fade-up"
        to="/Products"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Go To Catalog
      </Link>
    </div>
  );
}
