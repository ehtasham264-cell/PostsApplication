const dns = require('node:dns');


dns.setServers([
    '8.8.8.8',
    '8.8.4.4'
]);
const mongoose = require('mongoose')



async function connectDb() {
    await mongoose.connect(process.env.DATABASE_URL)

    console.log("Connect to DB");
    
    
}

module.exports = connectDb