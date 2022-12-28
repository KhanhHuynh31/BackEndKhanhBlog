const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const postRoute = require("./routes/post");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
var cookieParser = require('cookie-parser')

dotenv.config();
//CONNECT DATABASE
mongoose.set("strictQuery", false);
mongoose.connect((process.env.MONGODB_URL), () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/v1/post", postRoute);
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running...");
});