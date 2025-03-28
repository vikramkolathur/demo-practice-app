import axios from "axios";
import UrlConstants from "../constants/UrlConstants";

function UserDataApi() 
{
    const baseUrl = UrlConstants();

    const postUserData =async (data:unknown)=>{
        try {
            const userData = await axios.post(baseUrl+baseUrl.userList,data);
            console.log(userData.data);
            return userData.data;
        } catch (error) {
            console.log(error);
        }
     }


return {postUserData};
}

export default UserDataApi;