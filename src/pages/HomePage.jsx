import React, { useEffect } from "react";
import Header from "../components/Header";
import Products from "../components/ui/Products";
import Banner1 from "../components/Banner1";
import TrendingProducts from "../components/TrendingProducts";
import Banner2 from "../components/Banner2";

const HomePage = () => {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
      <Header />
      <Products />
      <Banner1 />
      <TrendingProducts />
      <Banner2 />
    </>
  );
};

export default HomePage;
