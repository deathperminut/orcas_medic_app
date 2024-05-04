import React from "react";
import $ from "jquery"
import './PersonalAppointment.css'
import 'malihu-custom-scrollbar-plugin';
import { AppContext } from "../../../../../context";
import { useNavigate } from 'react-router-dom'
import Preloader from '../../../../../components/Preloader/Preloader';
import { GetDatesMedic } from '../../../../../Services/MainApp/Medic/dates';
import Swal from 'sweetalert2';



import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import { GetPatientUserDates } from "../../../../../Services/MainApp/Users/User";

require('jquery-mousewheel');


export default function PersonalAppointment() {

    
    /* navigation */
    const navigate=useNavigate();
    
    /* APP CONTEXT */
    let {userData,token} = React.useContext(AppContext);


    let [preloader,setPreloader] = React.useState(false);
    let [dates,setDates] = React.useState([
        // {
        //     "id": 1,
        //     "hora_inicio": "2023-12-01T12:15:00-05:00",
        //     "hora_finalizacion": null,
        //     "es_completada": false,
        //     "cita_id": {
        //         "id": 1,
        //         "observaciones": "Observaciones de la cita 2",
        //         "fecha_realizacion_consulta": "2024-03-17T10:00:00-05:00",
        //         "fecha_siguiente_consulta": "2024-04-17T10:00:00-05:00",
        //         "documento": "Documento de la cita",
        //         "calificacion_examen": 9.5,
        //         "user_id": {
        //             "id": "60279df3-a039-4c3a-a6f8-70f03a41f79c",
        //             "id_ubicacion": null,
        //             "tipo_identificacion": "CC",
        //             "identificacion": "12345",
        //             "email": "estivenvalenciacastrillon@gmail.com",
        //             "primer_nombre": "estiven",
        //             "segundo_nombre": "sebas",
        //             "primer_apellido": "paciente",
        //             "segundo_apellido": "castrillon",
        //             "fecha_nacimiento": "2023-04-04",
        //             "genero": "Masculino",
        //             "ocupacion": "Ingeniero",
        //             "direccion": "Cra 9c #50 41",
        //             "departamento": "Caldas",
        //             "ciudad_residencia": "Manizales",
        //             "barrio": "Comuneros",
        //             "numero_celular": "3137844779",
        //             "eps": "Salud total",
        //             "tipo_regimen": "Contributivo 2",
        //             "aseguradora": "Sura",
        //             "es_paciente": false,
        //             "es_doctor": false,
        //             "es_admin": false,
        //             "es_superusuario": false
        //         },
        //         "doctor_id": "f53db8d2-5674-487f-969b-2b0bb45433ab"
        //     },
        //     "doctor_id": "f53db8d2-5674-487f-969b-2b0bb45433ab"
        // }
    ]);

    /* nextDates */
    React.useEffect(()=>{
      if(token){
        loadDates(userData);
      }else{
        navigate('/Auth/Login');
      }
      
    },[])

    const loadDates=async(data)=>{
      setPreloader(true);
      let result = undefined;

      result = await GetPatientUserDates(data.identificacion,token).catch((error)=>{
            console.log(error);
            setPreloader(false);
            Swal.fire({
              icon: 'info',
              title: 'Problemas para cargar las proximas citas'
            })
      })

      if(result){
        // RESULTADOS
        console.log(result.data);
        setPreloader(false);
        setDates(result.data);
      }

    }

    const GetAge=(dateString)=>{
      /* 
    Función para obtener la edad segun la fecha
    de nacimiento.
    */
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if(age == 1){
      return '1 año'
    }else{
      return age + ' años'
    }
    }

    React.useEffect(()=>{
        $('.wrapper-notifications-').mCustomScrollbar({
          theme: "minimal",
          mouseWheel:{
            scrollAmount: 60,
            normalizeDelta: true
          },
          scrollInertia:100,
          mouseWheelPixels: 100
        });
      },[])


      // dateFormat
      const GetDataHour=(dateString)=>{

        const fecha = new Date(dateString);

        // Obtener la fecha en formato YYYY-MM-DD
        const fechaFormateada = fecha.toISOString().split('T')[0];

        // Obtener la hora en formato 12 horas con AM/PM
        let horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const ampm = horas >= 12 ? 'PM' : 'AM';
        horas = horas % 12;
        horas = horas ? horas : 12; // Ajustar las 12:00 PM y 12:00 AM
        const horaFormateada = horas + ':' + (minutos < 10 ? '0' : '') + minutos + ' ' + ampm;
        

        return [fechaFormateada,horaFormateada]

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
        <div id="card-appointment" className='card border-0 rounded-3 w-100 position-relative bs-2-'>
        <div className='card-header border-0 rounded-3'>
          <div className='row'>
            <div className='col-12'>
              <ul className='nav nav-pills d-flex flex-row justify-content-between' role="tablist">
                <li className='nav-item' role="presentation">
                  <button className='nav-link active rounded-0 d-flex flex-row justify-content-center align-items-center align-self-center' id="data-patient-tab" data-bs-toggle="pill" data-bs-target="#scheduling" type="button" role="tab" aria-controls="scheduling" aria-selected="true"> <span className='ff-monse-regular- me-2'>Información</span></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card-body w-100 pt-0'>
          <div className='tab-content' id='myTabContent'>
            <div className='tab-pane fade show active' id='scheduling' role="tabpanel" aria-labelledby="data-patient-tab" tabIndex="0">
              <div className='row mt-4'>
                <div className='d-flex justify-content-start align-items-start align-self-center position-relative position-relative'>
                  <div className='w-auto'>
                  <p className='lh-sm mb-1 fs-4- ff-monse-regular- fw-normal tx-black-v white font_medium'>{userData?.primer_nombre+' '+userData?.segundo_nombre+' '+userData?.primer_apellido+' '+userData?.segundo_apellido}</p>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <p className='mb-2 fs-5- ff-monse-regular- tx-black- gray font_medium'><strong>Ciudad residencia:</strong> <span className='m-0 fs-5- ff-monse-regular- fst-normal tx-black- white'>{userData?.ciudad_residencia}</span></p>
                <p className='mb-2 fs-5- ff-monse-regular- tx-black- gray font_medium'><strong>Teléfono:</strong> <span className='m-0 fs-5- ff-monse-regular- fst-normal tx-black- white'>{userData?.numero_celular}</span></p>
                <p className='mb-2 fs-5- ff-monse-regular- tx-black- gray font_medium'><strong>Correo:</strong> <span className='m-0 fs-5- ff-monse-regular- fst-normal tx-black- white'>{userData?.email}</span></p>
                <p className='mb-2 fs-5- ff-monse-regular- tx-black- gray font_medium'><strong>Edad:</strong> <span className='m-0 fs-5- ff-monse-regular- fst-normal tx-black- white'>{GetAge(userData?.fecha_nacimiento)}</span></p>
                <p className='mb-2 fs-5- ff-monse-regular- tx-black- gray font_medium'><strong>Barrio:</strong> <span className='m-0 fs-5- ff-monse-regular- tx-black- white'>{userData?.barrio}</span></p>
                <p className='mb-2 lh-sm fs-5- ff-monse-regular- tx-black- gray font_medium'><strong>Dirección:</strong> <span className='m-0 fs-5- ff-monse-regular- fst-normal tx-black- white'>{userData?.direccion}</span></p>
                <p className='mb-2 lh-sm fs-5- ff-monse-regular- tx-black- gray font_medium'><strong>Identificación:</strong> <span className='m-0 fs-5- ff-monse-regular- fst-normal tx-black- white'>{userData?.identificacion}</span></p>
              </div>
              <div className='row'>
                <div className='col-12 bg-white- pt-2 pb-2'>
                  <ul className='nav nav-pills d-flex flex-row justify-content-between' role="tablist">
                    <li className='nav-item' role="presentation">
                      <button className='nav-link active rounded-0 d-flex flex-row justify-content-center align-items-center align-self-center' id="data-patient-tab" data-bs-toggle="pill" data-bs-target="#pills-next-consultation" type="button" role="tab" aria-controls="pills-next-consultation" aria-selected="true"> <span className='ff-monse-regular- me-2'>Proximas consultas</span></button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='row'>
                <div className='tab-content' id='myTabContent'>
                  <div className='tab-pane fade show active' id="pills-next-consultation" role="tabpanel" aria-labelledby="next-consultation-tab" tabIndex="0">
                    <div className='row'>
                      <div className='col-12 wrapper-notifications-'>
                        <div className='tab-content' id='myTabContent'>
                          <div className='tab-pane fade show active' id='scheduling' role="tabpanel" aria-labelledby="data-patient-tab" tabIndex="0">
                            <div className='row g-2'>
                            {dates.map((obj,index)=>{
                                return(
                                  <div className='col-12' key={index}>
                                    <div id="card-user-appointment" className='card border-0 rounded-3 w-100'>
                                      <div className='card-body w-100'>
                                        <div className='d-flex flex-row justify-content-between align-items-start align-self-center'>
                                          <div className='d-flex flex-row justify-content-start align-items-start align-self-center'>
                                            <div className='p-2 me-2 rounded-circle bg-burgundy-'></div>
                                            <div className='w-auto'>
                                              <p className='m-0 lh-sm fs-4- ff-monse-regular- fw-normal tx-black- white font_medium'>{obj?.doctor_id?.primer_nombre + ' ' + obj?.doctor_id?.segundo_nombre + ' ' + obj?.doctor_id?.primer_apellido + ' ' + obj?.doctor_id?.segundo_apellido}</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className='d-flex flex-row justify-content-start align-items-start align-self-center ps-4'>
                                          <div className='w-auto'>
                                            <p className='m-0 lh-sm fs-6- ff-monse-regular- tx-black- white'> <span className='fw-bold white font_medium'>Email</span> | <span className='fw-normal'>{obj?.doctor_id?.email}</span></p>
                                          </div>
                                        </div>
                                        <div className='d-flex flex-row justify-content-start align-items-start align-self-center ps-4'>
                                          <div className='w-auto'>
                                            <p className='m-0 lh-sm fs-6- ff-monse-regular- tx-black- white'> <span className='fw-bold white font_medium'>Celular</span> | <span className='fw-normal'>{obj?.doctor_id?.numero_celular}</span></p>
                                          </div>
                                        </div>
                                        <div className='d-grid gap-3 d-flex flex-row justify-content-between align-items-center align-self-center mt-3 ps-4 pe-1'>
                                          <p className='m-0 me-2 lh-sm fs-6- ff-monse-regular- tx-black- white'> <span className='fw-normal'>{GetDataHour(obj?.hora_inicio)[0]}</span> / <span className='fw-normal '>{GetDataHour(obj?.hora_inicio)[1]}</span></p>
                                          <a className='btn bg-transparent btn-transparent- p-0' data-bs-toggle="collapse" href={"#collapseExample"+index} role="button" aria-expanded="false" aria-controls={"collapseExample"+index}>
                                          <p className='p-0 m-0 lh-sm fs-6- ff-monse-regular- tx-neutral-purple- white'>Detalles</p>
                                          </a>
                                        </div>
                                        <div className='collapse' id={"collapseExample"+index}>
                                          <div className='card card-body border-0 bg-transparent p-2 ps-4 pe-1 white'>
                                            <div className='w-100 d-flex flex-row justify-content-between align-items-center align-self-center'>
                                              <div className='w-auto d-flex flex-row justify-content-start align-items-center align-self-center'>
                                                <p className='m-0 lh-sm fs-6- ff-monse-regular- fw-bold tx-black- me-1'><i className='fa icon-id-number d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none'></i> <span className='d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block gray font_medium'>Identificación</span></p>
                                              </div>
                                              <p className='m-0 lh-sm fs-6- ff-monse-regular- fw-bold tx-black- white font_medium'>{obj?.doctor_id?.identificacion}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='tab-pane fade' id="pills-consultation-history" role="tabpanel" aria-labelledby="consultation-history-tab" tabIndex="0">
                    <div className='row'>
                      <div className='col-12 wrapper-notifications-'>
                        <div className='tab-content' id='myTabContent'>
                          <div className='tab-pane fade show active' id='scheduling' role="tabpanel" aria-labelledby="data-patient-tab" tabIndex="0">
                            <div className='row g-2'>
                            {dates.map((obj,index)=>{
                                return(
                                  <div className='col-12' key={index}>
                                    <div id="card-user-appointment" className='card border-0 rounded-3 w-100'>
                                      <div className='card-body w-100'>
                                        <div className='d-flex flex-row justify-content-between align-items-start align-self-center'>
                                          <div className='d-flex flex-row justify-content-start align-items-start align-self-center'>
                                            <div className='p-2 me-2 rounded-circle bg-burgundy-'></div>
                                            <div className='w-auto'>
                                              <p className='m-0 lh-sm fs-4- ff-monse-regular- fw-normal tx-black- white font_medium'>{obj?.doctor_id?.primer_nombre + ' ' + obj?.doctor_id?.segundo_nombre + ' ' + obj?.doctor_id?.primer_apellido + ' ' + obj?.doctor_id?.segundo_apellido}</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className='d-flex flex-row justify-content-start align-items-start align-self-center ps-4'>
                                          <div className='w-auto'>
                                            <p className='m-0 lh-sm fs-6- ff-monse-regular- tx-black- white'> <span className='fw-bold white font_medium'>Email</span> | <span className='fw-normal'>{obj?.doctor_id?.email}</span></p>
                                          </div>
                                        </div>
                                        <div className='d-flex flex-row justify-content-start align-items-start align-self-center ps-4'>
                                          <div className='w-auto'>
                                            <p className='m-0 lh-sm fs-6- ff-monse-regular- tx-black- white'> <span className='fw-bold white font_medium'>Celular</span> | <span className='fw-normal'>{obj?.doctor_id?.numero_celular}</span></p>
                                          </div>
                                        </div>
                                        <div className='d-grid gap-3 d-flex flex-row justify-content-between align-items-center align-self-center mt-3 ps-4 pe-1'>
                                          <p className='m-0 me-2 lh-sm fs-6- ff-monse-regular- tx-black- white'> <span className='fw-normal'>{GetDataHour(obj?.hora_inicio)[0]}</span> / <span className='fw-normal '>{GetDataHour(obj?.hora_inicio)[1]}</span></p>
                                          <a className='btn bg-transparent btn-transparent- p-0' data-bs-toggle="collapse" href={"#collapseExample"+index} role="button" aria-expanded="false" aria-controls={"collapseExample"+index}>
                                          <p className='p-0 m-0 lh-sm fs-6- ff-monse-regular- tx-neutral-purple- white'>Detalles</p>
                                          </a>
                                        </div>
                                        <div className='collapse' id={"collapseExample"+index}>
                                          <div className='card card-body border-0 bg-transparent p-2 ps-4 pe-1 white'>
                                            <div className='w-100 d-flex flex-row justify-content-between align-items-center align-self-center'>
                                              <div className='w-auto d-flex flex-row justify-content-start align-items-center align-self-center'>
                                                <p className='m-0 lh-sm fs-6- ff-monse-regular- fw-bold tx-black- me-1'><i className='fa icon-id-number d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none'></i> <span className='d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block gray font_medium'>Identificación</span></p>
                                              </div>
                                              <p className='m-0 lh-sm fs-6- ff-monse-regular- fw-bold tx-black- white font_medium'>{obj?.doctor_id?.identificacion}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
