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
    1: "Diclofenac Gel es un medicamento ideal para calmar el dolor e inflamación en músculos y articulaciones. Es ampliamente utilizado para tratar lesiones deportivas y molestias reumáticas.",
    2: "El Ibuprofeno es un analgésico y antiinflamatorio que se utiliza para aliviar el dolor leve a moderado, como dolores de cabeza, musculares, y fiebre.",
    3: "El Paracetamol es un medicamento eficaz para reducir la fiebre y aliviar el dolor leve o moderado, como dolores musculares, resfriados y molestias dentales.",
  };
  return (
    <div className="item-detail">
      <img src={`/img/${producto.image}`} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{descripciones[producto.id]}</p>
    </div>
  );
};
export default ItemDetail;
