import Image from "next/image";
import Link from "next/link";
import { ProductNode } from "../types/Product.interface";
import { formatter } from "../utils/helper";

interface Props {
  product: ProductNode;
}

const ProductCard = ({ product }: Props) => {
  const { title, handle, id, images, priceRange } = product;

  const { altText, originalSrc } = images.edges[0].node;
  const {
    minVariantPrice: { amount },
  } = priceRange;

  return (
    <Link href={`/products/${handle}`}>
      <a className="group">
        <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium">{title}</h3>
        <h4 className="font-medium">{formatter.format(Number(amount))}</h4>
      </a>
    </Link>
  );
};

export default ProductCard;
