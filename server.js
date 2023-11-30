const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

//MongoDB atlas Remote URL 
const mongoURI = 'mongodb+srv://amanrc2803shiv:Shivani2017@cluster0.jbmjhoo.mongodb.net/Dashboard';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const dataSchema = new mongoose.Schema({
  intensity: Number,
  sector: String,
  topics: String,
  end_year: Number,
  region: String,
  insight:String
  // ... other fields
});

// Create a model based on the schema
//const userModel = mongoose.model("testUsers", userSchema, 'coolcollection');
const DataModel = mongoose.model('Data', dataSchema, 'insight');

// Define a route to fetch all data records
app.get('/api/data', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
