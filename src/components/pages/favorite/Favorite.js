import React, { useContext } from 'react'
import { Context } from '../../actual components/Context'
import Counter from '../../actual components/Counter';
import './Favorite.css';
import { IoHeartDislikeOutline } from "react-icons/io5";

export default function Favorite() {
const props = useContext(Context);
  return (
    <div className='favorite_container'>
        <h2>Favorites</h2>
        <div className="favorite_content">
            {props.favorite.map(item => {
                return <div className='favorite_item'>
                    <IoHeartDislikeOutline className='remove_heart' onClick={() => {
                         props.removeFavorite(item.id);
                         props.setTotal(props.total - item.price * item.quanity);
                         item.quanity = 1;
                    }} />
                    <marquee>{item.name}</marquee>
                    <img src={item.product} alt="" />
                    <h3>{item.price * item.quanity}֏</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi laboriosam consequatur accusamus suscipit illo.</p>
                    <Counter quanity={item} />
                    {!props.cart.includes(item) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-cart-plus"
                      viewBox="0 0 16 16"
                      onClick={() => {
                        if (!props.cart.includes(item)) {
                          props.addCart(item);
                          props.setTotal(props.total + item.price);
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
                      class="bi bi-cart-check"
                      viewBox="0 0 16 16"
                      onClick={() => {
                        props.removeCart(item.id);
                        props.setTotal(props.total - item.price * item.quanity);
                        item.quanity = 1;
                    }}
                    >
                      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  )}
                </div>
            })}
        </div>
    </div>
  )
}