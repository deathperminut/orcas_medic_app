import React from 'react'
import './SmsValidation.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import Swal from 'sweetalert2';
import Preloader from '../../../../components/Preloader/Preloader';
import { getUserData, verifyCode } from '../../../../Services/Auth/Auth';
import { AppContext } from '../../../../context';

export default function SmsValidation() { 

        /* appContext */

        let {userData,token,setToken,setUserData,dni,setDni} = React.useContext(AppContext);

        /* use State */
        
        let [code,setCode]  = React.useState("");
        let [preloader,setPreloader] = React.useState(false);

        /* use Effects */

        React.useEffect(()=>{

                if(dni == ""){
                        navigate('/AuthPatient/DniValidation')
                }

        },[dni])

        /* navigate */
        const navigate=useNavigate();

        /* functions */
        
        const ReadInput =(event)=>{
                setCode(event.target.value);
        }

        const submit =async()=>{

                if (code ==""){
                        Swal.fire({
                                icon: 'info',
                                title: 'Registra el código que se envio a tu correo para validar'
                        })
                }else{

                let result = undefined;
                setPreloader(true);
                result = await verifyCode(code).catch((error)=>{
                        console.log(error);
                        setPreloader(false);
                        Swal.fire({
                                icon: 'info',
                                title: 'Problemas para validar el código suministrado'
                        })
                })

                if (result){
                        console.log(result.data);
                        setPreloader(false);
                        setToken(result.data['token']);
                        let result_user =  undefined;
                        result_user =  await getUserData(dni,result.data['token']).catch((error)=>{
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
                                navigate('/ModulsPatient')
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
                                                <form className='FormRecovery'>
                                                        <img src={logo} width={80}></img>
                                                        <p className='TitleLogin'>Ingrese el código enviado a su correo electronico y número de telefono para completar el ingreso</p>
                                                        <div className='inputContainer'>
                                                        <div className='form-floating inner-addon- left-addon-'>
                                                                <input onChange={ReadInput} type="text" className='form-control' id='user' placeholder="Usuario" />
                                                                <label className='fs-5- ff-monse-regular-'>Código</label>
                                                        </div>
                                                        </div>
                                                        <div onClick={submit} className='ButtonElement'>
                                                                <span  className='ButtonText'>Validar</span>
                                                        </div>
                                                        <div  onClick={()=>{navigate('/Auth/Login')}} className='ButtonElementV2' style={{'marginTop':'50px'}}>
                                                                <span  className='ButtonTextV2'>Volver</span>
                                                        </div> 
                                                        
                                                </form>
                                </div>
                </div>
        )
}
