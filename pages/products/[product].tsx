import { ProductPageContent } from "../../components/product/ProductPageContent";
import { getAllProducts, getProduct } from "../../lib/shopify";
import { ProductClass } from "../../types/SingleProduct.interface";

interface Props {
  product: ProductClass;
}

const ProductPage = ({ product }: Props) => {
  return (
    <div>
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