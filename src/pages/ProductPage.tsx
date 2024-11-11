import React, { useEffect, useState } from "react";
import { Product, ProductList } from "../components/organism/ProductList";
import { createProduct, CreateProduct, fetchProducts } from "../api/api-service";
import { ProductForm } from "../components/molecules/ProductForm";
import { Link } from "react-router-dom";

export const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
    
                // Cek apakah localStorage ada data products
                const savedProducts = localStorage.getItem('products');
                if (savedProducts) {
                    setProducts(JSON.parse(savedProducts));
                } else {
                    const dataProducts = await fetchProducts();
                    setProducts(dataProducts);   
                    localStorage.setItem('products', JSON.stringify(dataProducts));
                }                
            } catch(err) {
                setError(`Failed to load Products: ${(err as Error).message}`);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);


    const handleAddProduct = async (product: CreateProduct) => {
        try {
            const newProduct = await createProduct(product);
            setProducts((prevProducts) => {
                let updatedProducts = [newProduct, ...prevProducts];

                if(updatedProducts.length > 128) {
                    updatedProducts = updatedProducts.slice(0, 128);
                }

                localStorage.setItem('products', JSON.stringify(updatedProducts));
                return updatedProducts;
            });
        } catch(error) {
            console.error('Error adding product:', error)
        }
    }

    return (
        <div className="p-6">
            <div>
                <nav>
                    <Link to={'/'}>Go to Home Page</Link>
                </nav>
            </div>
            <ProductForm onSubmit={handleAddProduct}/>
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            { loading ? (
                <p>Loading products...</p>
            ) : error ? (
                <p>{ error }</p>
            ) : (
                <ProductList products={ products }/>
            )}
        </div>
    )
}