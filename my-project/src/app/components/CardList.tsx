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
        <div className="flex flex-col items-center gap-8 p-8">
            <div className="flex gap-5">
                <button
                    className="w-10 h-10 rounded-full flex justify-center items-center bg-blue-400 text-white text-2xl"
                    onClick={() => updateCount("+")}
                >
                    +
                </button>
                <button
                    className="w-10 h-10 rounded-full flex justify-center items-center bg-red-400 text-white text-2xl"
                    onClick={() => updateCount("-")}
                >
                    -
                </button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
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
    );
};

export default CardList;
