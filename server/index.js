import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import {} from "dotenv/config";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.5cz6n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => app.listen(PORT, () => console.log(`server started on port:${PORT}`)))
	.catch((error) => console.log(error.message));
