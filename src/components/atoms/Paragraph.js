import React from "react";

const Paragraph = ({ children, align, className }) => {
  let defaultStyles = `
    ${align}      
    text-xl
    text-gray-700
    mx-2 my-8
    font-Primary
    px-5
    `;


  return <p className={` ${defaultStyles} ${className}`}>{children}</p>;
};

export default Paragraph;

Paragraph.defaultProps = {
  align: "text-left",
};
