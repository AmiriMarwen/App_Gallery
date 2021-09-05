import React from "react";
import {useParams} from "react-router-dom";
import CategorySection from "../components/Category/CategorySection";

export const Category = () => {
  const { category } = useParams();
  return (
    <>
      <CategorySection category_url={category} />
    </>
  );
};