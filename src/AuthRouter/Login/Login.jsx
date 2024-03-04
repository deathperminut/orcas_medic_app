import React from 'react'
import './Login.css'
// importaciones
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AppContext } from '../../context';
import logo from '../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png'
import ToggleSwitch from '../../components/buttonToggle/buttonToggle';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import Preloader from '../../components/Preloader/Preloader';

export default function Login() {
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

    // useStates

    let [preloader,setPreloader] = React.useState(false);


    return (
        <div>
            {
                preloader ?
                <>
                <Preloader></Preloader>
                </>
                :

                <></>
            }
            <div className='formContainer'>
                    <form className='Form'>
                        <img src={logo} width={80}></img>
                        <p className='TitleLogin'>Ingrese sus credenciales para continuar</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input type="text" className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Usuario</label>
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
                        <div className="" style={{marginTop:'60px'}}>
                            <div className="col-12">
                            <ToggleSwitch />
                            </div>
                        </div>
                        <div onClick={()=>{setPreloader(true)}} className='ButtonElement'>
                                <span  className='ButtonText'>Inicia sesión</span>
                        </div>
                        
                    </form>
                    <div className='linksContainer'>
                            <span onClick={()=>{navigate('/Auth/Recovery')}} className='spanText'>Olvide mi contraseña</span>   
                            <div  onClick={()=>{navigate('/Auth/Register')}} className='ButtonElementV2'>
                                <span  className='ButtonTextV2'>Crear cuenta</span>
                            </div> 
                    </div>
            </div>
        </div>
    )
}
