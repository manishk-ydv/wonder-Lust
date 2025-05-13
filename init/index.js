const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const { init } = require("../models/listing");

const MONGO_URI = "mongodb+srv://manishmayor:UoSa57cTkuVij2RQ@cluster0.50xci6b.mongodb.net/"

main()
.then(() => {
    console.log("connted to db");

})
.catch((err) =>{
    console.log(err)
})

async function main() {
    await mongoose.connect(MONGO_URI);
}

const initDB = async () => {
   await Listing.deleteMany({});
   await Listing.insertMany(initData.data);
   console.log("data was initialized");


}
initDB();