import React from 'react'
import './Test2.css'
import Select, { components } from 'react-select'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import makeAnimated from 'react-select/animated';
/**
 * MENSAJES PERSONALIZADOS AL BUSCAR O CARGAR OPCIONES EN REACT SELECT
 */

const { NoOptionsMessage } = components;

const customNoOptionsMessage = props => (
  <NoOptionsMessage {...props} className="custom-no-options-message-internal-form-">No registrado</NoOptionsMessage>
);

const { LoadingMessage } = components;

const customLoadingMessage = props => (
  <LoadingMessage {...props} className="custom-loading-message-internal-form-">Cargando</LoadingMessage>
);

/**
 * ANIMATE DELETE MULTISELECT
 */

const animatedComponents = makeAnimated();

/**
 * Data que llena los select
 */

const Parentage = [
  { value: "opcion-uno", label: "Opcion uno" },
  { value: "opcion-dos", label: "Opcion dos" },
  { value: "opcion-tres", label: "Opcion tres" }
];

const MaritalStatus = [
  { value: "opcion-uno", label: "Opcion uno" },
  { value: "opcion-dos", label: "Opcion dos" },
  { value: "opcion-tres", label: "Opcion tres" }
];

const PopulationGroup  = [
  { value: "opcion-uno", label: "Opcion uno" },
  { value: "opcion-dos", label: "Opcion dos" },
  { value: "opcion-tres", label: "Opcion tres" }
];

const EthnicGroup  = [
  { value: "opcion-uno", label: "Opcion uno" },
  { value: "opcion-dos", label: "Opcion dos" },
  { value: "opcion-tres", label: "Opcion tres" }
];

const Religion  = [
  { value: "opcion-uno", label: "Opcion uno" },
  { value: "opcion-dos", label: "Opcion dos" },
  { value: "opcion-tres", label: "Opcion tres" }
];

/**
 * Se genera componente nuevo para soportar el placeholder animado del input 
 */

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
  const { inputId, placeholder } = props.selectProps;
  return (
    <ValueContainer {...props}>
      <Placeholder htmlFor={inputId} {...props}>
        {placeholder}
      </Placeholder>
      {React.Children.map(children, child =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

/**
* Constante que soporta todo el cambio de los estilo del select
*/

const selectStyles = {
  /**
  * Estilos del icono del dropdown del select
  * Estilos del separador del select
  * Estilos del icono de cerrar del select
  */
  dropdownIndicator: (styles) => ({ ...styles, 
    color: "#d1a207", 
    padding: 0, paddingTop: '0.34rem !important', 
    paddingRight: '0.5rem !important',
    width: '25px',
    height: '25px',
    "&:hover": {
      color: "var(--color-black-)",
    } 
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  clearIndicator: (styles) => ({ ...styles, 
    color: "white", 
    padding: 0, 
    paddingTop: '0.05rem !important',
    width: '15px',
    height: '15px',
    "&:hover": {
      color: "white",
    } 
  }),
  /**
  * Estilos del input global
  */
  control: () => ({
  fontSize: 14,
  display: "flex",
  alignItems: "center",
  alignSelf: "start",
  justifyContent: "start",
  height: 'auto',
  minHeight: 50,
  maxHeight: 150,
  paddingLeft: '2.1rem',
  paddingTop: '0.3rem',
  width: "100%",
  backgroundColor: 'transparent',
  borderRadius: 0,
  borderBottom: "1px solid #d1a207",
  }),
  /**
  * EESTILOS DEL INPUT
  */
  input: (provided) => ({
  ...provided,
  color: 'var(--color-quaternary-gray-)',
  fontSize: 12,
  textTransform: 'uppercase',
  fontFamily: 'var(--font-family-regular-)',
  }),
  /**
  * Estilos del menu desplegable del select
  */
  menu: (styles) => ({
  ...styles,
  border: 'none',
  backgroundColor: 'var(--color-secondary-white-rgba-)',
  boxShadow: 'var(--box-shadow-2-)',
  borderRadius: '1rem',
  padding: 0,
  marginTop: 8,
  marginBottom: 0,
  height: 'auto',
  minHeight: 'auto',
  maxHeight: 300,
  overflow: "hidden",
  color: 'var(--color-quaternary-gray-)',
  fontSize: 12,
  textTransform: 'uppercase',
  fontFamily: 'var(--font-family-regular-)',
  }),
  menuList: () => ({
    paddingTop: 0,
    paddingBottom: 0,
    height: 'auto',
    minHeight: 'auto',
    maxHeight: 300,
    overflow: "auto",
    "::-webkit-scrollbar": {
      width: "0px !important",
      height: "0px !important",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent !important"
    },
    "::-webkit-scrollbar-thumb": {
      background: "transparent !important"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "transparent !important"
    }
  }),
  /**
  * Estilos de las opciones desplegables
  */
  option: (provided, state) => ({
  ...provided,
  fontSize: 11,
  textTransform: 'uppercase',
  backgroundColor: state.isSelected ? "var(--color-purple-)" : "var(--color-secondary-white-rgba-)",
  fontFamily: 'var(--font-family-regular-)',
  padding: '0.5rem 0.8rem 0.5rem 0.8rem',
  borderRadius: '1rem',
  ":hover": {
  background: "var(--color-purple-)",
  color: 'var(--color-white-)',
  }
  }),
  /**
  * Estilos del contenedor
  */
  container: (provided, state) => ({
  ...provided,
  marginTop: 0,
  width: '100%',
  position: 'relative',
  flex: '1 1 auto'
  }),
  valueContainer: (provided, state) => ({
  ...provided,
  overflow: "visible"
  }),
  /**
  * Estilos placeholder del input
  */
  placeholder: (provided, state) => ({
  ...provided,
  width: '100%',
  position: "absolute",
  top: state.hasValue || state.selectProps.inputValue ? -15 : "28%",
  left: state.hasValue || state.selectProps.inputValue ? -32 : "0%",
  transition: "top 0.1s, font-size 0.1s",
  color: 'var(--color-quaternary-gray-)',
  fontSize: state.hasValue || state.selectProps.inputValue ? 13 : "14px",
  lineHeight: 1.25,
  fontFamily: 'var(--font-family-regular-)',
  overflow: 'hidden',
  textAlign: 'start',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
  }),
  /**
  * Estilos texto en el input
  */
  singleValue: (styles) => ({ 
  ...styles, 
  fontSize: 12,
  textTransform: 'uppercase',
  color: "var(--color-quaternary-gray-)", 
  fontFamily: 'var(--font-family-regular-)', 
  padding: '3px',
  margin: '0px',
  marginTop: '7px',
  marginLeft: 0,
  marginRight: 0
  }),
  multiValue: (styles) => ({ 
    ...styles, 
    backgroundColor: 'var(--color-secondary-white-rgba-)',
    boxShadow: 'var(--box-shadow-2-)',
    borderRadius: '1rem',
    margin: '2px',
    alignItems: 'center',
    alignSelf: 'center',
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontFamily: 'var(--font-family-regular-)',
    fontSize: 12,
    textTransform: 'uppercase',
    color: 'var(--color-quaternary-gray-)',
    borderRadius: '1rem',
    padding: '5px',
    paddingLeft: '0.5rem',
    paddingRight: '0.6rem',
    paddingBottom: '0.3rem'
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    borderRadius: '6rem',
    paddingLeft: '6px',
    width: '26px',
    height: '26px',
    color: 'var(--color-black-)',
    backgroundColor: 'var(--color-secondary-gray-)',
    ':hover': {
      color: 'var(--color-white-)',
      backgroundColor: 'var(--color-secondary-purple-)',
    }
  })
}

/**
 * MESES Y DIAS EN ESPAÑOL PARA EL DATEPICKER
 */

const months = [
  ["Ene", "Ene"],
  ["Feb", "Feb"],
  ["Mar", "Mar"],
  ["Abr", "Abr"],
  ["May", "May"],
  ["Jun", "Jun"],
  ["Jul", "Jul"],
  ["Agos", "Ago"],
  ["Sep", "Sep"],
  ["Oct", "Oct"],
  ["Nov", "Nov"],
  ["Dic", "Dic"],
]
const weekDays = [
  ["Lun", "Lu"],
  ["Mar", "Ma"],
  ["Mie", "Mi"],
  ["Jue", "Ju"],
  ["Vie", "Vi"],
  ["Sab", "Sa"],
  ["Dom", "Do"],
]



export default function Test2() {
    return (
        <form id='internal-form' action='' className='position-relative'>
                                    <div className='col-12'>
                                                <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Síntomas físicos</p>
                                    </div>
                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>1) ¿Sientes palpitaciones o latidos acelerados del corazón?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>2) ¿Sientes opresión en el pecho o dificultad para respirar?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>3) ¿Sientes mareos o atudimiento?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>4) ¿Sientes náuseas o vómitos?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>5) ¿Sientes temblores o sacudidas en las manos?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>6) ¿Sientes sudoración excesiva?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>7) ¿Sientes entumecimiento u hormigueo en las manos o los pies?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>8) ¿Sientes tensión muscular?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>9) ¿Sientes dolor de cabeza?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>10) ¿Sientes fatiga o cansancio?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>11) ¿Tienes problemas para dormir o descansar?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>12) ¿Te sientes irritable o de mal humor?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>13) ¿Tienes dificultad para concentrarte o pensar con claridad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>14) ¿Te sientes inquieto o agitado?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>15) ¿Tienes miedo a perder el control o volverte loco?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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


                                    <div className='col-12'>
                                                <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Síntomas cognitivos</p>
                                    </div>
                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>1) ¿Te preocupas excesivamente por cosas que no son importantes?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>2) ¿Tienes pensamientos negativos o intrusivos?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>3) ¿Te cuesta imaginar un futuro sin preocupaciones?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>4) ¿Te sientes incapaz de controlar tus pensamientos?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>5) ¿Te sientes pesimista sobre el futuro?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>6) ¿Te sientes como si estuvieras en un "estado de alerta" constante?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>7) ¿Te sientes como si el mundo fuera a acabarse?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>8) ¿Tienes miedo a morir?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>9) ¿Tienes miedo a la enfermedad o a la muerte?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>10) ¿Tienes miedo a perder el control o volverte loco?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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

                                    <div className='col-12'>
                                                <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Síntomas conductuales</p>
                                    </div>
                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>1) ¿Evitas ciertas situaciones o lugares por miedo o ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>2) ¿Haz dejado de hacer cosas que te gustaban por miedo o ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>3) ¿Te sientes incapaz de relajarte?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>4) ¿Sientes la necesidad de tener todo bajo control?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>5) ¿Te cuesta estar presente en el momento actual?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>6) ¿Te aíslas de los demás por miedo o ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>7) ¿Buscas constantemente información sobre la ansiedad o el estrés?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>8) ¿Realizas conductas repetitivas para aliviar la ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>9) ¿Abusas del alcohol o las drogas para aliviar la ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>10) ¿Haz tenido pensamientos o planes de autolesión o suicidio?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                    <div className='col-12'>
                                                <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Impacto en la vida diaria</p>
                                    </div>
                                    <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4 bg-t'>
                                            <ul class="list-group border-0 bg-t">
                                                <li class="list-group-item border-0 ps-0 pe-0 bg-t">
                                                    <div className='w-100 d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-between align-items-center align-self-center mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>1) ¿La ansiedad interfiere con tu trabajo o estudios?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>2) ¿La ansiedad interfiere con tus relaciones sociales?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>3) ¿La ansiedad interfiere con tu vida familiar?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>4) ¿La ansiedad te impide disfrutar de las actividades que te gustan?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>5) ¿La ansiedad te genera un malestar significativo?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>6) ¿Haz tenido que buscar ayuda médica por la ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>7) ¿Haz tenido que tomar medicamentos para la ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>8) ¿Haz tenido que realizar terapia para la ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>9) ¿Has tenido que hospitalizarte por la ansiedad?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
                                                        <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 mt-0 mt-sm-0 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 lh-sm fs-5- ff-monse-regular- fw-normal tx-light-black- white font_medium'>10) ¿Sientes que la ansiedad está controlando tu vida?</p>
                                                        <div className='w-auto d-flex flex-row justify-content-end align-items-center align-self-center'>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center me-2'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Nunca</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>A veces</span>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-auto d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                                                            
                                                            <div className='d-flex flex-wrap flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center mt-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4'>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
                                                                <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple- font_medium'>Casi siempre</span>
                                                                </label>
                                                            </div>
                                                            <div className='checks-radios- me-1'>
                                                                <label>
                                                                <input type="radio" name="radio"/>
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
    )
}
