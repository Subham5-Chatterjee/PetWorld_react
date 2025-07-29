import React, { useContext, useEffect, useState } from "react";
import "../css/checkout.css";
import BillingForm from "../components/common/BillingForm";
import PaymentMethod from "../components/ui/PaymentMethod";
import paymentMethoddata from "../mockData/paymentMethodData.json";
import CheckoutCartItems from "../components/ui/CheckoutCartItems";
import { generateOrderId } from "../utils/generateOrderId";
import { useNavigate } from "react-router";

const Checkout = () => {
  // const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    appartment: "",
    city: "",
    country: "",
    phone: "",
    state: "",
    zip: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const navigate = useNavigate();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethoddata[0].id
  );

  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (!data) {
      navigate("/cart");
    } else {
      setCartItems(data);
    }
  }, [navigate]);

  // Block rendering until orderDetails is loaded or redirected
  if (!cartItems) return null;

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleSubTotal = cartItems.reduce(
    (sum, item) => sum + item?.price?.sale * item?.quantity,
    0
  );
  console.log("cartItems", cartItems, handleSubTotal);

  const handlePlaceOrder = () => {
    setLoading(true);
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.country ||
      !formData.phone ||
      !formData.state ||
      !formData.zip
    ) {
      setErrorMsg("Please fill in all required fields.");
      setLoading(false);
      return;
    }
    const orderId = generateOrderId();
    if (orderId) {
      setTimeout(() => {
        localStorage.setItem(
          "orderDetails",
          JSON.stringify({
            orderId: orderId,
            shippingDetails: formData,
            cartItems: cartItems,
            selectedPaymentMethod: selectedPaymentMethod,
            totalPrice: handleSubTotal,
          })
        );
        setLoading(false);
        setSuccessMsg(true);
        navigate("/thank-you");
      }, 1000);
    }

    setErrorMsg("");
    console.log(
      "Order placed with data:",
      formData,
      cartItems,
      selectedPaymentMethod
    );
    console.log("Selected payment method:", selectedPaymentMethod);
  };

  return (
    <section className="billing_details">
      <div className="container my-5">
        <div className="row">
          {/* <!-- Billing Details --> */}
          <div className="col-lg-7">
            <div className="form-section billing_details_info">
              <h4>Billing details</h4>
              <div>
                <BillingForm
                  errorMsg={errorMsg}
                  handleInputChange={handleInputChange}
                  formData={formData}
                />
              </div>
            </div>
            <div className="payment_details_info mt-4">
              {paymentMethoddata.map((pmntMethod) => (
                <PaymentMethod
                  key={pmntMethod.id}
                  pmntMethod={pmntMethod}
                  selectedPaymentMethod={selectedPaymentMethod}
                  handlePaymentMethodChange={handlePaymentMethodChange}
                />
              ))}
            </div>
          </div>

          {/* <!-- Order Summary --> */}
          <div className="col-lg-5">
            <div className="order-summary">
              <h5>
                Order Summary{" "}
                <span style={{ fontSize: "1.4rem" }}>
                  ({`${cartItems.length} Items`})
                </span>
              </h5>
              {cartItems?.map((item) => (
                <CheckoutCartItems key={item?.id} cartItems={item} />
              ))}

              <div className="d-flex justify-content-between sub-details">
                <span>Subtotal</span>
                <span className="subtotal_price">
                  ${handleSubTotal.toFixed(2)}
                </span>
              </div>
              <div className="d-flex justify-content-between shipping_info">
                <span>Shipping</span>
                <span className="shipping_price">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between total_value">
                <strong>Total</strong>
                <strong className="total-price">
                  ${(handleSubTotal + 0.0).toFixed(2)}
                </strong>
              </div>
              <p className="mt-3 policy_info">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our &nbsp;
                <strong>
                  <a href="#">privacy policy</a>
                </strong>
                .
              </p>
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="btn w-100 mt-3 checkout_order_btn"
              >
                {loading ? "Loading..." : "Place Order"}
              </button>
              {successMsg && (
                <div className="alert alert-success mt-3" role="alert">
                  Order placed successfully! Your order ID is:{" "}
                  {JSON.parse(localStorage.getItem("orderDetails")).orderId}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
