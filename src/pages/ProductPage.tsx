import React, { useEffect, useState } from "react";
import { Product, ProductList } from "../components/organism/ProductList";
import { fetchProducts } from "../api/api-service";

export const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
    
                const dataProducts = await fetchProducts();
                setProducts(dataProducts);
            } catch(err) {
                setError(`Failed to load Products: ${(err as Error).message}`);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            { loading ? (
                <p>Loading products from API...</p>
            ) : error ? (
                <p>{ error }</p>
            ) : (
                <ProductList products={ products }/>
            )}
        </div>
    )
}