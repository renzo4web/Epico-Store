export interface Variants {
  id: string;
  title: string;
  handle: string;
  image: string;
  options: Options;
  variantTitle: string;
  variantPrice: string;
  variantQuantity: number;
}

export interface Options {
  color: string;
  size: string;
}
