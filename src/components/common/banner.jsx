import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "../../css/banner.css";
import heroBanners from "../../mockData/heroBanners.json";

function Banner() {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="banner-slider"
    >
       {heroBanners.map((banner)=> (
      <SwiperSlide>
       
          <div className="swiper-slide hero-slide">
            <img src={banner?.image} alt="" className="d-block w-100" />
            <div className="container bannerSlider d-flex flex-column flex-md-row align-items-center justify-content-between">
              <div className="hero-content text-start text-md-start">
                <h1>{banner?.heading}</h1>
                <p>{banner?.description}</p>
                <div className="hero-buttons">
                  <a href={banner?.buttonLink} className="btn px-4">
                    {banner?.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
      </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
