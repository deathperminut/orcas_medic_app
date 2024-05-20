import React from 'react'
import './UserIdentification.css'
import Select, { components } from 'react-select'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import DatePicker from "react-multi-date-picker";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-tooltip/dist/react-tooltip.css";
import { AppContext } from '../../../../../../../context';
import Swal from 'sweetalert2';
import { Tooltip as ReactTooltip } from "react-tooltip";
import makeAnimated from 'react-select/animated';
import moment from "moment";


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

const MaritalStatus = [
  { value: "Soltero", label: "Soltero" },
  { value: "Casado", label: "Casado" },
  { value: "Separado", label: "Separado" },
  { value: "Unión libre", label: "Unión libre" },
  { value: "Viudo", label: "Viudo" }
];

const PopulationGroup  = [
  { value: "Personas con discapacidad", label: "Personas con discapacidad" },
  { value: "Poblacion migrante", label: "Poblacion migrante" },
  { value: "Personas desplazadas por el conflicto armado", label: "Personas desplazadas por el conflicto armado" },
  { value: "Personas privadas de la libertad", label: "Personas privadas de la libertad" },
  { value: "Personas en condicion de calle", label: "Personas en condicion de calle" },
  { value: "Mujeres gestantes", label: "Mujeres gestantes" },
  { value: "Poblacion infantil a cargo del ICBF", label: "Poblacion infantil a cargo del ICBF" },
  { value: "Madres comunitarias", label: "Madres comunitarias" },
  { value: "Personas desmovilizadas", label: "Personas desmovilizadas" },
  { value: "Internado en centro psiquiatrico", label: "Internado en centro psiquiatrico" },
  { value: "Comunidades indigenas", label: "Comunidades indigenas" },
  { value: "Comunidades afrodescendientes", label: "Comunidades afrodescendientes" },
  { value: "Niños, niñas y adolescentes en situacion de vulnerabilidad", label: "Niños, niñas y adolescentes en situacion de vulnerabilidad" },
  { value: "Mujeres victimas de violencia de genero", label: "Mujeres victimas de violencia de genero" },
  { value: "Personas LGTBI", label: "Personas LGTBI" },
  { value: "Otros grupos poblacionales", label: "Otros grupos poblacionales" },
  { value: "Ninguno" , label: "Ninguno"},
];

const EthnicGroup  =  [
  { value: 'Mestizo', label: 'Mestizo' },
  { value: 'Afrodescendiente', label: 'Afrodescendiente' },
  { value: 'Indigena', label: 'Indigena' },
  { value: 'Blanco', label: 'Blanco' },
  { value: 'Raizal', label: 'Raizal' },
  { value: 'Palenquero', label: 'Palenquero' },
  { value: 'Rrom', label: 'Rrom' },
  { value: 'Arabe', label: 'Arabe' },
  { value: 'Chino', label: 'Chino' },
  { value: 'Judio', label: 'Judio' },
  { value: 'Otro', label: 'Otro' }
];

const Religion  =  [
  { value: 'Ateísmo', label: 'Ateísmo' },
  { value: 'Iglesia Católica Romana', label: 'Iglesia Católica Romana'},
  { value: 'Protestantismo', label: 'Protestantismo'},
  { value: 'Adventistas del Séptimo Día', label: 'Adventistas del Séptimo Día' },
  { value: 'Testigos de Jehová', label: 'Testigos de Jehová' },
  { value: 'Mormonismo', label: 'Mormonismo' },
  { value: 'Judaísmo', label: 'Judaísmo' },
  { value: 'Islamismo', label: 'Islamismo' },
  { value: 'Iglesia Universal del Reino de Dios', label: 'Iglesia Universal del Reino de Dios' },
  { value: 'Iglesia Pentecostal Unida de Colombia', label: 'Iglesia Pentecostal Unida de Colombia' },
  { value: 'Bahaísmo', label: 'Bahaísmo' },
  { value: 'Otro', label: 'Otro' }
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
  zIndex:100,
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
    zIndex:100,
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

/* SELECTS OPTIONS */

const TypeIdentification = [
  { value: "CC", label: "CC" },
  { value: "PEP", label: "PEP" },
  { value: "PETT", label: "PETT" },
  { value: "CE", label: "CE" }
];

const Gender = [
  { value: "Masculino", label: "Masculino" },
  { value: "Femenino", label: "Femenino" },
];
 
export default function UserIdentification() {

    /* AppContext */

    let {flagHistory,setFlagHistory,typeDate,setTypeDate,dniDateUser,setDniDateUser,token,userDateData,setUserDateData} = React.useContext(AppContext);

    /* useEffect */

    React.useEffect(()=>{
      console.log("DATOS USUARIO: ",userDateData);
    },[])

    /* useStates */

    let [preloader,setPreloader] = React.useState(false);
    let [Data,setData] = React.useState({...userDateData});

    /* functions */

    let readInputs =(event,type)=>{
        setData({...Data,[type]:event.target.value})
    }

    let readSelect=(event,type)=>{
      // QUE NO SE PUEDA ELIMINAR LOS ELEMENTOS
      setData({...Data,[type]:event.value})
    }


    const ReadSelect =(event,type)=>{

      if(event){
        setData({...Data,[type]:event.value})
      }else{
        setData({...Data,[type]:""})
      }
      
    }

    /* DATE FUNCTIONS */


    const getDateFormat=(date)=>{
      /* 
      Función para obtener una fecha en formato
      string de la forma YYYY-MM-DD
      */
      let DATE = new Date(date);
      return moment(DATE).format('YYYY-MM-DD');
  
  
    }
  
    /* READ BIRTHDAY */
  
    const changeDate = (e,Type) => {
      setData({... Data,[Type]:getDateFormat(e)})
    };

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

    /* useEffects */

    React.useEffect(()=>{
    
      if(flagHistory){
        // guardamos en el appContext la información del usuario
        console.log("guardado 1");
        setUserDateData(Data);

      }
    },[flagHistory])

    
    return (
        <div className='row mt-4 mb-4'>
            <div className='col-12'>
                <form id='internal-form' action='' className='position-relative'>

                    <div className='row mt-2 mb-2'>
                    <div className='col-12'>
                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Datos del paciente</p>
                    </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                        <div className='form-floating inner-addon- left-addon-'>
                        <input value={Data?.primer_nombre} onChange={(event)=>readInputs(event,'primer_nombre')} type="text" className='form-control' id='firstName' placeholder="Ingrese su primer nombre" />
                        <label className='fs-5- ff-monse-regular- white font_medium'>Primer nombre</label>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                        <div className='form-floating inner-addon- left-addon-'>
                        <input value={Data?.segundo_nombre} onChange={(event)=>readInputs(event,'segundo_nombre')} type="text" className='form-control' id='middleName' placeholder="Ingrese su segundo nombre" />
                        <label className='fs-5- ff-monse-regular- white font_medium'>Segundo nombre</label>
                        </div>
                    </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                        <div className='form-floating inner-addon- left-addon-'>
                        <input value={Data?.primer_apellido} onChange={(event)=>readInputs(event,'primer_apellido')} type="text" className='form-control' id='firstLastName' placeholder="Ingrese su primer apellido" />
                        <label className='fs-5- ff-monse-regular- white font_medium'>Primer apellido</label>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                        <div className='form-floating inner-addon- left-addon-'>
                        <input value={Data?.segundo_apellido} onChange={(event)=>readInputs(event,'segundo_apellido')} type="text" className='form-control' id='middleLastName' placeholder="Ingrese su segundo pellido" />
                        <label className='fs-5- ff-monse-regular- white font_medium'>Segundo apellido</label>
                        </div>
                    </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                        <div className='form-floating inner-addon- left-addon-'>
                        <Select value={{'value':Data['tipo_identificacion'],'label':Data['tipo_identificacion']}} onChange={(event)=>ReadSelect(event,'tipo_identificacion')} id='type-identification' options={TypeIdentification} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Tipo de identificación" styles={selectStyles} isClearable={false}/>
                        </div>
                    </div>
                    <div style={{'position':'relative','bottom':'7px'}} className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <input value={Data?.identificacion} onChange={(event)=>readInputs(event,'identificacion')} type="text" className='form-control' id='identificationNumber' placeholder="Ingrese su # identificación" />
                            <label className='lh-sm fs-5- ff-monse-regular- white font_medium'>Número de identificación</label>
                            </div>
                    </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <div className='form-control' id='date-birth'>
                                <DatePicker
                                inputClass="custom-style-date-picker- white font_medium"
                                placeholder="yyyy-mm-dd"
                                format="YYYY-MM-DD"
                                onChange={(event)=>changeDate(event,'fecha_nacimiento')}
                                value={Data?.fecha_nacimiento}
                                months={months}
                                weekDays={weekDays}
                                maxDate={new Date()}
                                renderButton={(event,handleClick)=>{
                                  console.log("EVENTO :",event)
                                  if(event == "left"){
                                    return <IoIosArrowDropleft onClick={handleClick} size={20}></IoIosArrowDropleft>
                                  }else{
                                    return <IoIosArrowDropright onClick={handleClick} size={20}></IoIosArrowDropright>
                                  }
                                  
                                }
                                }
                                calendarPosition="bottom-left"
                                showOtherDays={true}
                                fixMainPosition={true}
                                shadow={true}
                                animation={true}
                                arrowStyle={{
                                    display: "none"
                                }}
                                />
                            </div>
                            <label className='lh-sm fs-5- ff-monse-regular- white font_medium'>Fecha de nacimiento</label>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <input value={GetAge(Data?.fecha_nacimiento)} disabled   type="text" className='form-control' id='age' placeholder="Ingrese su edad" />
                            <label className='lh-sm fs-5- ff-monse-regular- white font_medium'>Edad</label>
                            </div>
                        </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                                <div className='form-floating inner-addon- left-addon-'>
                                <Select value={{'value':Data['genero'],'label':Data['genero']}} onChange={(event)=>ReadSelect(event,'genero')} id='gender' options={Gender} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Genero" styles={selectStyles} isClearable={false}/>
                                </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <input value={Data?.ocupacion} onChange={(event)=>readInputs(event,'ocupacion')} type="text" className='form-control' id='occupation' placeholder="Ingrese su ocupación" />
                            <label className='lh-sm fs-5- ff-monse-regular- white font_medium'>Ocupación</label>
                            </div>
                        </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <input value={Data?.direccion} onChange={(event)=>readInputs(event,'direccion')} type="text" className='form-control' id='address' placeholder="Ingrese su dirección" />
                            <label className='lh-sm fs-5- ff-monse-regular- white font_medium'>Dirección</label>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <input value={Data?.barrio} onChange={(event)=>readInputs(event,'barrio')} type="text" className='form-control' id='neighborhood' placeholder="Ingrese su barrio" />
                            <label className='lh-sm fs-5- ff-monse-regular- white font_medium'>Barrio</label>
                            </div>
                        </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <input value={Data?.numero_celular} onChange={(event)=>readInputs(event,'numero_celular')} type="tel" className='form-control' id='phone' placeholder="Ingrese su teléfono" />
                            <label className='lh-sm fs-5- ff-monse-regular- white font_medium'>Teléfono</label>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <input value={Data?.ciudad_residencia} onChange={(event)=>readInputs(event,'ciudad_residencia')} type="text" className='form-control' id='age' placeholder="Ingrese su lugar de residencia" />
                            <label className='fs-5- ff-monse-regular- white font_medium'>Lugar de residencia</label>
                            </div>
                        </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <Select value={{'value':Data['estado_civil'],'label':Data['estado_civil']}} onChange={(event)=>ReadSelect(event,'estado_civil')}  id='marital-status' options={MaritalStatus} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Estado civil" styles={selectStyles} isClearable={false}/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <Select value={{'value':Data['grupo_social'],'label':Data['grupo_social']}} onChange={(event)=>ReadSelect(event,'grupo_social')} id='populationGroup' options={PopulationGroup} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Grupo social" styles={selectStyles} isClearable={false}/>
                            </div>
                        </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <Select value={{'value':Data['grupo_etnico'],'label':Data['grupo_etnico']}} onChange={(event)=>ReadSelect(event,'grupo_etnico')} id='ethnicGroup' options={EthnicGroup} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Grupo étnico" styles={selectStyles} isClearable={false}/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <Select value={{'value':Data['religion'],'label':Data['religion']}} onChange={(event)=>ReadSelect(event,'religion')} id='religion' options={Religion} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Religion" styles={selectStyles} isClearable={false}/>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4 mb-4'>
                    </div>                    
                </form>
            </div>
        </div>
    )
}
