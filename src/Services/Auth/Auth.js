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

const resetPassword = async (body)=>{
    const path = environment.api + environment.resetPassword;
    return await axios.post(path,body);
}

const confirmResetPassword =  async (body)=>{
    const path =  environment.api +  environment.completeReset;
    return await axios.post(path,body);
}

export {RegisterUser,loginUser,resetPassword,confirmResetPassword}