import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardList />
      <Footer />
    </div>
  );
};

export default App;
