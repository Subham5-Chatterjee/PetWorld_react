import React from "react";

const BestSellingCard = () => {
  return (
    <div class="swiper-slide">
      <div class="single-product">
        <img src={bestone} alt="" class="img-fluid" />
        <div class="product-details">
          <h6>Kitten Play Toy</h6>
          <div class="product-revew">
            <span class="revw-rating mt-0">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>

            <span> 4.5 (30)</span>
            <div class="price">
              <span class="sale-price">$ 99.99</span>
              <span class="regular-price">$129.99</span>
            </div>
            <div class="product_btn">
              <a href="#" class="btn pro-btnoffer">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingCard;
