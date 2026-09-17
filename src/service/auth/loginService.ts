import bcrypt from "bcrypt";
import { getUsers } from "../../repository/fileConnection.js";
import { tokenGeneration } from "../../utils/jwt.js";

export const loginService = async (email:string,password:string) => {
    const users =getUsers();
    const user = users.find((user) => user.email === email);
    if(!user){
        return {
            sucess: false,
            message: "Invalid email or password"
        };
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.password);

    if (!isPasswordCorrect){
        return {
            sucess: false,
            message: "Invalid email or password"
        };
    }

    const id= Number(user.id);
    const jwt_token = tokenGeneration(id);

    return {
        sucess:true,
        message: "login sucessfull",
        token: jwt_token,
        user: {
            email: email,
            role: user.role
        }
    };
};