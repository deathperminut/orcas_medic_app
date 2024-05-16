import axios from "axios";
import { environment } from "../../../../environments/environments";




const crearTestDepresion=async(body,token)=>{
    const path  = environment.api + environment.crear_test_depresion;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const actualizarTestDepresion=async(body,token)=>{
    const path  = environment.api + environment.actualizar_test_depresion;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const obtenerTestDepresion=async(dni,token)=>{
    const path  = environment.api + environment.obtener_ultimo_test_depresion+dni;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.get(path,config);
}





export {crearTestDepresion,actualizarTestDepresion,obtenerTestDepresion}