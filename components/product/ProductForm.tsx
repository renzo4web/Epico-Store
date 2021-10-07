import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { startAddToCart } from "../../actions/checkout";
import { createCheckout } from "../../lib/shopify";
import { Variants } from "../../types/ProductForm.interface";
import { ProductProps, DataProduct } from "../../types/SingleProduct.interface";
import { formatter, getProductVariants } from "../../utils/helper";
import ProductOptions from "./ProductOptions";

const setDefaults = (product: DataProduct) => {
  const defaultValues = {};

  product.options.map(({ name, values }) => (defaultValues[name] = values[0]));

  return defaultValues;
};

const ProductForm = ({ product }: ProductProps) => {
  const dispatch = useDispatch();
  const allVariants = getProductVariants(product);

  const [selectedVariant, setSelectedVariant] = useState(allVariants[0]);
  const [selectedOptions, setSelectedOptions] = useState(() =>
    setDefaults(product)
  );

  const { variants, options } = product;

  const setOptions = (name, value) => {
    setSelectedOptions((prev) => ({ ...prev, [name]: value }));

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariants.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  };

  const handleClick = () => {
    dispatch(startAddToCart(selectedVariant));
  };

  return (
    <div className="rounded2xl p-4 shadow-lg flex flex-col w-full md:1/3">
      <h2 className="text-3xl font-bold">{product.title}</h2>
      <strong className="pb-6 font-medium">
        {formatter.format(Number(variants.edges[0].node.priceV2.amount))}
      </strong>
      {options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          handleChange={setOptions}
        />
      ))}

      <button
        onClick={() => handleClick()}
        className="bg-black dark:bg-green-400 text-white rounded-lg px-2 py-3 mt-4 hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductForm;
