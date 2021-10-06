import { Product } from "../types/Product.interface";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storeFrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

const ShopifyData = async (query) => {
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

export const getProductsInCollection = async (): Promise<Product[]> => {
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
