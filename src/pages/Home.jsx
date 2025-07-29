import React, { useRef } from "react";
import Banner from "./../components/common/banner";
import Catagory from "./../components/common/catagory";
import Hotproduct from "./../components/common/hotSelling";
import Offerfirst from "./../components/common/offerOne";
import Bestselling from "./../components/common/best-selling";
import Offertwo from "./../components/common/offerTwo";
import Reviewpart from "./../components/common/review";
import Specialoffer from "./../components/common/specialOffer";

const Home = () => {
  const sectionScrollUp = useRef(null);
  const handleScrollOffer = () => {
    sectionScrollUp.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Banner />
      <Catagory />
      <Hotproduct />
      <Offerfirst ref={sectionScrollUp} />
      <Bestselling />
      <Offertwo />
      <Reviewpart />
      <Specialoffer handleScrollOffer={handleScrollOffer} />
    </div>
  );
};

export default Home;
