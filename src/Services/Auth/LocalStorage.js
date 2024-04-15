function GetUserData() {
    let Data= localStorage.getItem('OrcasUserData');
    if(Data!==null && Data!==undefined && Data!==""){
        Data=JSON.parse(Data);
        console.log(Data);
    }else{
        Data={identificacion:"",password:""};
    }
    if (Data==null){
        return {identificacion:"",password:""}
    }
    return Data    
}



function SaveUserData(user){
user=JSON.stringify(user);
localStorage.setItem('OrcasUserData',user); 
}


function cleanUserData(){
let user=JSON.stringify({identificacion:"",password:""});
localStorage.setItem('OrcasUserData',user); 
}

export {GetUserData,SaveUserData,cleanUserData}