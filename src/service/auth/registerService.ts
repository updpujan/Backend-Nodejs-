import bcrypt from "bcrypt";
import { User } from "../../model/userModel.js";
import addRegisterUser from "../../database/userRegistration.js";

export const registerService = async (user:User)=>{
    const haspasword = await bcrypt.hash(user.password,10);
    user.password = haspasword;
    const response = await addRegisterUser(user);
    if(response.rowCount !=0){
        return {sucess:true,
        message: "User Created Sucessfully",
        };
    }
    else{
        return {sucess:false,
        message: "Failed to create user",
        };
    }

    
};