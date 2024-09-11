import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative bg-fixed bg-cover bg-center h-screen flex items-center justify-center text-white"
            style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Gaming Hub</h1>
                <p className="text-xl">Discover the best games, reviews, and more!</p>
                <a href="#games" className="mt-6 inline-block bg-red-600 px-6 py-3 text-lg font-semibold rounded hover:bg-red-700">
                    Explore Games
                </a>
            </div>
        </section>
    );
};

export default Hero;
