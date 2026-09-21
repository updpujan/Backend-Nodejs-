import pool from "../config/databaseConnection.js";


const checkUserEmail = async (email:string) => {
    const result = pool.query(`SELECT * FROM users WHERE email = $1`,[email]);
    return result;
};

export default checkUserEmail