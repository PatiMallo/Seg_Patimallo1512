import React from "react";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const productos = [
    { id: 1, nombre: "Diclofenac Gel", image: "/img/Diclofenac_gel.png", category: "analgesicos" },
    { id: 2, nombre: "Ibuprofeno", image: "/img/ibuprofeno.png", category: "analgesicos" },
    { id: 3, nombre: "Paracetamol", image: "/img/paracetamol.png", category: "antitermicos" },
  ];

  return (
    <div className="item-list-container">
      <div className="item-list">
        {productos.map((producto) => (
          <div key={producto.id} className="item">
            <img src={producto.image} alt={producto.nombre} className="item-image" />
            <h3>{producto.nombre}</h3>
            <Link to={`/category/${producto.category}/item/${producto.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemListContainer;
