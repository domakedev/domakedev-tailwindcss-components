import React from 'react'

import styled from 'styled-components'

const ButtonStyled = styled.button`
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const  Button = ({type, children, onClick, size, ...props}) => {

    let typeInterno, sizeInterno   
    

     let estiloBotonBasico = `
     rounded 
     w-max	
     relative 
     inline-flex group items-center justify-center 
     px-3.5 py-2 
     cursor-pointer 
     active:shadow-none 
     shadow-lg 
     transition duration-300 ease-in-out transform 
     active:scale-95
     overflow-hidden
     font-Primary
     select-none

     `


     //Types de boton
    if (type === "primary") {
        typeInterno = `
        bg-blue-500 
        active:bg-blue-600 
        text-white`
    } 
    if (type === "secondary"){
        typeInterno = `
        bg-white 
        text-black 
        active:bg-gray-600
        active:text-white 
        border-solid border border-black `
    }
    if (type === "warning") {
        typeInterno = `
        bg-yellow-500 
        active:bg-yellow-600 
        text-white`
    }
    if (type === "alert") {
        typeInterno = `
        bg-red-500 
        active:bg-red-600 
        text-white`
    }
    if (type === "success") {
        typeInterno = `
        bg-green-500 
        active:bg-green-600 
        text-white`
    }

    //Tamaños de boton
    if (size === "small") {
        sizeInterno = "text-xs h-8"
    } else if (size === "big"){
        sizeInterno = "text-xl h-12"
    }

    return (
        <ButtonStyled 
            className={`${estiloBotonBasico} ${typeInterno} ${sizeInterno}`} 
            {...props}
        >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-48 group-hover:h-48 opacity-10"></span>
            <span className="relative">{children}</span>  

        </ButtonStyled>
    )
}

export default Button




