import React from 'react'

const Paragraph = ({children}) => {
    let defaultStyles = `
    text-justify        
    text-xl
    mx-2 my-8
    font-Primary
    px-5
    `
        
    
    return (
        <p className={`${defaultStyles}`}>
            {children}
        </p>
    )
}

export default Paragraph
