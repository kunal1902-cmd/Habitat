const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true, 
    },
   
    image: {
        filename: {
        type: String,
        default: "Random image"
        },
     url: {
        type: String,
        default: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
      },
    },

    
    price:{
        type: Number,
        required: true, 
    },
    location:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;