import axios from "axios";
import { environment } from "../../../../environments/environments";




const crearTestGeneral=async(body,token)=>{
    const path  = environment.api + environment.crear_test_general;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const actualizarTestGeneral=async(body,token)=>{
    const path  = environment.api + environment.actualizar_test_general;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const obtenerTestGeneral=async(dni,token)=>{
    const path  = environment.api + environment.obtener_ultimo_test_general+dni;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.get(path,body,config);
}





export {crearTestGeneral,actualizarTestGeneral,obtenerTestGeneral}