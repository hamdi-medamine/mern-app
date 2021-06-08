const express=require ('express');
const app=express();
const cors = require('cors');

// connection db
require("dotenv").config({ path: "./config/.env" });
const connectDB= require('./config/dbConnect');
connectDB();

app.use(cors());
app.use(express.json())

app.use('/', require('./routes/usersRoutes'));


const port=process.env.PORT 
 app.listen(port, (err, msg) =>{
           if (err) throw err;
           console.log(`server is running on port ${port}`);
 });