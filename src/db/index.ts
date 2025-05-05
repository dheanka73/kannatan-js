import "dotenv/config";
import {drizzle} from "drizzle-orm/mysql2";
import {createPool} from "mysql2/promise";


const poolConnection = createPool({
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    database: process.env.DB_NAME!,
    password: process.env.DB_PASS!
});

export const db = drizzle({client: poolConnection});