import React, { useState, useEffect, useContext } from 'react';
import { cardLogos } from './cardLogos';
import types from 'creditcards-types';
import { Context } from '../../actual components/Context';

const CardChecker = ({ cardNumber }) => {
    const [logo, setLogo] = useState();
    const props = useContext(Context);

    useEffect(() => {
        if (cardNumber.length >= 4) {
            const cardType = types.find(type => type.test(cardNumber, true)); 
            if (cardType) {
                props.setType(cardType.name);
                setLogo(cardLogos[cardType.name] || cardLogos['Foreign']);
            } else {
                props.setType('Foreign');
                setLogo(cardLogos['Foreign']);
            }
        } else {
            props.setType('Foreign');
            setLogo(cardLogos['Foreign']);
        }
    }, [cardNumber]);

    return (
        <div>
            {props.type === 'Foreign' ? (
                <h3>{props.type}</h3>
            ) : (
                <img
                    src={logo.url}
                    alt="Card Logo"
                    style={{ width: logo.width, height: logo.height }}
                />
            )}
        </div>
    );
}

export default CardChecker;
