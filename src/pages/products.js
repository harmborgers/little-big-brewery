import React from "react";
import MainSection from "../components/MainSection";
import { productData } from "../components/MainSection/product-data";
import _ from "lodash";

const ProductPage = () => {
  const mainSections = _.map(productData, (data) => {
    return <MainSection {...data} key={data.key} />;
  });

  return <>{mainSections}</>;
};

export default ProductPage;
