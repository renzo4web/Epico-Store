import React from 'react';
import {ProductNode} from "../../types/Product.interface";
import {ProductProps, Products} from "../../types/SingleProduct.interface";
import {
    RecommendedProductNode,
    RecommendedProducts
} from "../../types/RecommendedProducts.interface";
import ProductList from "../ProductList";

interface Props {
    current: string
    products: RecommendedProducts[]
}

const RecommendedList = ({current,products}:Props) => {

    const recommended = products.filter(product => product.node.id !== current)

    return (
        <div>
                <ProductList heading={"Recommended"} products={recommended} />
        </div>
    );
};

export default RecommendedList;