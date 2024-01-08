import React from 'react'
import imagenes from '../assets/imagenes'

function Imgg() {
  return (
    <div>
      <img src={imagenes.img1} alt="imagen1" />
      <img src={imagenes.img2} alt="imagen2" />
      <img src={imagenes.img3} alt="imagen3" />
    </div>
  )
}

export default Imgg;