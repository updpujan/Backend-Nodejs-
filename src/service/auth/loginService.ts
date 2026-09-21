import bcrypt from "bcrypt";
import { getUsers } from "../../repository/fileConnection.js";
import { tokenGeneration } from "../../utils/jwt.js";
import checkUserEmail from "../../database/checkUserEmail.js";

export const loginService = async (email:string,password:string) => {
    const user = await checkUserEmail(email);

    if(!user.rows[0]){
        return {
            sucess: false,
            message: "Invalid email or password"
        };
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.rows[0].password);

    if (!isPasswordCorrect){
        return {
            sucess: false,
            message: "Invalid email or password"
        };
    }

    const id= Number(user.rows[0].id);
    const jwt_token = tokenGeneration(id);

    return {
        sucess:true,
        message: "login sucessfull",
        token: jwt_token,
        user: {
            email: email,
            role: user.rows[0].role
        }
    };
};