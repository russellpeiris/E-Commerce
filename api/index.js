const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");



dotenv.config();

//DB  Connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("DB Connected"))
    .catch((err)=>{
        console.log(err);
    });

app.use(express.json());

//Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


//Server
app.listen(process.env.PORT || 5050, ()=>{
    console.log("Backend Running");
});
