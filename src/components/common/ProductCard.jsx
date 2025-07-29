import React from "react";
import { Link } from "react-router";
import { renderStars } from "../../utils/renderStars";

const ProductCard = ({ product, onClick }) => {
  const { thumbnailImage, title, review, price, id } = product || [];
  const { sale, regular } = price || [];
  return (
    <div className="single-product">
      <Link to={`/product/${id}`}>
        <img src={thumbnailImage} alt="" className="img-fluid" />
      </Link>
      <div className="product-details">
        <h6 className="text-truncate" style={{ maxWidth: "250px" }}>
          <Link to={`/product/${id}`}>{title}</Link>
        </h6>
        <div className="product-revew">
          {renderStars(review)}
          <span>{review} (30)</span>
          <div className="price">
            <span className="sale-price">${sale}</span>&nbsp; &nbsp;
            <span className="regular-price">${regular}</span>
          </div>
          <div className="product_btn">
            <button onClick={onClick} className="btn pro-btnoffer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
