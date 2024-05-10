import React from 'react';
import "./ButtonSection.css";
import image from "./imagenes/gimnasia.png";

const ButtonSection = () => {
    return (
        <div className="botones">
            <img src={image} alt="Imagen de gimnasia" />
            <p>Texto del párrafo</p>
        </div>
    );
}

export default ButtonSection;
