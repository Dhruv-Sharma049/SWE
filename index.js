const mongoose = require("mongoose");
const express = require("express")
const app = express();
const path = require("path")
const User = require('./models/new_user'); // Adjust the path based on your project structure
const port = 3000;
app.use(express.json());
const cors  = require("cors")
app.use(cors());

// Replace the connection string with your MongoDB Atlas connection string
const uri =
  "mongodb+srv://dhruv75277:MFStUnrWpX9Os7D0@cluster0.9zldn1e.mongodb.net/?retryWrites=true&w=majority";

// Create a model based on the schema

app.post('/adduser', async (req,res) => {
    try{
         const newuser = new User({
           name: req.body.name,
           email: req.body.email,
           phone: req.body.phone,
         });
         const added_user = await newuser.save();
         return res.send({
           message: "done",
         });
    }
    catch(err)
    {
        console.log(err)
    }
})


async function connectToDatabase() {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");

    

    // Save the user to the database
    
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  } 
}

// Call the function to connect to the database and add a user
connectToDatabase();

app.listen(port, () => {
  console.log(`Server is running at http://localhost: 3000`);
});