import React, { useContext } from "react";
import { Context } from "./Context";

export default function Counter({ quanity }) {
  const props = useContext(Context);
  return (
    <div className="counter_block">
      <button onClick={() => {
        if(quanity.quanity > 1) {
          props.setCount((quanity.quanity -= 1));
          props.setTotal(props.total - quanity.price);
        }
      }}>-</button>
      <span>{quanity.quanity}</span>
      <button
        onClick={() => {
          props.setCount((quanity.quanity += 1));
          props.setTotal(props.total + quanity.price);
        }}
      >+</button>
    </div>
  )
}