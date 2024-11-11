import React from "react";

interface InputFieldProps {
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type = 'text' }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full p-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>
    )
}