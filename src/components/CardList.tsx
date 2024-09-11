import React from "react";
import Card from "./Card";

const CardList: React.FC = () => {
    const cards = [
        {
            id: 1,
            title: "Game 1",
            features: ["Feature 1", "Feature 2", "Feature 3"],
            image: "https://via.placeholder.com/300x200",
        },
        {
            id: 2,
            title: "Game 2",
            features: ["Feature A", "Feature B", "Feature C"],
            image: "https://via.placeholder.com/300x200",
        },
        {
            id: 3,
            title: "Game 3",
            features: ["Feature X", "Feature Y", "Feature Z"],
            image: "https://via.placeholder.com/300x200",
        },
    ];

    return (
        <section id="games" className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Games</h2>
                <div className="flex flex-wrap justify-center">
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            features={card.features}
                            image={card.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardList;
