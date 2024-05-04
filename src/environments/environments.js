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
    LoginPatient:'gestion-usuario/login-paciente/',
    verifyCode:'gestion-usuario/validacion-login-paciente/',
    getUsers:'users/',
    registerUser:'users/register/',
    // DOCTOR DATES
    doctor_dates:'agendamiento/retornar-proximas-citas-doctor/',

    // PATIENT DATES
    patient_next_dates:'agendamiento/retornar-proximas-citas-paciente/',
    patient_complete_dates:'historia-clinica/retornar-cita-paciente/',


}
