import { Variants } from "../types/ProductForm.interface";
import {
  DataProduct,
  Product,
  Data,
  Products,
} from "../types/SingleProduct.interface";

export const formatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 2,
});

export const getProductVariants = (product): Variants[] => {
  return product.variants.edges?.map((variant) => {
    const allOptions = {};
    variant.node.selectedOptions.map(
      ({ name, value }) => (allOptions[name] = value)
    );

    const { id, product, priceV2, image, title } = variant.node;

    return {
      id: id,
      handle: product.handle,
      title: product.title,
      image: image?.originalSrc,
      options: allOptions,
      variantTitle: title,
      variantPrice: priceV2.amount,
      variantQuantity: 1,
    };
  });
};
