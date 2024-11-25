import React from "react";
import { useParams } from "react-router-dom";
import "./itemdetail.css";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const producto = productos.find((prod) => prod.id === parseInt(id));

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  const descripciones = {
    1: "Diclofenac Gel es ideal para calmar el dolor e inflamación en músculos y articulaciones. Usado en lesiones deportivas y molestias reumáticas.",
    2: "El Ibuprofeno alivia el dolor leve a moderado, como dolores de cabeza, musculares, y fiebre.",
    3: "El Paracetamol reduce la fiebre y alivia dolores leves o moderados como resfriados o molestias dentales.",
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <img src={`/img/${producto.image}`} alt={producto.nombre} />
        <h2>{producto.nombre}</h2>
        <p>{descripciones[producto.id]}</p>
      </div>
    </div>
  );
};
export default ItemDetail;
