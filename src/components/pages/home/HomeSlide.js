import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { advertisment, slider } from './homeslidelist';
import { useEffect } from "react"; 
import Aos from "aos"; 
import "aos/dist/aos.css"; 


export default function HomeSlide() {
  useEffect(() => { 
    Aos.init({ duration: 2500 }); 
  }, []); 
  return (
    <div className='home_slider_container'>
      <h2>Welcome to Choice Supermarket</h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequuntur officiis quis dignissimos reiciendis necessitatibus nam repellat beatae maxime iure voluptas asperiores alias blanditiis eius aspernatur recusandae atque, ut quas at. Amet repellendus minima omnis temporibus obcaecati numquam. Dolorem sit fugit est quae perferendis, fuga quas mollitia expedita eveniet amet deleniti necessitatibus harum autem nisi reprehenderit veritatis doloribus. Ducimus, tenetur praesentium vitae repudiandae suscipit, non illo minima, maxime culpa eligendi nisi cumque laborum corrupti sunt at aliquam facere saepe? Ipsa quibusdam quaerat consequatur aspernatur optio esse libero, fugit pariatur? Necessitatibus cumque temporibus non sint nulla. Velit voluptates repellat laudantium nulla natus aliquam quas. Eaque repudiandae corrupti voluptatibus eius similique amet ipsa! Nulla atque assumenda, ex distinctio unde illo expedita fugiat reiciendis facere laboriosam aut explicabo natus aliquam optio. Iure perferendis animi, tempore eligendi eos aspernatur voluptas culpa adipisci eius temporibus dolorum reiciendis saepe beatae sunt nemo sit veniam, ea recusandae quis. Omnis tempore laborum fuga sed nostrum nulla aut nam perspiciatis ea sapiente, maxime ullam repellat laboriosam impedit optio reprehenderit doloribus esse illo minus velit sequi aliquam. Saepe deleniti voluptates repudiandae iure sint, tenetur alias laboriosam aut, magnam quis beatae, fuga pariatur accusantium facere placeat voluptate neque molestias dolor ipsum.</p>
      <div className="home_swiper">
        <Swiper
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Navigation]} 
        >
          {slider.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className="home_swiper_item" style={{ background: `url(${slide.picture}) no-repeat center / cover` }}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequuntur officiis quis dignissimos reiciendis necessitatibus nam repellat beatae maxime iure voluptas asperiores alias blanditiis eius aspernatur recusandae atque, ut quas at. Amet repellendus minima omnis temporibus obcaecati numquam. Dolorem sit fugit est quae perferendis, fuga quas mollitia expedita eveniet amet deleniti necessitatibus harum autem nisi reprehenderit veritatis doloribus. Ducimus, tenetur praesentium vitae repudiandae suscipit, non illo minima, maxime culpa eligendi nisi cumque laborum corrupti sunt at aliquam facere saepe? Ipsa quibusdam quaerat consequatur aspernatur optio esse libero, fugit pariatur? Necessitatibus cumque temporibus non sint nulla. Velit voluptates repellat laudantium nulla natus aliquam quas. Eaque repudiandae corrupti voluptatibus eius similique amet ipsa! Nulla atque assumenda, ex distinctio unde illo expedita fugiat reiciendis facere laboriosam aut explicabo natus aliquam optio. Iure perferendis animi, tempore eligendi eos aspernatur voluptas culpa adipisci eius temporibus dolorum reiciendis saepe beatae sunt nemo sit veniam, ea recusandae quis. Omnis tempore laborum fuga sed nostrum nulla aut nam perspiciatis ea sapiente, maxime ullam repellat laboriosam impedit optio reprehenderit doloribus esse illo minus velit sequi aliquam. Saepe deleniti voluptates repudiandae iure sint, tenetur alias laboriosam aut, magnam quis beatae, fuga pariatur accusantium facere placeat voluptate neque molestias dolor ipsum.</p>
      <div className="home_advert">
        {advertisment.map(advert => (
          <div className='home_advert_item' data-aos="fade-up" style={{ background: `url(${advert.picture}) no-repeat center / cover` }} key={advert.id}></div>
        ))}
      </div>
    </div>
  );
}
