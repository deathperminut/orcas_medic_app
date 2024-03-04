import React from 'react'
import './Login.css'
// importaciones
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AppContext } from '../../context';
import ToggleSwitch from '../../components/buttonToggle/buttonToggle';


export default function Login() {
    const navigate=useNavigate();

    return (
        <div>
            <div className='formContainer'>
                    <form className='Form'>
                        <p className='TitleLogin'>Ingrese sus credenciales para continuar</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input type="text" className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Usuario</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input  type="password" className='form-control' id='user' placeholder="Contraseña" />
                                    <label className='fs-5- ff-monse-regular-'>Contraseña</label>
                            </div>
                        </div>
                        <div className="" style={{marginTop:'60px'}}>
                            <div className="col-12">
                            <ToggleSwitch />
                            </div>
                        </div>
                        <div className='ButtonElement'>
                                <span  className='ButtonText'>Inicia sesión</span>
                        </div>
                    </form>
            </div>
        </div>
    )
}
