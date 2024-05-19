import axios from "axios";
import { environment } from "../../../../environments/environments";




const crearAgendamiento=async(body,token)=>{
    const path  = environment.api + environment.crear_agendamiento;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const actualizarAgendamiento=async(body,token)=>{
    const path  = environment.api + environment.actualizarAgendamiento;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.put(path,body,config);
}





export {crearAgendamiento,actualizarAgendamiento}