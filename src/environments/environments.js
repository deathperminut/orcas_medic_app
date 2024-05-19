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
    GetMedics:'users/es_doctor',

    // PATIENT DATES
    patient_next_dates:'agendamiento/retornar-proximas-citas-paciente/',
    patient_complete_dates:'historia-clinica/retornar-cita-paciente/',
    pdf_patient:'historia-clinica/consultar-historia-clinica/',

    // INDICADORES
    'test_general':'indicadores/retornar-test-general/',
    'test_ansiedad':'indicadores/retornar-test-ansiedad/',
    'test_depresion':'indicadores/retornar-test-depresion/',
    'test_estres':'indicadores/retornar-test-estres/',
    
    /*******************/
    // HISTORIA CLINICA
    /******************/

    // AGENDAMIENTO
    
    'crear_agendamiento':'agendamiento/crear-agendamiento/',
    'actualizarAgendamiento':'agendamiento/actualizar/',

    // CITAS

    'crear_cita':'historia-clinica/crear-cita/',
    'actualizar_cita':'historia-clinica/actualizar-cita/',


    // ANTESCEDENTES
    
    'crear_antescedentes':'historia-clinica/crear-antecedente/',
    'actualizar_antescendentes':'historia-clinica/actualizar-antecedente/',
    'obtener_ultimo_antescendentes':'historia-clinica/retornar-ultimo-antecedente/',
    
    // REGISTROS ESPECIFICOS

    'crear_registros':'historia-clinica/crear-registros-especificos/',
    'actualizar_registros':'historia-clinica/actualizar-registros-especificos/',
    'obtener_ultimo_registro':'historia-clinica/retornar-ultimo-registros-especificos/',

    // TEST GENERAL

    'crear_test_general':'historia-clinica/crear-test-general/',
    'actualizar_test_general':'historia-clinica/actualizar-test-general/',
    'obtener_ultimo_test_general':'historia-clinica/retornar-ultimo-test-general/',

    // TEST ANSIEDAD

    'crear_test_ansiedad':'historia-clinica/crear-test-ansiedad/',
    'actualizar_test_ansiedad':'historia-clinica/actualizar-test-ansiedad/',
    'obtener_ultimo_test_ansiedad':'historia-clinica/retornar-ultimo-test-ansiedad/',

    // TEST DEPRESIÓN

    'crear_test_depresion':'historia-clinica/crear-test-depresion/',
    'actualizar_test_depresion':'historia-clinica/actualizar-test-depresion/',
    'obtener_ultimo_test_depresion':'historia-clinica/retornar-ultimo-test-depresion/',

    // TEST ESTRES

    'crear_test_estres':'historia-clinica/crear-test-estres/',
    'actualizar_test_estres':'historia-clinica/actualizar-test-estres/',
    'obtener_ultimo_test_estres':'historia-clinica/retornar-ultimo-test-estres/'



    

}
