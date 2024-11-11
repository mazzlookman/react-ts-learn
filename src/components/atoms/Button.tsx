import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button className="bg-yellow-500 text-slate-100 my-3" onClick={onClick}>{label}</button>
};