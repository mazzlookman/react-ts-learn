import React from 'react';
import {ProductCard} from '../molecules/ProductCard';

export interface Product {
  id: number;
  image: string;
  title: string;
  description?: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
            key={product.id} 
            image={product.image} 
            title={product.title} 
            // description={product.description}
            price={product.price} />
      ))}
    </div>
  );
};