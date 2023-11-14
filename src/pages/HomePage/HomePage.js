import React,{useEffect} from "react";
import "./HomePage.scss";
import Slider from "../../components/Slider/Slider";
import Category from '../../components/Category/Category';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchProductsByCategory } from '../../store/categorySlice';


const HomePage = () => {
  const dispatch = useDispatch();
  const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
  const {catProductAll: productsByCategory, catProductAllStatus} = useSelector((state) => state.category);

  useEffect(() => {
   
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, 'all'));
    dispatch(fetchProductsByCategory(2, 'all'));
   
  }, []);
  return (
    <div className="home-page">
      <Slider />
      <Category categories = {categories} status = {categoryStatus} />
    </div>
  );
};

export default HomePage;
