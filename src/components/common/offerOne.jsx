import offerone from "../../assets/offer-one.png";
import offertwo from "../../assets/offer-two.png";
import offerthree from "../../assets/offer-three.png";
import offersix from "../../assets/offer-six.png";

import OfferCard from "./offercard.jsx";

// import "../../css/offer.css";

export default function Offerfirst({ ref }) {
  return (
    <section className="offerSec_one" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <OfferCard
              thubImg={offerone}
              subTitle={"100% NATURALS"}
              title1={"25% Discount"}
              title2={"On Cat Food"}
              btnurl={"/shop"}
              btnText={"Shop Now"}
              name="offerText_one"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <OfferCard
              thubImg={offertwo}
              subTitle={"PREMUIM QUALITY"}
              title1={"Wafer Hay for"}
              title2={"Rabbitss"}
              btnurl={"/shop"}
              btnText={"Shop Now"}
              name="offerText_two"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <OfferCard
              thubImg={offerthree}
              subTitle={"100% NATURALS"}
              title1={"Best Deal"}
              title2={"For Pet Food"}
              btnurl={"/shop"}
              btnText={"Shop Now"}
              name="offerText_one"
            />
          </div>
          <div className="col-md-6 col-lg-4 d-md-block d-lg-none">
            <OfferCard
              thubImg={offersix}
              subTitle={"100% NATURALS"}
              title1={"Favorite Dog"}
              title2={"Food Store"}
              btnurl={"/shop"}
              btnText={"Shop Now"}
              name="offerText_two"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
