import app from "./app.js"
import * as dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server listening ...`)
})
