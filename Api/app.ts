import express from "express";
import  authorsRouter  from "./Routes/authorsRouter"; /// what did we import here ? is it the hole file 
import morgan from "morgan";
import cors from "cors";
import { Request, Response, NextFunction } from "express";
import categoriesRouter from "./Routes/categoriesRouter";
import booksRouter from "./Routes/booksRouter";


const app = express();

/// use Json for my APIs
app.use(express.json());

/// HTTP request logger for debugging
app.use(morgan("dev"));

//// enable cors for postman // however it worked for me before using it ?
app.use(cors());


/// use/list my routes
app.use("/authors", authorsRouter);
app.use("/books", booksRouter);
app.use("/categories", categoriesRouter);


///  to use error handler 404 to notify me if the route is not working
app.use((req, res, next) => {
    res.status(404).json({
        status: "Failed",
        Message: "Route not Found",
    })
})

/// Add custom error handler middleware 
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
console.log("Error:", err);
res.status(err.status || 500).json({
    status: "Failed",
    error: err.message || "Server error",
})
})

export default app;