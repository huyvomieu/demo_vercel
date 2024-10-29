const mongoose = require('mongoose');
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connect successfully")
    } catch (error) {
        console.log("connect fail" + error)
    }
}

module.exports = { connectDB }