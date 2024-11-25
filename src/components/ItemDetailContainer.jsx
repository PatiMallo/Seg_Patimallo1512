import React from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const detalles = {
    1: {
      nombre: "Diclofenac Gel",
      image: "/img/Diclofenac_gel.png",
      descripcion: "Gel antiinflamatorio ideal para calmar dolores musculares y articulares.",
    },
    2: {
      nombre: "Ibuprofeno",
      image: "/img/ibuprofeno.png",
      descripcion: "Medicamento para reducir la fiebre y aliviar dolores de cabeza y musculares.",
    },
    3: {
      nombre: "Paracetamol",
      image: "/img/paracetamol.png",
      descripcion: "Fármaco usado para aliviar el dolor leve o moderado y reducir la fiebre.",
    },
  };

  const producto = detalles[id];

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <img src={producto.image} alt={producto.nombre} className="item-detail-image" />
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
