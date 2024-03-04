import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';

export default function Register() {


    const navigate=useNavigate();
    // use States
    const [eye,setEye]=React.useState(true);

    // passwords
    const SeePassword=()=>{
        console.log("dd")
        setEye(false);
        const input = document.querySelector("#password");
        // When an input is checked, or whatever...
        input.setAttribute("type", "text");
        input.classList.add( "colorWhite" );
    }
    
    const HidePassword=()=>{
    console.log("dad")
    setEye(true);
    const input = document.querySelector("#password");

        input.setAttribute("type", "password");
        input.classList.remove( "colorWhite" );
    }
  return (
    <div>
            <div className='formContainer'>
                    <form className='Form'>
                        <img src={logo} width={80}></img>
                        <p className='TitleLogin'>Complete el formulario para completar el registro</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input type="text" className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Usuario</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input type="text" className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Correo</label>
                            </div>
                        </div>
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
                        <div className='ButtonElement' style={{'top':'80px'}}>
                                <span  className='ButtonText'>Registrarse</span>
                        </div>
                        
                    </form>
                    <div onClick={()=>{navigate('/Auth/Login')}}  className='linksContainer'>
                            <span className='spanText'>Volver</span>   
                    </div>
            </div>
        </div>
  )
}
