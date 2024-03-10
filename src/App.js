import logo from './logo.svg';
import './App.css';
import React from 'react';

/* navigation */

import {Navigate,Route,Routes} from 'react-router-dom';

/* components */
import AuthRouter from './AuthRouter/AuthRouter';
import AuthPatient from './MedicApp/Patient/AuthPatient/AuthPatient';
import ModulsPatient from './MedicApp/Patient/ModulsPatient/ModulsPatient';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='' element = {<Navigate to='/Auth'></Navigate>}></Route>
        <Route path='/Auth/*' element={<AuthRouter></AuthRouter>}></Route>
        <Route path='/AuthPatient/*' element={<AuthPatient></AuthPatient>}></Route>
        <Route path='/ModulsPatient/*' element={<ModulsPatient></ModulsPatient>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
