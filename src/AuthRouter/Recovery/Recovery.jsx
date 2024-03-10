import React from 'react'
import './Recovery.css'
import logo from '../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png'
import ToggleSwitch from '../../components/buttonToggle/buttonToggle';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'

export default function Recovery() {

  const navigate=useNavigate();


  return (
    <div>
            <div className='formContainer'>
                    <form className='FormRecovery'>
                        <img src={logo} width={80}></img>
                        <p className='TitleLogin'>Ingrese el correo electronico asociado a la cuenta</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input type="text" className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Email</label>
                            </div>
                        </div>
                        <div className='ButtonElement'>
                                <span  className='ButtonText'>Recuperar</span>
                        </div>
                        
                    </form>
                    <div onClick={()=>{navigate('/Auth/Login')}} className='linksContainer'>
                            <span className='spanText'>Volver</span>   
                    </div>
            </div>
     </div>
  )
}
