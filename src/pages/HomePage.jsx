import React from "react";
import BannerSlider from "../components/BannerSlider";
import DailyDiscounts from "../components/DailyDiscounts";

import ProductList from "../components/ProductList";
import CategorySwiper from "../components/CategorySwiper"
import AvailableList from "../components/AvailableList";
import BenefitsList from "../components/BenefitsList";
import BestSellingSwiper from "../components/BestSelling";
import PopularBrands from "../components/PopularBrands";
import ArticlesSlider from "../components/ArticlesSlider";




const HomePage = () => {
  return (
    <div>
      <BannerSlider />
      <DailyDiscounts />
      <CategorySwiper />
      <AvailableList />
      <BenefitsList />
      <BestSellingSwiper />
      <PopularBrands />
      <ArticlesSlider />
    </div>
  );
};

export default HomePage;
