// import "../../css/hot-selling-product.css";
import Products from "../../mockData/products.json";
import { handleAddToCart } from "../../utils/addToCart";
import ProductCard from "./ProductCard";
import { ToastContainer, toast } from "react-toastify";

export default function Hotproduct() {
  const hotestProduct = Products?.products.filter((product) => product.hotest);
  return (
    <section className="hot-selling-product">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="mx-auto text-center">
              Today’s New Hottest Product Available Now
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <ToastContainer position="bottom-right" />
        <div className="row">
          <div className="col-12">
            <div className="cus-container mx-auto d-flex">
              {hotestProduct.map((product) => (
                <ProductCard
                  key={product?.id}
                  onClick={() => handleAddToCart(product, 1)}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
