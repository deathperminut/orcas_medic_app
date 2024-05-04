import React from 'react'
import './MedicValidation.css'
import Select, { components } from 'react-select'
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import makeAnimated from 'react-select/animated';
import { AppContext } from '../../../../../context';
import Swal from 'sweetalert2';
import moment from "moment";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import Preloader from '../../../../../components/Preloader/Preloader';
import {updateUser} from '../../../../../Services/MainApp/Users/User'
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
  { value: "CC", label: "CC" },
  { value: "PEP", label: "PEP" },
  { value: "PETT", label: "PETT" },
  { value: "CE", label: "CE" }
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

export default function MedicValidation() {

  /* APP CONTEXT */
  let {userData,token,setUserData} = React.useContext(AppContext);

  /* useState */

  let [dataUser,setDataUser] = React.useState({...userData})


  /* FUNCIONES */

  React.useEffect(()=>{

    setDataUser({...userData});

  },[userData])

  
  /* READ INPUTS */
  const ReadInput =(event,type)=>{

    setDataUser({...dataUser,[type]:event.target.value})

  }

  /* READ SELECTS */

  const ReadSelect =(event,type)=>{

    if(event){
      setDataUser({...dataUser,[type]:event.value})
    }else{
      setDataUser({...dataUser,[type]:""})
    }
    

  }

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
    setDataUser({... dataUser,[Type]:getDateFormat(e)})
  };

  // use States
  let [preloader,setPreloader] = React.useState(false);
  const [eye,setEye]=React.useState(true);

  // passwords
  const SeePassword=()=>{
      console.log("dd")
      setEye(false);
      const input = document.querySelector("#password");
      // When an input is checked, or whatever...
      input.setAttribute("type", "text");
      input.classList.add( "colorWhite" );
  }
  
  const HidePassword=()=>{
  console.log("dad")
  setEye(true);
  const input = document.querySelector("#password");

      input.setAttribute("type", "password");
      input.classList.remove( "colorWhite" );
  }

  /* UPDATE FUNCTION */

  const UpdateUser=async()=>{

    let result =  undefined;
    setPreloader(true);
    result =  await updateUser(dataUser,token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Problemas para actualizar usuario'
      })
    })

    if(result){
      setPreloader(false);
      console.log("ACTUALIZADO: ",result.data);
      Swal.fire({
        icon: 'success',
        title: 'Actualizado con éxito.'
      })
      setUserData(result.data);
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
      <div className='row mt-4 mb-4'>
        <div className='col-12'>
          <form id='internal-form' action='' className='position-relative'>
            <div className='row mt-2 mb-2'>
              <div className='col-12'>
                <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Datos del usuario</p>
              </div>
            </div>
            <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                  <input value={dataUser?.primer_nombre} onChange={(event)=>ReadInput(event,'primer_nombre')} type="text" className='form-control' id='firstName' placeholder="Ingrese su primer nombre" />
                  <label className='fs-5- ff-monse-regular- white font_medium'>Primer nombre</label>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                  <input value={dataUser?.segundo_nombre} onChange={(event)=>ReadInput(event,'segundo_nombre')} type="text" className='form-control' id='middleName' placeholder="Ingrese su segundo nombre" />
                  <label className='fs-5- ff-monse-regular- white font_medium'>Segundo nombre</label>
                </div>
              </div>
            </div>
            <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                  <input value={dataUser?.primer_apellido} onChange={(event)=>ReadInput(event,'primer_apellido')} type="text" className='form-control' id='firstLastName' placeholder="Ingrese su primer apellido" />
                  <label className='fs-5- ff-monse-regular- white font_medium'>Primer apellido</label>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                  <input value={dataUser?.segundo_apellido} onChange={(event)=>ReadInput(event,'segundo_apellido')} type="text" className='form-control' id='middleLastName' placeholder="Ingrese su segundo pellido" />
                  <label className='fs-5- ff-monse-regular- white font_medium'>Segundo apellido</label>
                </div>
              </div>
            </div>
            <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                  <input value={dataUser?.ciudad_residencia} onChange={(event)=>ReadInput(event,'ciudad_residencia')} type="text" className='form-control' id='firstLastName' placeholder="Ingrese su primer apellido" />
                  <label className='fs-5- ff-monse-regular- white font_medium'>Ciudad de residencia</label>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                  <input value={dataUser?.numero_celular} onChange={(event)=>ReadInput(event,'numero_celular')} type="text" className='form-control' id='middleLastName' placeholder="Ingrese su segundo pellido" />
                  <label className='fs-5- ff-monse-regular- white font_medium'>Número de celular</label>
                </div>
              </div>
            </div>
            <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                  <input value={dataUser?.email} onChange={(event)=>ReadInput(event,'email')} type="text" className='form-control' id='firstLastName' placeholder="Ingrese su primer apellido" />
                  <label className='fs-5- ff-monse-regular- white font_medium'>Correo</label>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                  <input value={dataUser?.barrio} onChange={(event)=>ReadInput(event,'barrio')} type="text" className='form-control' id='middleLastName' placeholder="Ingrese su segundo pellido" />
                  <label className='fs-5- ff-monse-regular- white font_medium'>Barrio</label>
                </div>
              </div>
            </div>
            <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                  <input value={dataUser?.direccion} onChange={(event)=>ReadInput(event,'direccion')} type="text" className='form-control' id='firstLastName' placeholder="Ingrese su primer apellido" />
                  <label className='fs-5- ff-monse-regular- white font_medium'>Dirección</label>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                  <input value={dataUser?.identificacion} onChange={(event)=>ReadInput(event,'identificacion')} type="text" className='form-control' id='middleLastName' placeholder="Ingrese su segundo pellido" />
                  <label className='fs-5- ff-monse-regular- white font_medium'>Identificación</label>
                </div>
              </div>
            </div>
            <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4' style={{'marginTop':'8px'}}>
                <div className='form-floating inner-addon- left-addon-'>
                  <Select value={{'value':dataUser['tipo_identificacion'],'label':dataUser['tipo_identificacion']}} onChange={(event)=>ReadSelect(event,'tipo_identificacion')} id='marital-status' options={MaritalStatus} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Tipo de identificación" styles={selectStyles} isClearable={true}/>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <div className='form-floating inner-addon- left-addon-'>
                              <div className='form-control' id='date-birth'>
                                  <DatePicker
                                  inputClass="custom-style-date-picker- white font_medium"
                                  placeholder="yyyy-mm-dd"
                                  format="YYYY-MM-DD"
                                  months={months}
                                  onChange={(event)=>changeDate(event,'fecha_nacimiento')}
                                  value={dataUser?.fecha_nacimiento}
                                  weekDays={weekDays}
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
              
              
            </div>
            <div onClick={UpdateUser} className='ButtonElement'>
                                <span  className='ButtonText'>Actualizar</span>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}
