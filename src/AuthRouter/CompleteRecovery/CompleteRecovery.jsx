import React from 'react'
import './CompleteRecovery.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png'
import ToggleSwitch from '../../components/buttonToggle/buttonToggle';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';

export default function CompleteRecovery() {

    const navigate=useNavigate();
    
    // use States
    const [eye,setEye]=React.useState(true);
    const [eye2,setEye2]=React.useState(true);

    // passwords
    const SeePassword=()=>{
        setEye(false);
        const input = document.querySelector("#password");
        // When an input is checked, or whatever...
        input.setAttribute("type", "text");
        input.classList.add( "colorWhite" );
    }
    
    const HidePassword=()=>{
    setEye(true);
    const input = document.querySelector("#password");

        input.setAttribute("type", "password");
        input.classList.remove( "colorWhite" );
    }

    const SeePassword2=()=>{
        setEye2(false);
        const input = document.querySelector("#password2");
        // When an input is checked, or whatever...
        input.setAttribute("type", "text");
        input.classList.add( "colorWhite" );
    }
    
    const HidePassword2=()=>{
    setEye2(true);
    const input = document.querySelector("#password2");

        input.setAttribute("type", "password");
        input.classList.remove( "colorWhite" );
    }
    
    return (
        <div>
            <div className='formContainer'>
                    <form className='FormV3'>
                        <img src={logo} width={80}></img>
                        <p className='TitleLogin'>Completa el proceso de recuperación registrando tu nueva contraseña</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input  type="password" className='form-control' id='password' placeholder="Contraseña" />
                                    <label className='fs-5- ff-monse-regular-'>Contraseña</label>
                                    {eye===true  ? 
                                    <>
                                    <AiOutlineEye className='eye-password' onClick={SeePassword}></AiOutlineEye>
                                    </>
                                    :
                                    <>
                                    <AiOutlineEyeInvisible className='eye-password' onClick={HidePassword}></AiOutlineEyeInvisible>
                                    </>
                                    }
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input  type="password" className='form-control' id='password2' placeholder="Contraseña" />
                                    <label className='fs-5- ff-monse-regular-'>Validación contraseña</label>
                                    {eye2===true  ? 
                                    <>
                                    <AiOutlineEye className='eye-password' onClick={SeePassword2}></AiOutlineEye>
                                    </>
                                    :
                                    <>
                                    <AiOutlineEyeInvisible className='eye-password' onClick={HidePassword2}></AiOutlineEyeInvisible>
                                    </>
                                    }
                            </div>
                        </div>
                        <div className='ButtonElement' style={{'top':'40px'}}>
                                <span  className='ButtonText'>Actualizar</span>
                        </div>
                        
                    </form>
                    <div className='linksContainer'>
                            <span className='spanText'>Ir al login</span>   
                    </div>
            </div>
        </div>
    )
}
