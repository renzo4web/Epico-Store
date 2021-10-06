export interface Product {
  node: ProductNode;
}

export interface ProductNode {
  id: string;
  title: string;
  handle: string;
  priceRange: PriceRange;
  images: Images;
}

export interface Images {
  edges: Edge[];
}

export interface Edge {
  node: EdgeNode;
}

export interface EdgeNode {
  originalSrc: string;
  altText: string;
}

export interface PriceRange {
  minVariantPrice: MinVariantPrice;
}

export interface MinVariantPrice {
  amount: string;
}
