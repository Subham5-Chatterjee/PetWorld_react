import reviewImg from "../../assets/revw1.png";
// import "../../css/review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import REVIEWS from "../../mockData/reviews.json";
import ReviewsCard from "./ReviewsCard";

function Reviewpart() {
  return (
    <section class="review_part">
      <div class="container">
        <h3 class="text-center">What Pet Parents Are Saying</h3>
        <h6 class="text-center">
          Hear from pet lovers who choose PetWorld <br />
          for quality, care, and convenience.
        </h6>
      </div>
      <div class="container">
        <div class="cus-container mx-auto">
          <div class="revw_sec">
            <Swiper
              className="container"
              autoplay={true}
              loop={true}
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={3}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {REVIEWS?.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewsCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviewpart;
