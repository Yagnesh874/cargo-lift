const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/register", async (req, res) => {
  try {
    const data = req.body;
    const result = await userController.insertUser(data);

    if (result) {
      res.status(201).send("User inserted successfully");
    } else {
      res.status(400).send("User not inserted");
    }
  } catch (error) {
    console.error("Error inserting user:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/register",async(req,res)=>{
    let d = await userController.getAllUsers();
    res.send(d)
})

router.delete("/register", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send("User email is required.");
    }

    const result = await userController.deleteUser(email);

    if (result) {
      res.status(200).send("User deleted successfully.");
      
    } else {
      res.status(404).send("User not found.");
      
    }
  } catch (error) {
    console.error("Error deleting User:", error.message);
  
  }
});

router.put("/register", async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).send("User Password is required.");
    }

    const result = await userController.updateUser(password);

    if (result) {
      res.status(200).send("User's password update successfully.");
    } else {
      res.status(404).send("User not found or password not updated");
    }
  } catch (error) {
    console.error("Error updating User:", error.message);
  }
});

module.exports = router;
