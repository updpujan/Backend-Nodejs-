import bcrypt from "bcrypt";
import { User } from "../../model/userModel.js";
import { getUsers,addUser } from "../../repository/fileConnection.js";

export const registerService = async (user:User)=>{
    const usersCount = getUsers().length;
    user.id = usersCount + 1;
    const haspasword = await bcrypt.hash(user.password,10);
    user.password = haspasword;
    addUser(user);
    return {sucess:true,
        message: "User Created Sucessfully"
    };
};