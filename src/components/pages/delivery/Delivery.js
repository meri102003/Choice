import React from "react";
import "./Delivery.css";
import HomeDelivery from "../home/HomeDelivery";
import DeliveryMap from "./DeliveryMap";
export default function Delivery() {
  return (
    <div className="delivery_container">
      <div className="delivery_img" ></div>
      <div className="delivery_content" data-aos="fade-up">
        <p>Welcome to the delivery section of Choice supermarket!</p>
      </div>
      <HomeDelivery />
      <DeliveryMap />
      <h2 data-aos="fade-up">
        Thank you for shopping with us at Choice. We're here to make your
        shopping experience enjoyable and convenient. See you again soon!
      </h2>
    </div>
  );
}
