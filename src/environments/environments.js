import { configuraciones } from "../AppConfig";

let server =  configuraciones.server;
let server2 =  configuraciones.server2;

export const environment = {
    //API
    api:server,
    api2:server2,
    ///ENDPOINTS
    //AUTH
    register:'users/',
    login:'users/token/',
    resetPassword:'password_reset/',
    completeReset:'password_reset/confirm/',
    userData:'users/',
    updateUser:'users/actualizar/',
}
