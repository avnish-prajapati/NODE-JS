import mongoose from "mongoose";

// Employee ka structure/schema
const employeeSchema = new mongoose.Schema({

  
  name: {
    type: String,
    required: true
  },

  
  phone: {
    type: String,
    required: true
  },

  department: {
    type: String,
    required: true
  },

 
  salary: {
    type: Number,
    required: true
  }

});


// Schema se Employee model bana rahe hain
const Employee = mongoose.model(
  "Employee",
  employeeSchema
);


// Model ko export kar rahe hain
export default Employee;