import React from "react";
import { ProductClass } from "../../types/SingleProduct.interface";

interface Props {
  product: ProductClass;
}

export const ProductPageContent = ({ product }: Props) => {
  return <>{product.title}</>;
};
