import { configuraciones } from "../AppConfig";

let server =  configuraciones.server;

export const environment = {
    //API
    api:server,

    ///ENDPOINTS
    //AUTH
    register:'users/',
    login:'users/token/',
    resetPassword:'password_reset/',
    completeReset:'password_reset/confirm/',
    userData:'users/',
    updateUser:'users/actualizar/'
}
