import React from "react";
import { ProductImage } from "../atoms/ProductImage";
import { ProductTitle } from "../atoms/ProductTitle";
import { ProductPrice } from "../atoms/ProductPrice";

interface ProductCardProps {
    image: string;
    title: string;
    description?: string;
    price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-2">
            <ProductImage src={image} alt={title} />
            <div className="p-4">
                <ProductTitle title={title} />
                <ProductPrice price={price} />
            </div>
        </div>
    );
}