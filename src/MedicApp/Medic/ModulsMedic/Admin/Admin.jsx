import React,{useEffect} from 'react'
import './Admin.css'
import { Navigate, Route, Routes } from "react-router-dom"
import $ from 'jquery';
import TableUser from './TableUsers/TableUser';
import AdminPanel from './AdminPanel/AdminPanel';

export default function Admin() {
    useEffect(() => {
        const intervalId = setInterval(() => {
          const date = new Date();
          const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
          const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
          const dayOfWeek = daysOfWeek[date.getDay()];
          const dayOfMonth = date.getDate();
          const monthOfYear = monthsOfYear[date.getMonth()];
          const year = date.getFullYear();
          const hour = date.getHours().toString().padStart(2, '0');
          const minute = date.getMinutes().toString().padStart(2, '0');
          const second = date.getSeconds().toString().padStart(2, '0');
          const time = hour + ":" + minute + ":" + second;
    
          $('.dayOfWeek').text(dayOfWeek);
          $('.dayOfMonth').text(dayOfMonth);
          $('.monthOfYear').text(monthOfYear);
          $('.year').text(year);
          $('.hour').text(time);
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

      

    return (
        <div className='container-fluid overflow-x-hidden'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='m-0 p-0 lh-sm fs-3- ff-monse-regular- fw-bold tx-dark-purple- white font_medium'>Panel de administración de usuarios</h2>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-12'>
          <div className='white font_medium d-flex flex-row justify-content-start align-items-center align-self-center'>
            &nbsp;
            <p className='m-0 p-0 lh-1 fs-5- ff-monse-regular- tx-black- dayOfWeek'></p>
            &nbsp;
            <p className='m-0 p-0 lh-1 fs-5- ff-monse-regular- tx-black- dayOfMonth'></p>
            &nbsp;
            <p className='m-0 p-0 lh-1 fs-5- ff-monse-regular- tx-black- monthOfYear'></p>
            &nbsp;
            <p className='m-0 p-0 lh-1 fs-5- ff-monse-regular- tx-black- year'></p>
            &nbsp;
            <p className='m-0 p-0 lh-1 fs-5- ff-monse-regular- tx-black-'>/</p>
            &nbsp;
            <p className='m-0 p-0 lh-1 fs-5- ff-monse-regular- tx-black- hour'></p>
          </div>
        </div>
      </div>

      <div className='row g-4 mt-3'>
        {/* <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4'>
            <Routes>
              <Route path="" element={ <Navigate to="userGestion" /> }/>
              <Route path="userGestion/*" element={<AdminPanel/>} />
            </Routes>
        </div> */}
        <Routes>
              <Route path="" element={ <Navigate to="userGestion" /> }/>
              <Route path="userGestion/*" element={<AdminPanel/>} />
        </Routes>
      </div>
    </div>
    )
}
