import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-red-600 p-4 text-white fixed top-0 left-0 w-full z-10 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold">Gaming Hub</a>
                <div className="space-x-4">
                    <a href="#home" className="hover:text-gray-300">Home</a>
                    <a href="#games" className="hover:text-gray-300">Games</a>
                    <a href="#about" className="hover:text-gray-300">About</a>
                    <a href="#contact" className="hover:text-gray-300">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
