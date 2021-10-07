import { Checkout, CheckoutClass } from "../types/Checkout.interface";
import { Product as AllProducts } from "../types/Product.interface";
import { ProductsPath, Products, Edge } from "../types/ProductsPath.interface";
import { Product } from "../types/SingleProduct.interface";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storeFrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

const ShopifyData = async (query: string) => {
  const URL = `https://${domain}/api/2021-10/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storeFrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options);

    return await data.json();
  } catch (error) {
    console.warn(error);
    throw new Error("Products not fetch");
  }
};

export const getProductsInCollection = async (): Promise<AllProducts[]> => {
  const query = `
    {
        collection(handle:"frontpage"){
          id
          title
          products(first:25){
            edges{
              node{
                id
                title
                handle
                priceRange{
                    minVariantPrice{
                      amount
                    }
                }
                images(first:5){
                  edges{
                    node{
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

  const response = await ShopifyData(query);
  const { edges: allProducts } = response.data.collection.products;
  return allProducts ? allProducts : [];
};

export const getAllProducts = async (): Promise<Edge[]> => {
  const query = `
{
  products(first:25){
    edges{
      node{
        handle
        id
      }
    }
  }
}
  `;
  const response: ProductsPath = await ShopifyData(query);
  const slugs = response.data.products.edges;

  return slugs ? slugs : [];
};

export const getProduct = async (handle: string) => {
  const query = `
  {
    product(handle: "${handle}") {
      collections(first: 1) {
        edges {
          node {
            products(first: 5) {
              edges {
                node {
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  handle
                  title
                  id
                  images(first: 5) {
                    edges {
                      node {
                        originalSrc
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      id
      title
      handle
      description
      images(first: 5) {
        edges {
          node {
            originalSrc
            altText
          }
        }
      }
      options {
        name
        values
        id
      }
      variants(first: 25) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            product {
              handle
              title
            }
            image {
              originalSrc
              altText
            }
            title
            id
            priceV2 {
              amount
            }
          }
        }
      }
    }
  }`;

  const response: Product = await ShopifyData(query);
  const { product } = response.data;

  return product ? product : {};
};

export const createCheckout = async (
  id: string,
  quantity: number
): Promise<CheckoutClass> => {
  const query = `
  mutation {
    checkoutCreate(input: {lineItems: [{variantId: "${id}", quantity: ${quantity}}]}) {
      checkout {
        id
        webUrl
      }
    }
  }
  `;

  const response: Checkout = await ShopifyData(query);
  const { checkout } = response.data.checkoutCreate;

  return checkout ? checkout : { id: null, webURL: null };
};

export const updateCheckout = async (id, lineItems): Promise<any> => {
  const lineItemsObject = lineItems.map(
    (item) => `{variantId:"${item.id}",quantity:${item.variantQuantity} }`
  );

  const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}" ) {
      checkout {
        webUrl
        id
        lineItems(first: 25) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }`;

  console.log("QUERy", query);
  const response = await ShopifyData(query);
  console.log("UPDATE", response);
  const { checkout }: { checkout: CheckoutClass } =
    response.data.checkoutLineItemsReplace;

  return checkout ? checkout : [];
};
