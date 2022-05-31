const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const cors = require("cors");

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/productList", productRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
const port = 8000;
app.listen(port, () => console.log(`server running on port ${port}!`));
