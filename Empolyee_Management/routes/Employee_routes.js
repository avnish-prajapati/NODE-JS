import express from "express";

import {
  addEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee
} from "../controllers/Employee_controller.js";


const router = express.Router();



router.post("/", addEmployee);



router.get("/", getEmployees);


router.put("/:id", updateEmployee);



router.delete("/:id", deleteEmployee);


export default router;