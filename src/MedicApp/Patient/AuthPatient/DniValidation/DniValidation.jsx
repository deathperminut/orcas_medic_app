import React from 'react'
import './DniValidation.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import Swal from 'sweetalert2';
import Preloader from '../../../../components/Preloader/Preloader';
import { LoginPatient } from '../../../../Services/Auth/Auth';
import { AppContext } from '../../../../context';


export default function DniValidation() { 

        /* useContext */

        let {dni,setDni} = React.useContext(AppContext);

        /* useStates */
        let [DNI,setDNI] = React.useState("");
        let [preloader,setPreloader] = React.useState()
        /* functions */

        let ReadInput =(event)=>{

                setDNI(event.target.value);

        }
        

        /* submit */

        const submit =async()=>{
                
                if(DNI == ""){
                        Swal.fire({
                                icon: 'info',
                                title: 'Ingresa tu identificación para iniciar sesión'
                        })
                }else{
                        let result = undefined;
                        setPreloader(true);
                        result =  await LoginPatient(DNI).catch((error)=>{
                                setPreloader(false);
                                if(error?.response?.data?.error === "[Usuario no registrado o sin acceso como paciente]"){
                                        Swal.fire({
                                                icon: 'info',
                                                title: 'Usuario no registrado o sin acceso como paciente'
                                        })
                                }else{
                                        Swal.fire({
                                                icon: 'info',
                                                title: 'Problemas para llamar el servicio de validación de usuario'
                                        })
                                }
                                
                        })

                        if(result){
                                setPreloader(false);
                                console.log(result.data);
                                if(result.data['ok'] == "Envio de correo de forma exitosa"){
                                        Swal.fire({
                                                icon: 'success',
                                                title: 'Se te ha enviado un código de verificación a tu email'
                                        }).then((response)=>{
                                                setDni(DNI)
                                                if(response.isConfirmed){
                                                        navigate('/AuthPatient/SmsValidation/')
                                                }else{
                                                        navigate('/AuthPatient/SmsValidation/')
                                                }
                                        })
                                }else{
                                        Swal.fire({
                                                icon: 'info',
                                                title: 'Problemas para validar el usuario, posiblemente no tengan alguna cita registrada en el sistema'
                                        })
                                }
                                
                        }
                }
                

        }

        

        // use Navigate 
        const navigate=useNavigate();

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
                        <p className='TitleLogin'>Ingrese su cédula para poder acceder a su historial clínico.</p>
                        <div className='inputContainer'>
                                <div className='form-floating inner-addon- left-addon-'>
                                        <input onChange={ReadInput} type="text" className='form-control' id='user' placeholder="Usuario" />
                                        <label className='fs-5- ff-monse-regular-'>Cédula</label>
                                </div>
                        </div>
                        <div onClick={submit} className='ButtonElement'>
                                <span  className='ButtonText'>Ingresar</span>
                        </div>
                        <div  onClick={()=>{navigate('/Auth/Login')}} className='ButtonElementV2' style={{'marginTop':'50px'}}>
                                <span  className='ButtonTextV2'>Volver</span>
                        </div> 
                        
                    </form>
            </div>
     </div>
  )
}
