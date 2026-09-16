import { User } from "../model/userModel.js";
import { registerService } from "../service/registerService.js";

export async function register(name:string,email:string,password:string){
    const user:User ={
        id : null,
        name: name,
        email: email,
        password: password
    };
    const response = await registerService(user);
    return response;
}