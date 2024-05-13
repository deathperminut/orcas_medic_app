import axios from "axios";
import { environment } from "../../../environments/environments";


const GetDatesMedic=async (identificacion,token)=>{
    
    const path  = environment.api + environment.doctor_dates+identificacion;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };


    return await axios.get(path,config);
}


const GetPdfPatient=async(identificacion,token)=>{
    const path  = environment.api + environment.pdf_patient;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };

    let body={
        'identificacion':identificacion
    }


    return await axios.post(path,body,config);
}




export {GetDatesMedic,GetPdfPatient}