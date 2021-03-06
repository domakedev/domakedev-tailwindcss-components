import React from "react";

import Icon from "./facebook-square.svg";

import styled from 'styled-components'

const ButtonStyled = styled.button`
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const ButtonIcon = ({ icon, children, onClick, size, ...props }) => {
  let sizeInterno, iconStyle

  let estiloBotonBasico = ` 
     relative 
     rounded
     inline-flex group items-center justify-center 
     px-3.5 
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
    select-none
     `;

  
  //Tamaños de boton
  if (size === "small") {
    sizeInterno = "text-xs h-8";
    iconStyle = "w-4 h-4"
  } else if (size === "big") {
    sizeInterno = "text-xl h-12";
    iconStyle = "w-7 h-7"

  }

  return (
    <ButtonStyled
      className={`${estiloBotonBasico} ${sizeInterno}`}
      {...props}
    >
      
      
      <img src={icon} className={`${iconStyle}`} alt="" />
      

      <span className={`relative ${children?"ml-2":""}`}>{children}</span>
    </ButtonStyled>
  );
};

export default ButtonIcon;

ButtonIcon.defaultProps= {
    icon: Icon,
    size: "small",
}
