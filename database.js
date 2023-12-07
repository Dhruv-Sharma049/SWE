const { MongoClient } = require("mongodb");

// Replace the connection string with your MongoDB Atlas connection string
const uri =
  "mongodb+srv://dhruv75277:MFStUnrWpX9Os7D0@cluster0.9zldn1e.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Now you can perform database operations using the "client" object

    // Example: List all databases
    // await listDatabases(client);
  } finally {
    // Close the connection when the application is done
    // await client.close();
    // console.log("Connection closed");
  }
}

// Function to list all databases
async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

// Call the function to connect to the database
module.exports = connectToDatabase();
