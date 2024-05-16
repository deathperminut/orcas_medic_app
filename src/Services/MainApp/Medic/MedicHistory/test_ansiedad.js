import axios from "axios";
import { environment } from "../../../../environments/environments";




const crearTestAnsiedad=async(body,token)=>{
    const path  = environment.api + environment.crear_test_ansiedad;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const actualizarTestAnsiedad=async(body,token)=>{
    const path  = environment.api + environment.actualizar_test_ansiedad;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const obtenerTestAnsiedad=async(dni,token)=>{
    const path  = environment.api + environment.obtener_ultimo_test_ansiedad+dni;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.get(path,config);
}





export {crearTestAnsiedad,actualizarTestAnsiedad,obtenerTestAnsiedad}