import pool from "../config/databaseConnection.js";
import { User } from "../model/userModel.js";



const addRegisterUser = async (user:User) => {
    const result = pool.query(`INSERT INTO users(name,email,role,password) 
        VALUES ($1,$2,$3,$4);`,
        [user.name,user.email,user.role,user.password]);

    return result;
};

export default addRegisterUser