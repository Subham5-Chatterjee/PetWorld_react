import React, { useEffect, useState } from "react";
import "../css/thank-you.css";
import { useNavigate } from "react-router";

const ThankYou = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orderDetails"));
    if (!data || !data.orderId) {
      navigate("/cart");
    } else {
      setOrderDetails(data);
    }
  }, [navigate]);

  // Block rendering until orderDetails is loaded or redirected
  if (!orderDetails) return null;

  const { orderId, shippingDetails, selectedPaymentMethod, totalPrice } =
    orderDetails;
  const { email, phone, address, appartment, city, country, state, zip } =
    shippingDetails;

  const handleContinueShop = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("orderDetails");
    window.dispatchEvent(new Event("cartUpdated"));
    navigate("/product");
  };

  return (
    <section className="thank_you_info">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="text-center out-section">
              <h5>Order placed</h5>
              <p>
                You'll receive an email when your items are shipped. If you have
                any questions, Contact us test@petworld.com
              </p>
            </div>

            <div className="order_details rounded-3">
              <div className="">
                <div className="row">
                  <div className="thaks_heading d-flex align-items-center pb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#12be1f"
                      className="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                    </svg>
                    <span className="ps-3">
                      <p className="order_id">Order #{orderId}</p>
                      <p className="customer_name">Thank you John!</p>
                    </span>
                  </div>
                  <h3 className="order_det_heading pb-4">
                    Customer Information
                  </h3>
                  <div className="col-md-6">
                    <div className="ship_address_det mb-3">
                      <h4 className="my-3">Shipping address</h4>
                      <p>
                        {email}
                        <br />
                        {phone}
                        <br />
                        {address} {appartment}, {zip},<br /> {city},<br />
                        {country}, {state}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bill_address_det mb-3">
                      <h4 className="my-3">Billing address</h4>
                      <p>
                        {email}
                        <br />
                        {phone}
                        <br />
                        {address} {appartment}, {zip},<br /> {city},<br />
                        {country}, {state}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="ship_method_det ">
                      <h4 className="my-3">Shipping method</h4>
                      <p>UPSP - $0.00</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="payment_method_det">
                      <h4 className="my-3">Payment method</h4>
                      <p>
                        {selectedPaymentMethod} -{" "}
                        <span className="fw-bold text-dark">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-5 align-items-center">
              <div className="col-6">
                <i className="fa fa-question-circle" aria-hidden="true"></i>
                <p className="help_link d-inline-block m-0">
                  Need help?{" "}
                  <a href="#" className="text-primary text-decoration-none">
                    Contact us
                  </a>
                </p>
              </div>
              <div className="col-6 text-end mb-md-0b">
                <button
                  type="submit"
                  className="btn btn-primary shopping_btn"
                  onClick={handleContinueShop}
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
