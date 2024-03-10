import React from 'react'
import './ModulsPatient.css'
import {Navigate,Route,Routes} from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import HistoryDates from './HistoryDates/HistoryDates'
import NextDates from './NextDates/NextDates';
import PersonalData from './PersonalData/PersonalData';
import Porfolio from './Portfolio/Porfolio';
import Navbar from '../../Shared/Navbar/Navbar';
import $ from "jquery"
import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
require('jquery-mousewheel');

export default function ModulsPatient() {
  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar-, #content-').toggleClass('active');
    });
  });

  React.useEffect(()=>{
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
  return (
    <React.Fragment>
        <div className='ContainerDashboard'>
          <div className='wrapper-sidebar- overflow-x-hidden'>
            <SideBar></SideBar>
            <div id="content-" >
              <Navbar></Navbar>
              <Routes>
                <Route path='' element = {<Navigate to='PorfolioPatient'></Navigate>}></Route>
                <Route path='PorfolioPatient/*' element={<Porfolio/>}></Route>
                <Route path='HistoryDates/*' element={<HistoryDates/>}></Route>
                <Route path='PersonalData/*' element={<PersonalData/>}></Route>
              </Routes>
              {/* <Porfolio/> */}
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
