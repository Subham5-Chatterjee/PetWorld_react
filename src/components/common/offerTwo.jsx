import offerfour from "../../assets/offer-four.png";
import offerfive from "../../assets/offer-five.png";

// import "../../css/offer.css";

import Offercardtwo from "./Offercardtwo.jsx";

export default function Offertwo() {
  return (
    <section class="offerSec_two">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <Offercardtwo
              offerImg={offerfour}
              offertwotitle={"100% NATURALS"}
              subtitle={"Explore Your Favorite"}
              subtitle1={"Food Shop"}
              cardtwo={"offerText_two"}
              offerurl="#"
              offerbtntext={"Shop Now"}
            />
          </div>
          <div class="col-md-6">
            <div class="offerinfo position-relative">
              <img src={offerfive} class="img-fluid" alt="" />
              <div class="offerText_two">
                <p>TOP RESISTANCE FOOD</p>
                <h3>
                  Purchase Nutritious Pet
                  <br />
                  Food Products
                </h3>
                <a href="#" class="btn btnoffer">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
