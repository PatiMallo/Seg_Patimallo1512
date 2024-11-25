import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";
const App = () => {
  return (
    <Router>
      <header className="header">
        <img src="/img/logo.png" alt="Farmacia Logo" className="logo" />
        <h1 className="title">Farmacias</h1>
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/category/:category/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};
export default App;
