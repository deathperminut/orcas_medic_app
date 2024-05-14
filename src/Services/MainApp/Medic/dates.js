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

/* INDICADORES */
const GetGeneralIndicators=async(body,token)=>{
    const path  = environment.api + environment.test_general;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const GetAnsiedadIndicators=async(body,token)=>{
    const path  = environment.api + environment.test_ansiedad;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const GetDepresionIndicators=async(body,token)=>{
    const path  = environment.api + environment.test_depresion;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const GetEstresIndicators=async(body,token)=>{
    const path  = environment.api + environment.test_estres;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}





export {GetDatesMedic,GetPdfPatient,GetGeneralIndicators,GetAnsiedadIndicators,GetDepresionIndicators,GetEstresIndicators}