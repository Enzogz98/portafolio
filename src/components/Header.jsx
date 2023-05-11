import React from 'react'
import foto from "../assets/foto.jpg"



const Header = () => {
  return (
    <div>
        <div className="container; col-6">
          <img src={foto} alt="100px" />
        </div>
        <div className="container; col-6">
        <h1> Enzo Gonzalez</h1>
        </div>
      
    </div>
  )
}

export default Header
