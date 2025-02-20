import express from "express"
import {dirname, join} from "path"
import {fileURLToPath} from "url"

import indexRoutes from "./routes/index.js"

const app = express()

const _dirname = dirname(fileURLToPath(import.meta.url))
console.log (join(_dirname, "/views"))

app.set("views", join(_dirname, "views"))
app.set("view engine", "ejs")

app.use(indexRoutes)


app.use(express.static(join(_dirname, "public" )))


app.listen(3000)
console.log("Server is listening on port", 3000)