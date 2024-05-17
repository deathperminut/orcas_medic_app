import React from 'react'
import './Test2.css'
import Select, { components } from 'react-select'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import makeAnimated from 'react-select/animated';
import { AppContext } from '../../../../../../../../../context';
import Swal from 'sweetalert2';
import ResultsTest from '../../ResultsTest/ResultsTest';


export default function Test2() {

    /* APP CONTEXT */
    let {flagHistory,typeDate,setTypeDate,dniDateUser,setDniDateUser,token,ansiedad,setAnsiedad} = React.useContext(AppContext);
    

    /* useState */
    React.useEffect(()=>{
        console.log("Ansiedadv2 : ",ansiedad)
    },[])
    let [questionario,setQuestionario] = React.useState(ansiedad);

    /* functions */

    const ReadCheckbox=(event,type,value)=>{

        // Guardamos la información de los questionarios
        setQuestionario({...questionario,[type]:value});

    }

    const sumData=()=>{
        let keys = Object.keys(questionario);
        let suma = 0

        for (var i=0;i< keys.length; i++){
            suma = suma + questionario[keys[i]]
        }
        return suma
    } 
    
    /* useEffect */
    
    React.useEffect(()=>{

        if(flagHistory){
            // guardamos en el appContext la información del usuario
            setAnsiedad(questionario);
        }

    },[flagHistory])

    return (
        <>
         <form id='internal-form' action='' className='position-relative'>
                                    <div className='col-12'>
                                                <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Síntomas físicos</p>
                                    </div>
                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes palpitaciones o latidos acelerados del corazón?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.palpitaciones == 0} onClick={(event)=>ReadCheckbox(event,'palpitaciones',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.palpitaciones == 1} onClick={(event)=>ReadCheckbox(event,'palpitaciones',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.palpitaciones == 2} onClick={(event)=>ReadCheckbox(event,'palpitaciones',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.palpitaciones == 3} onClick={(event)=>ReadCheckbox(event,'palpitaciones',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes opresión en el pecho o dificultad para respirar?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.opresion_pecho_dificultad_respirar == 0} onClick={(event)=>ReadCheckbox(event,'opresion_pecho_dificultad_respirar',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.opresion_pecho_dificultad_respirar == 1} onClick={(event)=>ReadCheckbox(event,'opresion_pecho_dificultad_respirar',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.opresion_pecho_dificultad_respirar == 2} onClick={(event)=>ReadCheckbox(event,'opresion_pecho_dificultad_respirar',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.opresion_pecho_dificultad_respirar == 3} onClick={(event)=>ReadCheckbox(event,'opresion_pecho_dificultad_respirar',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'> ¿Sientes mareos o atudimiento?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.mareos_aturdimiento == 0} onClick={(event)=>ReadCheckbox(event,'mareos_aturdimiento',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.mareos_aturdimiento == 1} onClick={(event)=>ReadCheckbox(event,'mareos_aturdimiento',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.mareos_aturdimiento == 2} onClick={(event)=>ReadCheckbox(event,'mareos_aturdimiento',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.mareos_aturdimiento == 3} onClick={(event)=>ReadCheckbox(event,'mareos_aturdimiento',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes náuseas o vómitos?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nauseas_vomitos == 0} onClick={(event)=>ReadCheckbox(event,'nauseas_vomitos',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nauseas_vomitos == 1} onClick={(event)=>ReadCheckbox(event,'nauseas_vomitos',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nauseas_vomitos == 2} onClick={(event)=>ReadCheckbox(event,'nauseas_vomitos',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nauseas_vomitos == 3} onClick={(event)=>ReadCheckbox(event,'nauseas_vomitos',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes temblores o sacudidas en las manos?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_1 == 0} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_1',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_1 == 1} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_1',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_1 == 2} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_1',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_1 == 3} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_1',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes sudoración excesiva?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.irritabilidad == 0} onClick={(event)=>ReadCheckbox(event,'irritabilidad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.irritabilidad == 1} onClick={(event)=>ReadCheckbox(event,'irritabilidad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.irritabilidad == 2} onClick={(event)=>ReadCheckbox(event,'irritabilidad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.irritabilidad == 3} onClick={(event)=>ReadCheckbox(event,'irritabilidad',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes entumecimiento u hormigueo en las manos o los pies?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentrarse_pensar == 0} onClick={(event)=>ReadCheckbox(event,'dificultad_concentrarse_pensar',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentrarse_pensar == 1} onClick={(event)=>ReadCheckbox(event,'dificultad_concentrarse_pensar',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentrarse_pensar == 2} onClick={(event)=>ReadCheckbox(event,'dificultad_concentrarse_pensar',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentrarse_pensar == 3} onClick={(event)=>ReadCheckbox(event,'dificultad_concentrarse_pensar',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes tensión muscular?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inquietud_agitacion == 0} onClick={(event)=>ReadCheckbox(event,'inquietud_agitacion',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inquietud_agitacion == 1} onClick={(event)=>ReadCheckbox(event,'inquietud_agitacion',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inquietud_agitacion == 2} onClick={(event)=>ReadCheckbox(event,'inquietud_agitacion',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inquietud_agitacion == 3} onClick={(event)=>ReadCheckbox(event,'inquietud_agitacion',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes dolor de cabeza?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_perder_control_volverse_loco == 0} onClick={(event)=>ReadCheckbox(event,'miedo_perder_control_volverse_loco',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_perder_control_volverse_loco == 1} onClick={(event)=>ReadCheckbox(event,'miedo_perder_control_volverse_loco',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_perder_control_volverse_loco == 2} onClick={(event)=>ReadCheckbox(event,'miedo_perder_control_volverse_loco',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_perder_control_volverse_loco == 3} onClick={(event)=>ReadCheckbox(event,'miedo_perder_control_volverse_loco',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes fatiga o cansancio?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.preocupacion_excesiva == 0} onClick={(event)=>ReadCheckbox(event,'preocupacion_excesiva',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.preocupacion_excesiva == 1} onClick={(event)=>ReadCheckbox(event,'preocupacion_excesiva',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.preocupacion_excesiva == 2} onClick={(event)=>ReadCheckbox(event,'preocupacion_excesiva',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.preocupacion_excesiva == 3} onClick={(event)=>ReadCheckbox(event,'preocupacion_excesiva',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes problemas para dormir o descansar?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos_intrusivos_1 == 0} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos_intrusivos_1',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos_intrusivos_1 == 1} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos_intrusivos_1',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos_intrusivos_1 == 2} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos_intrusivos_1',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos_intrusivos_1 == 3} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos_intrusivos_1',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes irritable o de mal humor?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_imaginar_futuro_sin_preocupaciones == 0} onClick={(event)=>ReadCheckbox(event,'dificultad_imaginar_futuro_sin_preocupaciones',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_imaginar_futuro_sin_preocupaciones == 1} onClick={(event)=>ReadCheckbox(event,'dificultad_imaginar_futuro_sin_preocupaciones',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_imaginar_futuro_sin_preocupaciones == 2} onClick={(event)=>ReadCheckbox(event,'dificultad_imaginar_futuro_sin_preocupaciones',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_imaginar_futuro_sin_preocupaciones == 3} onClick={(event)=>ReadCheckbox(event,'dificultad_imaginar_futuro_sin_preocupaciones',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes dificultad para concentrarte o pensar con claridad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapacidad_controlar_pensamientos == 0} onClick={(event)=>ReadCheckbox(event,'incapacidad_controlar_pensamientos',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapacidad_controlar_pensamientos == 1} onClick={(event)=>ReadCheckbox(event,'incapacidad_controlar_pensamientos',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapacidad_controlar_pensamientos == 2} onClick={(event)=>ReadCheckbox(event,'incapacidad_controlar_pensamientos',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapacidad_controlar_pensamientos == 3} onClick={(event)=>ReadCheckbox(event,'incapacidad_controlar_pensamientos',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes inquieto o agitado?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pesimismo_sobre_futuro == 0} onClick={(event)=>ReadCheckbox(event,'pesimismo_sobre_futuro',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pesimismo_sobre_futuro == 1} onClick={(event)=>ReadCheckbox(event,'pesimismo_sobre_futuro',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pesimismo_sobre_futuro == 2} onClick={(event)=>ReadCheckbox(event,'pesimismo_sobre_futuro',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pesimismo_sobre_futuro == 3} onClick={(event)=>ReadCheckbox(event,'pesimismo_sobre_futuro',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes miedo a perder el control o volverte loco?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.estado_alerta_constante == 0} onClick={(event)=>ReadCheckbox(event,'estado_alerta_constante',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.estado_alerta_constante == 1} onClick={(event)=>ReadCheckbox(event,'estado_alerta_constante',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.estado_alerta_constante == 2} onClick={(event)=>ReadCheckbox(event,'estado_alerta_constante',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.estado_alerta_constante == 3} onClick={(event)=>ReadCheckbox(event,'estado_alerta_constante',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                    </div>

                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te preocupas excesivamente por cosas que no son importantes?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sensacion_mundo_acabarse == 0} onClick={(event)=>ReadCheckbox(event,'sensacion_mundo_acabarse',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sensacion_mundo_acabarse == 1} onClick={(event)=>ReadCheckbox(event,'sensacion_mundo_acabarse',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sensacion_mundo_acabarse == 2} onClick={(event)=>ReadCheckbox(event,'sensacion_mundo_acabarse',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sensacion_mundo_acabarse == 3} onClick={(event)=>ReadCheckbox(event,'sensacion_mundo_acabarse',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes pensamientos negativos o intrusivos?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_morir == 0} onClick={(event)=>ReadCheckbox(event,'miedo_morir',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_morir == 1} onClick={(event)=>ReadCheckbox(event,'miedo_morir',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_morir == 2} onClick={(event)=>ReadCheckbox(event,'miedo_morir',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_morir == 3} onClick={(event)=>ReadCheckbox(event,'miedo_morir',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te cuesta imaginar un futuro sin preocupaciones?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_enfermedad_muerte == 0} onClick={(event)=>ReadCheckbox(event,'miedo_enfermedad_muerte',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_enfermedad_muerte == 1} onClick={(event)=>ReadCheckbox(event,'miedo_enfermedad_muerte',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_enfermedad_muerte == 2} onClick={(event)=>ReadCheckbox(event,'miedo_enfermedad_muerte',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_enfermedad_muerte == 3} onClick={(event)=>ReadCheckbox(event,'miedo_enfermedad_muerte',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes incapaz de controlar tus pensamientos?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_perder_control_volverse_loco_2 == 0} onClick={(event)=>ReadCheckbox(event,'miedo_perder_control_volverse_loco_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_perder_control_volverse_loco_2 == 1} onClick={(event)=>ReadCheckbox(event,'miedo_perder_control_volverse_loco_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_perder_control_volverse_loco_2 == 2} onClick={(event)=>ReadCheckbox(event,'miedo_perder_control_volverse_loco_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.miedo_perder_control_volverse_loco_2 == 3} onClick={(event)=>ReadCheckbox(event,'miedo_perder_control_volverse_loco_2',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes pesimista sobre el futuro?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_situaciones_lugares_miedo_ansiedad == 0} onClick={(event)=>ReadCheckbox(event,'evitar_situaciones_lugares_miedo_ansiedad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_situaciones_lugares_miedo_ansiedad == 1} onClick={(event)=>ReadCheckbox(event,'evitar_situaciones_lugares_miedo_ansiedad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_situaciones_lugares_miedo_ansiedad == 2} onClick={(event)=>ReadCheckbox(event,'evitar_situaciones_lugares_miedo_ansiedad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_situaciones_lugares_miedo_ansiedad == 3} onClick={(event)=>ReadCheckbox(event,'evitar_situaciones_lugares_miedo_ansiedad',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes como si estuvieras en un "estado de alerta" constante?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_gustaban_miedo_ansiedad == 0} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_gustaban_miedo_ansiedad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_gustaban_miedo_ansiedad == 1} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_gustaban_miedo_ansiedad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_gustaban_miedo_ansiedad == 2} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_gustaban_miedo_ansiedad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_gustaban_miedo_ansiedad == 3} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_gustaban_miedo_ansiedad',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes como si el mundo fuera a acabarse?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapacidad_relajarse == 0} onClick={(event)=>ReadCheckbox(event,'incapacidad_relajarse',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapacidad_relajarse == 1} onClick={(event)=>ReadCheckbox(event,'incapacidad_relajarse',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapacidad_relajarse == 2} onClick={(event)=>ReadCheckbox(event,'incapacidad_relajarse',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapacidad_relajarse == 3} onClick={(event)=>ReadCheckbox(event,'incapacidad_relajarse',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes miedo a morir?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.necesidad_tener_todo_bajo_control == 0} onClick={(event)=>ReadCheckbox(event,'necesidad_tener_todo_bajo_control',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.necesidad_tener_todo_bajo_control == 1} onClick={(event)=>ReadCheckbox(event,'necesidad_tener_todo_bajo_control',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.necesidad_tener_todo_bajo_control == 2} onClick={(event)=>ReadCheckbox(event,'necesidad_tener_todo_bajo_control',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.necesidad_tener_todo_bajo_control == 3} onClick={(event)=>ReadCheckbox(event,'necesidad_tener_todo_bajo_control',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes miedo a la enfermedad o a la muerte?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_estar_presente_momento_actual == 0} onClick={(event)=>ReadCheckbox(event,'dificultad_estar_presente_momento_actual',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_estar_presente_momento_actual == 1} onClick={(event)=>ReadCheckbox(event,'dificultad_estar_presente_momento_actual',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_estar_presente_momento_actual == 2} onClick={(event)=>ReadCheckbox(event,'dificultad_estar_presente_momento_actual',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_estar_presente_momento_actual == 3} onClick={(event)=>ReadCheckbox(event,'dificultad_estar_presente_momento_actual',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes miedo a perder el control o volverte loco?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislamiento_de_otros_miedo_ansiedad == 0} onClick={(event)=>ReadCheckbox(event,'aislamiento_de_otros_miedo_ansiedad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislamiento_de_otros_miedo_ansiedad == 1} onClick={(event)=>ReadCheckbox(event,'aislamiento_de_otros_miedo_ansiedad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislamiento_de_otros_miedo_ansiedad == 2} onClick={(event)=>ReadCheckbox(event,'aislamiento_de_otros_miedo_ansiedad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislamiento_de_otros_miedo_ansiedad == 3} onClick={(event)=>ReadCheckbox(event,'aislamiento_de_otros_miedo_ansiedad',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                    </div>

                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Evitas ciertas situaciones o lugares por miedo o ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.buscar_informacion_ansiedad_estres == 0} onClick={(event)=>ReadCheckbox(event,'buscar_informacion_ansiedad_estres',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.buscar_informacion_ansiedad_estres == 1} onClick={(event)=>ReadCheckbox(event,'buscar_informacion_ansiedad_estres',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.buscar_informacion_ansiedad_estres == 2} onClick={(event)=>ReadCheckbox(event,'buscar_informacion_ansiedad_estres',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.buscar_informacion_ansiedad_estres == 3} onClick={(event)=>ReadCheckbox(event,'buscar_informacion_ansiedad_estres',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz dejado de hacer cosas que te gustaban por miedo o ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.conductas_repetitivas_aliviar_ansiedad == 0} onClick={(event)=>ReadCheckbox(event,'conductas_repetitivas_aliviar_ansiedad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.conductas_repetitivas_aliviar_ansiedad == 1} onClick={(event)=>ReadCheckbox(event,'conductas_repetitivas_aliviar_ansiedad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.conductas_repetitivas_aliviar_ansiedad == 2} onClick={(event)=>ReadCheckbox(event,'conductas_repetitivas_aliviar_ansiedad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.conductas_repetitivas_aliviar_ansiedad == 3} onClick={(event)=>ReadCheckbox(event,'conductas_repetitivas_aliviar_ansiedad',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes incapaz de relajarte?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abuso_alcohol_drogas_aliviar_ansiedad == 0} onClick={(event)=>ReadCheckbox(event,'abuso_alcohol_drogas_aliviar_ansiedad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abuso_alcohol_drogas_aliviar_ansiedad == 1} onClick={(event)=>ReadCheckbox(event,'abuso_alcohol_drogas_aliviar_ansiedad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abuso_alcohol_drogas_aliviar_ansiedad == 2} onClick={(event)=>ReadCheckbox(event,'abuso_alcohol_drogas_aliviar_ansiedad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abuso_alcohol_drogas_aliviar_ansiedad == 3} onClick={(event)=>ReadCheckbox(event,'abuso_alcohol_drogas_aliviar_ansiedad',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'> ¿Sientes la necesidad de tener todo bajo control?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_planes_autolesion_suicidio_3 == 0} onClick={(event)=>ReadCheckbox(event,'pensamientos_planes_autolesion_suicidio_3',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_planes_autolesion_suicidio_3 == 1} onClick={(event)=>ReadCheckbox(event,'pensamientos_planes_autolesion_suicidio_3',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_planes_autolesion_suicidio_3 == 2} onClick={(event)=>ReadCheckbox(event,'pensamientos_planes_autolesion_suicidio_3',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_planes_autolesion_suicidio_3 == 3} onClick={(event)=>ReadCheckbox(event,'pensamientos_planes_autolesion_suicidio_3',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'> ¿Te cuesta estar presente en el momento actual?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_trabajo_estudios == 0} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_trabajo_estudios',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_trabajo_estudios == 1} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_trabajo_estudios',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_trabajo_estudios == 2} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_trabajo_estudios',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_trabajo_estudios == 3} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_trabajo_estudios',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'> ¿Te aíslas de los demás por miedo o ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_relaciones_sociales == 0} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_relaciones_sociales',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_relaciones_sociales == 1} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_relaciones_sociales',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_relaciones_sociales == 2} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_relaciones_sociales',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_relaciones_sociales == 3} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_relaciones_sociales',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'> ¿Buscas constantemente información sobre la ansiedad o el estrés?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_vida_familiar == 0} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_vida_familiar',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_vida_familiar == 1} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_vida_familiar',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_vida_familiar == 2} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_vida_familiar',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_interfiere_vida_familiar == 3} onClick={(event)=>ReadCheckbox(event,'ansiedad_interfiere_vida_familiar',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'> ¿Realizas conductas repetitivas para aliviar la ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_impide_disfrutar_actividades_gustan == 0} onClick={(event)=>ReadCheckbox(event,'ansiedad_impide_disfrutar_actividades_gustan',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_impide_disfrutar_actividades_gustan == 1} onClick={(event)=>ReadCheckbox(event,'ansiedad_impide_disfrutar_actividades_gustan',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_impide_disfrutar_actividades_gustan == 2} onClick={(event)=>ReadCheckbox(event,'ansiedad_impide_disfrutar_actividades_gustan',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_impide_disfrutar_actividades_gustan == 3} onClick={(event)=>ReadCheckbox(event,'ansiedad_impide_disfrutar_actividades_gustan',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'> ¿Abusas del alcohol o las drogas para aliviar la ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_genera_malestar_significativo == 0} onClick={(event)=>ReadCheckbox(event,'ansiedad_genera_malestar_significativo',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_genera_malestar_significativo == 1} onClick={(event)=>ReadCheckbox(event,'ansiedad_genera_malestar_significativo',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_genera_malestar_significativo == 2} onClick={(event)=>ReadCheckbox(event,'ansiedad_genera_malestar_significativo',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_genera_malestar_significativo == 3} onClick={(event)=>ReadCheckbox(event,'ansiedad_genera_malestar_significativo',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'> ¿Haz tenido pensamientos o planes de autolesión o suicidio?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.buscar_ayuda_medica_ansiedad == 0} onClick={(event)=>ReadCheckbox(event,'buscar_ayuda_medica_ansiedad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.buscar_ayuda_medica_ansiedad == 1} onClick={(event)=>ReadCheckbox(event,'buscar_ayuda_medica_ansiedad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.buscar_ayuda_medica_ansiedad == 2} onClick={(event)=>ReadCheckbox(event,'buscar_ayuda_medica_ansiedad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.buscar_ayuda_medica_ansiedad == 3} onClick={(event)=>ReadCheckbox(event,'buscar_ayuda_medica_ansiedad',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                    </div>

                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'> ¿La ansiedad interfiere con tu trabajo o estudios?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tomar_medicamentos_ansiedad == 0} onClick={(event)=>ReadCheckbox(event,'tomar_medicamentos_ansiedad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tomar_medicamentos_ansiedad == 1} onClick={(event)=>ReadCheckbox(event,'tomar_medicamentos_ansiedad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tomar_medicamentos_ansiedad == 2} onClick={(event)=>ReadCheckbox(event,'tomar_medicamentos_ansiedad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tomar_medicamentos_ansiedad == 3} onClick={(event)=>ReadCheckbox(event,'tomar_medicamentos_ansiedad',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿La ansiedad interfiere con tus relaciones sociales?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.realizar_terapia_ansiedad == 0} onClick={(event)=>ReadCheckbox(event,'realizar_terapia_ansiedad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.realizar_terapia_ansiedad == 1} onClick={(event)=>ReadCheckbox(event,'realizar_terapia_ansiedad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.realizar_terapia_ansiedad == 2} onClick={(event)=>ReadCheckbox(event,'realizar_terapia_ansiedad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.realizar_terapia_ansiedad == 3} onClick={(event)=>ReadCheckbox(event,'realizar_terapia_ansiedad',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'> ¿La ansiedad interfiere con tu vida familiar?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.hospitalizacion_por_ansiedad == 0} onClick={(event)=>ReadCheckbox(event,'hospitalizacion_por_ansiedad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.hospitalizacion_por_ansiedad == 1} onClick={(event)=>ReadCheckbox(event,'hospitalizacion_por_ansiedad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.hospitalizacion_por_ansiedad == 2} onClick={(event)=>ReadCheckbox(event,'hospitalizacion_por_ansiedad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.hospitalizacion_por_ansiedad == 3} onClick={(event)=>ReadCheckbox(event,'hospitalizacion_por_ansiedad',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿La ansiedad te impide disfrutar de las actividades que te gustan?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_controla_vida == 0} onClick={(event)=>ReadCheckbox(event,'ansiedad_controla_vida',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_controla_vida == 1} onClick={(event)=>ReadCheckbox(event,'ansiedad_controla_vida',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_controla_vida == 2} onClick={(event)=>ReadCheckbox(event,'ansiedad_controla_vida',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansiedad_controla_vida == 3} onClick={(event)=>ReadCheckbox(event,'ansiedad_controla_vida',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                    </div>
        </form>
        <ResultsTest type={'Ansiedad'} result={sumData()}/>
        </>
        
    )
}
