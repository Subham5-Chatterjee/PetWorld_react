import aboutPet from "../../public/images/about.jpg";
import React from "react";
import "../css/style.css";
import "../css/responsive.css";
function AboutUs() {
  return (
    <section class="aboutSec py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="titleText">Welcome to Pet World</h2>
            <p>
              At Pet World, we understand the special bond between people and
              their pets. Whether they bark, meow, chirp, or hop, every pet
              brings joy, comfort, and unconditional love. That’s why we’ve made
              it our mission to create a place where pet owners can find
              everything they need—easily, affordably, and all in one place.
            </p>

            <h3>Who We Are</h3>
            <p>
              Pet World is more than just an online store—it's a community of
              pet lovers committed to making the lives of animals better, one
              product at a time. From the essentials to the extras, we’re here
              to support every aspect of your pet’s well-being with products
              that are safe, reliable, and thoughtfully chosen.
            </p>

            <h3>Why Choose Pet World?</h3>
            <p>
              Wide Range of Products – From food and bedding to accessories and
              grooming tools
              <br />
              Trusted Brands – We partner with top-rated suppliers and
              vet-recommended names
              <br />
              Customer First – Friendly support, fast delivery, and easy returns
              <br />
              Pet-Centric Mission – We’re in this because we care about
              animals—just like you
            </p>

            <h3>Our Promise</h3>
            <p>
              We’re committed to making pet care easy, joyful, and stress-free.
              Whether you’re raising a playful puppy, a curious kitten, or a
              cuddly bunny, Pet World is here to support you with products and
              knowledge you can trust. At Pet World, every tail wag, purr,
              chirp, or hop matters. Thank you for letting us be a part of your
              pet’s journey.
            </p>
          </div>

          <div class="col-md-6 text-end">
            <img src={aboutPet} class="img-fluid" alt="About pet" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
