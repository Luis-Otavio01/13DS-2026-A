import React from "react";
import "./Perfil.module.css";

const Perfil = ({ user }) => {
  return (
    <div className="perfil">
      <img src={user.image} alt={user.name} className="perfil-image" />
      <h2 className="perfil-name">{user.name}</h2>
    </div>
  );
};

export default Perfil;
