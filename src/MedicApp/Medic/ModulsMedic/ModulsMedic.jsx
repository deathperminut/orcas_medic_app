import React from 'react'
import './ModulsMedic.css'
import {Navigate,Route,Routes} from 'react-router-dom';
import Sidebar_medic from './Sidebar_medic/Sidebar_medic';
import Validation from './Date/Validation/Validation';
import Date_Medic from './Date/Date';
import Portafolio_medic from './Portafolio_medic/Portafolio_medic';
import MedicHistory from './Date/MedicHistory/MedicHistory';
import HistoryDatesPatients from './HistoryDatesPatients/HistoryDatesPatients';
import FinishProcess from './Date/FinishProcess/FinishProcess';
import Navbar from '../../Shared/Navbar/Navbar';
import MedicData from './MedicData/MedicData';
import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import Stadistics from './Stadistics/Stadistics';
import Admin from './Admin/Admin'

require('jquery-mousewheel');

export default function ModulsMedic() {
  return (
    <React.Fragment>
        <div className='ContainerDashboard'>
          <div className='wrapper-sidebar- overflow-x-hidden'>
            <Sidebar_medic></Sidebar_medic>
            <div id="content-" >
              <Navbar></Navbar>
              <Routes>
                <Route path='' element = {<Navigate to='PorfolioMedic'></Navigate>}></Route>
                <Route path='PorfolioMedic/*' element={<Portafolio_medic/>}></Route>
                <Route path='Date_Medic/*' element={<Date_Medic/>}></Route>
                <Route path='MedicData/*' element={<MedicData/>}></Route>
                <Route path='Stadistics/*' element={<Stadistics/>}></Route>
                <Route path='Admin/*' element={<Admin/>}></Route>
                <Route path='HistoryDatesPatients/*' element={<HistoryDatesPatients/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
