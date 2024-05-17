import React from 'react'
import './Test4.css'
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

export default function Test4() {


    /* APP CONTEXT */
    let {flagHistory,typeDate,setTypeDate,dniDateUser,setDniDateUser,token,estres,setEstres} = React.useContext(AppContext);
    

    /* useState */
    
    let [questionario,setQuestionario] = React.useState(estres);

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
            setEstres(questionario);
        }

    },[flagHistory])



    return (
        <>
         <form id='internal-form' action='' className='position-relative'>

                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes ansioso o nervioso con frecuencia?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansioso_nervioso == 0} onClick={(event)=>ReadCheckbox(event,'ansioso_nervioso',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansioso_nervioso == 1} onClick={(event)=>ReadCheckbox(event,'ansioso_nervioso',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansioso_nervioso == 2} onClick={(event)=>ReadCheckbox(event,'ansioso_nervioso',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.ansioso_nervioso == 3} onClick={(event)=>ReadCheckbox(event,'ansioso_nervioso',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes abrumado o con exceso de trabajo?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abrumado_exceso_trabajo == 0} onClick={(event)=>ReadCheckbox(event,'abrumado_exceso_trabajo',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abrumado_exceso_trabajo == 1} onClick={(event)=>ReadCheckbox(event,'abrumado_exceso_trabajo',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abrumado_exceso_trabajo == 2} onClick={(event)=>ReadCheckbox(event,'abrumado_exceso_trabajo',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.abrumado_exceso_trabajo == 3} onClick={(event)=>ReadCheckbox(event,'abrumado_exceso_trabajo',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes impaciente o intolerante?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.impaciente_intolerante == 0} onClick={(event)=>ReadCheckbox(event,'impaciente_intolerante',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.impaciente_intolerante == 1} onClick={(event)=>ReadCheckbox(event,'impaciente_intolerante',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.impaciente_intolerante == 2} onClick={(event)=>ReadCheckbox(event,'impaciente_intolerante',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.impaciente_intolerante == 3} onClick={(event)=>ReadCheckbox(event,'impaciente_intolerante',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes triste o deprimido?</p>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes culpable o avergonzado?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpable_avergonzado == 0} onClick={(event)=>ReadCheckbox(event,'culpable_avergonzado',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpable_avergonzado == 1} onClick={(event)=>ReadCheckbox(event,'culpable_avergonzado',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpable_avergonzado == 2} onClick={(event)=>ReadCheckbox(event,'culpable_avergonzado',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.culpable_avergonzado == 3} onClick={(event)=>ReadCheckbox(event,'culpable_avergonzado',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes inseguro o con baja autoestima?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inseguro_baja_autoestima == 0} onClick={(event)=>ReadCheckbox(event,'inseguro_baja_autoestima',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inseguro_baja_autoestima == 1} onClick={(event)=>ReadCheckbox(event,'inseguro_baja_autoestima',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inseguro_baja_autoestima == 2} onClick={(event)=>ReadCheckbox(event,'inseguro_baja_autoestima',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.inseguro_baja_autoestima == 3} onClick={(event)=>ReadCheckbox(event,'inseguro_baja_autoestima',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes pesimista o desesperanzado?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pesimista_desesperanzado == 0} onClick={(event)=>ReadCheckbox(event,'pesimista_desesperanzado',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pesimista_desesperanzado == 1} onClick={(event)=>ReadCheckbox(event,'pesimista_desesperanzado',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pesimista_desesperanzado == 2} onClick={(event)=>ReadCheckbox(event,'pesimista_desesperanzado',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.pesimista_desesperanzado == 3} onClick={(event)=>ReadCheckbox(event,'pesimista_desesperanzado',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes como si no tuveras control sobre tu vida?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sin_control_vida == 0} onClick={(event)=>ReadCheckbox(event,'sin_control_vida',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sin_control_vida == 1} onClick={(event)=>ReadCheckbox(event,'sin_control_vida',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sin_control_vida == 2} onClick={(event)=>ReadCheckbox(event,'sin_control_vida',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sin_control_vida == 3} onClick={(event)=>ReadCheckbox(event,'sin_control_vida',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes miedo a perder el control o volverte loco?</p>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te cuesta concentrarte o pensar con claridad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.concentracion_pensar_claridad == 0} onClick={(event)=>ReadCheckbox(event,'concentracion_pensar_claridad',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.concentracion_pensar_claridad == 1} onClick={(event)=>ReadCheckbox(event,'concentracion_pensar_claridad',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.concentracion_pensar_claridad == 2} onClick={(event)=>ReadCheckbox(event,'concentracion_pensar_claridad',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.concentracion_pensar_claridad == 3} onClick={(event)=>ReadCheckbox(event,'concentracion_pensar_claridad',3)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.problemas_tomar_decisiones == 0} onClick={(event)=>ReadCheckbox(event,'problemas_tomar_decisiones',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_tomar_decisiones == 1} onClick={(event)=>ReadCheckbox(event,'problemas_tomar_decisiones',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_tomar_decisiones == 2} onClick={(event)=>ReadCheckbox(event,'problemas_tomar_decisiones',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_tomar_decisiones == 3} onClick={(event)=>ReadCheckbox(event,'problemas_tomar_decisiones',3)} type="checkbox" name="radio"/>
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
                                            </ul>
                                    </div>


                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes problemas para dormir o descansar?</p>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes cansado o con poca energía?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansancio_poca_energia == 0} onClick={(event)=>ReadCheckbox(event,'cansancio_poca_energia',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansancio_poca_energia == 1} onClick={(event)=>ReadCheckbox(event,'cansancio_poca_energia',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansancio_poca_energia == 2} onClick={(event)=>ReadCheckbox(event,'cansancio_poca_energia',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.cansancio_poca_energia == 3} onClick={(event)=>ReadCheckbox(event,'cansancio_poca_energia',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te sientes desmoptivado o apático?</p>
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
                                                                <input checked={questionario?.desmotivado_apatico == 2} onClick={(event)=>ReadCheckbox(event,'desmotivado_apatico',2)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes palpitaciones o latidos acelerados del corazón?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.palpitaciones_corazon == 0} onClick={(event)=>ReadCheckbox(event,'palpitaciones_corazon',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.palpitaciones_corazon == 1} onClick={(event)=>ReadCheckbox(event,'palpitaciones_corazon',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.palpitaciones_corazon== 2} onClick={(event)=>ReadCheckbox(event,'palpitaciones_corazon',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.palpitaciones_corazon == 3} onClick={(event)=>ReadCheckbox(event,'palpitaciones_corazon',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes mareos o aturdimiento?</p>
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
                                                                <input checked={questionario?.nauseas_vomitos== 1} onClick={(event)=>ReadCheckbox(event,'nauseas_vomitos',1)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.temblores_sacudidas_mano == 0} onClick={(event)=>ReadCheckbox(event,'temblores_sacudidas_mano',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.temblores_sacudidas_mano == 1} onClick={(event)=>ReadCheckbox(event,'temblores_sacudidas_mano',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.temblores_sacudidas_mano == 2} onClick={(event)=>ReadCheckbox(event,'temblores_sacudidas_mano',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.temblores_sacudidas_mano == 3} onClick={(event)=>ReadCheckbox(event,'temblores_sacudidas_mano',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Sientes sudoración excesiva?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sudoracion_excesiva == 0} onClick={(event)=>ReadCheckbox(event,'sudoracion_excesiva',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sudoracion_excesiva == 1} onClick={(event)=>ReadCheckbox(event,'sudoracion_excesiva',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sudoracion_excesiva == 2} onClick={(event)=>ReadCheckbox(event,'sudoracion_excesiva',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.sudoracion_excesiva == 3} onClick={(event)=>ReadCheckbox(event,'sudoracion_excesiva',3)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.entumecimiento_hormigueo_mano_pie == 0} onClick={(event)=>ReadCheckbox(event,'entumecimiento_hormigueo_mano_pie',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.entumecimiento_hormigueo_mano_pie == 1} onClick={(event)=>ReadCheckbox(event,'entumecimiento_hormigueo_mano_pie',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.entumecimiento_hormigueo_mano_pie == 2} onClick={(event)=>ReadCheckbox(event,'entumecimiento_hormigueo_mano_pie',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.entumecimiento_hormigueo_mano_pie == 3} onClick={(event)=>ReadCheckbox(event,'entumecimiento_hormigueo_mano_pie',3)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.tension_muscular == 0} onClick={(event)=>ReadCheckbox(event,'tension_muscular',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tension_muscular == 1} onClick={(event)=>ReadCheckbox(event,'tension_muscular',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tension_muscular == 2} onClick={(event)=>ReadCheckbox(event,'tension_muscular',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.tension_muscular == 3} onClick={(event)=>ReadCheckbox(event,'tension_muscular',3)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.dolor_cabeza == 0} onClick={(event)=>ReadCheckbox(event,'dolor_cabeza',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolor_cabeza == 1} onClick={(event)=>ReadCheckbox(event,'dolor_cabeza',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolor_cabeza == 2} onClick={(event)=>ReadCheckbox(event,'dolor_cabeza',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolor_cabeza == 3} onClick={(event)=>ReadCheckbox(event,'dolor_cabeza',3)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.fatiga_cansancio == 0} onClick={(event)=>ReadCheckbox(event,'fatiga_cansancio',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fatiga_cansancio == 1} onClick={(event)=>ReadCheckbox(event,'fatiga_cansancio',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fatiga_cansancio == 2} onClick={(event)=>ReadCheckbox(event,'fatiga_cansancio',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fatiga_cansancio == 3} onClick={(event)=>ReadCheckbox(event,'fatiga_cansancio',3)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.problemas_dormir_descansar_3 == 0} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_3',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_3 == 1} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_3',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_3 == 2} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_3',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.problemas_dormir_descansar_3 == 3} onClick={(event)=>ReadCheckbox(event,'problemas_dormir_descansar_3',3)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.irritabilidad_2 == 0} onClick={(event)=>ReadCheckbox(event,'irritabilidad_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.irritabilidad_2 == 1} onClick={(event)=>ReadCheckbox(event,'irritabilidad_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.irritabilidad_2 == 2} onClick={(event)=>ReadCheckbox(event,'irritabilidad_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.irritabilidad_2 == 3} onClick={(event)=>ReadCheckbox(event,'irritabilidad_2',3)} type="checkbox" name="radio"/>
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
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes dolores de cabeza, musculares o articulares?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_cabeza_musculares_articulares == 0} onClick={(event)=>ReadCheckbox(event,'dolores_cabeza_musculares_articulares',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_cabeza_musculares_articulares == 1} onClick={(event)=>ReadCheckbox(event,'dolores_cabeza_musculares_articulares',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_cabeza_musculares_articulares == 2} onClick={(event)=>ReadCheckbox(event,'dolores_cabeza_musculares_articulares',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dolores_cabeza_musculares_articulares == 3} onClick={(event)=>ReadCheckbox(event,'dolores_cabeza_musculares_articulares',3)} type="checkbox" name="radio"/>
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
                                                                <input checked={questionario?.problemas_digestivos_intestinales == 3} onClick={(event)=>ReadCheckbox(event,'problemas_digestivos_intestinales',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes dificultad para concentrarse o realizar tareas?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentrarte_realizar_tareas == 0} onClick={(event)=>ReadCheckbox(event,'dificultad_concentrarte_realizar_tareas',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentrarte_realizar_tareas == 1} onClick={(event)=>ReadCheckbox(event,'dificultad_concentrarte_realizar_tareas',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentrarte_realizar_tareas == 2} onClick={(event)=>ReadCheckbox(event,'dificultad_concentrarte_realizar_tareas',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultad_concentrarte_realizar_tareas == 3} onClick={(event)=>ReadCheckbox(event,'dificultad_concentrarte_realizar_tareas',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Evitas ciertas situaciones o lugares por miedo o ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_situaciones_lugares_miedo_ansiedad_2 == 0} onClick={(event)=>ReadCheckbox(event,'evitar_situaciones_lugares_miedo_ansiedad_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_situaciones_lugares_miedo_ansiedad_2 == 1} onClick={(event)=>ReadCheckbox(event,'evitar_situaciones_lugares_miedo_ansiedad_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_situaciones_lugares_miedo_ansiedad_2 == 2} onClick={(event)=>ReadCheckbox(event,'evitar_situaciones_lugares_miedo_ansiedad_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.evitar_situaciones_lugares_miedo_ansiedad_2== 3} onClick={(event)=>ReadCheckbox(event,'evitar_situaciones_lugares_miedo_ansiedad_2',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Haz dejado de hacer cosas que antes te gustaban por miedo o ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_gustaban_miedo_ansiedad_2 == 0} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_gustaban_miedo_ansiedad_2',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_gustaban_miedo_ansiedad_2 == 1} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_gustaban_miedo_ansiedad_2',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_gustaban_miedo_ansiedad_2 == 2} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_gustaban_miedo_ansiedad_2',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dejar_hacer_cosas_gustaban_miedo_ansiedad_2 == 3} onClick={(event)=>ReadCheckbox(event,'dejar_hacer_cosas_gustaban_miedo_ansiedad_2',3)} type="checkbox" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Te aislas de los demás?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislamiento_de_otros == 0} onClick={(event)=>ReadCheckbox(event,'aislamiento_de_otros',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislamiento_de_otros == 1} onClick={(event)=>ReadCheckbox(event,'aislamiento_de_otros',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislamiento_de_otros == 2} onClick={(event)=>ReadCheckbox(event,'aislamiento_de_otros',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.aislamiento_de_otros== 3} onClick={(event)=>ReadCheckbox(event,'aislamiento_de_otros',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
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
                                                                <input checked={questionario?.abuso_alcohol_drogas_2== 3} onClick={(event)=>ReadCheckbox(event,'abuso_alcohol_drogas_2',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Fumas?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fumas == 0} onClick={(event)=>ReadCheckbox(event,'fumas',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fumas == 1} onClick={(event)=>ReadCheckbox(event,'fumas',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fumas == 2} onClick={(event)=>ReadCheckbox(event,'fumas',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.fumas == 3} onClick={(event)=>ReadCheckbox(event,'fumas',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes una mala alimentación?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.mala_alimentacion == 0} onClick={(event)=>ReadCheckbox(event,'mala_alimentacion',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.mala_alimentacion== 1} onClick={(event)=>ReadCheckbox(event,'mala_alimentacion',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.mala_alimentacion == 2} onClick={(event)=>ReadCheckbox(event,'mala_alimentacion',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.mala_alimentacion== 3} onClick={(event)=>ReadCheckbox(event,'mala_alimentacion',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Realizar poco ejercicio fisico?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.poco_ejercicio_fisico == 0} onClick={(event)=>ReadCheckbox(event,'poco_ejercicio_fisico',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.poco_ejercicio_fisico == 1} onClick={(event)=>ReadCheckbox(event,'poco_ejercicio_fisico',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.poco_ejercicio_fisico == 2} onClick={(event)=>ReadCheckbox(event,'poco_ejercicio_fisico',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.poco_ejercicio_fisico== 3} onClick={(event)=>ReadCheckbox(event,'poco_ejercicio_fisico',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Duermes poco o mal?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.duermes_poco_mal == 0} onClick={(event)=>ReadCheckbox(event,'duermes_poco_mal',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.duermes_poco_mal == 1} onClick={(event)=>ReadCheckbox(event,'duermes_poco_mal',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.duermes_poco_mal == 2} onClick={(event)=>ReadCheckbox(event,'duermes_poco_mal',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.duermes_poco_mal== 3} onClick={(event)=>ReadCheckbox(event,'duermes_poco_mal',3)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Siempre</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>¿Tienes dificultades para manejar tu tiempo?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultades_manejar_tiempo == 0} onClick={(event)=>ReadCheckbox(event,'dificultades_manejar_tiempo',0)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultades_manejar_tiempo == 1} onClick={(event)=>ReadCheckbox(event,'dificultades_manejar_tiempo',1)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultades_manejar_tiempo == 2} onClick={(event)=>ReadCheckbox(event,'dificultades_manejar_tiempo',2)} type="checkbox" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input checked={questionario?.dificultades_manejar_tiempo== 3} onClick={(event)=>ReadCheckbox(event,'dificultades_manejar_tiempo',3)} type="checkbox" name="radio"/>
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
        <ResultsTest type={'Estres'} result={sumData()}/>
        </>
    )
}
