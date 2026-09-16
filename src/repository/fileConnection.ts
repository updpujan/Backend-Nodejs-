import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { User } from "../model/userModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, "../../data");
const filepath = path.join(dataDir, "user.json");

// Create data directory if it doesn't exist
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

export const getUsers = ():User[]=>{
    
    if(!fs.existsSync(filepath)){
        fs.writeFileSync(filepath,"[]","utf-8");
        return [];
    }
    const fileData = fs.readFileSync(filepath,"utf-8");
    if(!fileData.trim()){
        return [];
    }
    return JSON.parse(fileData) as User[];
};

export const addUser = (user:User) => {
    const users = getUsers();
    users.push(user);
    fs.writeFileSync(filepath,JSON.stringify(users,null,2),"utf-8");
};
