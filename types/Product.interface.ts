export interface Product {
  node: ProductNode;
}

export interface ProductNode {
  id: string;
  title: string;
  handle: string;
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
