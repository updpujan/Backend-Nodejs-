import pool from "./config/databaseConnection.js";
//import "./jobs/reminder.js";
import app from "./app.js";


const PORT = 3000;
async function serverStart(){
    try{
        await pool.query('SELECT 1');
        console.log("Database Connected Sucessfully");
        app.listen(PORT,()=>{
            console.log(`Server running at port ${PORT}`);
        });

    }catch(err){
        console.log("Database Connection Failed");
        process.exit(1);

    }
}
serverStart();