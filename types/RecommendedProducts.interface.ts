export interface RecommendedProducts {
    node: RecommendedProductNode;
}

export interface RecommendedProductNode {
    priceRange: PriceRange;
    handle:     string;
    title:      string;
    id:         string;
    images:     Images;
}

export interface Images {
    edges: Edge[];
}

export interface Edge {
    node: EdgeNode;
}

export interface EdgeNode {
    originalSrc: string;
    altText:     string;
}

export interface PriceRange {
    minVariantPrice: MinVariantPrice;
}

export interface MinVariantPrice {
    amount: string;
}
