import React, { useState } from "react";
import Card from "./Card";

interface CardData {
    id: number;
    name: string;
}

const cardsData: CardData[] = [
    { id: 1, name: "Card 1" },
    { id: 2, name: "Card 2" },
    { id: 3, name: "Card 3" },
    { id: 4, name: "Card 4" },
    { id: 5, name: "Card 5" },
];

const CardList: React.FC = () => {
    const [counts, setCounts] = useState<number[]>(Array(cardsData.length).fill(0));
    const [selectedCardId, setSelectedCardId] = useState<number>(cardsData[0].id);

    const updateCount = (operation: "+" | "-") => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            const index = selectedCardId - 1;
            if (operation === "+") {
                newCounts[index] += 1;
            } else if (operation === "-" && newCounts[index] > 0) {
                newCounts[index] -= 1;
            }
            return newCounts;
        });
    };

    const handleCardSelect = (id: number) => {
        setSelectedCardId(id);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Card Dashboard</h2>
                    <div className="flex justify-center gap-4">
                        <button
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 
                            transition-colors duration-300 flex items-center gap-2 shadow-md"
                            onClick={() => updateCount("+")}
                        >
                            <span className="text-xl">+</span> Increment
                        </button>
                        <button
                            className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 
                            transition-colors duration-300 flex items-center gap-2 shadow-md"
                            onClick={() => updateCount("-")}
                        >
                            <span className="text-xl">-</span> Decrement
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cardsData.map((card, index) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            name={card.name}
                            count={counts[index]}
                            onSelect={handleCardSelect}
                            isSelected={selectedCardId === card.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardList;
