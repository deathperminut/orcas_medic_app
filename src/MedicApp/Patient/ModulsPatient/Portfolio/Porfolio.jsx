import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Porfolio.css';
import PersonalIcon from '../../../../components/SvgComponents/Patient/PersonalIcon/PersonalIcon';
import HistorialIcon from '../../../../components/SvgComponents/Patient/HistorialIcon/HistorialIcon';
import NextIcon from '../../../../components/SvgComponents/Patient/NextIcon/NextIcon';


export default function Porfolio() {
    let navigate=useNavigate()
  return (
    <div className='container-fluid'>
        <div className='row gx-4 d-flex flex-wrap flex-row justify-content-between align-items-start align-self-start align-self-xxl-center'>
            <div className='col-auto'>
                <h2 className='m-0 p-0 lh-sm fs-3- ff-monse-regular- fw-bold tx-dark-purple- font_medium' style={{'color':'white'}}>Módulos</h2>
            </div>
        </div>
        <div className='row row-cols-auto d-flex flex-wrap justify-content-center align-items-center align-self-center justify-content-sm-center align-items-sm-center align-self-sm-center justify-content-md-center align-items-md-center align-self-md-center justify-content-lg-start align-items-lg-center align-self-lg-center justify-content-xl-start align-items-xl-center align-self-xl-center justify-content-xxl-start align-items-xxl-center align-self-xxl-center g-4   d-md-flex d-lg-flex d-xl-flex d-xxl-flex mt-2'>
            <div className='col'>
                <div id="card-portfolio" onClick={()=>navigate('/ModulsPatient/HistoryDates/')} className='w-100 cursor-' >
                    <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                        <div style={{ 'display':'flex','position':'relative','left':'45px','top':'70px'}}>
                            <PersonalIcon width={'90px'} height={'100px'} ></PersonalIcon>
                        </div>
                        
                        <div className='card-img-overlay d-flex flex-column justify-content-center align-items-center align-self-center'>
                        <h2 className='fs-5- ff-monse-regular- fw-bold text-decoration-underline- position-absolute top-0 start-0 ms-3 mt-3 font_medium'>H.C</h2>
                        <p className='fs-4- ff-monse-regular- fw-bold lh-1 position-absolute bottom-0 start-50 translate-middle-x mb-5 text-center font_medium'>Historial de citas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div id="card-portfolio" onClick={()=>navigate('/ModulsPatient/PersonalData/')} className='w-100 cursor-' >
                <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                    <div style={{ 'display':'flex','position':'relative','left':'45px','top':'70px'}}>
                        <NextIcon width={'90px'} height={'100px'} ></NextIcon>
                    </div>
                    <div className='card-img-overlay d-flex flex-column justify-content-center align-items-center align-self-center'>
                    <h2 className='fs-5- ff-monse-regular- fw-bold text-decoration-underline- position-absolute top-0 start-0 ms-3 mt-3 font_medium'>D.P</h2>
                    <p className='fs-4- ff-monse-regular- fw-bold lh-1 position-absolute bottom-0 start-50 translate-middle-x mb-5 text-center font_medium'>Datos personales</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
  )
}
