import React, { useState } from "react";

interface CardProps {
    title: string;
    features: string[];
    image: string;
}

const Card: React.FC<CardProps> = ({ title, features, image }) => {
    const [liked, setLiked] = useState<boolean>(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-4">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <ul className="text-gray-700 text-base">
                    {features.map((feature, index) => (
                        <li key={index} className="list-disc ml-5">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-end">
                <button
                    onClick={toggleLike}
                    className={`transition-transform duration-300 ${liked ? "transform scale-150" : ""
                        }`}
                >
                    {liked ? "💖" : "🤍"}
                </button>
            </div>
        </div>
    );
};

export default Card;
