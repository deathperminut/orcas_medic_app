import axios from "axios";
import { environment } from "../../environments/environments";


const RegisterUser=async (body)=>{
    
    const path  = environment.api + environment.register;
    
    return await axios.post(path,body);
}


const loginUser= async (body)=>{
    const path =  environment.api + environment.login;
    return await axios.post(path,body);
}

const getUserData =  async (dni,token)=>{
    const path = environment.api + environment.userData+dni;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };
    return await axios.get(path,config)
}

const getUsers= async(token)=>{
    const path = environment.api + environment.getUsers;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };
    return await axios.get(path,config)
}

const resetPassword = async (body)=>{
    const path = environment.api2 + environment.resetPassword;
    return await axios.post(path,body);
}

const confirmResetPassword =  async (body)=>{
    const path =  environment.api2 +  environment.completeReset;
    return await axios.post(path,body);
}

const LoginPatient = async (dni)=>{
    const path =  environment.api + environment.LoginPatient;
    let body = {
        "identificacion":dni
    }
    return await axios.post(path,body)
}

const verifyCode = async (code)=>{
    const path =  environment.api + environment.verifyCode;
    let body = {
        "code":"e26558f1"
    }
    return await axios.post(path,body);
}

export {getUserData,RegisterUser,loginUser,resetPassword,confirmResetPassword,LoginPatient,verifyCode,getUsers}