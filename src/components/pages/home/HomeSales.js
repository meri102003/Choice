import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useContext } from "react";
import { Context } from "../../actual components/Context";
import { Link } from "react-router-dom";
import { useEffect } from "react"; 
import Aos from "aos"; 
import "aos/dist/aos.css"; 


export default function HomeSales() {
  useEffect(() => { 
    Aos.init({ duration: 2000 }); 
  }, []); 
  const sliderForSlideList = [
    {
      category: "Alcoholic drinks",
      pictureslist: [
        "pictures/products/alcoholic14.jpg",
        "pictures/products/alcoholic13.webp",
        "pictures/products/alcoholic15.avif",
        "pictures/products/alcoholic16.jpg",
      ],
      id: Math.random(),
      anim: "fade-right",
    },
    {
      category: "Bakery",
      pictureslist: [
        "pictures/products/bakery1.jpg",
        "pictures/products/bakery2.webp",
        "pictures/products/bakery3.jpg",
        "pictures/products/bakery4.jpg",
      ],
      id: Math.random(),
      anim: "fade-left",
    },

    {
      category: "Fruit & Vegetables",
      pictureslist: [
        "pictures/products/fruits5.jpg",
        "pictures/products/fruits6.jpg",
        "pictures/products/fruits7.jpg",
        "pictures/products/fruits8.webp",
      ],
      id: Math.random(),
      anim: "fade-right",
    },

    {
      category: "Juices",
      pictureslist: [
        "pictures/products/juice10.jpg",
        "pictures/products/juice11.jpeg",
        "pictures/products/juice12.png",
        "pictures/products/juice9.jpeg",
      ],
      id: Math.random(),
      anim: "fade-left",
    },
  ];
  const props = useContext(Context);
  return (
    <div className="home_sales">
      <div className="sales__container">
        {sliderForSlideList.map((slide) => {
          return (
            <Swiper
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{ delay: 4500 }}
              loop="true"
              key={Math.random()}   
              data-aos={slide.anim} 
            >
              <h2>{slide.category}</h2>
              {slide.pictureslist.map((item) => {
                return (
                  <SwiperSlide key={Math.random()}>
                    <Link to="/Products">
                      <div
                        className="category"
                        onClick={() => {
                          props.filtering(slide.category);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <div
                          className="slide_picture"
                          style={{
                            background: `url(${item}) no-repeat center center / cover`,
                          }}
                        ></div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          );
        })}
      </div>
    </div>
  );
}
