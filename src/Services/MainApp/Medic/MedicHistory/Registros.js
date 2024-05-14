import axios from "axios";
import { environment } from "../../../../environments/environments";




const crearRegistros=async(body,token)=>{
    const path  = environment.api + environment.crear_registros;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const actualizarRegistros=async(body,token)=>{
    const path  = environment.api + environment.actualizar_registros;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const obtenerRegistros=async(dni,token)=>{
    const path  = environment.api + environment.obtener_ultimo_registro+dni;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.get(path,body,config);
}





export {crearRegistros,actualizarRegistros,obtenerRegistros}