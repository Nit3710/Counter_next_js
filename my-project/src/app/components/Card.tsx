import React from "react";

interface CardProps {
    id: number;
    name: string;
    count: number;
    onSelect: (id: number) => void;
    isSelected: boolean;
}

const Card: React.FC<CardProps> = ({ id, name, count, onSelect, isSelected }) => {
    return (
        <div
            className={`flex flex-col justify-between border-2 w-72 h-40 rounded-xl p-6 
            ${isSelected
                    ? 'border-blue-500 bg-white shadow-lg transform scale-105 transition-all duration-300'
                    : 'border-gray-200 bg-gray-50 hover:border-blue-300 transition-all duration-300'
                }`}
            onClick={() => onSelect(id)}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium 
                    ${isSelected ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'}`}>
                    {`Count: ${count}`}
                </span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((count / 10) * 100, 100)}%` }}
                />
            </div>
        </div>
    );
};

export default Card;
