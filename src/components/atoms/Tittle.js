import React from 'react'

const Tittle = ({children}) => {
    
    let defaultStyles = `
        text-center
        text-4xl sm:text-5xl lg:text-6xl
        mx-2 my-10
        w-full
        font-Primary
        font-bold
    `
        
    
    return (
        <h1 className={`${defaultStyles}`}>
            {children}
        </h1>
    )
}

export default Tittle
