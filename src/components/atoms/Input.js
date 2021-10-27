import React from "react";

//import IconEjemplo from "./address-card-solid.svg";

const Input = ({ icon, placeholder, type, name, id }) => {
  const defaultStyles = `        
        py-2
        ${icon ? "pl-12 pr-4" : "px-4"}
        mx-8
        placeholder-gray-400
        border border-gray-600 rounded
        focus:outline-none focus:ring-1 focus:ring-gray-600
        `;

  let InputStyled = {};


  if (icon) {
    InputStyled = {
      backgroundImage: `url(${icon})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0.5rem center",
      backgroundSize: "25px 25px",
    };
  }

  return (
      
    <input
      className={`${defaultStyles}`}
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      style={InputStyled}
    ></input>
  );
};

export default Input;

Input.defaultProps = {
  // icon: IconEjemplo
};
