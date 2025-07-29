import Logo from "./Logo";
// import "../../css/footer.css";
import insimg from "../../assets/ins.svg";
import facebookimg from "../../assets/facebook.svg";
import tictokimg from "../../assets/tictok.svg";
import { Link } from "react-router";

function Sitefooter() {
  return (
    <footer>
      <div className="footer_part">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer-logo">
                <Logo />
              </div>
              <p className="pet-footer">
                PetWorld is your one-stop shop for all things pets — from
                nutritious food to fun toys for dogs, cats, birds, and rabbits.
                We’re here to help your pets live healthier, happier lives with
                quality products.
              </p>
            </div>

            <div className="col-md-6 col-lg-4">
              <h6>Our Newsletter</h6>
              <div className="newsletter_info">
                <div className="">
                  <p className="">
                    <strong>
                      {" "}
                      Subscribe & Enjoy 10% off on your first order
                    </strong>
                  </p>
                  <form className="position-relative d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Your Email"
                      required
                    />
                    <button type="submit" className="btn submit_btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="row">
                <div className="col-6">
                  <h6>Our Service</h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">Help Center</Link>
                    </li>
                    <li>
                      <Link to="#">Returns &amp; Refunds</Link>
                    </li>
                    <li>
                      <Link to="#">Shipping Info</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h6>Legal</h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-2 pt-0 pt-lg-0">
              <h6>Follow Us</h6>
              <div className="social-icons mt-3 d-flex">
                <Link to="#" className="icon-circle">
                  <img src={insimg} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="icon-circle">
                  <img src={facebookimg} alt="" className="img-fluid" />
                </Link>
                <Link to="#" className="icon-circle">
                  <img src={tictokimg} alt="" className="img-fluid" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center mt-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center copyText">
              {" "}
              © 2025 PetWorls Pet Store. All Rights Reserved{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Sitefooter;
