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
     hover:scale-105`


    if (type === "primary") {
        typeInterno = "bg-blue-500 hover:bg-blue-700  text-white"
    } 
    if (type === "secondary"){
        typeInterno = "bg-white hover:bg-gray-500 hover:text-gray-50 text-black border-solid border border-black"
    }

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
