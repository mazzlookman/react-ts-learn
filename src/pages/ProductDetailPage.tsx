// src/pages/ProductDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/api-service';
import { Product } from '../components/organism/ProductList';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const fetchedProduct = await fetchProductById(Number(id));
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) loadProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-64 h-64 object-cover mb-4" />
      <p className="text-xl mb-2">${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};