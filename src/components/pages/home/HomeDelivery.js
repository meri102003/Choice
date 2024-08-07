import { useState } from "react";

export default function HomeDelivery() {
    const deliverylist = [
        {
            id : Math.random(),
            region : 'Arabkir',
            km : 7 
        },
        {
            id : Math.random(),
            region : 'Shengavit',
            km : 14 
        },
        {
            id : Math.random(),
            region : 'Kentron',
            km : 3 
        },
        {
            id : Math.random(),
            region : 'Ajapnyak',
            km : 6 
        },
        {
            id : Math.random(),
            region : 'Arabkir',
            km : 7 
        },
        {
            id : Math.random(),
            region : 'Davtashen',
            km : 9 
        },
        {
            id : Math.random(),
            region : 'Qanaqer-Zeytun',
            km : 13 
        },
        {
            id : Math.random(),
            region : 'Malatia',
            km : 11 
        },
        {
            id : Math.random(),
            region : 'Nor Norq',
            km : 16 
        },
        {
            id : Math.random(),
            region : 'Erebuni',
            km : 10 
        },
        {
            id : Math.random(),
            region : 'Avan',
            km : 11 
        },
        {
            id : Math.random(),
            region : 'Nubarashen',
            km : 19 
        },
    ];
    const [actualKm, setActualKm] = useState('');
    const [actualPrice, setActualPrice] = useState(0);
  return (
    <div className='home_delivery_container'>
        <h2 className="title" data-aos="fade-up">Delivery</h2>
        <h4 data-aos="fade-right">Calculate delivery fee</h4>
        <div className="delivery_calculate" data-aos="fade-right">
            <select value={actualKm == '' ? 'Choose Region' : actualKm} onChange={(e) => {
                setActualKm(e.target.value);
            }}>
                <option selected disabled>Choose Region</option>
                {deliverylist.map(delivery => {
                    return <option key={delivery.id}>{delivery.region}</option>
                })}
            </select>
            <input type="text" style={{pointerEvents : 'none'}} placeholder="km/h" value={actualKm !== '' ? deliverylist[deliverylist.findIndex(item => item.region == actualKm)].km + 'km' : ''} />
            <button onClick={() => {
                if(actualKm !== '') {
                    if(parseInt(deliverylist[deliverylist.findIndex(item => item.region == actualKm)].km) >= 3) {
                        setActualPrice(600 + ((deliverylist[deliverylist.findIndex(item => item.region == actualKm)].km - 3) * 100))
                    }
                }
            }}>Generate</button>
            <input type="text" style={{pointerEvents : 'none'}} placeholder="0.00֏" value={actualPrice + '.00֏'} />
        </div>
    </div>
  )
}