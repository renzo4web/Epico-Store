import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { removeItem, toggleCartOpen } from "../actions/checkout";
import { formatter } from "../utils/helper";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartOpen, cart, checkoutUrl } = useSelector(
    (state: RootState) => state.checkout
  );

  const handleToggle = (bool: boolean) => {
    dispatch(toggleCartOpen(bool));
  };

  let cartTotal = cart.reduce(
    (acc, item) => acc + Number(item?.variantPrice) * item?.variantQuantity,
    0
  );

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-hidden"
        onClose={() => handleToggle(!cartOpen)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white  dark:bg-purple-900 shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-purple-50">
                        Shopping cart
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => handleToggle(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cart.map((product) => (
                            <li key={product.id} className="py-6 flex">
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
                                      <a href={`/products/${product.handle}`}>
                                        {product.title}
                                      </a>
                                    </h3>
                                    <p className="ml-4">
                                      {formatter.format(
                                        Number(product.variantPrice)
                                      )}
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
                                      onClick={() =>
                                        dispatch(removeItem(product))
                                      }
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
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {cart.length > 0 ? (
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900 dark:text-purple-50">
                        <p>Subtotal</p>
                        <p>{formatter.format(cartTotal)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500 dark:text-purple-300 ">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href={checkoutUrl}
                          className="flex justify-center cursor-pointer items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white dark:bg-green-400 dark:text-black bg-indigo-600 hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="text-indigo-600 dark:text-green-400 font-medium hover:text-indigo-500"
                            onClick={() => handleToggle(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
