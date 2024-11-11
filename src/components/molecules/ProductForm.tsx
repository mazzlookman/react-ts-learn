import React, { useState } from "react";
import { CreateProduct } from "../../api/api-service";
import { InputField } from "../atoms/InputField";
import { SubmitButton } from "../atoms/SubmitButton";

interface ProductFormProps {
    onSubmit: (product: CreateProduct) => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');

    const handleSubmit = () => {
        onSubmit({ title, price, image });
        setTitle('');
        setPrice(0);
        setImage('');
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
            <InputField label='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <InputField label="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number" />
            <InputField label="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            <SubmitButton onClick={handleSubmit} label="Add Product" />
        </div>
    )
}