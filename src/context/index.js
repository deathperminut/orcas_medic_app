import React from 'react'

const AppContext = React.createContext();


function ProviderContext(props){

    /* ESTADOS */
    
    let [userData,setUserData]  = React.useState(null);
    let [token,setToken] = React.useState(null);
    let [typeDate,setTypeDate] = React.useState(null);
    let [dni,setDni] = React.useState("");
    let [selectCompleteDate,setSelectCompleteDate] = React.useState(null);
    let [datesPatient,setDatesPatient] = React.useState([]);
    let [userHistoryDni,setUserHistoryDni] = React.useState(null);
    

    return (
        
        <AppContext.Provider value={{userHistoryDni,setUserHistoryDni,datesPatient,setDatesPatient,dni,setDni,token,setToken,userData,setUserData,typeDate,setTypeDate,selectCompleteDate,setSelectCompleteDate}}>
            {props.children}
        </AppContext.Provider>
        
    );
    
}

export {ProviderContext,AppContext};