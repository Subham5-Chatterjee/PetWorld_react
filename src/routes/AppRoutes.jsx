import { Routes, Route } from "react-router";
import React, { lazy, Suspense } from "react";
import Loader from "../components/ui/Loader";

const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const SingleProduct = lazy(() => import("../pages/SingleProduct"));
const Cart = lazy(() => import("../pages/Cart"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Checkout = lazy(() => import("../pages/Checkout"));
const ThankYou = lazy(() => import("../pages/ThankYou"));
const Layout = lazy(() => import("../layout/Layout"));
const AboutUs = lazy(() => import("../pages/About"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Shop />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
