import React from 'react'
import './Recovery.css'
import logo from '../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { resetPassword } from '../../Services/Auth/Auth';
import Preloader from '../../components/Preloader/Preloader';

export default function Recovery() {

   let [email,setEmail] = React.useState("");
   let [preloader,setPreloader] = React.useState(false);

   const navigate=useNavigate();

   /* functions */

   let readInput=(event)=>{

        setEmail(event.target.value);

   }

   let submit =async()=>{

        let result =  undefined;
        setPreloader(true);
        result = await resetPassword({'email':email}).catch((error)=>{
                console.log(error);
                setPreloader(false);
                Swal.fire({
                        icon: 'info',
                        title: 'Problemas para completar el proceso, verifica que el correo este vinculado a una cuenta.'
                })
        })

        if(result){
                setPreloader(false);
                console.log(result.data);
                if(result.data.email !=undefined){
                        Swal.fire({
                                icon: 'info',
                                title: 'No existe el correo en base de datos'
                        })
                }else{

                        Swal.fire({
                                icon: 'success',
                                title: 'Correo de recuperación enviado, verifica para poder completar el proceso'
                        })
                        
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
                        <p className='TitleLogin'>Ingrese el correo electronico asociado a la cuenta</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input onChange={readInput} type="text" className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Email</label>
                            </div>
                        </div>
                        <div onClick={submit} className='ButtonElement'>
                                <span  className='ButtonText'>Recuperar</span>
                        </div>
                        
                    </form>
                    <div onClick={()=>{navigate('/Auth/Login')}} className='linksContainer'>
                            <span className='spanText'>Volver</span>   
                    </div>
            </div>
     </div>
  )
}
