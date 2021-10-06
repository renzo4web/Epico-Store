import { ProductNode } from "../types/Product.interface";
interface Props {
  product: ProductNode;
}

const ProductCard = ({ product }: Props) => {
  const { title, handle, id, images } = product;

  const { altText, originalSrc } = images.edges[0].node;

  return (
    <div>
      <h4>{title}</h4>
      <img src={originalSrc} alt={altText} />
    </div>
  );
};

export default ProductCard;
