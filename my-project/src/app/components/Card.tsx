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
            className={`flex flex-col items-center border border-transparent w-64 h-32 shadow-xl rounded-md p-6 bg-gradient-to-r from-indigo-300 via-purple-500 to-gray-500 transform cursor-pointer ${isSelected ? "scale-110" : "scale-100"}`}
            onClick={() => onSelect(id)}
        >
            <div className="text-lg text-white font-semibold mb-4">{name}</div>
            <div className="text-white font-semibold">{`Count: ${count}`}</div>
        </div >
    );
};

export default Card;
