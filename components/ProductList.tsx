import {Product} from "../types/Product.interface";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
    heading?: string
}

const ProductList = ({products, heading = 'Products'}: Props) => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-gray-200">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold mb-6">{heading}</h2>
                <div
                    className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product.node.id} product={product.node}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
