import express from "express";
import { routes } from "./routers";

const app = express()
app.use(express.json())
const port = 3333

app.use(routes)


app.listen(port, () => console.log(`Server is Running in https://localhost:${port}`))