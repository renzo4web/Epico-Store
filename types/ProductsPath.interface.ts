export interface ProductsPath {
  data: Data;
}

export interface Data {
  products: Products;
}

export interface Products {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  handle: string;
  id: string;
}
