const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    }
});


// this index ensures that each listing can only be favorited once
favoriteSchema.index({ listing: 1 }, { unique: true });

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite;