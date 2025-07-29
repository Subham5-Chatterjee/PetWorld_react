import React, { useEffect, useRef, useState } from "react";
import "../css/cart.css";
import { Link } from "react-router";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(getCart);
    isMounted.current = false;
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
    }
  }, [cart]);

  const handleRemoveItem = (id) => {
    console.log(cart);
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleQuantity = (id, delta) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleCartTotal = cart.reduce(
    (sum, item) => sum + item?.price?.sale * item?.quantity,
    0
  );

  return (
    <section className="cart_details">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="card p-4">
              <h5 className="mb-4">Shopping Cart</h5>
              <div className="table-responsive">
                <table className="table align-middle cart-table">
                  <thead className="">
                    <tr>
                      <th scope="col">Products</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Sub-total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center">
                          <h2 className="my-5 bg-danger text-white py-4 ">
                            Your Cart is empty!
                          </h2>
                        </td>
                      </tr>
                    ) : (
                      cart.map((item) => (
                        <tr key={item}>
                          <td>
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-sm btn-light me-3 text-danger border border-0 delete-btn"
                                onClick={() => handleRemoveItem(item?.id)}
                              >
                                <strong>×</strong>
                              </button>
                              <img
                                src={item?.thumbnailImage}
                                alt={item?.title}
                                className="img-fluid cart_image"
                              />
                              <div className="ms-3 cart_product_info">
                                <p className="mb-0">
                                  <Link
                                    to={`/product/${item?.id}`}
                                    className="text-decoration-none text-dark"
                                  >
                                    {item?.title}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-muted strike me-1">
                              ${item?.price?.regular.toFixed(2)}
                            </span>
                            <strong>
                              <p>${item?.price?.sale.toFixed(2)}</p>
                            </strong>
                          </td>
                          <td>
                            <div className="quantity-selector">
                              <button
                                className="btn-minus"
                                onClick={() => handleQuantity(item?.id, -1)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                value={item?.quantity}
                                id="quantity"
                                readOnly
                              />
                              <button
                                className="btn-plus"
                                onClick={() => handleQuantity(item?.id, 1)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            <p>
                              <strong>
                                $
                                {(item?.price?.sale * item?.quantity).toFixed(
                                  2
                                )}
                              </strong>
                            </p>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* <!-- Buttons --> */}
              <div className="d-flex justify-content-between mt-4">
                <a href="/product" className="btn btn-return">
                  ← RETURN TO SHOP
                </a>
                {/* <a href="#" className="btn btn-updatecart">
                                UPDATE CART
                            </a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cart-total-box bg-white">
              <h5>Cart Total</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${handleCartTotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between fw-bold border-top pt-2 mt-2">
                <span>Total:</span>
                <span>${handleCartTotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="btn btn-checkout mt-3">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
