import { ProductPageContent } from "../../components/product/ProductPageContent";
import { getAllProducts, getProduct } from "../../lib/shopify";
import { Data } from "../../types/SingleProduct.interface";

const ProductPage = ({ product }: Data) => {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  );
};

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => ({
    params: {
      product: String(item.node.handle),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { product } }) {
  const productData = await getProduct(product);
  return {
    props: {
      product: productData,
    },
  };
}
export default ProductPage;
