import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRouter from "./router/userRouter";
import errorMiddleware from "./middleware/ErrorMiddleware";

dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionSuccessStatus:200
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api", userRouter)
app.use(errorMiddleware)

app.listen(3001, '127.0.0.1', () => console.log(`Server started`), )