import React from "react";

interface TextInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({value, onChange}, ref) => {
    return (
        <input 
            ref={ref}
            type="text" 
            value={value} 
            onChange={onChange} 
        />
    )
});