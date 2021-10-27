import React from "react";

import Icon from "./facebook-square.svg";

const ButtonIcon = ({ icon, children, onClick, size, ...props }) => {
  let sizeInterno, iconStyle

  let estiloBotonBasico = ` 
     relative 
     rounded
     inline-flex group items-center justify-center 
     px-3.5 py-2 
     mx-1 
     cursor-pointer 
     active:shadow-none 
     shadow-lg 
     transition duration-300 ease-in-out transform 
     active:scale-95
     overflow-hidden
     bg-white 
    text-black 
    font-Primary
     `;

  
  //Tamaños de boton
  if (size === "small") {
    sizeInterno = "text-xs";
    iconStyle = "w-4 h-4"
  } else if (size === "big") {
    sizeInterno = "text-xl";
    iconStyle = "w-7 h-7"

  }

  return (
    <button
      className={`${estiloBotonBasico} ${sizeInterno}`}
      {...props}
    >
      
      
      <img src={icon} className={`${iconStyle}`} alt="" />

      <span className={`relative ${children?"ml-2":""}`}>{children}</span>
    </button>
  );
};

export default ButtonIcon;

ButtonIcon.defaultProps= {
    icon: Icon,
    size: "small",
}