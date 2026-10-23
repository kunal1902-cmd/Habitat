const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const Favorite = require("./models/favorite.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());


async function connectDB(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/habitat');
        console.log("Connected to MongoDB");    
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
connectDB();


// home page
app.get("/", async (req, res) => {
   let result = await Listing.find();
   
   res.render("index.ejs", { result });
});

app.listen(8080, () => {
    console.log("i am listening");
});

// detailed view of listing
app.get("/listings/:id", async (req, res) => {
    const {id}=req.params;
    let listing = await Listing.findById(id);
    res.render("show.ejs", { listing });
});

//  create new listing

app.get("/new", (req, res) => {
    res.render("new.ejs");
});

// save the new listing to the database
app.post("/listings/new", async (req, res) => {
    const {title,description,price,Location,Country,Image}=req.body;
    let newListing = new Listing({
        title: title,
        description: description,
        image: {
            url: Image
        },
        price: price,
        location: Location,
        country: Country,
        
    });
   
    
    await newListing.save();
    res.redirect("/");
});

//edit route
app.get("/listings/:id/edit", async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("edit.ejs", { listing });
});

//to save the edited version of listing into the database
app.put("/listings/:id/edit", async (req, res) => {
    const { id } = req.params;
    const { title, description, price, Location, Country, Image } = req.body;

    let listing = await Listing.findByIdAndUpdate(id, {
        title: title,
        description: description,
        image: {
            url: Image
        },
        price: price,
        location: Location,
        country: Country
    }, { new: true });

    res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id/delete", async (req, res) => {
const {id} = req.params;
await Listing.findByIdAndDelete(id);
res.redirect("/");
});

// about page
app.get("/about", (req, res) => {
    res.render("about.ejs");
});

// add a listing to favorites
app.post("/listings/:id/favorite", async (req, res) => {
    const { id } = req.params;
    let favorite = new Favorite({
        listing: id
    });
    await favorite.save();
    res.redirect(`/listings/${id}`);
});

app.get("/favorite", async (req, res) => {
    let favorites = await Favorite.find().populate("listing");
    console.log(favorites);
    res.render("favorite.ejs", { favorites });
});

//remove a listing from favorites
app.delete("/favorite/:id/remove", async (req, res) => {
    const { id } = req.params;
    await Favorite.findByIdAndDelete(id);
    res.redirect("/favorite");
});