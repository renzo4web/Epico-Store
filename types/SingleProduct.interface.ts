export interface Product {
  data: Data;
}

export interface Data {
  product: ProductClass;
}

export interface ProductClass {
  id: string;
  handle: string;
  title: Title;
  priceRange: PriceRange;
  options: Option[];
  variants: Variants;
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
  altText: Title;
}

export enum Title {
  MillionaireInTheWaiting = "Millionaire in the Waiting",
}

export interface Option {
  id: string;
  name: Name;
  values: string[];
}

export enum Name {
  Color = "Color",
  Size = "Size",
}

export interface PriceRange {
  minVariantPrice: MinVariantPrice;
}

export interface MinVariantPrice {
  amount: string;
}

export interface Variants {
  edges: VariantsEdge[];
}

export interface VariantsEdge {
  node: PurpleNode;
}

export interface PurpleNode {
  selectedOptions: SelectedOption[];
  image: ImageClass;
  title: string;
  id: string;
  priceV2: MinVariantPrice;
}

export interface SelectedOption {
  name: Name;
  value: string;
}
