import React from 'react'
import './ResultsTest.css'
import { IoAlertCircleOutline } from "react-icons/io5";

export default function ResultsTest() {
  return (
    <div className='alertContainer'>
        <IoAlertCircleOutline color='#d1a207' size={55}></IoAlertCircleOutline>
        <span className='orangev2 font_medium text-align'>Salud mental baja</span>
        <p className='white font_medium text-align' style={{'marginTop':'10px'}}>
        <ul>
          <li>1) Buscar ayuda profesional urgente.</li>
          <li>2) Considerar la posibilidad de tomar medicación si es necesario.</li>
          <li>3) Implementar cambios en su estilo de vida para mejorar su bienestar general.</li>
          <li>4) Buscar apoyo social en amigos, familiares o grupos de apoyo.</li>
        </ul>
        </p>
    </div>
  )
}
