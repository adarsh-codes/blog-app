import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import blogRouter from "./routes/blogRouter.js";
import fileUpload from "express-fileupload";
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();

app.use(
  cors({
    origin: ["https://zeta-blog.vercel.app/"],
    methods: ["GET", "PUT", "DELETE", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);



const __dirname = path.resolve();


app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*", (req, res) => {
  
res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
