import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();
app.use(cors());

app.use("/posts", postRoutes);

app.use(express.json());

const CONNECTION_URL =
	"mongodb+srv://ujaved007:forest123@cluster0.5cz6n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`server started on port:${PORT}`))
	)
	.catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
