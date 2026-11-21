require('dotenv').config()
const express = require('express')
const app = require('./src/app')
const connectDb = require('./src/db/db');

async function startServer() {
    try{
        
        await connectDb()
    

    app.listen(process.env.PORT,(req,res)=>{
    console.log("server Running on 3000 port");
    
})
    
} catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }

}

startServer()
