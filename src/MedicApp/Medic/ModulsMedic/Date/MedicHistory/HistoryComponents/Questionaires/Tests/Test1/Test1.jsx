import React from 'react'
import './Test1.css'
import Select, { components } from 'react-select'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import makeAnimated from 'react-select/animated';
import Swal from 'sweetalert2';
import { AppContext } from '../../../../../../../../../context';
import ResultsTest from '../../ResultsTest/ResultsTest';



export default function Test1() {

    /* appContext */

    let {flagHistory,typeDate,setTypeDate,dniDateUser,setDniDateUser,token,general,setGeneral} = React.useContext(AppContext);


    /* useState */
    
    let [questionario,setQuestionario] = React.useState(general);

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
            setGeneral(questionario);
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>1) ¿Te sientes feliz y contento la mayor parte del tiempo?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.feliz_contenido == 0} onClick={(event)=>ReadCheckbox(event,'feliz_contenido',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.feliz_contenido == 1} onClick={(event)=>ReadCheckbox(event,'feliz_contenido',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.feliz_contenido == 2} onClick={(event)=>ReadCheckbox(event,'feliz_contenido',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.feliz_contenido == 3} onClick={(event)=>ReadCheckbox(event,'feliz_contenido',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>2) ¿Te sientes triste o deprimido con frecuencia?</p>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>3) ¿Te sientes irritable o de mal humor?</p>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>4) ¿Te sientes ansioso o preocupado la mayor parte del tiempo?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansioso_preocupado == 0} onClick={(event)=>ReadCheckbox(event,'ansioso_preocupado',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansioso_preocupado == 1} onClick={(event)=>ReadCheckbox(event,'ansioso_preocupado',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansioso_preocupado == 2} onClick={(event)=>ReadCheckbox(event,'ansioso_preocupado',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansioso_preocupado == 3} onClick={(event)=>ReadCheckbox(event,'ansioso_preocupado',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>5) ¿Tienes pensamientos negativos o intrusivos?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos == 0} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos == 1} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos == 2} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_negativos == 3} onClick={(event)=>ReadCheckbox(event,'pensamientos_negativos',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>6) ¿Te sientes con energía y vitalidad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.energia_vitalidad == 0} onClick={(event)=>ReadCheckbox(event,'energia_vitalidad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.energia_vitalidad == 1} onClick={(event)=>ReadCheckbox(event,'energia_vitalidad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.energia_vitalidad == 2} onClick={(event)=>ReadCheckbox(event,'energia_vitalidad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.energia_vitalidad == 3} onClick={(event)=>ReadCheckbox(event,'energia_vitalidad',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>7) ¿Te sientes cansado o fatigado con frecuencia?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_fatigado == 0} onClick={(event)=>ReadCheckbox(event,'cansado_fatigado',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_fatigado == 1} onClick={(event)=>ReadCheckbox(event,'cansado_fatigado',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_fatigado == 2} onClick={(event)=>ReadCheckbox(event,'cansado_fatigado',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansado_fatigado == 3} onClick={(event)=>ReadCheckbox(event,'cansado_fatigado',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>8) ¿Tienes problemas para dormir o descansar?</p>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>9) ¿Tienes cambios en el apetito o la alimentación?</p>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>10) ¿Te sientes con dificultad para concentrarte o pensar con claridad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentracion == 0} onClick={(event)=>ReadCheckbox(event,'dificultad_concentracion',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentracion == 1} onClick={(event)=>ReadCheckbox(event,'dificultad_concentracion',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentracion == 2} onClick={(event)=>ReadCheckbox(event,'dificultad_concentracion',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentracion == 3} onClick={(event)=>ReadCheckbox(event,'dificultad_concentracion',3)} type="checkbox" name="radio"/>
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
        <form id='internal-form' action='' className='position-relative'>
                                    <div className='col-12'>
                                                <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Relaciones sociales</p>
                                    </div>
                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>1) ¿Te sientes conectado con tu familia y amigos?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.conectado_familia_amigos == 0} onClick={(event)=>ReadCheckbox(event,'conectado_familia_amigos',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.conectado_familia_amigos == 1} onClick={(event)=>ReadCheckbox(event,'conectado_familia_amigos',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.conectado_familia_amigos == 2} onClick={(event)=>ReadCheckbox(event,'conectado_familia_amigos',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.conectado_familia_amigos == 3} onClick={(event)=>ReadCheckbox(event,'conectado_familia_amigos',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>2) ¿Te sientes aislado o solo?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislado_solo == 0} onClick={(event)=>ReadCheckbox(event,'aislado_solo',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislado_solo == 1} onClick={(event)=>ReadCheckbox(event,'aislado_solo',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislado_solo == 2} onClick={(event)=>ReadCheckbox(event,'aislado_solo',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislado_solo == 3} onClick={(event)=>ReadCheckbox(event,'aislado_solo',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>3) ¿Tienes problemas para iniciar o mantener relaciones sociales?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_relaciones_sociales == 0} onClick={(event)=>ReadCheckbox(event,'problemas_relaciones_sociales',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_relaciones_sociales == 1} onClick={(event)=>ReadCheckbox(event,'problemas_relaciones_sociales',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_relaciones_sociales == 2} onClick={(event)=>ReadCheckbox(event,'problemas_relaciones_sociales',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_relaciones_sociales == 3} onClick={(event)=>ReadCheckbox(event,'fproblemas_relaciones_sociales',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>4) ¿Te sientes cómodo en situaciones sociales?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.comodo_situaciones_sociales== 0} onClick={(event)=>ReadCheckbox(event,'comodo_situaciones_sociales',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.comodo_situaciones_sociales == 1} onClick={(event)=>ReadCheckbox(event,'comodo_situaciones_sociales',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.comodo_situaciones_sociales == 2} onClick={(event)=>ReadCheckbox(event,'comodo_situaciones_sociales',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.comodo_situaciones_sociales == 3} onClick={(event)=>ReadCheckbox(event,'comodo_situaciones_sociales',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>5) ¿Te sientes capaz de expresar tus emociones y necesidades a los démas?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.expresion_emociones_necesidades == 0} onClick={(event)=>ReadCheckbox(event,'expresion_emociones_necesidades',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.expresion_emociones_necesidades == 1} onClick={(event)=>ReadCheckbox(event,'expresion_emociones_necesidades',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.expresion_emociones_necesidades == 2} onClick={(event)=>ReadCheckbox(event,'expresion_emociones_necesidades',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.expresion_emociones_necesidades == 3} onClick={(event)=>ReadCheckbox(event,'expresion_emociones_necesidades',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>6) ¿Sientes que puedes confiar en los demás?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.confianza_en_otros == 0} onClick={(event)=>ReadCheckbox(event,'confianza_en_otros',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.confianza_en_otros == 1} onClick={(event)=>ReadCheckbox(event,'confianza_en_otros',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.confianza_en_otros == 2} onClick={(event)=>ReadCheckbox(event,'confianza_en_otros',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.confianza_en_otros == 3} onClick={(event)=>ReadCheckbox(event,'confianza_en_otros',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>7) ¿Te sientes culpable o avergonzado con frecuencia?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpa_avergonzado == 0} onClick={(event)=>ReadCheckbox(event,'culpa_avergonzado',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpa_avergonzado == 1} onClick={(event)=>ReadCheckbox(event,'culpa_avergonzado',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpa_avergonzado == 2} onClick={(event)=>ReadCheckbox(event,'culpa_avergonzado',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpa_avergonzado == 3} onClick={(event)=>ReadCheckbox(event,'culpa_avergonzado',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>8) ¿TTe sientes a gusto contigo mismo?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.a_gusto_consigomismo == 0} onClick={(event)=>ReadCheckbox(event,'a_gusto_consigomismo',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.a_gusto_consigomismo == 1} onClick={(event)=>ReadCheckbox(event,'a_gusto_consigomismo',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.a_gusto_consigomismo == 2} onClick={(event)=>ReadCheckbox(event,'a_gusto_consigomismo',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.a_gusto_consigomismo == 3} onClick={(event)=>ReadCheckbox(event,'a_gusto_consigomismo',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>9) ¿Te sientes capaz de manejar el estrés de la vida diaria?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.manejo_del_estres == 0} onClick={(event)=>ReadCheckbox(event,'manejo_del_estres',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.manejo_del_estres == 1} onClick={(event)=>ReadCheckbox(event,'manejo_del_estres',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.manejo_del_estres == 2} onClick={(event)=>ReadCheckbox(event,'manejo_del_estres',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.manejo_del_estres == 3} onClick={(event)=>ReadCheckbox(event,'manejo_del_estres',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>10) ¿Tienes pensamientos de autolesión o suicidio?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_autolesion_suicidio == 0} onClick={(event)=>ReadCheckbox(event,'pensamientos_autolesion_suicidio',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_autolesion_suicidio == 1} onClick={(event)=>ReadCheckbox(event,'pensamientos_autolesion_suicidio',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_autolesion_suicidio == 2} onClick={(event)=>ReadCheckbox(event,'pensamientos_autolesion_suicidio',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pensamientos_autolesion_suicidio == 3} onClick={(event)=>ReadCheckbox(event,'pensamientos_autolesion_suicidio',3)} type="checkbox" name="radio"/>
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
        <form id='internal-form' action='' className='position-relative'>
                                        <div className='col-12'>
                                                <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Bienestar General</p>
                                        </div>
                                        <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>1) ¿Te sientes capaz de realizar tus actividades cotidianas?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_realizar_actividades_cotidianas == 0} onClick={(event)=>ReadCheckbox(event,'capaz_realizar_actividades_cotidianas',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_realizar_actividades_cotidianas == 1} onClick={(event)=>ReadCheckbox(event,'capaz_realizar_actividades_cotidianas',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_realizar_actividades_cotidianas == 2} onClick={(event)=>ReadCheckbox(event,'capaz_realizar_actividades_cotidianas',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_realizar_actividades_cotidianas == 3} onClick={(event)=>ReadCheckbox(event,'capaz_realizar_actividades_cotidianas',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>2) ¿Tienes problemas para ir al trabajo o a la escuela?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_trabajo_escuela == 0} onClick={(event)=>ReadCheckbox(event,'problemas_trabajo_escuela',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_trabajo_escuela == 1} onClick={(event)=>ReadCheckbox(event,'problemas_trabajo_escuela',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_trabajo_escuela == 2} onClick={(event)=>ReadCheckbox(event,'problemas_trabajo_escuela',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_trabajo_escuela == 3} onClick={(event)=>ReadCheckbox(event,'problemas_trabajo_escuela',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>3) ¿Te sientes capaz de cuidar de ti mismo?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_cuidarse == 0} onClick={(event)=>ReadCheckbox(event,'capaz_cuidarse',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_cuidarse == 1} onClick={(event)=>ReadCheckbox(event,'capaz_cuidarse',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_cuidarse == 2} onClick={(event)=>ReadCheckbox(event,'capaz_cuidarse',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_cuidarse == 3} onClick={(event)=>ReadCheckbox(event,'capaz_cuidarse',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>4) ¿Tienes problemas para tomar decisiones?</p>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>5) ¿Te sientes optimista sobre el futuro?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.optimista_sobre_futuro == 0} onClick={(event)=>ReadCheckbox(event,'optimista_sobre_futuro',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.optimista_sobre_futuro == 1} onClick={(event)=>ReadCheckbox(event,'optimista_sobre_futuro',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.optimista_sobre_futuro == 2} onClick={(event)=>ReadCheckbox(event,'optimista_sobre_futuro',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.optimista_sobre_futuro == 3} onClick={(event)=>ReadCheckbox(event,'optimista_sobre_futuro',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>6) ¿Tienes hobbies o intereses que te hagan sentir bien?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.hobbies_intereses == 0} onClick={(event)=>ReadCheckbox(event,'hobbies_intereses',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.hobbies_intereses == 1} onClick={(event)=>ReadCheckbox(event,'hobbies_intereses',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.hobbies_intereses == 2} onClick={(event)=>ReadCheckbox(event,'hobbies_intereses',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.hobbies_intereses == 3} onClick={(event)=>ReadCheckbox(event,'hobbies_intereses',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>7) ¿Te sientes motivado para hacer cosas que te gusten?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.motivado_hacer_cosas_que_gustan == 0} onClick={(event)=>ReadCheckbox(event,'motivado_hacer_cosas_que_gustan',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.motivado_hacer_cosas_que_gustan == 1} onClick={(event)=>ReadCheckbox(event,'motivado_hacer_cosas_que_gustan',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.motivado_hacer_cosas_que_gustan == 2} onClick={(event)=>ReadCheckbox(event,'motivado_hacer_cosas_que_gustan',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.motivado_hacer_cosas_que_gustan == 3} onClick={(event)=>ReadCheckbox(event,'motivado_hacer_cosas_que_gustan',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>8) ¿Te sientes satisfecho con tu vida en general?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.satisfecho_vida_general == 0} onClick={(event)=>ReadCheckbox(event,'satisfecho_vida_general',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.satisfecho_vida_general == 1} onClick={(event)=>ReadCheckbox(event,'satisfecho_vida_general',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.satisfecho_vida_general == 2} onClick={(event)=>ReadCheckbox(event,'satisfecho_vida_general',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.satisfecho_vida_general == 3} onClick={(event)=>ReadCheckbox(event,'satisfecho_vida_general',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>9) ¿Te sientes capaz de disfrutare de la vida?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_disfrutar_vida == 0} onClick={(event)=>ReadCheckbox(event,'capaz_disfrutar_vida',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_disfrutar_vida == 1} onClick={(event)=>ReadCheckbox(event,'capaz_disfrutar_vida',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_disfrutar_vida == 2} onClick={(event)=>ReadCheckbox(event,'capaz_disfrutar_vida',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.capaz_disfrutar_vida == 3} onClick={(event)=>ReadCheckbox(event,'capaz_disfrutar_vida',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>10) ¿Te sientes como si estuvieras viviendo una vida significativa?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.vida_significativa == 0} onClick={(event)=>ReadCheckbox(event,'vida_significativa',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.vida_significativa == 1} onClick={(event)=>ReadCheckbox(event,'vida_significativa',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.vida_significativa == 2} onClick={(event)=>ReadCheckbox(event,'vida_significativa',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.vida_significativa == 3} onClick={(event)=>ReadCheckbox(event,'vida_significativa',3)} type="checkbox" name="radio"/>
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
        <form id='internal-form' action='' className='position-relative'>
                                        <div className='col-12'>
                                                <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Hábitos y estilo de vida</p>
                                        </div>
                                        <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>1) ¿Te alimentas de forma saludable?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.alimentacion_saludable == 0} onClick={(event)=>ReadCheckbox(event,'alimentacion_saludable',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.alimentacion_saludable == 1} onClick={(event)=>ReadCheckbox(event,'alimentacion_saludable',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.alimentacion_saludable == 2} onClick={(event)=>ReadCheckbox(event,'alimentacion_saludable',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.alimentacion_saludable == 3} onClick={(event)=>ReadCheckbox(event,'alimentacion_saludable',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>2) ¿Realizas ejercicio fisico con regularidad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ejercicio_fisico_regular == 0} onClick={(event)=>ReadCheckbox(event,'ejercicio_fisico_regular',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ejercicio_fisico_regular == 1} onClick={(event)=>ReadCheckbox(event,'ejercicio_fisico_regular',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ejercicio_fisico_regular == 2} onClick={(event)=>ReadCheckbox(event,'ejercicio_fisico_regular',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ejercicio_fisico_regular == 3} onClick={(event)=>ReadCheckbox(event,'ejercicio_fisico_regular',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>3) ¿Duermes lo suficiente?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.suficiente_sueno == 0} onClick={(event)=>ReadCheckbox(event,'suficiente_sueno',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.suficiente_sueno == 1} onClick={(event)=>ReadCheckbox(event,'suficiente_sueno',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.suficiente_sueno == 2} onClick={(event)=>ReadCheckbox(event,'suficiente_sueno',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.suficiente_sueno == 3} onClick={(event)=>ReadCheckbox(event,'suficiente_sueno',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>4) ¿Consumes alcohol o drogas en exceso?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.consumo_excesivo_alcohol_drogas == 0} onClick={(event)=>ReadCheckbox(event,'consumo_excesivo_alcohol_drogas',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.consumo_excesivo_alcohol_drogas == 1} onClick={(event)=>ReadCheckbox(event,'consumo_excesivo_alcohol_drogas',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.consumo_excesivo_alcohol_drogas == 2} onClick={(event)=>ReadCheckbox(event,'consumo_excesivo_alcohol_drogas',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.consumo_excesivo_alcohol_drogas == 3} onClick={(event)=>ReadCheckbox(event,'consumo_excesivo_alcohol_drogas',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>5) ¿Fumas?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fumador == 0} onClick={(event)=>ReadCheckbox(event,'fumador',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fumador == 1} onClick={(event)=>ReadCheckbox(event,'fumador',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fumador == 2} onClick={(event)=>ReadCheckbox(event,'fumador',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fumador == 3} onClick={(event)=>ReadCheckbox(event,'fumador',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>6) ¿Practicas técnicas de relajación o meditación?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tecnicas_relajacion_meditacion == 0} onClick={(event)=>ReadCheckbox(event,'tecnicas_relajacion_meditacion',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tecnicas_relajacion_meditacion == 1} onClick={(event)=>ReadCheckbox(event,'tecnicas_relajacion_meditacion',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tecnicas_relajacion_meditacion == 2} onClick={(event)=>ReadCheckbox(event,'tecnicas_relajacion_meditacion',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tecnicas_relajacion_meditacion == 3} onClick={(event)=>ReadCheckbox(event,'tecnicas_relajacion_meditacion',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>7) ¿Tienes una red de apoyo social?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.red_apoyo_social == 0} onClick={(event)=>ReadCheckbox(event,'red_apoyo_social',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.red_apoyo_social == 1} onClick={(event)=>ReadCheckbox(event,'red_apoyo_social',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.red_apoyo_social == 2} onClick={(event)=>ReadCheckbox(event,'red_apoyo_social',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.red_apoyo_social == 3} onClick={(event)=>ReadCheckbox(event,'red_apoyo_social',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>8) ¿Te sientes seguro en tu entorno?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.seguridad_entorno == 0} onClick={(event)=>ReadCheckbox(event,'seguridad_entorno',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.seguridad_entorno == 1} onClick={(event)=>ReadCheckbox(event,'seguridad_entorno',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.seguridad_entorno == 2} onClick={(event)=>ReadCheckbox(event,'seguridad_entorno',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.seguridad_entorno == 3} onClick={(event)=>ReadCheckbox(event,'seguridad_entorno',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>9) ¿Tienes acceso a atención médica y recursos de salud mental?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.acceso_atencion_medica_salud_mental == 0} onClick={(event)=>ReadCheckbox(event,'acceso_atencion_medica_salud_mental',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.acceso_atencion_medica_salud_mental == 1} onClick={(event)=>ReadCheckbox(event,'acceso_atencion_medica_salud_mental',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.acceso_atencion_medica_salud_mental == 2} onClick={(event)=>ReadCheckbox(event,'acceso_atencion_medica_salud_mental',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.acceso_atencion_medica_salud_mental == 3} onClick={(event)=>ReadCheckbox(event,'acceso_atencion_medica_salud_mental',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>10) ¿Te sientes cómodo buscando ayuda cuando la necesitas?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.comodidad_buscar_ayuda == 0} onClick={(event)=>ReadCheckbox(event,'comodidad_buscar_ayuda',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.comodidad_buscar_ayuda == 1} onClick={(event)=>ReadCheckbox(event,'comodidad_buscar_ayuda',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.comodidad_buscar_ayuda == 2} onClick={(event)=>ReadCheckbox(event,'comodidad_buscar_ayuda',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.comodidad_buscar_ayuda == 3} onClick={(event)=>ReadCheckbox(event,'comodidad_buscar_ayuda',3)} type="checkbox" name="radio"/>
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
        
        <ResultsTest type={'General'} result={sumData()}/>
        </>
    )
}
