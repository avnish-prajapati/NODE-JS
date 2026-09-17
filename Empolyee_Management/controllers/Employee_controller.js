import Employee from "../models/Employee_model.js";



export const addEmployee = async (req, res) => {

  try {

    const employee = await Employee.create(req.body);

    res.status(201).json({

      message: "Employee added successfully",

      employee: employee

    });

  } catch (error) {

    res.status(500).json({

      message: "Employee add failed",

      error: error.message

    });

  }

};




export const getEmployees = async (req, res) => {

  try {

    const employees = await Employee.find();

    res.status(200).json({

      message: "Employees fetched successfully",

      employees: employees

    });

  } catch (error) {

    res.status(500).json({

      message: "Employee fetch failed",

      error: error.message

    });

  }

};



export const updateEmployee = async (req, res) => {

  try {

    const employee = await Employee.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new: true
      }

    );

    if (!employee) {

      return res.status(404).json({

        message: "Employee not found"

      });

    }

    res.status(200).json({

      message: "Employee updated successfully",

      employee: employee

    });

  } catch (error) {

    res.status(500).json({

      message: "Employee update failed",

      error: error.message

    });

  }

};



export const deleteEmployee = async (req, res) => {

  try {

    const employee = await Employee.findByIdAndDelete(

      req.params.id

    );

    if (!employee) {

      return res.status(404).json({

        message: "Employee not found"

      });

    }

    res.status(200).json({

      message: "Employee deleted successfully"

    });

  } catch (error) {

    res.status(500).json({

      message: "Employee delete failed",

      error: error.message

    });

  }

};