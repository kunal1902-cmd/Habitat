const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


async function connectDB(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/habitat');
        console.log("Connected to MongoDB");    
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
connectDB();
const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Database:", mongoose.connection.name);
  console.log("Host:", mongoose.connection.host);
  console.log("Collection:", Listing.collection.name);
  console.log("Count:", await Listing.countDocuments({}));
  console.log("data was initialized");
};

initDB();