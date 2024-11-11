import React from "react";

interface ProductDescriptionProps {
    description: string;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
    return (
        <p className="text-sm font-normal">
            {description}
        </p>
    )
}