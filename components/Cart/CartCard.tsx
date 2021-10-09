import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { removeItem, toggleCartOpen } from "../../actions/checkout";

import { Variants } from "../../types/ProductForm.interface";
import { formatter } from "../../utils/helper";

interface Props {
  product: Variants;
}

const CartCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <li className="py-6 flex">
      <div className="relative flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900 dark:text-purple-50">
            <h3>
              <Link href={`/products/${product.handle}`} passHref>
                <a onClick={() => dispatch(toggleCartOpen(false))}>
                  {product.title}
                </a>
              </Link>
            </h3>
            <p className="ml-4">
              {formatter.format(Number(product.variantPrice))}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500  dark:text-purple-100">
            {product.variantTitle}
          </p>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500 dark:text-purple-300">
            Qty {product.variantQuantity}
          </p>

          <div className="flex">
            <button
              onClick={() => dispatch(removeItem(product))}
              type="button"
              className="font-medium 
dark:text-purple-50 hover:text-purple-400 text-indigo-600"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartCard;
