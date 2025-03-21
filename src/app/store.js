import { configureStore } from "@reduxjs/toolkit";
import bannersReducer from "../features/bannersSlice";
import dailyDiscountsReducer from "../features/dailyDiscountsSlice";

import productsReducer from "../features/productsSlice";
import categoriesReducer from "../features/categoriesSlice";
import availableReducer from "../features/availableSlice"
import benefitsReducer from "../features/benefitsSlice";
import bestsellingReducer from "../features/sellingSlice";
import popularBrandsReducer from "../features/popularBrandsSlice";
import articlesReducer from "../features/articlesSlice";
import footerReducer from "../features/footerSlice";




export const store = configureStore({
    reducer: {
        banners: bannersReducer,
        dailyDiscounts: dailyDiscountsReducer,
        products: productsReducer,
        categories: categoriesReducer,
        available: availableReducer,
        benefits: benefitsReducer,
        bestselling: bestsellingReducer,
        popularBrands: popularBrandsReducer,
        articles: articlesReducer,
        footer: footerReducer,
    },
});
export default store;