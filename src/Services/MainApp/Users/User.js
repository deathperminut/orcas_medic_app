import axios from "axios";
import { environment } from "../../../environments/environments";

const updateUser =  async (user,token)=>{
    const path = environment.api + environment.updateUser;
    let config = {
        headers: {
            Authorization: 'Token ' + token,
        },
    };
    return await axios.put(path,user,config)
}


export {updateUser}
