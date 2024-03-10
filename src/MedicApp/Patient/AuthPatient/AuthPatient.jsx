import React from 'react'
import './AuthPatient.css'
import {Navigate,Route,Routes} from 'react-router-dom';
import DniValidation from './DniValidation/DniValidation';
import SmsValidation from './SmsValidation/SmsValidation';


export default function AuthPatient() {
  return (
    <React.Fragment>
        <div className='body'>
            <Routes>
                <Route path='' element = {<Navigate to='DniValidation'></Navigate>}></Route>
                <Route path='DniValidation/*' element={<DniValidation></DniValidation>}></Route>
                <Route path='SmsValidation/*' element={<SmsValidation></SmsValidation>}></Route>
            </Routes>
        </div>
    </React.Fragment>
  )
}
