import React, { useEffect } from "react";
import "./HomePage.scss";
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../../store/categorySlice";
import SingleCategory from "../../components/SingleCategory/SingleCategory";
import ProductList from "../../components/ProductList/ProductList";
import { fetchProducts } from "../../store/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: categories, status: categoryStatus } = useSelector(
    (state) => state.category
  );

  const { data: products, status: productStatus } = useSelector(
    (state) => state.product
    
  );

  const { catProductAll: productsByCategory, catProductAllStatus } =
    useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, "all"));
    dispatch(fetchProductsByCategory(2, "all"));
  }, []);
  return (
    <div className="home-page">
      <Slider />
      <Category categories={categories} status={categoryStatus} />
      <ProductList products={products} status={productStatus} />
      <section>
        {productsByCategory[0] && (
          <SingleCategory
            products={productsByCategory[0]}
            status={catProductAllStatus}
          />
        )}
      </section>
    </div>
  );
};

export default HomePage;
