import React from 'react'

const Button = ({type, text, onClick, size, ...props}) => {

    let typeInterno, sizeInterno    

    let estiloBotonBasico = `
     py-2
     px-3 
     rounded
     transition duration-500 
     ease-in-out 
     transform 
     active:scale-95`


     //Types de boton
    if (type === "primary") {
        typeInterno = "bg-blue-500 active:bg-blue-700  text-white"
    } 
    if (type === "secondary"){
        typeInterno = "bg-white hover:bg-gray-500 hover:text-gray-50 text-black border-solid border border-black"
    }
    if (type === "warning") {
        typeInterno = "bg-yellow-500 hover:bg-yellow-700  text-white"
    }

    //Tamaños de boton
    if (size === "small") {
        sizeInterno = "text-xs"
    } else if (size === "big"){
        sizeInterno = "text-xl"
    }

    return (
        <button 
            className={`${estiloBotonBasico} ${typeInterno} ${sizeInterno}`} 
            {...props}
        >
            {text}
        </button>
    )
}

export default Button
