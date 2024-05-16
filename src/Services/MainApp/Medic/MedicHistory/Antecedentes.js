import axios from "axios";
import { environment } from "../../../../environments/environments";




const crearAntescedentes=async(body,token)=>{
    const path  = environment.api + environment.crear_antescedentes;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const actualizarAntescedentes=async(body,token)=>{
    const path  = environment.api + environment.actualizar_antescendentes;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const obtenerAntescedentes=async(dni,token)=>{
    const path  = environment.api + environment.obtener_ultimo_antescendentes+dni;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.get(path,config);
}





export {crearAntescedentes,actualizarAntescedentes,obtenerAntescedentes}