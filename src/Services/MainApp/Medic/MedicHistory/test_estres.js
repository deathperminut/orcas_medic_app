import axios from "axios";
import { environment } from "../../../../environments/environments";




const crearTestEstres=async(body,token)=>{
    const path  = environment.api + environment.crear_test_estres;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const actualizarTestEstres=async(body,token)=>{
    const path  = environment.api + environment.actualizar_test_estres;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.post(path,body,config);
}

const obtenerTestEstres=async(dni,token)=>{
    const path  = environment.api + environment.obtener_ultimo_test_estres+dni;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };



    return await axios.get(path,body,config);
}





export {crearTestEstres,actualizarTestEstres,obtenerTestEstres}