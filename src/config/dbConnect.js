import mongoose from "mongoose";

async function connectDB(){
    mongoose.connect('mongodb+srv://santanasamuel08:{password}@cluster0.r29uumt.mongodb.net/?retryWrites=true&w=majority');
    return mongoose.connection;
}

export default connectDB;
