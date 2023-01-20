import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
// import required modules
import {Autoplay, Navigation, EffectFlip, EffectFade, Mousewheel, Pagination, Keyboard } from "swiper";


export default function Portfolio () {


    return(
        <>
         <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent works</span>
      
      <Swiper
       className="mySwiper portfolio__container container"
      spaceBetween={30}
      effect={"flip"}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={
        {nextEl: '.swiper-button-next',
        prevEl:  '.swiper-button-prev',}
      }
    
        mousewheel={true}
        keyboard={true}
        modules={[EffectFade,EffectFlip, Navigation, Autoplay, Mousewheel, Pagination, Keyboard]}
        
       >
        {/* <!--==================== PORTFOLIO 1 ====================--> */}
        <SwiperSlide className="portfolio__content grid">
        <img src="https://images.unsplash.com/photo-1674062325556-f2528e4a6fbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="portfolio__img" />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Modern Website</h3>
            <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.
            </p>
            <a href="#" rel="noreferrer" className="button button--flex button--small portfolio__button">
              Demo
              <i className="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </SwiperSlide >
        {/* { <!--==================== PORTFOLIO 2 ====================-->} */}
         <SwiperSlide className="portfolio__content grid">
          <img src="https://images.unsplash.com/photo-1674062325556-f2528e4a6fbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="portfolio__img" />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Modern Website</h3>
            <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.
            </p>
            <a href="#" rel="noreferrer" className="button button--flex button--small portfolio__button">
              Demo
              <i className="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </SwiperSlide>
         {/* <!--==================== PORTFOLIO 3 ====================--> */}
        <SwiperSlide className="portfolio__content grid">
          <img src="https://images.unsplash.com/photo-1673993446290-d5bbb7e02bb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="portfolio__img" />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Modern Website</h3>
            <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.
            </p>
            <a href="#" rel="noreferrer" className="button button--flex button--small portfolio__button">
              Demo
              <i className="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </SwiperSlide> 
        <i className="swiper-button-next uil uil-angle-right" />
        <i className="swiper-button-prev uil uil-angle-left" />
      </Swiper>

    </section>
      </>
    )
}

