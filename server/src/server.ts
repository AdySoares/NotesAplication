import express from "express";
import { routes } from "./routers";
import { TMP_FOLDER } from "./config/uploads";

const app = express()
app.use(express.json())
const port = 3333

app.use(routes)
app.use('/files', express.static( TMP_FOLDER))

app.listen(port, () => console.log(`Server is Running in https://localhost:${port}`))