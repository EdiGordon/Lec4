import cors from "cors";
import express from "express";
import morgan from "morgan";
import { connect } from "./db/connect.js";
import { notFound } from "./middleware/not-found.js";
import { booksRouter } from "./routes/books.js";
import { cardsRouter } from "./routes/cards.js";
import { authRouter } from "./routes/users.js";
// import { studentsRouter } from "./routes/students.js";

const app = express();

//middlewares:
app.use(cors({
  origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.use(express.json());
app.use(morgan("dev"));

connect().catch((e) => {
  console.log(e);
});

//routes:
app.use("/api/books", booksRouter);
app.use("/api/cards", cardsRouter);
// app.use("/api/students", studentsRouter);
app.use("/api/auth", authRouter);



//404:
app.use(notFound);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
