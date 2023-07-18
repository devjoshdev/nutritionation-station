import { NextResponse } from "next/server";
import mysql from "mysql2";
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
}).promise();
export async function GET(req, {params}) {
    const [results] = await pool.query("SELECT f.id, f.name, s.modifier, s.gram_weight, c.amount from food f INNER JOIN serving s ON s.food_id = f.id INNER JOIN calorie c ON c.food_id = f.id WHERE f.name LIKE ?", ["%" + params.name + "%"]);
    return NextResponse.json(results);
};