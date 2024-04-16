import React from 'react'
import './DniValidation.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import Swal from 'sweetalert2';


export default function DniValidation() { 

   /* useStates */
   let [dni,setDni] = React.useState("");
   /* functions */

   let ReadInput =(event)=>{

        setDni(event.target.value);

   }
   

   /* submit */

   const submit =async()=>{

        let result = undefined;

   }

  

  // use Navigate 
  const navigate=useNavigate();
  return (
    <div>
            <div className='formContainer'>
                    <form className='FormRecovery'>
                        <img src={logo} width={80}></img>
                        <p className='TitleLogin'>Ingrese su cédula para poder acceder a su historial clínico.</p>
                        <div className='inputContainer'>
                            <div className='form-floating inner-addon- left-addon-'>
                                    <input type="text" className='form-control' id='user' placeholder="Usuario" />
                                    <label className='fs-5- ff-monse-regular-'>Cédula</label>
                            </div>
                        </div>
                        <div onClick={()=>navigate('/AuthPatient/SmsValidation')} className='ButtonElement'>
                                <span  className='ButtonText'>Ingresar</span>
                        </div>
                        
                    </form>
            </div>
     </div>
  )
}
