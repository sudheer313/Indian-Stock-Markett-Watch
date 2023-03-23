import React from 'react'

const Section = ({ children, backgroundColor = "white", className }) => {
  return (
    <div className={`py-16 px-4 bg-${backgroundColor} ${className}`}>
    <div className="container mx-auto">{children}</div>
  </div>
  )
}

export default Section