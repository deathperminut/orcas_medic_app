import axios from "axios";
import { environment } from "../../../environments/environments";

const updateUser =  async (user,token)=>{
    const path = environment.api + environment.updateUser;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };
    return await axios.put(path,user,config)
}

const GetMedics= async(token)=>{
    const path  = environment.api + environment.GetMedics;
    let config = {
        headers:{
            Authorization:'Token '+ token,
        },
    };
    return await axios.get(path,config)
}

const GetPatientUserDates =  async(dni,token)=>{
    const path  = environment.api + environment.patient_next_dates +dni;
    let config = {
        headers:{
            Authorization:'Token '+ token,
        },
    };
    return await axios.get(path,config)
}

const GetPatientCompleteDates =  async(dni,token)=>{
    const path  = environment.api + environment.patient_complete_dates +dni;
    let config = {
        headers:{
            Authorization:'Token '+ token,
        },
    };
    return await axios.get(path,config)
}


export {GetMedics,updateUser,GetPatientUserDates,GetPatientCompleteDates}
