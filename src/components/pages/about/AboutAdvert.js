import { useEffect } from "react"; 
import Aos from "aos"; 
import "aos/dist/aos.css"; 
import { aboutlist } from "./aboutlist"; 


 
export default function AboutAdvert() { 
  useEffect(() => { 
    Aos.init({ duration: 2000 }); 
  }, []); 
 
  return ( 
    <div className="about_advert_container" data-aos="fade-up"> 
      <div className="about_welcome" data-aos="fade-down"> 
        About us 
      </div> 
      <div className="about_advert_content"> 
        <div className="about_items"> 
          <div className="about_overlay"> 
            <h2 data-aos="fade-right">Choice Supermarket About</h2> 
            <p data-aos="fade-left"> 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ut 
              praesentium vitae. Deserunt quidem dolores minus quis animi esse 
              reprehenderit dolorum enim, ipsa, alias at natus similique omnis 
              itaque minima repudiandae facilis est deleniti corporis! Nulla 
              enim nisi accusantium dolorem. 
            </p> 
          </div> 
        </div> 
        <div className="about_content"> 
          {aboutlist.map((about, i) => ( 
            <div className="about_item" key={about.id} data-aos="fade-up"> 
              <h2 className="title" data-aos="zoom-in"> 
                {about.name} 
              </h2> 
              <div className="about_side"> 
                <div 
                  className="about_item_picture" 
                  data-aos="flip-left" 
                  data-aos-duration="1000" 
                > 
                  <img src={about.picture} alt={about.name} /> 
                </div> 
                <p data-aos="fade-up">{about.content}</p> 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
    </div> 
  ); 
}