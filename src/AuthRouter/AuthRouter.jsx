import React from 'react'
import './AuthRouter.css'
// Router para la autenticaciòn
import {Navigate,Route,Routes} from 'react-router-dom';
// Components
import Login from './Login/Login';
import Register from './Register/Register';
import Recovery from './Recovery/Recovery';

export default function AuthRouter() {
    return (
        <React.Fragment>
            <div className='body'>
                <Routes>
                    <Route path='' element = {<Navigate to='Login'></Navigate>}></Route>
                    <Route path='Login/*' element={<Login></Login>}></Route>
                    <Route path='Register/*' element={<Register></Register>}></Route>
                    <Route path='Recovery/*' element={<Recovery></Recovery>}></Route>
                </Routes>
            </div>
            
        </React.Fragment>
    ) 
}
