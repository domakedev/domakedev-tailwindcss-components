import React from 'react'

import Photo from "./Naruto.png"

const ProfilePhoto = ({borderColor, type, size, ProfilePhotoSrc, ...props}) => {

    //La imagen ProfilePhotoSrc, tiene que ser cuadrada y si viene de un link externo,
    //Tiene que ser publica como de: https://unsplash.com/


    let typeInterno, sizeInterno



    let defaultStyles = `
    border-solid border-4 ${borderColor}
    inline-block`

    //Tipo de imagen: circular o cuadrada
    if (type === "circular") {
        typeInterno = `rounded-full`
    }
    if (type === "cuadrado") {
        typeInterno = `rounded-3xl`
    }

    //Tamaño de imagen: pequeña, mediana o grande
    if (size === "small") {
        sizeInterno= `w-16 h-16`
    }
    if (size === "medium") {
        sizeInterno= `w-32 h-32`
    }
    if (size === "big") {
        sizeInterno= `w-64 h-64`
    }
    

    return (
        // <div 
        //     alt="Profile" 
        //     className={`${defaultStyles} ${typeInterno} ${sizeInterno}`}
        //     style={{
        //         backgroundImage: `url(${ProfilePhotoSrc})`
        //     }}
        // >
            
        // </div>

    <img 
        alt="Profile" 
        className={`${defaultStyles} ${typeInterno} ${sizeInterno}`}
        src={`${ProfilePhotoSrc}`}
        {...props}
    >
            
    </img>
    )
}

export default ProfilePhoto


ProfilePhoto.defaultProps = {
    ProfilePhotoSrc: Photo,
    type: "circular",
    size: "medium",
    borderColor: "border-gray-200"
  };
