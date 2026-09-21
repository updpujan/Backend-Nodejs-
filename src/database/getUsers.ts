import pool from "../config/databaseConnection.js";
import { User } from "../model/userModel.js";



const getUsers = async () => {
    const result = pool.query(`SELECT * FROM users`);

    return result;
};

export default getUsers