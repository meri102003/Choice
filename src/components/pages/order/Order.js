import React, { useContext, useState } from "react";
import "./Order.css";
import { Context } from "../../actual components/Context";
import CardChecker from "./CardChecker";
import { cardLogos } from "./cardLogos";
import Aos from "aos"; 
import "aos/dist/aos.css"; 
import { useEffect } from "react"; 


export default function Order() {
    useEffect(() => { 
        Aos.init({ duration: 2000 }); 
      }, []); 
     
    const props = useContext(Context);
    const [flip, setFlip] = useState(false);
    const [cardNum, setCardNum] = useState(Array(16).fill("#"));
    const [cvv, setCvv] = useState(Array(3).fill('#'));
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("MM/YY");
    const [isValidDate, setIsValidDate] = useState(true);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const dateValid = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    const cardType = props.type;
    const cardLogo = cardLogos[cardType] || {};

    const numberChange = (e) => {
        const cleanedCardNumber = e.target.value.replace(/\D/g, "").slice(0, 16);
        setCardNumber(cleanedCardNumber);

        const updatedCardNum = [
            ...cleanedCardNumber.split(""),
            ...Array(16 - cleanedCardNumber.length).fill("#"),
        ];
        setCardNum(updatedCardNum);
    };

    const cvvChange = (e) => {
        if (e.target.value.length > 3) {
            e.target.value = e.target.value.slice(0, 3);
        } else {
            const inputCardCvv = e.target.value;
            const cleanedCardCvv = inputCardCvv.replace(/\D/g, "");
            const formattedCardCvv = cleanedCardCvv.slice(0, 3);

            const updatedCardCvv = [
                ...formattedCardCvv.split(""),
                ...Array(3 - formattedCardCvv.length).fill("#"),
            ];
            setCvv(updatedCardCvv);
        }
    };

    const formatExpiryDate = (value) => {
        const cleaned = value.replace(/\D/g, "");
        if (cleaned.length <= 3) {
            return cleaned;
        }
        return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    };

    const validateExpiryDate = (dateStr) => {
        if (!dateStr.match(dateValid)) return false;

        const [month, year] = [dateStr.slice(0, 2), dateStr.slice(3)];
        const expMonth = parseInt(month, 10);
        const expYear = parseInt(year, 10) + 2000;
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        return expYear > currentYear || (expYear === currentYear && expMonth >= currentMonth);
    };

    const dateValidChecker = (e) => {
        const value = e.target.value;
        const formattedDate = formatExpiryDate(value);
        setExpiryDate(formattedDate);
        setIsValidDate(validateExpiryDate(formattedDate));
    };

    function sanitizeName(e) {
        if (e.target.placeholder === 'Name') {
            const trimmedInput = e.target.value.trim();
            const cleanedInput = trimmedInput.replace(/\s+/g, ' ');
            return setName(cleanedInput);
        }
        else {
            const trimmedInput = e.target.value.trim();
            const cleanedInput = trimmedInput.replace(/\s+/g, ' ');
            return setSurname(cleanedInput);
        }
    }


    return (
        <div className="order_container" data-aos="fade-down">
            <h2>Order Now</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel
                excepturi cumque quaerat eveniet debitis tenetur facere consequuntur
                harum quos voluptatum, error deleniti unde ab voluptas? Minus
                exercitationem reprehenderit maiores.
            </p>
            <div className="order_cart_options"  data-aos="fade-down">
                {props.cart.length === 0 ? (
                    <h2>Cart is Empty</h2>
                ) : (
                    props.cart.map((cart, i) => (
                        <div className="order_cart_options_item" key={cart.id}>
                            <span>{i + 1}.</span>
                            <span>{cart.name} x {cart.quanity}</span>
                            <span>{cart.price * cart.quanity}֏</span>
                        </div>
                    ))
                )}
            </div>
            <div className="order_content">
                <div className="order_fieldback" data-aos="fade-right">
                    <p>Please fill all fields*</p>
                    <form onKeyDown={(e) => e.key === 'Enter' && !isValidDate ? e.preventDefault() : ''}>
                        <label>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                required={true}
                                onChange={(e) => sanitizeName(e)}
                                onFocus={() => setFlip(false)}
                            />
                            <input
                                type="text"
                                placeholder="Surname"
                                value={surname}
                                required={true}
                                onChange={(e) => sanitizeName(e)}
                                onFocus={() => setFlip(false)}
                            />
                        </label>
                        <input
                            type="text"
                            placeholder="####-####-####-####"
                            pattern="[0-9]*"
                            minLength='16'
                            value={cardNumber}
                            required={true}
                            onChange={numberChange}
                            onFocus={() => setFlip(false)}
                        />
                        <label>
                            <label>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    value={expiryDate !== 'MM/YY' ? expiryDate : ''}
                                    minLength='5'
                                    maxLength='5'
                                    required={true}
                                    onChange={dateValidChecker}
                                    onFocus={() => setFlip(false)}
                                />
                                {expiryDate.length >= 4 ? !isValidDate && <p className="error">Invalid expiry date</p> : ''}
                            </label>
                            <input
                                type="number"
                                placeholder="###"
                                minLength='3'
                                maxLength="3"
                                required={true}
                                onFocus={() => setFlip(true)}
                                onInput={(e) => cvvChange(e)}
                            />
                        </label>
                        <input
                            type="text"
                            placeholder={`${props.total}֏`}
                            className="grand_total_block"
                            readOnly

                        />
                        <button type="submit" style={{ pointerEvents: !isValidDate ? 'none' : 'unset' }}>Pay Now</button>
                    </form>
                </div>
                <div className="order_card" data-aos="fade-left">
                    <div className="card">
                        <div
                            className="card_front"
                            style={{
                                transform: flip ? 'perspective(1000px) rotateY(180deg)' : undefined,
                                background: `url(${cardLogo.bg}) no-repeat center/cover`,
                            }}
                        >
                            <div className="overlay_black"></div>
                            <div className="top_block">
                                <CardChecker cardNumber={cardNumber} />
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/9405/9405759.png"
                                    alt="Card Logo"
                                />
                            </div>
                            <div className="card_numbers">
                                {cardNum.map((digit, index) => (
                                    <h2
                                        key={index}
                                        className={((index + 1) % 4 === 0 && index + 1 !== cardNum.length) ? "card__active" : ""}
                                    >
                                        {digit}
                                    </h2>
                                ))}
                            </div>
                            <div className="order_date">
                                <span>Valid Date</span>
                                <p>{expiryDate !== '' ? expiryDate : 'MM/YY'}</p>
                            </div>
                            <h3>{name ? name.toUpperCase() : 'NAME'} {surname ? surname.toUpperCase() : 'SURNAME'}</h3>
                        </div>
                        <div
                            className="card_back"
                            style={{ transform: flip ? 'perspective(1000px) rotateY(360deg)' : undefined }}
                        >
                            <div className="overlay_black">
                                <div className="top_bar">THALES SHA U11774585A 1021</div>
                                <div className="black_line"></div>
                                <div className="cvv_block">
                                    <div className="cvv_line">
                                        <input
                                            type="text"
                                            placeholder=''
                                            value={cvv.join('')}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <img
                                    src="https://www.pinclipart.com/picdir/big/523-5233658_columbidae-silhouette-dove-clip-art-png-download.png"
                                    alt="Card Back Image"
                                    className="bird"
                                />
                                <p>AUTHORIZED SIGNATURE / NOT VALID UNLESS SIGNED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order_picture"></div>
        </div>
    );
}
