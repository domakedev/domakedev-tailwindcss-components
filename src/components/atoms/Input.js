import React from 'react'

const Input = ({placeholder, type, name, id}) => {

    const defaultStyles = `
        w-4/5
        py-2
        px-4
        placeholder-gray-400
        border border-gray-600 rounded
        focus:outline-none focus:ring-1 focus:ring-gray-600
        focus:bg-gray-100
        `

    return (
        <input
            className={defaultStyles}
            placeholder={placeholder}
            type={type}
            name={name}
            id={id}
        >
            
        </input>
    )
}

export default Input
