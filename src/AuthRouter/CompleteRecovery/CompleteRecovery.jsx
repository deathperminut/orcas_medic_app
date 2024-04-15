import React from 'react'
import './CompleteRecovery.css'
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png'
import ToggleSwitch from '../../components/buttonToggle/buttonToggle';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import Swal from 'sweetalert2';
import { confirmResetPassword } from '../../Services/Auth/Auth';
import Preloader from '../../components/Preloader/Preloader';

export default function CompleteRecovery() {

    const navigate=useNavigate();
    const params = useParams();
    const url = window.location.href;
    
    
    // use States
    const [eye,setEye]=React.useState(true);
    const [eye2,setEye2]=React.useState(true);
    let   [token,setToken]= React.useState(null);
    let   [passwords,setPasswords] = React.useState({
        'password_1':'',
        'password_2':''
    });
    let [preloader,setPreloader] = React.useState(false);

    // use effect

    React.useEffect(()=>{
        getToken();
    },[])

    const getToken = async () => {
        const tk = url.split('?')[1];
        setToken(tk)
    }

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

    /* INPUTS */
    const ReadInputs=(event,type)=>{

        setPasswords({...passwords,[type]:event.target.value});


    }

    /* submit */

    const UpdatePassword=async()=>{


        if(passwords.password_1 !== passwords.password_2){

            Swal.fire({
                icon: 'info',
                title: 'Las contraseñas no coinciden'
            })

        }else{

            if(passwords.password_1 == ""){

                Swal.fire({
                    icon: 'info',
                    title: 'Completa los campos correspondientes'
                })

            }else{

            setPreloader(true);
            let result =  undefined;
            result =  await confirmResetPassword({'token':token,'password':passwords['password_1']}).catch((error)=>{
                console.log(error);
                setPreloader(false);
                Swal.fire({
                    icon: 'info',
                    title: 'Problemas para completar el cambio de contraseña'
                })
            })
            if(result){
                console.log(result.data);
                setPreloader(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Contraseña actualizada correctamente'
                }).then((r)=>{
                    if (r.isConfirmed){
                        navigate('/Auth/Login')
                    }
                })
            }

            }
            
            

        }


    }
    
    
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
                    <form className='FormV3'>
                        <img src={logo} width={80}></img>
                        <p className='TitleLogin'>Completa el proceso de recuperación registrando tu nueva contraseña</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input onClick={(event)=>ReadInputs(event,'password_1')}  type="password" className='form-control' id='password' placeholder="Contraseña" />
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
                                    <input onClick={(event)=>ReadInputs(event,'password_2')}   type="password" className='form-control' id='password2' placeholder="Contraseña" />
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
                        <div onClick={UpdatePassword} className='ButtonElement' style={{'top':'40px'}}>
                                <span  className='ButtonText'>Actualizar</span>
                        </div>
                        
                    </form>
                    <div onClick={()=>{navigate('/Auth/Login')}}  className='linksContainer'>
                            <span className='spanText'>Ir al login</span>   
                    </div>
            </div>
        </div>
    )
}
