import React, { useEffect, useState } from "react";
//import "../css/produc-details.css";
import { useParams } from "react-router";
import Products from "../mockData/products.json";
import { renderStars } from "../utils/renderStars";
import { handleAddToCart } from "../utils/addToCart";
import { ToastContainer } from "react-toastify";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const productDetails = Products?.products?.find(
    (product) => product.id === id
  );

  const {
    title,
    longDescription,
    category,
    price,
    review,
    shortDescription,
    socialShare,
    thumbnailImage,
    type,
  } = productDetails || {};

  const { regular, sale } = price || {};

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <section className="product_details">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-md-6 text-center" id="product-thumb">
            <div className="product-thumb-inner">
              <img
                src={`/${productDetails?.gallery[0]}`}
                alt={title}
                className="product-img"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="pr0duct_details-info">
              <h3 className="product-title">{title}</h3>
              <div className="d-flex align-items-center mb-3 rating-container">
                <div className="rating me-2">{renderStars(review)}</div>
                <span className="fw-semibold text-muted" id="product-rating">
                  {review} <span>(10k)</span>
                </span>
              </div>
              <p className="mb-5 product-short-description">
                {shortDescription}
              </p>
              <div className="d-lg-flex align-items-center justify-content-between gap-3">
                <div className="price-wrapper d-flex justify-content-start align-items-center gap-3">
                  <div className="">
                    <div className="price-old" id="product-regular-price">
                      ${regular}
                    </div>
                    <div className="price-new" id="product-sale-price">
                      ${sale}
                    </div>
                  </div>
                  <div className="quantity-box" id="product-quantity">
                    <button className="btn-minus" onClick={handleDecrement}>
                      <i className="fa fa-minus-circle" aria-hidden="true"></i>
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      id="quantity"
                      readOnly
                    />
                    <button className="btn-plus" onClick={handleIncrement}>
                      <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <ToastContainer position="bottom-right" />
                <div className="d-flex align-items-center justify-content-between btn-wrapper gap-3">
                  <button
                    className="btn rounded-pill btn-addto-cart"
                    onClick={() => handleAddToCart(productDetails, quantity)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              <div className="info-box">
                <p>
                  <strong>Free Delivery</strong>
                  <br />
                  <small>
                    Enter your postal code for Delivery Availability
                  </small>
                </p>
                <hr />
                <p>
                  <strong>Return Delivery</strong>
                  <br />
                  <small>
                    Free 30 Days Delivery Returns. <a href="#">Details</a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-2">
          <div className="col-12 widget-tabs">
            <ul
              className="nav nav-tabs widget-menu-tab"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="desc-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#desc"
                  type="button"
                  role="tab"
                >
                  Product Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="return-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#return"
                  type="button"
                  role="tab"
                >
                  Return Policy
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="addinfo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#addinfo"
                  type="button"
                  role="tab"
                >
                  Additional Information
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade active show"
                id="desc"
                role="tabpanel"
                aria-labelledby="desc-tab"
                tabIndex="0"
              >
                <div className="widget-content-inner">
                  <div className="">
                    <p className="mb_30">{longDescription}</p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="return"
                role="tabpanel"
                aria-labelledby="return-tab"
                tabIndex="0"
              >
                <div className="widget-content-inner">
                  <p>
                    You can return most items within 30 days of delivery for a
                    full refund. Products must be returned in their original
                    packaging with all accessories included.
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="addinfo"
                role="tabpanel"
                aria-labelledby="addinfo-tab"
                tabIndex="0"
              >
                <div className="widget-content-inner tf-product-des-demo">
                  <p>
                    This product is covered by a 1-year limited warranty. For
                    support and service, please refer to the user manual or
                    contact customer care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
