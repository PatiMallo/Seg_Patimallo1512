import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./navbar.css";

const NavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: "cremas",
      name: "Cremas",
      description: "Las cremas son productos tópicos para aliviar dolores musculares y articulares.",
    },
    {
      id: "jarabes",
      name: "Jarabes",
      description: "Los jarabes son soluciones orales usadas para tratar la tos y la fiebre.",
    },
    {
      id: "comprimidos",
      name: "Comprimidos",
      description: "Los comprimidos son medicamentos sólidos para aliviar dolores e inflamaciones.",
    },
  ];

  const handleCategoryClick = (id) => {
    setSelectedCategory((prev) => (prev === id ? null : id));
  };

  return (
    <nav className="navbar">
      {}
      <Link to="/" className="brand">Farmacia</Link>
      <div className="dropdown">
        {categories.map((category) => (
          <div key={category.id} className="dropdown-item">
            <Link
              to={`/category/${category.id}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </Link>
            {selectedCategory === category.id && (
              <div className="dropdown-description">{category.description}</div>
            )}
          </div>
        ))}
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
