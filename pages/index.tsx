import Head from "next/head";
import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";
import Hero from "../components/Hero";

export default function Home({ products }) {
  return (
    <div>
        <Head>
           <title>Epic eCommerce store</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
            <meta name="description" content="Epic store" />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎃</text></svg>" />
            <meta property="og:title" content="Epico eCommerce Store" />
            <meta property="og:type" content="website" />
            {/*<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />*/}
            {/*<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />*/}
            <meta property="og:description"
                  content="An eCommerce items" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Epico Store" />

        </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}


/* Copyright Renzo Barrios 2021. All Rights Reserved */