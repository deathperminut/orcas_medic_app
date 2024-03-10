import React from 'react'
import './SmsValidation.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import Swal from 'sweetalert2';

export default function SmsValidation() {
  const navigate=useNavigate();
  return (
    <div>
            <div className='formContainer'>
                    <form className='FormRecovery'>
                        <img src={logo} width={80}></img>
                        <p className='TitleLogin'>Ingrese el código enviado a su correo electronico y número de telefono para completar el ingreso</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input type="text" className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Código</label>
                            </div>
                        </div>
                        <div onClick={()=>navigate('/AuthPatient/SmsValidation')} className='ButtonElement'>
                                <span  className='ButtonText'>Validar</span>
                        </div>
                        
                    </form>
            </div>
     </div>
  )
}
