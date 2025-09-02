const express = require("express");
require("dotenv").config({ path: ".env" });
const cors = require("cors");
const connectDB = require('./config/connectDb')

// Routes
// const authRoute = require("./routes/auth");


const app = express();



// Connect to database
connectDB();

const port = process.env.PORT || 4000;

// CORS middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL ,
    credentials: true,
  })
);

app.use(express.json());

// API routes
// app.use("/api", authRoute);





// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});