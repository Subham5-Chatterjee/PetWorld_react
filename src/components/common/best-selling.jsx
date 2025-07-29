import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "../../css/hot-selling-product.css";
import ProductCard from "./ProductCard";
import Products from "../../mockData/products.json";
import { handleAddToCart } from "../../utils/addToCart";
import { ToastContainer } from "react-toastify";

export default function Bestselling() {
  return (
    <section className="best-selling-product" id="best-product">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="mx-auto text-center">
              Best Selling Product for <br />
              Your Pet
            </h3>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
      <Swiper
        className="container"
        autoplay={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={1.2}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            pagination: false,
          },
          576: {
            slidesPerView: 2,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20,
          },
        }}
      >
        {Products?.products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              onClick={() => handleAddToCart(product, 1)}
              product={product}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
