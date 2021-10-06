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
  product(handle: "millionaire-in-the-waiting") {
    id
    handle
    title
    priceRange {
      minVariantPrice {
        amount
      }
    }
    options {
      id
      name
      values
    }
    variants(first: 25) {
      edges {
        node {
          selectedOptions {
            name
            value
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


  `;

  const response: Product = await ShopifyData(query);
  const { product } = response.data;

  return product ? product : {};
};
