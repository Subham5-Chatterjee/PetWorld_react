import specialimg from "../../assets/special-offer-banner.png";
import specialimgm from "../../assets/special-offer-banner-m.png";
import { Link } from "react-router";
// import "../../css/special-offer.css";

function Specialoffer({ handleScrollOffer }) {
  return (
    <section className="special-offer position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <img
              src={specialimg}
              className="d-block w-100 d-none d-md-block"
              alt=""
            />
            <img
              src={specialimgm}
              className="d-block w-100 d-block d-md-none"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container special-offer-container">
        <div className="row">
          <div className="col-12">
            <div className="special-offer-info">
              <h3>
                Everything Your Pet Needs – <br />
                From Bowls to Beds
              </h3>
              <div className="special-offerbtn">
                <button
                  onClick={handleScrollOffer}
                  type="button"
                  className="btn-offer px-4"
                >
                  GET MORE OFFER
                </button>
                <Link to="/product" className="btn-shop px-4">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialoffer;
