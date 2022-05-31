const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://prince26:prince%40123@ecommerce.1s9cl.mongodb.net/Angular_crud?retryWrites=true&w=majority";

function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Connected to mongoo");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Connected to mongoo", err);
  });
}

module.exports = connectDB;
