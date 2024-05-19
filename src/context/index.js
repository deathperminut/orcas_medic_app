import React from 'react'

const AppContext = React.createContext();


function ProviderContext(props){

    /* ESTADOS */
    
    let [userData,setUserData]  = React.useState(null);
    let [token,setToken] = React.useState(null);
    
    let [dni,setDni] = React.useState("");
    let [selectCompleteDate,setSelectCompleteDate] = React.useState(null);
    let [datesPatient,setDatesPatient] = React.useState([]);
    let [userHistoryDni,setUserHistoryDni] = React.useState(null);
    
    /* MEDIC HISTORY */
    let [dniDateUser,setDniDateUser] = React.useState("");
    let [userDateData,setUserDateData] = React.useState(null);
    let [typeDate,setTypeDate] = React.useState(null);
    let [beforeDate,setBeforeDate] = React.useState(null);
    let [general,setGeneral] = React.useState(null);
    let [estres,setEstres] = React.useState(null);
    let [ansiedad,setAnsiedad] = React.useState(null);
    let [depresion,setDepresion] = React.useState(null); 
    let [flagHistory,setFlagHistory] = React.useState(false);
    let [fileActive,setFileActive] = React.useState(null);
    let [filerepose,setFilerepose] = React.useState(null);

    let [si_ansiedad,setSi_ansiedad] = React.useState('No');
    let [si_depresion,setSi_depresion] = React.useState('No');
    let [si_estres,setSi_estres] = React.useState('No');
    

    // PARA CONTROLAR EL AGENDAMIENTO DE CITAS
    let [attendedDate,setAttendedDate] = React.useState(null);
    let [attendedAgend,setAttenderAgend] = React.useState(null);

    // cita guardada para generar agendamientos
    let [citaAgend,setCitaAgend] = React.useState(null);

    /* FUNCTIONS */

    const cleanContext=()=>{
        setUserData(null);
        setToken(null);
        setTypeDate(null);
        setDni("");
        setSelectCompleteDate(null);
        setDatesPatient([]);
        setUserHistoryDni(null);
        setDniDateUser("");
        setUserDateData(null);
        setTypeDate(null);
        setBeforeDate(null);
        setGeneral(null);
        setEstres(null);
        setAnsiedad(null);
        setDepresion(null); 
        setFlagHistory(false);
        setFileActive(null);
        setFilerepose(null);
        
        setSi_ansiedad('No');
        setSi_depresion('No');
        setSi_estres('No');
        // PARA CONTROLAR EL AGENDAMIENTO DE CITAS
        setAttendedDate(null);
        setAttenderAgend(null);
        // cita guardada para generar agendamientos
        setCitaAgend(null);
    }
    

    return (
        
        <AppContext.Provider value={{citaAgend,setCitaAgend,attendedAgend,setAttenderAgend,attendedDate,setAttendedDate,si_estres,setSi_estres,si_depresion,setSi_depresion,si_ansiedad,setSi_ansiedad,filerepose,setFilerepose,fileActive,setFileActive,flagHistory,setFlagHistory,depresion,setDepresion,ansiedad,setAnsiedad,estres,setEstres,general,setGeneral,beforeDate,setBeforeDate,userDateData,setUserDateData,dniDateUser,setDniDateUser,cleanContext,userHistoryDni,setUserHistoryDni,datesPatient,setDatesPatient,dni,setDni,token,setToken,userData,setUserData,typeDate,setTypeDate,selectCompleteDate,setSelectCompleteDate}}>
            {props.children}
        </AppContext.Provider>
        
    );
    
}

export {ProviderContext,AppContext};