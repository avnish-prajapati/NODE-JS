import express from "express";

import { connectdb } from "./config/db.js";

import employeeRoutes from "./routes/Employee_routes.js";


const app = express();



// Ye JSON data ko read karne ke liye hai
app.use(express.json());


connectdb();// connecct  to mongodb


// 
app.use("/employees", employeeRoutes);   // /employees ke baad jo bhi route hoga wo Employee_routes.js me handle hoga



//home api /

app.get("/", (req, res) => {

  res.send("Employee Management API Working");

});



app.listen(5000, () => { // Server Start

  console.log(
    "Server running on port 5000"
  );

});