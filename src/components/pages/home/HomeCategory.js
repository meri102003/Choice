import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { categorieslist } from "./homeproductslist";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../actual components/Context";
import { useEffect } from "react"; 
import Aos from "aos"; 
import "aos/dist/aos.css"; 

export default function HomeCategory() {
  useEffect(() => { 
    Aos.init({ duration: 2500 }); 
  }, []); 
const { filtering } = useContext(Context);
  return <div className="home_category_container" data-aos="fade-up" > 
        <Swiper breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1350: {
                slidesPerView: 5,
            }
          }} spaceBetween={25} loop modules={[Navigation]} navigation>
            {categorieslist.map(category => {
                return <SwiperSlide key={category.id} data-aos="fade-up">
                    <Link to='/Products' onClick={() => {
                        filtering(category.name);
                        window.scrollTo({ top : 0, behavior : 'smooth' });
                    }}>
                        <div className="home_category_item">
                            <div className="home_category_picture" style={{background : `url(${category.picture}) no-repeat center center / 50%`}}></div>
                            <h2>{category.name}</h2>
                        </div>  
                    </Link>
                </SwiperSlide>
            })}
        </Swiper> 
  </div>
}