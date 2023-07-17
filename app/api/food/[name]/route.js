import { NextResponse } from "next/server";
import mysql from "mysql2";
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'rootroot',
    port: 3306,
    database: 'test',
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
}).promise();
export async function GET(req, {params}) {
    const [results] = await pool.query("SELECT * FROM `food` WHERE `name` LIKE ?", ["%" + params.name + "%"]);
    const numResults = results.length;
    console.log(numResults);
    return NextResponse.json(results);
};