import React from 'react'

const Button = ({type, text, onClick, size, ...props}) => {

    let typeInterno, sizeInterno   
    
    let levelActiveBGColor = 600


    let estiloBotonBasico = `
     py-2
     px-3 
     rounded
     transition duration-300 
     ease-in-out 
     transform 
     active:scale-95`

     let estiloBotonBasico2 = "rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer active:shadow-none shadow-lg transition duration-300 ease-in-out transform active:scale-95 "


     //Types de boton
    if (type === "primary") {
        typeInterno = `bg-blue-500 active:bg-blue-${levelActiveBGColor} text-white`
    } 
    if (type === "secondary"){
        typeInterno = `bg-white text-black active:bg-gray-${levelActiveBGColor} active:text-white border-solid border border-black `
    }
    if (type === "warning") {
        typeInterno = `bg-yellow-500 active:bg-yellow-${levelActiveBGColor} text-white`
    }
    if (type === "alert") {
        typeInterno = `bg-red-500 active:bg-red-${levelActiveBGColor} text-white`
    }
    if (type === "success") {
        typeInterno = `bg-green-500 active:bg-green-${levelActiveBGColor} text-white`
    }

    //Tamaños de boton
    if (size === "small") {
        sizeInterno = "text-xs"
    } else if (size === "big"){
        sizeInterno = "text-xl"
    }

    return (
        <button 
            className={`${estiloBotonBasico2} ${typeInterno} ${sizeInterno}`} 
            {...props}
        >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-48 group-hover:h-48 opacity-10"></span>
            <span className="relative">{text}</span>            
        </button>
    )
}

export default Button




