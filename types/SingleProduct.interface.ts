export interface Product {
  data: Data;
}

export interface Data {
  product: DataProduct;
}

export interface DataProduct {
  collections: Collections;
  id: string;
  title: string;
  handle: string;
  description: string;
  images: Images;
  options: Option[];
  variants: Variants;
}

export interface Collections {
  edges: CollectionsEdge[];
}

export interface CollectionsEdge {
  node: PurpleNode;
}

export interface PurpleNode {
  products: Products;
}

export interface Products {
  edges: ProductsEdge[];
}

export interface ProductsEdge {
  node: FluffyNode;
}

export interface FluffyNode {
  priceRange: PriceRange;
  handle: string;
  title: string;
  id: string;
  images: Images;
}

export interface Images {
  edges: ImagesEdge[];
}

export interface ImagesEdge {
  node: ImageClass;
}

export interface ImageClass {
  originalSrc: string;
  altText: string;
}

export interface PriceRange {
  minVariantPrice: PriceV2;
}

export interface PriceV2 {
  amount: string;
}

export interface Option {
  name: string;
  values: string[];
  id: string;
}

export interface Variants {
  edges: VariantsEdge[];
}

export interface VariantsEdge {
  node: TentacledNode;
}

export interface TentacledNode {
  selectedOptions: SelectedOption[];
  product: NodeProduct;
  image: ImageClass;
  title: string;
  id: string;
  priceV2: PriceV2;
}

export interface NodeProduct {
  handle: string;
  title: string;
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface ProductProps {
  product: DataProduct;
}
