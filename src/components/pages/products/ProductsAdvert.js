import Aos from "aos"; 
import "aos/dist/aos.css"; 
import { useEffect } from "react"; 
 
export default function ProductsAdvert() { 
  useEffect(() => { 
    Aos.init({ duration: 1000 }); 
}, []); 
  const advertList = [ 
    { 
      id : Math.random(), 
      picture : 'pictures/product.advert/product.advert.webp', 
    }, 
    { 
      id : Math.random(), 
      picture : 'pictures/product.advert/product.advert2.jpg', 
    }, 
    { 
      id : Math.random(), 
      picture : 'pictures/product.advert/product.advert3.jpg', 
    }, 
  ] 
  return ( 
    <div className="products_advert_container" data-aos="fade-left"> 
        {advertList.map(advert => { 
          return <div className="products_advert_item" key={advert.id} style={{background : `url(${advert.picture}) no-repeat center / cover`}}></div> 
        })} 
    </div> 
  ) 
}