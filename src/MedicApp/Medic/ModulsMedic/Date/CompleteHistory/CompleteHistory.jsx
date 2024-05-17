import React from 'react'
import './CompleteHistory.css'
import Select, { components } from 'react-select'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-tooltip/dist/react-tooltip.css";
import Preloader from '../../../../../components/Preloader/Preloader';
import makeAnimated from 'react-select/animated';
import { AppContext } from '../../../../../context';
import Swal from 'sweetalert2';
import { SaveUserData } from '../../../../../Services/Auth/LocalStorage';
import { updateUser } from '../../../../../Services/MainApp/Users/User';
import { actualizarAntescedentes } from '../../../../../Services/MainApp/Medic/MedicHistory/Antecedentes';
import { actualizarCita, crearCita } from '../../../../../Services/MainApp/Medic/MedicHistory/Citas';
import { crearAgendamiento } from '../../../../../Services/MainApp/Medic/MedicHistory/Agendamiento';
import { crearTestAnsiedad } from '../../../../../Services/MainApp/Medic/MedicHistory/test_ansiedad';
import { crearTestGeneral } from '../../../../../Services/MainApp/Medic/MedicHistory/test_general';
import { crearTestDepresion } from '../../../../../Services/MainApp/Medic/MedicHistory/test_depresion';
import { crearTestEstres } from '../../../../../Services/MainApp/Medic/MedicHistory/test_estres';
/* MEDICAL HISTORY COMPONENTS */



export default function CompleteHistory() {

  let [preloader,setPreloader] = React.useState(false);

  let navigate = useNavigate()

  /* APP CONTEXT */

  let {citaAgend,setCitaAgend,si_estres,setSi_estres,si_depresion,setSi_depresion,si_ansiedad,setSi_ansiedad,userData,filerepose,setFilerepose,fileActive,setFileActive,typeDate,setTypeDate,dniDateUser,setDniDateUser,token,userDateData,setUserDateData,beforeDate,setBeforeDate,depresion,setDepresion,ansiedad,setAnsiedad,estres,setEstres,general,setGeneral,setFlagHistory} = React.useContext(AppContext);
  

  /* useState */

  let [valor,setValor] = React.useState("");

  const ReadInput=(event)=>{

    setValor(event.target.value);

  }

  const SaveHistory=async()=>{
    if(valor  == ""){
        Swal.fire({
            icon: 'info',
            title: 'Ingresa una observación para guardar la historia'
        })
    }else{

        // GUARDAMOS LOS REGISTROS ESPECIFICOS Y LA INFORMACIÓN DEL USUARIO
        changeUserData();
    }
  }

  const changeUserData=async()=>{

    let result = undefined;
    setPreloader(true);
    result = await updateUser(userDateData,token).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
            icon: 'info',
            title: 'Problemas para actualizar información del usuario'
        })
    })

    if(result){
        console.log(result.data);
        setPreloader(false);
        changePass();
    }

  }

  const changePass=async()=>{

    let result = undefined;
    setPreloader(true);
    
    result = await actualizarAntescedentes(beforeDate,token).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
            icon: 'info',
            title: 'Problemas para actualizar antescedentes'
        })
    })

    if(result){
        console.log(result.data);
        setPreloader(false);
        // CREAMOS LA CITA
        createDate();
    }

  }

  const createDate=async()=>{
    let result = undefined;
    setPreloader(true);
    let body={
        user_id:userDateData?.id,
        doctor_id:userData?.id
    }
    console.log("DATOS CITA: ",body);
    result = await crearCita(body,token).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
            icon: 'info',
            title: 'Problemas para crear cita'
        })
    })

    if(result){
        console.log(result.data);
        setPreloader(false);
        // ACTUALIZAMOS LA CITA CON LA INFORMACIÓN REAL
        createAgend(result.data);
    }
  }

  const createAgend=async(InfoCita)=>{

    let result = undefined;
    setPreloader(true);
    let body={
        cita_id:InfoCita?.id,
        doctor_id:userData?.id,
        tipo_cita:typeDate,
        hora_inicio:InfoCita?.fecha_realizacion_consulta,
        es_completada:true
    }
    console.log("DATOS AGENDAMIENTO: ",body);
    
    result = await crearAgendamiento(body,token).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
            icon: 'info',
            title: 'Problemas para crear cita'
        })
    })

    if(result){
        console.log(result.data);
        setPreloader(false);
        // ACTUALIZAMOS LA CITA CON LA INFORMACIÓN REAL
        updateDate(InfoCita,result.data);
        
    }
}


const updateDate=async(InfoCita,InfoAgend)=>{

    let result = undefined;
    setPreloader(true);

    let body=new FormData();

    body.append('id',InfoCita?.id);
    body.append('fecha_realizacion_consulta',InfoCita?.fecha_realizacion_consulta);
    body.append('tipo_cita',typeDate);
    body.append('documento_test_reposo',filerepose);
    body.append('documento_test_activo',fileActive);
    body.append('id_agendamiento',InfoAgend?.id);
    body.append('doctor_id',userData?.id);
    body.append('user_id',userDateData?.id);


    console.log("DATOS ACTUALIZAR CITA: ",body);
    
    result = await actualizarCita(body,token).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
            icon: 'info',
            title: 'Problemas para actualizar cita'
        })
    })

    if(result){
        console.log(result.data);
        setPreloader(false);
        // CREAMOS EL TEST GENERAL
        createGeneral(result.data);
        
    }

}

const  createGeneral=async(infoCita)=>{

    let result = undefined;
    setPreloader(true);

    result =  await crearTestGeneral({...general,['cita_id']:infoCita?.id},token).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
            icon: 'info',
            title: 'Problemas para crear general'
        })
    })


    if(result){

        console.log(result.data);
        setPreloader(false);
        // creamos los demas test
        if(si_ansiedad=="Si"){

            createAnsiedad(infoCita);

        }else if(si_depresion=="Si"){

            createDepresion(infoCita);

        }else if (si_estres=="Si"){

            createEstres(infoCita);

        }else{
            Swal.fire({
                icon: 'success',
                title: 'Guardado con éxito'
            })
            // RESETEAMOS Y GUARDAMOS LAS VARIABLES NECESARIAS
            setSi_ansiedad('No');
            setSi_depresion('No');
            setSi_estres('No');
            setFileActive(null);
            setFilerepose(null);
            setCitaAgend(infoCita);
            // NAVEGAMOS A LA ULTIMA SECCIÓN
            navigate('/ModulsMedic/Date_Medic/FinishProcess');
        }

    }

}

const createAnsiedad=async(infoCita)=>{

    let result = undefined;
    setPreloader(true);
    
    result =  await crearTestAnsiedad({...ansiedad,['cita_id']:infoCita?.id},token).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
            icon: 'info',
            title: 'Problemas para crear ansiedad'
        })
    })


    if(result){

        console.log(result.data);
        setPreloader(false);
        // creamos los demas test
        if(si_depresion=="Si"){

            createDepresion(infoCita);

        }else if(si_estres=="Si"){

            createEstres(infoCita);

        }else{
            Swal.fire({
                icon: 'success',
                title: 'Guardado con éxito'
            })
            setSi_ansiedad('No');
            setSi_depresion('No');
            setSi_estres('No');
            setFileActive(null);
            setFilerepose(null);
            setCitaAgend(infoCita);
            // NAVEGAMOS A LA ULTIMA SECCIÓN
            navigate('/ModulsMedic/Date_Medic/FinishProcess');
        }

    }

}


const createDepresion=async(infoCita)=>{

    let result = undefined;
    setPreloader(true);
    
    result =  await crearTestDepresion({...depresion,['cita_id']:infoCita?.id},token).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
            icon: 'info',
            title: 'Problemas para crear ansiedad'
        })
    })


    if(result){

        console.log(result.data);
        setPreloader(false);
        // creamos los demas test
        if(si_estres=="Si"){

            createEstres(infoCita);

        }else{
            Swal.fire({
                icon: 'success',
                title: 'Guardado con éxito'
            })
            setSi_ansiedad('No');
            setSi_depresion('No');
            setSi_estres('No');
            setFileActive(null);
            setFilerepose(null);
            setCitaAgend(infoCita);
            // NAVEGAMOS A LA ULTIMA SECCIÓN
            navigate('/ModulsMedic/Date_Medic/FinishProcess');
        }

    }

}


const createEstres=async(infoCita)=>{

    let result = undefined;
    setPreloader(true);
    result =  await crearTestEstres({...estres,['cita_id']:infoCita?.id},token).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
            icon: 'info',
            title: 'Problemas para crear ansiedad'
        })
    })


    if(result){

        console.log(result.data);
        setPreloader(false);
        // creamos los demas test
        Swal.fire({
            icon: 'success',
            title: 'Guardado con éxito'
        })
        setSi_ansiedad('No');
        setSi_depresion('No');
        setSi_estres('No');
        
        // NAVEGAMOS A LA ULTIMA SECCIÓN
        navigate('/ModulsMedic/Date_Medic/FinishProcess');

    }

}





  return (
    <React.Fragment>
      {
                preloader ?
                <>
                
                <Preloader></Preloader>
                </>
                :

                <></>
      }
      <div style={{'marginBottom':'100px'}} onClick={()=>{
        navigate('/ModulsMedic/Date_Medic/MakeHistory5')}
        }  className='ButtonElement'>
                                <span  className='ButtonText'>Volver</span>
      </div>
      <div className='row mt-4 mb-4'>
        <div className='col-12'>
          <h2 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- white font_medium'>Completar historia</h2>
        </div>
      </div>
      <form id='internal-form' action='' className='position-relative'>
                    <div className='row mt-4 mb-4'>
                        <div className='col-12'>
                            <form id='internal-form' action='' className='position-relative'>
                                <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                                        <label htmlFor="exampleFormControlTextarea1" className='form-label mb-3 lh-sm fs-5- ff-monse-regular- tx-light-black-'>valoración y recomendaciones</label>
                                        <textarea value={valor} onChange={ReadInput} className='form-control' id="current-illness" rows="4" placeholder='Ingrese una corta descripción aquí'></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
        </form>
      
      
      
      <div style={{'marginBottom':'50px'}} onClick={SaveHistory} className='ButtonElement'>
                                <span  className='ButtonText'>Guardar</span>
      </div>
    </React.Fragment>
  )
}
