import React from "react";
import "./itemlist.css";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <div className="item-list">
      {productos.map((producto) => (
        <div key={producto.id} className="item">
          <img
            className="item-image"
            src={producto.image}
            alt={producto.nombre}
          />
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <Link to={`/item/${producto.id}`} className="details-link">
            Ver detalles
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
