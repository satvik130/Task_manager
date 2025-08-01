require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const database = require("./config/database");
const { notFound } = require("./middlewares/notFound");
const { errorHandler } = require("./middlewares/errorHandler");

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const adminRoutes = require("./routes/adminRoutes");


const app = express();
const PORT = process.env.PORT || 4000;


database.connect();

// Middlewares
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/admin", adminRoutes);



app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running...",
	});
});


app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});
