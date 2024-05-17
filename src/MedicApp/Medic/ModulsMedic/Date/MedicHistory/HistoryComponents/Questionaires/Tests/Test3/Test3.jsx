import React from 'react'
import './Test3.css'
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




export default function Test3() {

    /* APP CONTEXT */
    let {flagHistory,typeDate,setTypeDate,dniDateUser,setDniDateUser,token,depresion,setDepresion} = React.useContext(AppContext);
    

    /* useState */
    
    let [questionario,setQuestionario] = React.useState(depresion);

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
            setDepresion(questionario);
        }

    },[flagHistory])

    return (
        <>
         <form id='internal-form' action='' className='position-relative'>
                                    <div className='col-12'>
                                                <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Estado de ánimo</p>
                                    </div>
                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes triste o deprimido con frecuencia?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.triste_deprimido == 0} onClick={(event)=>ReadCheckbox(event,'triste_deprimido',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.triste_deprimido == 1} onClick={(event)=>ReadCheckbox(event,'triste_deprimido',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.triste_deprimido == 2} onClick={(event)=>ReadCheckbox(event,'triste_deprimido',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.triste_deprimido == 3} onClick={(event)=>ReadCheckbox(event,'triste_deprimido',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz perdido interés o placer en las actividades que antes te gustaban?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.perdida_interes_placer == 0} onClick={(event)=>ReadCheckbox(event,'perdida_interes_placer',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.perdida_interes_placer == 1} onClick={(event)=>ReadCheckbox(event,'perdida_interes_placer',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.perdida_interes_placer == 2} onClick={(event)=>ReadCheckbox(event,'perdida_interes_placer',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.perdida_interes_placer == 3} onClick={(event)=>ReadCheckbox(event,'perdida_interes_placer',3)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.irritable_mal_humor == 0} onClick={(event)=>ReadCheckbox(event,'irritable_mal_humor',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.irritable_mal_humor == 1} onClick={(event)=>ReadCheckbox(event,'irritable_mal_humor',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.irritable_mal_humor == 2} onClick={(event)=>ReadCheckbox(event,'irritable_mal_humor',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.irritable_mal_humor == 3} onClick={(event)=>ReadCheckbox(event,'irritable_mal_humor',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes desesperanzado o pesimista sobre el futuro?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.desesperanzado_pesimista == 0} onClick={(event)=>ReadCheckbox(event,'desesperanzado_pesimista',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.desesperanzado_pesimista == 1} onClick={(event)=>ReadCheckbox(event,'desesperanzado_pesimista',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.desesperanzado_pesimista == 2} onClick={(event)=>ReadCheckbox(event,'desesperanzado_pesimista',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.desesperanzado_pesimista == 3} onClick={(event)=>ReadCheckbox(event,'desesperanzado_pesimista',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes culpable o inútil?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpable_inutil == 0} onClick={(event)=>ReadCheckbox(event,'culpable_inutil',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpable_inutil == 1} onClick={(event)=>ReadCheckbox(event,'culpable_inutil',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpable_inutil == 2} onClick={(event)=>ReadCheckbox(event,'culpable_inutil',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpable_inutil == 3} onClick={(event)=>ReadCheckbox(event,'culpable_inutil',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes como sif euras una carga para los demás?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.carga_para_otros == 0} onClick={(event)=>ReadCheckbox(event,'carga_para_otros',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.carga_para_otros == 1} onClick={(event)=>ReadCheckbox(event,'carga_para_otros',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.carga_para_otros == 2} onClick={(event)=>ReadCheckbox(event,'carga_para_otros',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.carga_para_otros == 3} onClick={(event)=>ReadCheckbox(event,'carga_para_otros',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes pensamientos de muerte o suicidio?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_muerte_suicidio == 0} onClick={(event)=>ReadCheckbox(event,'pensamientos_muerte_suicidio',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_muerte_suicidio == 1} onClick={(event)=>ReadCheckbox(event,'pensamientos_muerte_suicidio',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_muerte_suicidio == 2} onClick={(event)=>ReadCheckbox(event,'pensamientos_muerte_suicidio',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_muerte_suicidio == 3} onClick={(event)=>ReadCheckbox(event,'pensamientos_muerte_suicidio',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes candaso o con poca energía?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_poca_energia == 0} onClick={(event)=>ReadCheckbox(event,'cansado_poca_energia',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_poca_energia == 1} onClick={(event)=>ReadCheckbox(event,'cansado_poca_energia',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_poca_energia == 2} onClick={(event)=>ReadCheckbox(event,'cansado_poca_energia',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_poca_energia == 3} onClick={(event)=>ReadCheckbox(event,'cansado_poca_energia',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes problemas para dormir o descanzar?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar == 0} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar == 1} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar == 2} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar == 3} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes cambios en el apetito o la alimentación?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion == 0} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion == 1} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion == 2} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion == 3} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes incapaz de concentrarte o pensar con claridad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapaz_concentrarse_pensar == 0} onClick={(event)=>ReadCheckbox(event,'incapaz_concentrarse_pensar',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapaz_concentrarse_pensar == 1} onClick={(event)=>ReadCheckbox(event,'incapaz_concentrarse_pensar',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapaz_concentrarse_pensar == 2} onClick={(event)=>ReadCheckbox(event,'incapaz_concentrarse_pensar',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapaz_concentrarse_pensar == 3} onClick={(event)=>ReadCheckbox(event,'incapaz_concentrarse_pensar',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te seintes como si estuvieras en "cámara lenta"?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.camara_lenta == 0} onClick={(event)=>ReadCheckbox(event,'camara_lenta',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.camara_lenta == 1} onClick={(event)=>ReadCheckbox(event,'camara_lenta',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.camara_lenta == 2} onClick={(event)=>ReadCheckbox(event,'camara_lenta',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.camara_lenta == 3} onClick={(event)=>ReadCheckbox(event,'camara_lenta',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes problemas para tomar decisiones?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_decisiones == 0} onClick={(event)=>ReadCheckbox(event,'problemas_decisiones',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_decisiones == 1} onClick={(event)=>ReadCheckbox(event,'problemas_decisiones',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_decisiones == 2} onClick={(event)=>ReadCheckbox(event,'problemas_decisiones',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_decisiones == 3} onClick={(event)=>ReadCheckbox(event,'problemas_decisiones',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes olvidadizo o despistado?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.olvidadizo_despistado == 0} onClick={(event)=>ReadCheckbox(event,'olvidadizo_despistado',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.olvidadizo_despistado == 1} onClick={(event)=>ReadCheckbox(event,'olvidadizo_despistado',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.olvidadizo_despistado == 2} onClick={(event)=>ReadCheckbox(event,'olvidadizo_despistado',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.olvidadizo_despistado == 3} onClick={(event)=>ReadCheckbox(event,'olvidadizo_despistado',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes como si no tuvieras nada que ofrecer al mundo?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nada_ofrecer_al_mundo == 0} onClick={(event)=>ReadCheckbox(event,'nada_ofrecer_al_mundo',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nada_ofrecer_al_mundo == 1} onClick={(event)=>ReadCheckbox(event,'nada_ofrecer_al_mundo',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nada_ofrecer_al_mundo == 2} onClick={(event)=>ReadCheckbox(event,'nada_ofrecer_al_mundo',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nada_ofrecer_al_mundo == 3} onClick={(event)=>ReadCheckbox(event,'nada_ofrecer_al_mundo',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes como si tu vida no tuviera sentido?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.vida_sin_sentido == 0} onClick={(event)=>ReadCheckbox(event,'vida_sin_sentido',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.vida_sin_sentido == 1} onClick={(event)=>ReadCheckbox(event,'vida_sin_sentido',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.vida_sin_sentido == 2} onClick={(event)=>ReadCheckbox(event,'vida_sin_sentido',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.vida_sin_sentido == 3} onClick={(event)=>ReadCheckbox(event,'vida_sin_sentido',3)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.pensamientos_negativos_intrusivos_2 == 0} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos_intrusivos_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos_intrusivos_2 == 1} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos_intrusivos_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos_intrusivos_2 == 2} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos_intrusivos_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos_intrusivos_2== 3} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos_intrusivos_2',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te cuesta imaginar un futuro mejor?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.futuro_mejor == 0} onClick={(event)=>ReadCheckbox(event,'futuro_mejor',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.futuro_mejor == 1} onClick={(event)=>ReadCheckbox(event,'futuro_mejor',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.futuro_mejor == 2} onClick={(event)=>ReadCheckbox(event,'futuro_mejor',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.futuro_mejor == 3} onClick={(event)=>ReadCheckbox(event,'futuro_mejor',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes como si fueras a fallar en todo lo que haces?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fallar_en_todo == 0} onClick={(event)=>ReadCheckbox(event,'fallar_en_todo',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fallar_en_todo == 1} onClick={(event)=>ReadCheckbox(event,'fallar_en_todo',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fallar_en_todo == 2} onClick={(event)=>ReadCheckbox(event,'fallar_en_todo',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fallar_en_todo == 3} onClick={(event)=>ReadCheckbox(event,'fallar_en_todo',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes como si nadie te quisiera o te entendiera?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nadie_te_quiera_o_entienda == 0} onClick={(event)=>ReadCheckbox(event,'nadie_te_quiera_o_entienda',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nadie_te_quiera_o_entienda == 1} onClick={(event)=>ReadCheckbox(event,'nadie_te_quiera_o_entienda',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nadie_te_quiera_o_entienda == 2} onClick={(event)=>ReadCheckbox(event,'nadie_te_quiera_o_entienda',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.nadie_te_quiera_o_entienda == 3} onClick={(event)=>ReadCheckbox(event,'nadie_te_quiera_o_entienda',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes desmotivado o apático?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.desmotivado_apatico == 0} onClick={(event)=>ReadCheckbox(event,'desmotivado_apatico',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.desmotivado_apatico == 1} onClick={(event)=>ReadCheckbox(event,'desmotivado_apatico',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.desmotivado_apatico== 2} onClick={(event)=>ReadCheckbox(event,'desmotivado_apatico',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.desmotivado_apatico == 3} onClick={(event)=>ReadCheckbox(event,'desmotivado_apatico',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Evitas las actividades sociales o el contacto con otras personas?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_actividades_sociales == 0} onClick={(event)=>ReadCheckbox(event,'evitar_actividades_sociales',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_actividades_sociales == 1} onClick={(event)=>ReadCheckbox(event,'evitar_actividades_sociales',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_actividades_sociales == 2} onClick={(event)=>ReadCheckbox(event,'evitar_actividades_sociales',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_actividades_sociales == 3} onClick={(event)=>ReadCheckbox(event,'evitar_actividades_sociales',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes incapaz de disfrutar de las cosas que antes te gustaban?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapaz_disfrutar_cosas_gustaban == 0} onClick={(event)=>ReadCheckbox(event,'incapaz_disfrutar_cosas_gustaban',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapaz_disfrutar_cosas_gustaban == 1} onClick={(event)=>ReadCheckbox(event,'incapaz_disfrutar_cosas_gustaban',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapaz_disfrutar_cosas_gustaban == 2} onClick={(event)=>ReadCheckbox(event,'incapaz_disfrutar_cosas_gustaban',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.incapaz_disfrutar_cosas_gustaban == 3} onClick={(event)=>ReadCheckbox(event,'incapaz_disfrutar_cosas_gustaban',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz descuidado tu higiene personas o tu apariencia?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.descuidado_higiene_personal == 0} onClick={(event)=>ReadCheckbox(event,'descuidado_higiene_personal',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.descuidado_higiene_personal== 1} onClick={(event)=>ReadCheckbox(event,'descuidado_higiene_personal',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.descuidado_higiene_personal == 2} onClick={(event)=>ReadCheckbox(event,'descuidado_higiene_personal',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.descuidado_higiene_personal == 3} onClick={(event)=>ReadCheckbox(event,'descuidado_higiene_personal',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz teniodo cambios en tu apetito o la alimentación?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion_2 == 0} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion_2 == 1} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion_2 == 2} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion_2 == 3} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion_2',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes inquieto o agitado?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inquieto_agitado_2 == 0} onClick={(event)=>ReadCheckbox(event,'inquieto_agitado_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inquieto_agitado_2 == 1} onClick={(event)=>ReadCheckbox(event,'inquieto_agitado_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inquieto_agitado_2 == 2} onClick={(event)=>ReadCheckbox(event,'inquieto_agitado_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inquieto_agitado_2 == 3} onClick={(event)=>ReadCheckbox(event,'inquieto_agitado_2',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes lento o perezoso?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.lento_perezoso == 0} onClick={(event)=>ReadCheckbox(event,'lento_perezoso',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.lento_perezoso == 1} onClick={(event)=>ReadCheckbox(event,'lento_perezoso',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.lento_perezoso == 2} onClick={(event)=>ReadCheckbox(event,'lento_perezoso',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.lento_perezoso == 3} onClick={(event)=>ReadCheckbox(event,'lento_perezoso',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te cuesta iniciar o terminar tareas?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.iniciar_terminar_tareas == 0} onClick={(event)=>ReadCheckbox(event,'iniciar_terminar_tareas',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.iniciar_terminar_tareas == 1} onClick={(event)=>ReadCheckbox(event,'iniciar_terminar_tareas',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.iniciar_terminar_tareas == 2} onClick={(event)=>ReadCheckbox(event,'iniciar_terminar_tareas',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.iniciar_terminar_tareas == 3} onClick={(event)=>ReadCheckbox(event,'iniciar_terminar_tareas',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz dejado de hacer cosas que antes hacias por placer?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_placer == 0} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_placer',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_placer == 1} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_placer',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_placer == 2} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_placer',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_placer == 3} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_placer',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes como si no tuvieras energía para hacer nada?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sin_energia_para_hacer_nada == 0} onClick={(event)=>ReadCheckbox(event,'sin_energia_para_hacer_nada',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sin_energia_para_hacer_nada == 1} onClick={(event)=>ReadCheckbox(event,'sin_energia_para_hacer_nada',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sin_energia_para_hacer_nada == 2} onClick={(event)=>ReadCheckbox(event,'sin_energia_para_hacer_nada',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sin_energia_para_hacer_nada == 3} onClick={(event)=>ReadCheckbox(event,'sin_energia_para_hacer_nada',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Abusas del alcohol o las drogas?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abuso_alcohol_drogas_2 == 0} onClick={(event)=>ReadCheckbox(event,'abuso_alcohol_drogas_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abuso_alcohol_drogas_2 == 1} onClick={(event)=>ReadCheckbox(event,'abuso_alcohol_drogas_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abuso_alcohol_drogas_2 == 2} onClick={(event)=>ReadCheckbox(event,'abuso_alcohol_drogas_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abuso_alcohol_drogas_2 == 3} onClick={(event)=>ReadCheckbox(event,'abuso_alcohol_drogas_2',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz tenido pensamientos o planes de autolesión o suicidio?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_planes_autolesion_suicidio_2 == 0} onClick={(event)=>ReadCheckbox(event,'pensamientos_planes_autolesion_suicidio_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_planes_autolesion_suicidio_2 == 1} onClick={(event)=>ReadCheckbox(event,'pensamientos_planes_autolesion_suicidio_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_planes_autolesion_suicidio_2 == 2} onClick={(event)=>ReadCheckbox(event,'pensamientos_planes_autolesion_suicidio_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_planes_autolesion_suicidio_2 == 3} onClick={(event)=>ReadCheckbox(event,'pensamientos_planes_autolesion_suicidio_2',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz tenido algún intento de suicidio?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.intento_suicidio == 0} onClick={(event)=>ReadCheckbox(event,'intento_suicidio',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.intento_suicidio == 1} onClick={(event)=>ReadCheckbox(event,'intento_suicidio',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.intento_suicidio == 2} onClick={(event)=>ReadCheckbox(event,'intento_suicidio',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.intento_suicidio == 3} onClick={(event)=>ReadCheckbox(event,'intento_suicidio',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz buscado ayuda profesional para la depresión?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ayuda_profesional_depresion == 0} onClick={(event)=>ReadCheckbox(event,'ayuda_profesional_depresion',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ayuda_profesional_depresion == 1} onClick={(event)=>ReadCheckbox(event,'ayuda_profesional_depresion',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ayuda_profesional_depresion == 2} onClick={(event)=>ReadCheckbox(event,'ayuda_profesional_depresion',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ayuda_profesional_depresion == 3} onClick={(event)=>ReadCheckbox(event,'ayuda_profesional_depresion',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz tomado medicación para la depresión?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.medicacion_depresion == 0} onClick={(event)=>ReadCheckbox(event,'medicacion_depresion',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.medicacion_depresion == 1} onClick={(event)=>ReadCheckbox(event,'medicacion_depresion',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.medicacion_depresion == 2} onClick={(event)=>ReadCheckbox(event,'medicacion_depresion',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.medicacion_depresion == 3} onClick={(event)=>ReadCheckbox(event,'medicacion_depresion',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes problemas para dormir o descanzar?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_2 == 0} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_2 == 1} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_2 == 2} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_2 == 3} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_2',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes cansado o con poca energía?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_poca_energia_2 == 0} onClick={(event)=>ReadCheckbox(event,'cansado_poca_energia_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_poca_energia_2 == 1} onClick={(event)=>ReadCheckbox(event,'cansado_poca_energia_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_poca_energia_2 == 2} onClick={(event)=>ReadCheckbox(event,'cansado_poca_energia_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_poca_energia_2== 3} onClick={(event)=>ReadCheckbox(event,'cansado_poca_energia_2',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz experimentado cambios en el apetito o la alimentación?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion_3 == 0} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion_3',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion_3 == 1} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion_3',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion_3 == 2} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion_3',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_apetito_alimentacion_3 == 3} onClick={(event)=>ReadCheckbox(event,'cambios_apetito_alimentacion_3',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>4) ¿Tienes dolores de cabeza, musculares o articulares?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_de_cabeza_musculares_articulares == 0} onClick={(event)=>ReadCheckbox(event,'dolores_de_cabeza_musculares_articulares',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_de_cabeza_musculares_articulares == 1} onClick={(event)=>ReadCheckbox(event,'dolores_de_cabeza_musculares_articulares',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_de_cabeza_musculares_articulares == 2} onClick={(event)=>ReadCheckbox(event,'dolores_de_cabeza_musculares_articulares',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_de_cabeza_musculares_articulares== 3} onClick={(event)=>ReadCheckbox(event,'dolores_de_cabeza_musculares_articulares',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes dolores de cabeza, musculares o articulares?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_de_cabeza_musculares_articulares == 0} onClick={(event)=>ReadCheckbox(event,'dolores_de_cabeza_musculares_articulares',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_de_cabeza_musculares_articulares == 1} onClick={(event)=>ReadCheckbox(event,'dolores_de_cabeza_musculares_articulares',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_de_cabeza_musculares_articulares == 2} onClick={(event)=>ReadCheckbox(event,'dolores_de_cabeza_musculares_articulares',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_de_cabeza_musculares_articulares== 3} onClick={(event)=>ReadCheckbox(event,'dolores_de_cabeza_musculares_articulares',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes problemas digestivos o intestinales?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_digestivos_intestinales == 0} onClick={(event)=>ReadCheckbox(event,'problemas_digestivos_intestinales',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_digestivos_intestinales == 1} onClick={(event)=>ReadCheckbox(event,'problemas_digestivos_intestinales',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_digestivos_intestinales == 2} onClick={(event)=>ReadCheckbox(event,'problemas_digestivos_intestinales',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_digestivos_intestinales== 3} onClick={(event)=>ReadCheckbox(event,'problemas_digestivos_intestinales',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes cambios en tu peso?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_peso == 0} onClick={(event)=>ReadCheckbox(event,'cambios_peso',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_peso== 1} onClick={(event)=>ReadCheckbox(event,'cambios_peso',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_peso == 2} onClick={(event)=>ReadCheckbox(event,'cambios_peso',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cambios_peso== 3} onClick={(event)=>ReadCheckbox(event,'cambios_peso',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes sensible al frio o al calor?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sensible_al_frio_calor == 0} onClick={(event)=>ReadCheckbox(event,'sensible_al_frio_calor',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sensible_al_frio_calor == 1} onClick={(event)=>ReadCheckbox(event,'sensible_al_frio_calor',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sensible_al_frio_calor == 2} onClick={(event)=>ReadCheckbox(event,'sensible_al_frio_calor',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sensible_al_frio_calor== 3} onClick={(event)=>ReadCheckbox(event,'sensible_al_frio_calor',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes la libido baja?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.libido_baja == 0} onClick={(event)=>ReadCheckbox(event,'libido_baja',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.libido_baja == 1} onClick={(event)=>ReadCheckbox(event,'libido_baja',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.libido_baja == 2} onClick={(event)=>ReadCheckbox(event,'libido_baja',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.libido_baja== 3} onClick={(event)=>ReadCheckbox(event,'libido_baja',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes otros sintomas fisicos que no tienen una causa médica clara?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.otros_sintomas_fisicos == 0} onClick={(event)=>ReadCheckbox(event,'otros_sintomas_fisicos',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.otros_sintomas_fisicos == 1} onClick={(event)=>ReadCheckbox(event,'otros_sintomas_fisicos',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.otros_sintomas_fisicos == 2} onClick={(event)=>ReadCheckbox(event,'otros_sintomas_fisicos',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.otros_sintomas_fisicos== 3} onClick={(event)=>ReadCheckbox(event,'otros_sintomas_fisicos',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes que tus sintomas fisicos están empeorando tu depresión?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sintomas_fisicos_empeoran_depresion == 0} onClick={(event)=>ReadCheckbox(event,'sintomas_fisicos_empeoran_depresion',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sintomas_fisicos_empeoran_depresion == 1} onClick={(event)=>ReadCheckbox(event,'sintomas_fisicos_empeoran_depresion',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sintomas_fisicos_empeoran_depresion == 2} onClick={(event)=>ReadCheckbox(event,'sintomas_fisicos_empeoran_depresion',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sintomas_fisicos_empeoran_depresion== 3} onClick={(event)=>ReadCheckbox(event,'sintomas_fisicos_empeoran_depresion',3)} type="checkbox" name="radio"/>
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
        <ResultsTest type={'Depresion'} result={sumData()}/>
        </>
    )
}
