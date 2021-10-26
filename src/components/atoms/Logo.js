import React from 'react'

import LogoImg from './googlelogo.jpg'

const Logo = ({size, logo, ...props}) => {

    let defaultStyles = `
    inline-block
    `

    let sizeInterno

    //Tamaño de logo
    if (size==="small") {
        sizeInterno = "w-16"
    }
    if (size==="medium") {
        sizeInterno = "w-32"
    }
    if (size==="large") {
        sizeInterno = "w-64"
    }

    return (
        <img
        alt="Logo"
        className={`${defaultStyles} ${sizeInterno}`}
        src={`${logo}`}
        {...props}
        >
            
        </img>
    )
}

export default Logo


Logo.defaultProps = {
    logo: LogoImg,
    size: "medium",
}
