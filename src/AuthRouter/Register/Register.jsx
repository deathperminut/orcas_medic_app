import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import Swal from 'sweetalert2';
import {RegisterUser} from '../../Services/Auth/Auth'
import Preloader from '../../components/Preloader/Preloader';

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

    // useState

    let [user,setUser] = React.useState({
        'username':'',
        'email':'',
        'password':''
    })

    // read functions
    
    let ReadInput=(event,type)=>{
        setUser({...user,[type]:event.target.value})
    }

    let [preloader,setPreloader] = React.useState(false);

    let submit =async()=>{

        if(user.email !== '' && user.password !=='' && user.username !==''){
            let result = undefined;
            setPreloader(true);
            result =  await RegisterUser(user).catch((error)=>{
                console.log(error);
                setPreloader(false);
                Swal.fire({
                    icon: 'info',
                    title: 'Nombre de usuario o email en uso.'
                });
            })
            if(result){
                console.log(result.data);
                setPreloader(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Registro realizado con éxito'
                }).then((response)=>{
                    if(response.isConfirmed){
                        navigate('Auth/Login')
                    }
                });
            }
        }else{
            Swal.fire({
                icon: 'info',
                title: 'Registra todos los campos para completar el registro'
            });
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
                    <form className='Form'>
                        <img src={logo} width={80}></img>
                        <p className='TitleLogin'>Complete el formulario para completar el registro</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input type="text" onChange={(event)=>ReadInput(event,'username')} className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Usuario</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input onChange={(event)=>ReadInput(event,'email')} type="text" className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Correo</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input onChange={(event)=>ReadInput(event,'password')}  type="password" className='form-control' id='password' placeholder="Contraseña" />
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
                        <div onClick={submit} className='ButtonElement' style={{'top':'80px'}}>
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
