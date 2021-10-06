import { Product } from "../types/Product.interface";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product.node} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
