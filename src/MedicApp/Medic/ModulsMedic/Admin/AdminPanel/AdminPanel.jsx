import React from 'react'
import './AdminPanel.css'
import {NavLink} from "react-router-dom"
import Pagination from 'pagination-for-reactjs-component'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiEdit } from "react-icons/ci";
import DatePicker from "react-multi-date-picker";
import Select,{ components} from 'react-select'
import { MdGppGood } from "react-icons/md";
import { RegisterUser, getUsers } from '../../../../../Services/Auth/Auth';
import { AppContext } from '../../../../../context';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import makeAnimated from 'react-select/animated';
import { IoIosClose } from "react-icons/io";
import moment from "moment";
import { updateUser } from '../../../../../Services/MainApp/Users/User';
import Preloader from '../../../../../components/Preloader/Preloader';

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
    color: "var(--color-black-)", 
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
    color: "var(--color-black-)", 
    padding: 0, 
    paddingTop: '0.05rem !important',
    width: '15px',
    height: '15px',
    "&:hover": {
      color: "var(--color-black-)",
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
  borderBottom: "1px solid var(--color-black-)",
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
  zIndex:100,
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



const DNI_TYPE = [
  { value: "CC", label: "CC" },
  { value: "PEP", label: "PEP" },
  { value: "PETT", label: "PETT" },
  { value: "CE", label: "CE" }
]

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

export default function AdminPanel() {

  // use Navigate 
  const navigate=useNavigate();

  /* appContext */

  let {token,userData,setUserData} = React.useContext(AppContext);

  /* useStates */
  let [users,setUsers] = React.useState([]);
  let [ListReference,setListReference] = React.useState([]);
  let [supportList,setSupportList] = React.useState([]);
  let [preloader,setPreloader] = React.useState(false);
  let [selectUser,setSelectUser] = React.useState(null);


  /* PAGINATION */
  const [pageIndex, setPageIndex] = React.useState(1);
  const [pageCount,setPageCount] = React.useState(10);
  const paginationRef = React.useRef();

  /* useEffect */

  React.useEffect(()=>{

    if(token){

      // Cargamos los datos de los usuarios
      loadUsers();

    }else{
      navigate('/Auth/Login')
    }

  },[token])

  /* functions */

  const loadUsers=async()=>{

    let result =  undefined;
    setPreloader(true);
    result =  await getUsers(token).catch((error)=>{
      console.log(error);
      Swal.fire({
        icon: 'info',
        title: 'Problemas para obtener los datos de los usuarios'
      })
      setPreloader(false);
    })

    if(result){
      console.log(result.data);
      setUsers(result.data);
      setListReference(result.data);
      setPreloader(false);
    }

  }

  // funciones para generar el efecto de paginación

  function obtenerSublista(Lista,Tamaño, Numero_secuencia) {
    // obtenemos la lista dependiendo de la pagina
    // teniendo en cuenta la cantidad de paginas
    // y el número de la pagina
    const inicio = (Numero_secuencia-1) * Tamaño;
    return Lista.slice(inicio, inicio + Tamaño);

  }
  
  function obtenerCantidadPaginas(Lista,Tamaño){

    // obtenemos la cantidad de total de paginas
    // segun el tamaño de la lista
    console.log("KUISTADW : ",Lista)
    let CantidadPaginas=Lista.length/Tamaño;
    if (!Number.isInteger(CantidadPaginas)){
       return Math.trunc(CantidadPaginas)+1
    }else{
      return CantidadPaginas
    }

  }

  React.useEffect(()=>{
    //console.log("LISTA DE PRODUCTOS: ",ListProducts);
    setPageCount(obtenerCantidadPaginas(users,10));
    let Sublist=obtenerSublista(users,10,pageIndex)
    setSupportList(Sublist);
    setListReference(users);
     
    },[setUsers])

    React.useEffect(()=>{

      if(pageIndex!==0){
    
        setPageCount(obtenerCantidadPaginas(ListReference,10));
        let Sublist=obtenerSublista(ListReference,10,pageIndex)
        setSupportList(Sublist);
    
      }
      
      
    },[pageIndex,ListReference])

    /* FILTER */


    let [filter,setfilter] = React.useState("");

    const FilterArray=(event)=>{
      
      if(event.target.value!==""){
        

        let ArrayFilter=users.filter((obj)=>obj.identificacion.toLowerCase().includes(event.target.value.toLowerCase()));
        //setSupportList([...ArrayFilter]);
        setListReference(ArrayFilter);
        setPageIndex(1);


      }else if(event.target.value===""){

        setListReference(users);
        setPageIndex(1);

      }
      setfilter(event.target.value);
    }

    /* offcanvas */

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = React.useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    /* Register Edit */
    const [userRegister,setUserRegister] = React.useState(
      {
        "id_ubicacion": null,
        "tipo_identificacion": "",
        "identificacion": "",
        "email": "",
        "primer_nombre": "",
        "segundo_nombre": "",
        "primer_apellido": "",
        "segundo_apellido": "",
        "fecha_nacimiento": "",
        "genero": "",
        "ocupacion": "",
        "direccion": "",
        "ciudad_residencia": "",
        "barrio": "",
        "numero_celular": "",
        "aseguradora": "",
        "estado_civil": "",
        "grupo_social": "",
        "grupo_etnico": "",
        "religion": "",
        "es_paciente": false,
        "es_doctor": false,
        "es_admin": false,
        "es_superusuario": false
    }
    )

    // REGLAS REGISTER

    let ReadInputRegister=(event,type)=>{
      setUserRegister({...userRegister,[type]:event.target.value})
    }

    let ReadSelectRegister=(event,type)=>{

      if(event){
        setUserRegister({...userRegister,[type]:event.value})
      }else{
        setUserRegister({...userRegister,[type]:""})
      }
      
    }

    // READ CHECKBOX
    let readCheckBoxRegister=(event,type,parameter)=>{
      setUserRegister({...userRegister,[parameter]:type})
    }

    // REGLAS EDIT

    let ReadInputEdit=(event,type,index)=>{
      
      //setRegisterUser({...registerUser,[type]:event.target.value})
      let copy=[...supportList];
      copy[index][type]=event.target.value;
      setSupportList([...copy]);
      
      
    }

    let ReadSelectEdit=(event,type,index)=>{

      if(event){
        let copy=[...supportList];
        copy[index][type]=event.value;
        setSupportList([...copy]);
      }else{
        let copy=[...supportList];
        copy[index][type]="";
        setSupportList([...copy]);
      }
      
    }

    // READ CHECKBOX
    let readCheckBoxEdit=(event,type,index,parameter)=>{

      let copy=[...supportList];
      copy[index][parameter]=type;
      setSupportList([...copy]);

    }

    /* function to editUser */

    let editUser = async()=>{

      if(supportList[selectUser].primer_nombre !== "" && supportList[selectUser].primer_apellido !== "" && supportList[selectUser].email !== "" && supportList[selectUser].identificacion !=="" && supportList[selectUser].tipo_identificacion !=="" && supportList[selectUser].numero_celular !== "" && (supportList[selectUser].es_doctor || supportList[selectUser].es_admin || supportList[selectUser].es_paciente)){
        let result = undefined
        setPreloader(true);
        console.log("DATOS PARA ACTUALIZAR: ",supportList[selectUser]);
        result =  await updateUser(supportList[selectUser],token).catch((error)=>{
          console.log(error);
          setPreloader(false);
          Swal.fire({
            icon: 'info',
            title: 'Problemas al actualizar usuario'
          });
        })
        if(result){
          
          if(result?.data){
            handleClose();
            console.log("DATOS PARA ACTUALIZADOS: ",result?.data);
            loadUsers();

            if(result.data.identificacion == userData?.identificacion){
              setUserData(result.data);
            }
            Swal.fire({
              icon: 'success',
              title: 'Usuario editado correctamente'
            });
          }else{
            setPreloader(false);
            Swal.fire({
              icon: 'info',
              title: 'No fue posible actualizar el usuario'
            });
          }
        }
      }else{
        Swal.fire({
          icon: 'info',
          title: 'Debe tener almenos un rol asignado y los campos de primer nombre, primero apellido , correo , número de celular , tipo de identificación e identificación no pueden estar vacios'
        });
      }
    }

    let RegisterData = async()=>{

      if(userRegister.fecha_nacimiento!=="" && userRegister.primer_nombre !== "" && userRegister.primer_apellido !== "" && userRegister.email !== "" && userRegister.identificacion !=="" && userRegister.tipo_identificacion !=="" && userRegister.numero_celular !== "" && (userRegister.es_doctor || userRegister.es_admin || userRegister.es_paciente)){
        let result = undefined
        setPreloader(true);
        result =  await RegisterUser(userRegister,token).catch((error)=>{
          console.log(error);
          if(error?.response?.data?.error =="Error en creacion de usuario [El correo ya se encuentra registrado]"){
            setPreloader(false);
            Swal.fire({
              icon: 'info',
              title: 'El correo ya se encuentra registrado'
            });
          }else if(error?.response?.data?.error =="Error en creacion de usuario [El numero de identificacion ya se encuentra registrado]"){
            setPreloader(false);
            Swal.fire({
              icon: 'info',
              title: 'Número de identificación ya registrado'
            });
          }else{
            setPreloader(false);
            Swal.fire({
              icon: 'info',
              title: 'Problemas al registrar el usuario'
            });
          };
          
        })
        if(result){
          
          handleClose2();
            loadUsers();
            Swal.fire({
              icon: 'success',
              title: 'Usuario registrado correctamente'
            });
            setUserRegister(
              {
                "id_ubicacion": null,
                "tipo_identificacion": "",
                "identificacion": "",
                "email": "",
                "primer_nombre": "",
                "segundo_nombre": "",
                "primer_apellido": "",
                "segundo_apellido": "",
                "fecha_nacimiento": "",
                "genero": "",
                "ocupacion": "",
                "direccion": "",
                "ciudad_residencia": "",
                "barrio": "",
                "numero_celular": "",
                "aseguradora": "",
                "estado_civil": "",
                "grupo_social": "",
                "grupo_etnico": "",
                "religion": "",
                "es_paciente": false,
                "es_doctor": false,
                "es_admin": false,
                "es_superusuario": false
            }
            )
        }
      }else{
        Swal.fire({
          icon: 'info',
          title: 'Debe tener almenos un rol asignado y los campos de primer nombre, primero apellido , correo , número de celular , tipo de identificación,identificación y fecha de nacimiento no pueden estar vacios'
        });
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

    const changeDate = (e,Type) => {
      setUserRegister({...userRegister,[Type]:getDateFormat(e)})
    };


  return (
    <>
      {
                preloader ?
                <>
                <Preloader></Preloader>
                </>
                :

                <></>
      }
      <div className='container-fluid overflow-x-hidden p-0'>
        <div className='row g-4 mt-3'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4'>
            <div id="card-appointment" className='card border-0 rounded-3 w-100 position-relative bs-2-'>
              <div className='card-header border-0 rounded-3'>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='nav nav-pills d-flex flex-row justify-content-between' role="tablist">
                      <li className='nav-item' role="presentation">
                        <button className='nav-link active rounded-0 d-flex flex-row justify-content-center align-items-center align-self-center' id="user-administration-tab" data-bs-toggle="pill" data-bs-target="#user-administration" type="button" role="tab" aria-controls="user-administration" aria-selected="true"> <span className='ff-monse-regular- me-2 font_medium'>Administración de usuarios</span></button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='card-body w-100 wrapper-list-appointment- pt-0 mt-1'>
                <div className='tab-content' id='myTabContent'>
                  <div className='tab-pane fade show active' id='user-administration' role="tabpanel" aria-labelledby="user-administration-tab" tabIndex="0">
                    <div className='row'>
                      <div className='col-12'>
                        <div className='d-grid gap-2 pt-1' onClick={handleShow2}>
                          <span style={{'cursor':'pointer'}}  className='nav-link rounded-pill ps-4 pe-4 h-45- d-flex flex-row justify-content-center align-items-center align-self-center bs-1- button-register-admin' ><span className='lh-1 fs-5- ff-monse-regular- font_medium white'>Registro de usuario</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8 bg-gray'>
            <div id="card-view" className='card border-0 rounded-3 w-100 bs-2- bg-gray'>
              <div className='card-body w-100 min-h-'>
                <div className='container-fluid'>
                  <div className='row mt-2'>
                    <div className='col-12'>
                      <h2 className='m-0 p-0 lh-sm fs-3- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>Usuarios</h2>
                    </div>
                  </div>
                  <div className='row mt-4 mb-4'>
                    <div className='col-12'>
                      <form action="" className='position-relative wrapper-search-small- d-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                          <div className='form-floating inner-addon- left-addon-'>
                            <input value={filter} onChange={FilterArray} type="text" className='form-control' id='middleLastName' placeholder="Ingrese su segundo pellido" />
                            <label className='fs-5- ff-monse-regular- white font_medium'>Busca por cédula</label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> 
                  <div className='row mt-4 mb-4'>
                    <div className='table-responsive table-general-'>
                      <table className='table table-sm table-striped table-no-border- align-middle'>
                      <thead>
                          <tr>
                            <th scope="col" className='th-width-md-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Nombre</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Identificación</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>email</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Número de celular</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Dirección</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Paciente</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Médico</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Admin</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Editar</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {supportList.map((obj,index)=>{
                              return(
                                <tr key={index}>
                                  <td className='align-middle'>
                                    <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>{obj?.primer_nombre+' '+obj?.segundo_nombre+' '+obj?.primer_apellido+' '+obj?.segundo_apellido}</p>
                                  </td>
                                  <td className='align-middle'>
                                    <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>{obj?.identificacion}</p>
                                  </td>
                                  <td className='align-middle'>
                                    <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>{obj?.email}</p>
                                  </td>
                                  <td className='align-middle'>
                                    <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>{obj?.numero_celular}</p>
                                  </td>
                                  <td className='align-middle'>
                                    <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>{obj?.direccion}</p>
                                  </td>
                                  <td className='align-middle'>
                                    {obj?.es_paciente ? 
                                    <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                      <div className='col-auto'>
                                          <MdGppGood size={'24'} color={'#d1a207'} />
                                      </div>
                                    </div>
                                    :
                                    <></>
                                    }
                                  </td>
                                  <td className='align-middle'>
                                    {obj?.es_doctor ? 
                                    <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                      <div className='col-auto'>
                                          <MdGppGood size={'24'} color={'#d1a207'} />
                                      </div>
                                    </div>
                                    :
                                    <></>
                                    }
                                  </td>
                                  <td className='align-middle'>
                                    {obj?.es_admin ? 
                                    <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                      <div className='col-auto'>
                                          <MdGppGood size={'24'} color={'#d1a207'} />
                                      </div>
                                    </div>
                                    :
                                    <></>
                                    }
                                  </td>
                                  
                                  <td className='align-middle'>
                                    <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                      <div className='col-auto' onClick={()=>{
                                        setSelectUser(index);
                                        setShow(true);
                                        }}>
                                          <CiEdit size={'24'} color={'#d1a207'} style={{'cursor':'pointer'}}/>
                                          
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div> 
                  <div className='row mt-4'>
                    <div className='col-12 d-flex flex-row justify-content-center align-items-center align-self-center'>
                      <Pagination
                        pageCount={pageCount}
                        pageIndex={pageIndex}
                        setPageIndex={setPageIndex}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Offcanvas className="offcanvasBody" show={show2} onHide={()=>{
        handleClose2();
        loadUsers();
        setUserRegister(
              {
                "id_ubicacion": null,
                "tipo_identificacion": "",
                "identificacion": "",
                "email": "",
                "primer_nombre": "",
                "segundo_nombre": "",
                "primer_apellido": "",
                "segundo_apellido": "",
                "fecha_nacimiento": "",
                "genero": "",
                "ocupacion": "",
                "direccion": "",
                "ciudad_residencia": "",
                "barrio": "",
                "numero_celular": "",
                "aseguradora": "",
                "estado_civil": "",
                "grupo_social": "",
                "grupo_etnico": "",
                "religion": "",
                "es_paciente": false,
                "es_doctor": false,
                "es_admin": false,
                "es_superusuario": false
            }
            )
        }}>
      <div className='offcanvas-header pb-4 padding-40-'>
          <h2 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>Registrar usuario</h2>
          <IoIosClose style={{'cursor':'pointer'}} color='white' onClick={()=>{
        handleClose2();
        loadUsers();
        }} size={30} className='fa icon-close'></IoIosClose>
        </div>
        <div className='offcanvas-body ps-4 pe-4'>
          <div className='container-fluid pt-0 pb-0 padding-40-'>
            <div className='row'>
              <div className='col-12'>
                <form id='internal-form' action='' className='position-relative'>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={userRegister.primer_nombre} onChange={(event)=>ReadInputRegister(event,'primer_nombre')} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Primer nombre</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={userRegister.segundo_nombre} onChange={(event)=>ReadInputRegister(event,'segundo_nombre')} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Segundo nombre</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={userRegister.primer_apellido} onChange={(event)=>ReadInputRegister(event,'primer_apellido')} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Primer apellido</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={userRegister.segundo_apellido} onChange={(event)=>ReadInputRegister(event,'segundo_apellido')} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Segundo apellido</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={userRegister.ciudad_residencia} onChange={(event)=>ReadInputRegister(event,'ciudad_residencia')} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Ciudad de residencia</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={userRegister.numero_celular} onChange={(event)=>ReadInputRegister(event,'numero_celular')} type="number" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Número de celular</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={userRegister.email} onChange={(event)=>ReadInputRegister(event,'email')} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Correo</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={userRegister.barrio} onChange={(event)=>ReadInputRegister(event,'barrio')} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Barrio</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={userRegister.direccion} onChange={(event)=>ReadInputRegister(event,'direccion')} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Dirección</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                      <div className='form-floating inner-addon- left-addon-'>
                        <Select value={{'value':userRegister.tipo_identificacion,'label':userRegister.tipo_identificacion}} onChange={(event)=>ReadSelectRegister(event,'tipo_identificacion')} id='customSelect' options={DNI_TYPE} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Tipo de identificación" styles={selectStyles} isClearable={true}/>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={userRegister.identificacion} onChange={(event)=>ReadInputRegister(event,'identificacion')} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Identificación</label>
                      </div>
                  </div>
                  <div style={{'marginTop':'20px'}} className='form-floating inner-addon- left-addon-'>
                                  <div className='form-control' id='date-birth'>
                                      <DatePicker
                                      inputClass="custom-style-date-picker- white font_medium"
                                      placeholder="yyyy-mm-dd"
                                      format="YYYY-MM-DD"
                                      months={months}
                                      onChange={(event)=>changeDate(event,'fecha_nacimiento')}
                                      value={userRegister?.fecha_nacimiento}
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
                  <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mt-3'>
                    <div className='col-12 d-flex flex-column flex-sm-column flex-md-column flex-lg-column flex-xl-column flex-xxl-column justify-content-between align-items-center align-self-center mb-2'>
                      <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-3 lh-sm text-center fs-5- ff-monse-regular- fw-normal tx-light-black-'>¿Desea activar este usuario <br /> <span className='fs-6- white'>(Aqui podra proporcionar el rol de  <strong>"Paciente"</strong>)  a su usuario correspondiente</span></p>
                      <div className='d-flex flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={userRegister.es_paciente} onChange={(event)=>{readCheckBoxRegister(event,true,'es_paciente')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Activar</span>
                          </label>
                        </div>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={!userRegister.es_paciente} onChange={(event)=>{readCheckBoxRegister(event,false,'es_paciente')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Desactivar</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mt-3'>
                    <div className='col-12 d-flex flex-column flex-sm-column flex-md-column flex-lg-column flex-xl-column flex-xxl-column justify-content-between align-items-center align-self-center mb-2'>
                    <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-3 lh-sm text-center fs-5- ff-monse-regular- fw-normal tx-light-black-'>¿Desea activar este usuario <br /> <span className='fs-6- white'>(Aqui podra proporcionar el rol de  <strong>"Médico"</strong>)  a su usuario correspondiente</span></p>
                      <div className='d-flex flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={userRegister.es_doctor} onChange={(event)=>{readCheckBoxRegister(event,true,'es_doctor')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Activar</span>
                          </label>
                        </div>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={!userRegister.es_doctor} onChange={(event)=>{readCheckBoxRegister(event,false,'es_doctor')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Desactivar</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mt-3'>
                    <div className='col-12 d-flex flex-column flex-sm-column flex-md-column flex-lg-column flex-xl-column flex-xxl-column justify-content-between align-items-center align-self-center mb-2'>
                    <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-3 lh-sm text-center fs-5- ff-monse-regular- fw-normal tx-light-black-'>¿Desea activar este usuario <br /> <span className='fs-6- white'>(Aqui podra proporcionar el rol de  <strong>"Admin"</strong>)  a su usuario correspondiente</span></p>
                      <div className='d-flex flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={userRegister.es_admin} onChange={(event)=>{readCheckBoxRegister(event,true,'es_admin')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Activar</span>
                          </label>
                        </div>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={!userRegister.es_admin} onChange={(event)=>{readCheckBoxRegister(event,false,'es_admin')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Desactivar</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row gx-2 d-flex flex-row justify-content-end align-items-start align-self-start mt-4 mb-4'>
                    <div className='col-auto'>
                      <button onClick={RegisterData} className='btn rounded-pill ps-3 pe-3 ps-sm-3 pe-sm-3 ps-md-3 pe-md-3 ps-lg-5 pe-lg-5 ps-xl-5 pe-xl-5 ps-xxl-5 pe-xxl-5 h-45- d-flex flex-row justify-content-center align-items-center align-self-center btn-dark-purple- bs-1- btn-offcanvas' type="button">
                          <span className='lh-1 fs-5- ff-monse-regular- d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'>Guardar</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </Offcanvas>
    <Offcanvas className="offcanvasBody" show={show} onHide={()=>{
        handleClose();
        loadUsers();
        }}>
      <div className='offcanvas-header pb-4 padding-40-'>
          <h2 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>Editar usuario</h2>
          <IoIosClose style={{'cursor':'pointer'}} color='white' onClick={()=>{
        handleClose();
        loadUsers();
        }} size={30} className='fa icon-close'></IoIosClose>
        </div>
        <div className='offcanvas-body ps-4 pe-4'>
          <div className='container-fluid pt-0 pb-0 padding-40-'>
            <div className='row'>
              <div className='col-12'>
                <form id='internal-form' action='' className='position-relative'>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={selectUser !==null ? supportList[selectUser].primer_nombre:""} onChange={(event)=>ReadInputEdit(event,'primer_nombre',selectUser)} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Primer nombre</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={selectUser !==null ? supportList[selectUser].segundo_nombre:""} onChange={(event)=>ReadInputEdit(event,'segundo_nombre',selectUser)} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Segundo nombre</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={selectUser !==null ? supportList[selectUser].primer_apellido:""} onChange={(event)=>ReadInputEdit(event,'primer_apellido',selectUser)} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Primer apellido</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={selectUser !==null ? supportList[selectUser].segundo_apellido:""} onChange={(event)=>ReadInputEdit(event,'segundo_apellido',selectUser)} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Segundo apellido</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={selectUser !==null ? supportList[selectUser].ciudad_residencia:""} onChange={(event)=>ReadInputEdit(event,'ciudad_residencia',selectUser)} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Ciudad de residencia</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={selectUser !==null ? supportList[selectUser].numero_celular:""} onChange={(event)=>ReadInputEdit(event,'numero_celular',selectUser)} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Número de celular</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={selectUser !==null ? supportList[selectUser].email:""} onChange={(event)=>ReadInputEdit(event,'email',selectUser)} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Correo</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={selectUser !==null ? supportList[selectUser].barrio:""} onChange={(event)=>ReadInputEdit(event,'barrio',selectUser)} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Barrio</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={selectUser !==null ? supportList[selectUser].direccion:""} onChange={(event)=>ReadInputEdit(event,'direccion',selectUser)} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Dirección</label>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'marginBottom':'20px'}}>
                      <div className='form-floating inner-addon- left-addon-'>
                        <Select value={selectUser !== null ? {'value':supportList[selectUser].tipo_identificacion,'label':supportList[selectUser].tipo_identificacion}:{'value':"",label:""}} onChange={(event)=>ReadSelectEdit(event,'tipo_identificacion',selectUser)} id='customSelect' options={DNI_TYPE} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Tipo de identificación" styles={selectStyles} isClearable={true}/>
                      </div>
                  </div>
                  <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                    <div className='form-floating inner-addon- left-addon- '>
                        <input value={selectUser !==null ? supportList[selectUser].identificacion:""} onChange={(event)=>ReadInputEdit(event,'identificacion',selectUser)} type="text" className='form-control' id='identificationNumber' placeholder=""/>
                        <label className='lh-sm fs-5- ff-monse-regular- black font_medium ' style={{'color':'#000'}}>Identificación</label>
                      </div>
                  </div>
                  <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mt-3'>
                    <div className='col-12 d-flex flex-column flex-sm-column flex-md-column flex-lg-column flex-xl-column flex-xxl-column justify-content-between align-items-center align-self-center mb-2'>
                      <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-3 lh-sm text-center fs-5- ff-monse-regular- fw-normal tx-light-black-'>¿Desea activar este usuario <br /> <span className='fs-6- white'>(Aqui podra proporcionar el rol de  <strong>"Paciente"</strong>)  a su usuario correspondiente</span></p>
                      <div className='d-flex flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={selectUser !==null ? supportList[selectUser].es_paciente:true} onChange={(event)=>{readCheckBoxEdit(event,true,selectUser,'es_paciente')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Activar</span>
                          </label>
                        </div>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={selectUser !==null ? !supportList[selectUser].es_paciente: false} onChange={(event)=>{readCheckBoxEdit(event,false,selectUser,'es_paciente')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Desactivar</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mt-3'>
                    <div className='col-12 d-flex flex-column flex-sm-column flex-md-column flex-lg-column flex-xl-column flex-xxl-column justify-content-between align-items-center align-self-center mb-2'>
                    <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-3 lh-sm text-center fs-5- ff-monse-regular- fw-normal tx-light-black-'>¿Desea activar este usuario <br /> <span className='fs-6- white'>(Aqui podra proporcionar el rol de  <strong>"Médico"</strong>)  a su usuario correspondiente</span></p>
                      <div className='d-flex flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={selectUser !==null ? supportList[selectUser].es_doctor:true} onChange={(event)=>{readCheckBoxEdit(event,true,selectUser,'es_doctor')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Activar</span>
                          </label>
                        </div>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={selectUser !==null ? !supportList[selectUser].es_doctor: false} onChange={(event)=>{readCheckBoxEdit(event,false,selectUser,'es_doctor')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Desactivar</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mt-3'>
                    <div className='col-12 d-flex flex-column flex-sm-column flex-md-column flex-lg-column flex-xl-column flex-xxl-column justify-content-between align-items-center align-self-center mb-2'>
                    <p className='m-0 me-0 me-sm-3 me-md-3 me-lg-3 me-xl-3 me-xxl-3 mb-3 lh-sm text-center fs-5- ff-monse-regular- fw-normal tx-light-black-'>¿Desea activar este usuario <br /> <span className='fs-6- white'>(Aqui podra proporcionar el rol de  <strong>"Admin"</strong>)  a su usuario correspondiente</span></p>
                      <div className='d-flex flex-row justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-center align-self-center'>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={selectUser !==null ? supportList[selectUser].es_admin:true} onChange={(event)=>{readCheckBoxEdit(event,true,selectUser,'es_admin')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Activar</span>
                          </label>
                        </div>
                        <div className='checks-radios- me-1'>
                          <label>
                            <input checked={selectUser !==null ? !supportList[selectUser].es_admin: false} onChange={(event)=>{readCheckBoxEdit(event,false,selectUser,'es_admin')}}  type="checkbox" name="radio"/>
                            <span className='lh-sm fs-5- ff-monse-regular- tx-dark-purple-'>Desactivar</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row gx-2 d-flex flex-row justify-content-end align-items-start align-self-start mt-4 mb-4'>
                    <div className='col-auto'>
                      <button onClick={editUser} className='btn rounded-pill ps-3 pe-3 ps-sm-3 pe-sm-3 ps-md-3 pe-md-3 ps-lg-5 pe-lg-5 ps-xl-5 pe-xl-5 ps-xxl-5 pe-xxl-5 h-45- d-flex flex-row justify-content-center align-items-center align-self-center btn-dark-purple- bs-1- btn-offcanvas' type="button">
                          <span className='lh-1 fs-5- ff-monse-regular- d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'>Guardar</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </Offcanvas>
    </>
  )
}
