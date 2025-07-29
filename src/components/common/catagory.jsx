// import "../../css/catagory.css";
import Products from "../../mockData/products.json";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

function Catagory() {
  const categoryMap = new Map();

  Products.products.forEach((product) => {
    const category = product.category;
    if (category && !categoryMap.has(category.slug)) {
      categoryMap.set(category.slug, {
        name: category.name,
        thumbnail: category.thumbnail,
      });
    }
  });

  const uniqueCategories = Array.from(categoryMap.entries()).map(
    ([slug, value]) => ({
      slug,
      name: value.name,
      thumbnail: value.thumbnail,
    })
  );

  console.log(uniqueCategories);

  return (
    <section className="categories-part">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="mx-auto text-center">
              Check Out The Most Popular Categories
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 categories-section">
            <Swiper
              loop={true}
              slidesPerView={6}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                  enabled: false,
                },
              }}
              modules={[Pagination]}
              className="mySwipe m-0 d-flex"
            >
              {uniqueCategories?.map((category) => (
                <SwiperSlide key={category.slug}>
                  <>
                    <div className="category-info">
                      <Link
                        to={`/product?category=${category.slug}`}
                        className="d-flex align-items-center"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <div className="info_one">
                          <div className="cate_data">
                            <h6 style={{ textTransform: "uppercase" }}>
                              {category?.name}
                            </h6>
                            <div className="cate-count">
                              <p>
                                Product <span>10</span>
                              </p>
                            </div>
                          </div>
                          <div className="cate_img">
                            <img
                              src={category?.thumbnail}
                              alt=""
                              className="w-100 d-block"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catagory;
