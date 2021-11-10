import React from 'react'

import Paragraph  from './Paragraph'
import Logo  from './Logo'

const Card = ({type, children}) => {

    let defaultStyles

    switch (type) {
        case "row":
            defaultStyles = "bg-red-300 flex-row";
            break;
        case "column":
            defaultStyles = "bg-green-300 flex-col"
            break;
    
        default:
            break;
    }

    return (
        <div className={`flex ${defaultStyles}`}>
            {children}
        </div>
    )
}

Card.Body = Paragraph
Card.Logo = Logo

export default Card
