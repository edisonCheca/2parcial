import React from "react";
import "./UserDetails.css";
import image from "./imagenes/gimnasia.png";

const UserDetails = () => {
    return (
        <>
            <div className="componente1">
                <img src={image} alt="Imagen de gimnasia" />
            </div>

            <div className="componente2">
                <h2>Terapia 2</h2>
                <h4>Ejercicios pélvicos</h4>
            </div>
        </>

        


    );
};

export default UserDetails;
