const express = require("express")
const employee = require("./models/Employee")
const router = express.Router()

// Get list of all Employees
router.get("/employees", async(req, res) => {
    const employees = await employee.find()

    try{
    res.status(200).send(employees);
    } catch(err) {
        res.status(500).send(err);
        console.log("Error: " + err);
    }
})

// Add Employee to Database
router.post("/employees", async(req, res) => {
    var newEmployee = new employee(req.body);

    try{
        await newEmployee.save();
        res.status(201).send("Successfully Added Employee Data!");
    } catch(err){
        res.status(500).send(err);
        console.log("Error: " + err);
    }
})

// Find a specific employee by ID
router.get("/employees/:id", async(req, res) => {
    const findEmployee = await employee.find({id: {$eq: req.params.id}});

    try{
        res.status(200).send(findEmployee);
    } catch(err){
        res.status(500).send(err);
        console.log("Error: " + err);
    }
})

// Find employee by ID and Update record
router.put("/employees/:id", async(req, res) => {
    try {
        const updateEmployee = await employee.findOneAndUpdate({id: {$eq: req.params.id}}, req.body);
        await updateEmployee.save();
        res.status(200).send("Updated successfully!");
      } catch (err) {
        res.status(500).send(err);
        console.log("Error: " + err);
      }
})

// Find employee by ID and Delete record
router.delete("/employees/:id", async(req, res) => {
    try {
        const delEmployee = await employee.findOneAndDelete({id: {$eq: req.params.id}})
    
        if (!delEmployee) res.status(404).send("No item found")
        res.status(200).send("Deleted successfully!")
      } catch (err) {
        res.status(500).send(err)
      }
})


module.exports = router