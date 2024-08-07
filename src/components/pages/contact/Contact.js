import React, { useState } from "react";
import "./Contact.css";
import { IoIosPin } from "react-icons/io";
import {
  MdOutlineMailOutline,
  MdAutorenew,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsBoxSeamFill, BsSend } from "react-icons/bs";
import {
  TbReplace,
  TbMapPin2,
  TbBuildingWarehouse,
  TbShoppingCartCancel,
} from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react"; 
import Aos from "aos"; 
import "aos/dist/aos.css"; 

export default function Contact() {
  useEffect(() => { 
    Aos.init({ duration: 2000 }); 
  }, []); 
 
  const [isMessageContainerVisible, setMessageContainerVisible] =
    useState(false);

  const toggleMessageContainer = () => {
    setMessageContainerVisible(!isMessageContainerVisible);
  };

  const contactInfo = [
    {
      id: Math.random(),
      icon: <IoIosPin />,
      name: "ADDRESS",
      info1: "Northern Avenue 14",
      info2: "Armenia",
      info3: "Yerevan",
      info4: "fade-up",
    },
    {
      id: Math.random(),
      icon: <MdOutlineMailOutline />,
      name: "EMAIL",
      info1: "Drop us a message",
      info2: "E-Mail:",
      info3: "choicebigstore@gmail.com",
      info4: "fade-up",
    },
    {
      id: Math.random(),
      icon: <FaPhone />,
      name: "PHONE",
      info1: "Call Us",
      info2: "Monday – Sunday: 24/7",
      info3: "+374 77 67 56 71",
      info4: "fade-up",
    },
  ];

  const contactIcons = [
    {
      serviceIcon: <BsBoxSeamFill />,
      info4: "My Orders",
      questions: [
        "1. How can I track my online order?",
        "2. Can I place a special order for a large quantity of an item?",
        "3. Do you offer catering services or special event planning?",
      ],
      slide: "fade-right",
    },
    {
      serviceIcon: <MdAutorenew />,
      info4: "Membership Auto-Renewal",
      questions: [
        "1. How do I earn and redeem loyalty points or rewards?",
        "2.Are there any special benefits for loyalty program members?",
        "3. How can I reach customer service for further assistance?",
      ],
      slide: "fade-right",
    },
    {
      serviceIcon: <FaMoneyBillTransfer />,
      info4: "Price Adjustment",
      questions: [
        "1. Why was I charged more than expected?",
        "2. How do I request a refund for a faulty item?",
        "3. How can I use or apply discount coupons?",
      ],
      slide: "fade-left",
    },
    {
      serviceIcon: <MdOutlineManageAccounts />,
      info4: "Update Account Info",
      questions: [
        "1. What should I do if my account info is incorrect?",
        "2. Is there a way to report an update about Account Info?",
        "3. How can I provide feedback about my shopping experience?",
      ],
      slide: "fade-left",
    },
    {
      serviceIcon: <TbShoppingCartCancel />,
      info4: "Cancel Orders",
      questions: [
        "1. Can I change or cancel my order after its been placed?",
        "2.Are there any fees associated with canceling an order?",
        "3.Will I receive a confirmation once my order has been successfully canceled?",
      ],
      slide: "fade-right",
    },
    {
      serviceIcon: <TbReplace />,
      info4: "Return/Replace Order",
      questions: [
        "1. How do I start the process to return an item?",
        "2. Can I initiate a return online or do I need to visit the store?",
        "3.What should I do if the item I received is damaged or defective?",
      ],
      slide: "fade-right",
    },
    {
      serviceIcon: <TbMapPin2 />,
      info4: "Edit Shipping Address",
      questions: [
        "1. Can I edit my shipping address after placing an order but before it has shipped?",
        "2. Who should I contact if I need to change my shipping address urgently?",
        "3. How can I verify that my new address has been correctly applied to my order?",
      ],
      slide: "fade-left",
    },
    {
      serviceIcon: <TbBuildingWarehouse />,
      info4: "Find a Warehouse",
      questions: [
        "1. How can I find a warehouse location near me?",
        "2. What services are available at your warehouses?",
        "3. What are the operating hours for your warehouses?",
      ],
      slide: "fade-left",
    },
   
  ];

  return (
    <div className="contact_container">
      <div className="contant_img"></div>
      <div className="contact_content">
        <p data-aos="fade-up">HOW CAN WE HELP YOU?</p>
        <hr />
        <p data-aos="fade-up">Please feel free to get in touch with us</p>
        <div className="contact_info">
          {contactInfo.map((info) => (
            <div className="contact_item" key={info.id} data-aos={info.info4}>  
              <div className="contact_item_icon">{info.icon}</div>
              <h6>{info.name}</h6>
              <p>{info.info1}</p>
              <p>{info.info2}</p>
              <p>{info.info3}</p>
            </div>
          ))}
        </div>
        <div className="contact_footer">
          <div className="contact_footer_speech">
            <p    data-aos="fade-right">
              If you have any questions about Choice Supermarket, our products,
              services or any other interests, please feel free to get in touch
              with us. our dedicated professionals will be glad to help you.
            </p>
            <button data-aos="fade-right">DO YOU WANT TO BE CALLED?</button>
          </div>
          <img    data-aos="fade-left"
            src="https://www.auntmarthas.org/wp-content/uploads/2022/08/Featured-Image_Contact-Us-scaled-e1661879794642.jpeg"
            alt=""
          />
        </div>

        <div className="customer_service_container">
          <p data-aos="fade-up">Customer Service</p>
          <div className="customer_service">
            {contactIcons.map((icon, i) => (
              <div className="service_icon_container" key={i}  data-aos={icon.slide}>
                <div className="service_icons">{icon.serviceIcon} </div>
                <p>{icon.info4}</p>
                <div className="contact_questions_swiper">

                  <Swiper slidesPerView={1} spaceBetween={10} loop="true" modules={[Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}>
                    {
                      contactIcons[i].questions.map((item) => {
                        return <SwiperSlide key={item}><p>{item}</p></SwiperSlide>;
                      })
                    }
                  </Swiper>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer"      data-aos="fade-up">
          <div className="footer_info">
            <img src="pictures/logo.svg" alt="" />
            <hr />
            <p>Northern Avenue 14, Armenia, Yerevan </p>
            <p className="contactUs">Contact us</p>
            <p>Tel:+374 77 67 56 71</p>
            <p>Fax:+374 77 67 56 71</p>
            <p>Email:choicebigstore@gmail.com</p>
          </div>
          <div className="footer_message">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Message" />
            <button>SEND</button>
          </div>
        </div>

        <div
          className={`quick_message_container ${isMessageContainerVisible ? "visible" : ""
            }`}
        >
          <div className="quick_message_header">
            <p>Messages</p>
          </div>
          <div className="quick_message_content">
            <p>Hi! We typically reply in a few minutes.</p>
            <div className="quick_message_img"></div>
          </div>
          <div className="quick_message_field">
            <input type="email" placeholder="Email" />
            <div className="quick_message_send">
              <input type="text" placeholder="Message" />
              <div className="quick_message_icons">
                <CiFaceSmile />
                <BsSend />
              </div>
            </div>
          </div>
        </div>

        <button className="quick_message" onClick={toggleMessageContainer}>
          <AiFillMessage /> Chat
        </button>
      </div>
    </div >
  );
}
