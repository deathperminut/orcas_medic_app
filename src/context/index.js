import React from 'react'

const AppContext = React.createContext();


function ProviderContext(props){

    /* ESTADOS */
    
    let [userData,setUserData]  = React.useState(null);
    let [token,setToken] = React.useState(null);
    let [typeDate,setTypeDate] = React.useState(null);
    

    return (
        
        <AppContext.Provider value={{token,setToken,userData,setUserData,typeDate,setTypeDate}}>
            {props.children}
        </AppContext.Provider>
        
    );
    
}

export {ProviderContext,AppContext};