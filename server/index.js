import express from 'express';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
import { postLink } from './controllers/link';
//connection of mongo DB

const connectionMongoDB = async () =>{
    
    const conn = await mongoose.connect(process.env.MONGO_URL);

    if(conn){
        console.log(`MongoDB connected ✔ `)
    }
}
connectionMongoDB();

 app.get("/health",(req,res)=>{
    res.json({
        success:true,
        message: `all is good `
    })
 })


 app.post("/link", postLink)


 const PORT =process.env.PORT || 5000 ;

app.listen (PORT ,()=>{
    console.log(`server is starting on PORT ${PORT}`)
}) 

