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
import {getUserData, loginUser} from '../../Services/Auth/Auth'

export default function Login() {

    // APP CONTEXT

    let {setUserData,setToken}  =  React.useContext(AppContext);

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
    let [user,setUser] = React.useState({
        "identificacion":"",
        "password":""
    })



  
    //////////////////////////////////////////////////
    /* FUNCIONALIDAD PARA LEER NOTAS                */
    //////////////////////////////////////////////////

    const startLogin=async()=>{


        if(user.identificacion !== "" && user.password !== ""){
            
            
            setPreloader(true);
            let result = undefined;
            result =  await loginUser(user).catch((error)=>{
                console.log(error);
                setPreloader(false);
                Swal.fire({
                    icon: 'info',
                    title: 'Problemas para iniciar sesión verifica tus credenciales'
                })
            })
            if(result){
                
                console.log("datos: ",result.data);
                setToken(result.data['token']);
                let result_user =  undefined;
                result_user =  await getUserData(user.identificacion,result.data['token']).catch((error)=>{
                    console.log(error);
                    setPreloader(false);
                    Swal.fire({
                        icon: 'info',
                        title: 'Problemas para iniciar sesión verifica tus credenciales'
                    })
                })

                if(result_user !== undefined){
                    console.log("DATOS USUARIO: ",result_user.data);
                    setPreloader(false);
                    setUserData(result_user.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Logueado con éxito'
                    }).then((r)=>{

                        if(r.isConfirmed){
                            navigate('/ModulsMedic')
                        }

                    })
                }
                // con esto nos traemos la información del usuario
                
                //navigate('/ModulsMedic')
            }
            


        }else{

            Swal.fire({
                icon: 'info',
                title: 'Completa toda la información para iniciar sesión'
            })

        }
        
    }

    const ReadInput =(event,type)=>{

        setUser({...user,[type]:event.target.value})
        console.log("lo hicimos?",type,event.target.value)

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
                        <p className='TitleLogin'>Ingrese sus credenciales para continuar</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input onChange={(event)=>ReadInput(event,'identificacion')} type="text" className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Identificación</label>
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
                        <div className="" style={{marginTop:'60px'}}>
                            <div className="col-12">
                            <ToggleSwitch />
                            </div>
                        </div>
                        <div onClick={startLogin} className='ButtonElement'>
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
