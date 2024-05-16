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

    /* FUNCTIONS */

    const cleanContext=()=>{
        setUserData(null);
        setToken(null);
        setTypeDate(null);
        setDni("");
        setSelectCompleteDate(null);
        setDatesPatient([]);
        setUserHistoryDni(null);
    }
    

    return (
        
        <AppContext.Provider value={{depresion,setDepresion,ansiedad,setAnsiedad,estres,setEstres,general,setGeneral,beforeDate,setBeforeDate,userDateData,setUserDateData,dniDateUser,setDniDateUser,cleanContext,userHistoryDni,setUserHistoryDni,datesPatient,setDatesPatient,dni,setDni,token,setToken,userData,setUserData,typeDate,setTypeDate,selectCompleteDate,setSelectCompleteDate}}>
            {props.children}
        </AppContext.Provider>
        
    );
    
}

export {ProviderContext,AppContext};