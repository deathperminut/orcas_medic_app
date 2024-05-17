import axios from "axios";
import { environment } from "../../../../environments/environments";




const crearCita=async(body,token)=>{
    const path  = environment.api + environment.crear_cita;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const actualizarCita=async(body,token)=>{
    const path  = environment.api + environment.actualizar_cita;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.put(path,body,config);
}





export {crearCita,actualizarCita}