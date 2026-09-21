import pool from "../config/databaseConnection.js";



const getUserData = async (id:number) => {
    const result = pool.query(`SELECT * FROM users WHERE id = $1`,[id]);

    return result;
};

export default getUserData