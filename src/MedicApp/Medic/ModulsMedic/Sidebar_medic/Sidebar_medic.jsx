import './Sidebar_medic.css'
import LogoMedical from '../../../../Assets/img/O60PtOwA_400x400__1_-removebg-preview.png';
import React from 'react'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import $ from "jquery"
import Swal from 'sweetalert2';
import { AppContext } from '../../../../context';

export default function Sidebar_medic() {

  let navigate = useNavigate()

  /* APP CONTEXT */
  let {userData,setUserData,setToken,token,cleanContext}  = React.useContext(AppContext);

  /* USE CONTEXT */
  

  React.useEffect(()=>{
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar-, #content-').toggleClass('active');
      });
    });
    $('#sidebar-').mCustomScrollbar({
      theme: "minimal",
      mouseWheel:{
        scrollAmount: 60,
        normalizeDelta: true
      },
      scrollInertia:100,
      mouseWheelPixels: 100
    });
  },[])

  React.useEffect(()=>{
    if(!token){
      navigate('/Auth/Login')
    }
  },[])


  const cleanContext2=()=>{
    cleanContext();
    Swal.fire({
      icon: 'success',
      title: 'Sesión cerrada con éxito.'
    })
  }

  return (
    <React.Fragment>
      <nav id="sidebar-">
        <div className='d-flex flex-column justify-content-between min-h-'>
          <div className='w-100'>
            <div className='sidebar-header- d-flex flex-row justify-content-start align-items-center align-self-center'>
              <div className='w-100 d-flex flex-row justify-content-start align-items-center align-self-center wrapper-logo-medical-big-'>
                <div className='p-2 me-3 rounded-3 d-flex flex-row justify-content-center align-items-center align-self-center wrapper-logo-sidebar- big-'>
                  <img className='logo-medical-sidebar-' src={LogoMedical} alt="" />
                </div>
                <p className='m-0 fs-4- ff-monse-regular- fw-bold lh-sm font_medium'>
                  <span>Orcas</span>
                  <br /> 
                  <span>Analitica</span>
                </p>
              </div>
              <div className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center wrapper-logo-medical-small-'>
                <div className='p-2 rounded-3 d-flex flex-row justify-content-center align-items-center align-self-center wrapper-logo-sidebar- small-'>
                  <img className='logo-medical-sidebar-' src={LogoMedical} alt="" />
                </div>
              </div>
            </div>
            <ul className='nav d-flex flex-column' style={{'backgroundColor':'#272727'}}>
              <li className='nav-item' style={{'backgroundColor':'#272727'}}>
                <NavLink  className='nav-link d-flex flex-row justify-content-start align-items-center align-self-center position-relative fs-5- ff-monse-regular-' style={({ isActive }) => ({ color: isActive ? '#272727' : '#4e4d4d', background: isActive ? '#4e4d4d' : '#272727', })} to='/ModulsMedic'>
                  <p className='m-0 align-items-center align-self-center fs-5- ff-monse-regular- fw-bold abbreviated- tx-decoration-'>P.</p>
                  <p className='m-0 ms-4 align-items-center align-self-center fs-5- ff-monse-regular- unabbreviated- lh-sm'>Portafolio</p></NavLink>
              </li>
              <li className='nav-item' style={{'backgroundColor':'#272727'}}>
                <NavLink  className='nav-link d-flex flex-row justify-content-start align-items-center align-self-center position-relative fs-5- ff-monse-regular-' style={({ isActive }) => ({ color: isActive ? '#272727' : '#4e4d4d', background: isActive ? '#4e4d4d' : '#272727', })} to='/ModulsMedic/Date_Medic'>
                  <p className='m-0 align-items-center align-self-center fs-5- ff-monse-regular- fw-bold abbreviated- tx-decoration-'>A.C</p>
                  <p className='m-0 ms-4 align-items-center align-self-center fs-5- ff-monse-regular- unabbreviated- lh-sm'>Atender cita</p></NavLink>
              </li>
              <li className='nav-item' style={{'backgroundColor':'#272727'}}>
                <NavLink  className='nav-link d-flex flex-row justify-content-start align-items-center align-self-center position-relative fs-5- ff-monse-regular-' style={({ isActive }) => ({ color: isActive ? '#272727' : '#4e4d4d', background: isActive ? '#4e4d4d' : '#272727', })} to='/ModulsMedic/HistoryDatesPatients'>
                  <p className='m-0 align-items-center align-self-center fs-5- ff-monse-regular- fw-bold abbreviated- tx-decoration-'>H.C</p>
                  <p className='m-0 ms-4 align-items-center align-self-center fs-5- ff-monse-regular- unabbreviated- lh-sm'>Historia clínica</p></NavLink>
              </li>
              <li className='nav-item' style={{'backgroundColor':'#272727'}}>
                <NavLink  className='nav-link d-flex flex-row justify-content-start align-items-center align-self-center position-relative fs-5- ff-monse-regular-' style={({ isActive }) => ({ color: isActive ? '#272727' : '#4e4d4d', background: isActive ? '#4e4d4d' : '#272727', })} to='/ModulsMedic/MedicData'>
                  <p className='m-0 align-items-center align-self-center fs-5- ff-monse-regular- fw-bold abbreviated- tx-decoration-'>D.M</p>
                  <p className='m-0 ms-4 align-items-center align-self-center fs-5- ff-monse-regular- unabbreviated- lh-sm'>Datos médico</p></NavLink>
              </li>
              <li className='nav-item' style={{'backgroundColor':'#272727'}}>
                <NavLink  className='nav-link d-flex flex-row justify-content-start align-items-center align-self-center position-relative fs-5- ff-monse-regular-' style={({ isActive }) => ({ color: isActive ? '#272727' : '#4e4d4d', background: isActive ? '#4e4d4d' : '#272727', })} to='/ModulsMedic/Stadistics'>
                  <p className='m-0 align-items-center align-self-center fs-5- ff-monse-regular- fw-bold abbreviated- tx-decoration-'>I</p>
                  <p className='m-0 ms-4 align-items-center align-self-center fs-5- ff-monse-regular- unabbreviated- lh-sm'>Indicadores</p></NavLink>
              </li>
              {userData?.es_admin || userData?.es_superusuario ? 
              <li className='nav-item' style={{'backgroundColor':'#272727'}}>
                <NavLink  className='nav-link d-flex flex-row justify-content-start align-items-center align-self-center position-relative fs-5- ff-monse-regular-' style={({ isActive }) => ({ color: isActive ? '#272727' : '#4e4d4d', background: isActive ? '#4e4d4d' : '#272727', })} to='/ModulsMedic/Admin'>
                  <p className='m-0 align-items-center align-self-center fs-5- ff-monse-regular- fw-bold abbreviated- tx-decoration-'>Ad.</p>
                  <p className='m-0 ms-4 align-items-center align-self-center fs-5- ff-monse-regular- unabbreviated- lh-sm'>Administración</p></NavLink>
              </li>
              :
              <></>
              }
              <li onClick={cleanContext2} className='nav-item' style={{'backgroundColor':'#272727'}}>
                  <NavLink  className='nav-link d-flex flex-row justify-content-start align-items-center align-self-center position-relative fs-5- ff-monse-regular-' style={({ isActive }) => ({ color: isActive ? '#272727' : '#4e4d4d', background: isActive ? '#4e4d4d' : '#272727', })} to='/Auth/Login'>
                    <p className='m-0 align-items-center align-self-center fs-5- ff-monse-regular- fw-bold abbreviated- tx-decoration-'>
                      <CiLogout></CiLogout>
                    </p>
                    <p className='m-0 ms-4 align-items-center align-self-center fs-5- ff-monse-regular- unabbreviated- lh-sm'>Cerrar sesión</p>
                  </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}
